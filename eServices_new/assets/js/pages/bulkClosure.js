//FAQ Button
//$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function bulkClosureFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var comp_object = {};

    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    var status = $("#status option:selected").text();
	var status_val = $("#status option:selected").val();

    var feedbackType = $("#feedbackType option:selected").text();
	var feedbackType_val = $("#feedbackType option:selected").val();

    var complaintID = $("#complaintID").val();
    var customerID = $("#customerID").val();

    comp_object.dfromDate = fromDate;
    comp_object.dtoDate = toDate;

    comp_object.dstatus = status;
    comp_object.dstatus_val = status_val;

    comp_object.dfeedbackType = feedbackType;
    comp_object.dfeedbackType_val = feedbackType_val;

    comp_object.dcomplaintID = complaintID;
    comp_object.dcustomerID = customerID;

    var bulkClosureTable = $('#bulkClosureTable').DataTable();
    bulkClosureTable.row.add(comp_object).draw();
    $("#fromDate").val('');
    $("#toDate").val('');
    $("#status").val('');
    $("#feedbackType").val('');
    $("#complaintID").val('');
    $("#customerID").val('');
}
//edit bulkClosureFn details
function adveditfunction(data1) {
    $(".smart-Wizard").show();
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#fromDate").val(data.dfromDate);
    $("#toDate").val(data.dtoDate);
    $("#status").val(data.dstatus_val);
    $("#feedbackType").val(data.dfeedbackType_val);
    $("#complaintID").val(data.dcomplaintID);
    $("#customerID").val(data.dcustomerID);
}
//View bulkClosureFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#fromDate").val(data.dfromDate);
    $("#toDate").val(data.dtoDate);
    $("#status").val(data.dstatus_val);
    $("#feedbackType").val(data.dfeedbackType_val);
    $("#complaintID").val(data.dcomplaintID);
    $("#customerID").val(data.dcustomerID);
}
//Add FAQ
$(document).ready(function() {
    $('#bulkClosureTable tbody').on('click', '#viewDetails', function() {
        var bulkClosureTable = $('#bulkClosureTable').DataTable();
        var data = bulkClosureTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#fromDate").attr('readonly', true);
        $("#toDate").attr('readonly', true);
        $("#status").attr('readonly', true);
        $("#feedbackType").attr('readonly', true);
        $('#complaintID').attr('readonly', true);
        $('#customerID').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#bulkClosureTable tbody').on('click', '#editDetails', function() {
        var table = $('#bulkClosureTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#bulkClosureTable tbody').on('click', '#removeDetails', function() {
        var table = $('#bulkClosureTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dfromDate", sTitle: "From Date", sType: "string" }, 
        { "mDataProp": "dtoDate", sTitle: "To Date", sType: "string" }, 
        { "mDataProp": "dstatus", sTitle: "status", sType: "string" },
        { "mDataProp": "dfeedbackType", sTitle: "Feedback Type", sType: "string" },
        { "mDataProp": "dcomplaintID", sTitle: "Complaint ID", sType: "string" }, 
        { "mDataProp": "dcustomerID", sTitle: "Customer ID", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var bulkClosureTable = $('#bulkClosureTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [6]
		}],
		"order": [[0, 'asc']]
	});
	$('#compTypeSearch').keyup(function() {
		bulkClosureTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	bulkClosureTable.columns().iterator('column', function(ctx, idx) {
		$(bulkClosureTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="bulkClosureTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	bulkClosureTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#fromDate").val('');
    $("#toDate").val('');
    $("#status").val('');
    $("#complaintID").val('');
    $("#customerID").val('');
    $("#fromDate").removeAttr('readonly');
    $("#toDate").removeAttr('readonly');
    $("#status").removeAttr('readonly');
    $('#complaintID').removeAttr('readonly');
    $('#customerID').removeAttr('readonly');
    $(".smart-Wizard").hide();
});