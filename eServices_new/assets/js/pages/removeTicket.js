//FAQ Button
function ticketFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var ticket_object = {};

    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    var feedbackType = $("#feedbackType option:selected").text();
	var feedbackType_val = $("#feedbackType option:selected").val();

    var status = $("#status option:selected").text();
	var status_val = $("#status option:selected").val();

    var feedbackID = $("#feedbackID").val();
    var account = $("#account").val();

    ticket_object.from_Date = fromDate;
    ticket_object.to_Date = toDate;

    ticket_object.dfeedbackType = feedbackType;
    ticket_object.dfeedbackType_val = feedbackType_val;

    ticket_object.dstatus = status;
    ticket_object.dstatus_val = status_val;

    ticket_object.dfeedbackID = feedbackID;
    ticket_object.daccount = account;


    var ticketTable = $('#ticketTable').DataTable();
    ticketTable.row.add(ticket_object).draw();

    $("#fromDate").val('');
    $("#toDate").val('');
    $("#feedbackType").val('');
    $("#status").val('');
    $("#feedbackID").val('');
    $("#account").val('');
}
//edit ticketFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#fromDate").val(data.from_Date);
    $("#toDate").val(data.to_Date);
    $("#feedbackType").val(data.dfeedbackType_val);
    $("#status").val(data.dstatus_val);
    $('#feedbackID').val(data.dfeedbackID);
    $("#account").val(data.daccount);
}
//View ticketFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#fromDate").val(data.from_Date);
    $("#toDate").val(data.to_Date);
    $("#feedbackType").val(data.dfeedbackType_val);
    $("#status").val(data.dstatus_val);
    $('#feedbackID').val(data.dfeedbackID);
    $("#account").val(data.daccount);
}
//Add FAQ
$(document).ready(function() {
    $('#ticketTable tbody').on('click', '#viewDetails', function() {
        var ticketTable = $('#ticketTable').DataTable();
        var data = ticketTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#fromDate").attr('readonly', true);
        $("#toDate").attr('readonly', true);
        $("#feedbackType").attr('readonly', true);
        $("#status").attr('readonly', true);
        $('#feedbackID').attr('readonly', true);
        $("#account").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#ticketTable tbody').on('click', '#editDetails', function() {
        var table = $('#ticketTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#ticketTable tbody').on('click', '#removeDetails', function() {
        var table = $('#ticketTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "from_Date", sTitle: "From Date", sType: "string" }, 
        { "mDataProp": "to_Date", sTitle: "To Date", sType: "string" }, 
        { "mDataProp": "dstatus", sTitle: "Status", sType: "string" },
        { "mDataProp": "dfeedbackType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dfeedbackID", sTitle: "Complaint No", sType: "string" }, 
        { "mDataProp": "daccount", sTitle: "Account No", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var ticketTable = $('#ticketTable').DataTable({
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
	$('#ticketSearchBox').keyup(function() {
		ticketTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	ticketTable.columns().iterator('column', function(ctx, idx) {
		$(ticketTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="ticketTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	ticketTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();

    $("#fromDate").val('');
    $("#toDate").val('');
    $("#feedbackType").val('');
    $("#status").val('');
    $("#feedbackID").val('');
    $("#account").val('');

    $("#fromDate").removeAttr('readonly');
    $("#toDate").removeAttr('readonly');
    $("#feedbackType").removeAttr('readonly');
    $("#status").removeAttr('readonly');
    $('#feedbackID').removeAttr('readonly');
    $("#account").removeAttr('readonly');
});