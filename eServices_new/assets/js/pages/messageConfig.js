//FAQ Button
function messageFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var message_object = {};

    var IP = $("#IP").val();
    var port = $("#port").val();

	var userName = $("#userName").val();

	var dbName = $("#dbName").val();

    var pwd = $("#pwd").val();
    var viewName = $("#viewName").val();

    message_object.dIP = IP;
    message_object.dport = port;

    message_object.duserName = userName;

    message_object.ddbName = dbName;

    message_object.dpwd = pwd;
    message_object.dviewName = viewName;


    var messageTable = $('#messageTable').DataTable();
    messageTable.row.add(message_object).draw();

    $("#IP").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#viewName").val('');
}
//edit messageFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#IP").val(data.dIP);
    $("#port").val(data.dport);
    $("#userName").val(data.duserName);
    $("#dbName").val(data.ddbName);
    $('#pwd').val(data.dpwd);
    $("#viewName").val(data.dviewName);
}
//View messageFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#IP").val(data.dIP);
    $("#port").val(data.dport);
    $("#userName").val(data.duserName);
    $("#dbName").val(data.ddbName);
    $('#pwd').val(data.dpwd);
    $("#viewName").val(data.dviewName);
}
//Add FAQ
$(document).ready(function() {
    $('#messageTable tbody').on('click', '#viewDetails', function() {
        var messageTable = $('#messageTable').DataTable();
        var data = messageTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#IP").attr('readonly', true);
        $("#port").attr('readonly', true);
        $("#userName").attr('readonly', true);
        $("#dbName").attr('readonly', true);
        $('#pwd').attr('readonly', true);
        $("#viewName").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#messageTable tbody').on('click', '#editDetails', function() {
        var table = $('#messageTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#messageTable tbody').on('click', '#removeDetails', function() {
        var table = $('#messageTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dIP", sTitle: "Notification Type", sType: "string" }, 
        { "mDataProp": "dport", sTitle: "Channel Type", sType: "string" }, 
        { "mDataProp": "duserName", sTitle: "Channel Language", sType: "string" },
        { "mDataProp": "dpwd", sTitle: "Status", sType: "string" }, 
        { "mDataProp": "ddbName", sTitle: "Notify To", sType: "string" },
        { "mDataProp": "dviewName", sTitle: "Message", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var messageTable = $('#messageTable').DataTable({
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
		messageTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	messageTable.columns().iterator('column', function(ctx, idx) {
		$(messageTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="messageTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	messageTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();

    $("#IP").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#viewName").val('');

    $("#IP").removeAttr('readonly');
    $("#port").removeAttr('readonly');
    $("#userName").removeAttr('readonly');
    $("#dbName").removeAttr('readonly');
    $('#pwd').removeAttr('readonly');
    $("#viewName").removeAttr('readonly');
});