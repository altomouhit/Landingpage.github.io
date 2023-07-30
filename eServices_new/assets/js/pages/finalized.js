//FAQ Button
function finalizedFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var enquiry_object = {};
    var finalizedSMS = $("#finalizedSMS").val();

    enquiry_object.finalized_SMS = finalizedSMS;

    var finalizedTable = $('#finalizedTable').DataTable();
    finalizedTable.row.add(enquiry_object).draw();


    $("#finalizedSMS").val('');
}
//edit finalizedFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#finalizedSMS").val(data.finalized_SMS);
}
//View finalizedFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#finalizedSMS").val(data.finalized_SMS);
}
//Add FAQ
$(document).ready(function() {
    $('#finalizedTable tbody').on('click', '#viewDetails', function() {
        var finalizedTable = $('#finalizedTable').DataTable();
        var data = finalizedTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#finalizedSMS').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#finalizedTable tbody').on('click', '#editDetails', function() {
        var table = $('#finalizedTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#finalizedTable tbody').on('click', '#removeDetails', function() {
        var table = $('#finalizedTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "finalized_SMS", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var finalizedTable = $('#finalizedTable').DataTable({
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
		finalizedTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	finalizedTable.columns().iterator('column', function(ctx, idx) {
		$(finalizedTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="finalizedTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	finalizedTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#finalizedSMS").val('');
    $('#finalizedSMS').removeAttr('readonly');
});