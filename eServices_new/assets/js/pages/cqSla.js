//FAQ Button
function cqSlaFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var enquiry_object = {};
    var cqSlaTxt = $("#cqSlaTxt").val();

    enquiry_object.dcqSlaTxt = cqSlaTxt;

    var cqSlaTable = $('#cqSlaTable').DataTable();
    cqSlaTable.row.add(enquiry_object).draw();


    $("#cqSlaTxt").val('');
}
//edit cqSlaFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#cqSlaTxt").val(data.dcqSlaTxt);
}
//View cqSlaFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#cqSlaTxt").val(data.dcqSlaTxt);
}
//Add FAQ
$(document).ready(function() {
    $('#cqSlaTable tbody').on('click', '#viewDetails', function() {
        var cqSlaTable = $('#cqSlaTable').DataTable();
        var data = cqSlaTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#cqSlaTxt').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#cqSlaTable tbody').on('click', '#editDetails', function() {
        var table = $('#cqSlaTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#cqSlaTable tbody').on('click', '#removeDetails', function() {
        var table = $('#cqSlaTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dcqSlaTxt", sTitle: "PM/CQ SLA", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var cqSlaTable = $('#cqSlaTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [1]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		cqSlaTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	cqSlaTable.columns().iterator('column', function(ctx, idx) {
		$(cqSlaTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="cqSlaTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	cqSlaTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#cqSlaTxt").val('');
    $('#cqSlaTxt').removeAttr('readonly');
});