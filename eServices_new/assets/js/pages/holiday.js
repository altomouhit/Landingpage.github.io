// (function($) {
//     "use strict"
//     //date picker classic default
//     $('.datepicker-default').pickadate({
//         selectMonths: true,
//         selectYears: true
//     });
// })(jQuery);
"use strict"
$('.datepicker-default').pickadate({
    selectMonths: true,
    selectYears: true,
    formatSubmit: 'yyyy/mm/dd'
});
//FAQ Button
function holidayFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var channel_object = {};
    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();
    var comments = $("#comments").val();

    channel_object.from_Date = fromDate;
    channel_object.to_Date = toDate;
    channel_object.comment_holiday = comments;

    var holidayTable = $('#holidayTable').DataTable();
    holidayTable.row.add(channel_object).draw();

    $("#fromDate").val('');
    $("#toDate").val('');
    $("#comments").val('');
}
//edit holidayFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#fromDate").val(data.from_Date);
    $("#toDate").val(data.to_Date);
    $("#comments").val(data.comment_holiday);
}
//View holidayFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#fromDate").val(data.from_Date);
    $("#toDate").val(data.to_Date);
    $("#comments").val(data.comment_holiday);
}
//Add FAQ
$(document).ready(function() {
    $('#holidayTable tbody').on('click', '#viewDetails', function() {
        var holidayTable = $('#holidayTable').DataTable();
        var data = holidayTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#fromDate").attr('readonly', true);
        $('#toDate').attr('readonly', true);
        $('#comments').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#holidayTable tbody').on('click', '#editDetails', function() {
        var table = $('#holidayTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#holidayTable tbody').on('click', '#removeDetails', function() {
        var table = $('#holidayTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "from_Date", sTitle: "From Date", sType: "string" },
        { "mDataProp": "to_Date", sTitle: "To Date", sType: "string" }, 
        { "mDataProp": "comment_holiday", sTitle: "Comments", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var holidayTable = $('#holidayTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [3]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		holidayTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	holidayTable.columns().iterator('column', function(ctx, idx) {
		$(holidayTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="holidayTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	holidayTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#fromDate").val('');
    $("#toDate").val('');
    $("#comments").val('');
    $("#fromDate").removeAttr('readonly');
    $('#toDate').removeAttr('readonly');
    $('#comments').removeAttr('readonly');
});