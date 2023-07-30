//FAQ Button
function xmlFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var xml_object = {};

    var host = $("#host").val();
    var port = $("#port").val();
	var userName = $("#userName").val();
	var dbName = $("#dbName").val();
    var pwd = $("#pwd").val();
    var smsFolder = $("#smsFolder").val();
    var logFile =  $("#logFile").val();

    xml_object.dhost = host;
    xml_object.dport = port;

    xml_object.duserName = userName;

    xml_object.ddbName = dbName;

    xml_object.dpwd = pwd;
    xml_object.dsmsFolder = smsFolder;
    xml_object.dlogFile = logFile;

    var xmlTable = $('#xmlTable').DataTable();
    xmlTable.row.add(xml_object).draw();

    $("#host").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#smsFolder").val('');
    $("#logFile").val('');
    var xmlTable_count = $("#xmlTable").DataTable().data().count();
    if (xmlTable_count <= 1) {
        $("#form1Submit").hide();
    }
}
//edit xmlFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").show().text("Update");
    $("#host").val(data.dhost);
    $("#port").val(data.dport);
    $("#userName").val(data.duserName);
    $("#dbName").val(data.ddbName);
    $('#pwd').val(data.dpwd);
    $("#smsFolder").val(data.dsmsFolder);
    $("#logFile").val(data.dlogFile);
}
//View xmlFn details
function Faqviewfunction(data) {
    var data = data.data();
    $("#host").val(data.dhost);
    $("#port").val(data.dport);
    $("#userName").val(data.duserName);
    $("#dbName").val(data.ddbName);
    $('#pwd').val(data.dpwd);
    $("#smsFolder").val(data.dsmsFolder);
    $("#logFile").val(data.dlogFile);
}
//Add FAQ
$(document).ready(function() {
    $('#xmlTable tbody').on('click', '#viewDetails', function() {
        var xmlTable = $('#xmlTable').DataTable();
        var data = xmlTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#host").attr('readonly', true);
        $("#port").attr('readonly', true);
        $("#userName").attr('readonly', true);
        $("#dbName").attr('readonly', true);
        $('#pwd').attr('readonly', true);
        $("#smsFolder").attr('readonly', true);
        $("#logFile").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#xmlTable tbody').on('click', '#editDetails', function() {
        var table = $('#xmlTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#xmlTable tbody').on('click', '#removeDetails', function() {
        var table = $('#xmlTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dhost", sTitle: "Host", sType: "string" }, 
        { "mDataProp": "dport", sTitle: "Port", sType: "string" }, 
        { "mDataProp": "duserName", sTitle: "User Name", sType: "string" },
        { "mDataProp": "ddbName", sTitle: "DB Name", sType: "string" }, 
        { "mDataProp": "dsmsFolder", sTitle: "SMS Folder", sType: "string" },
        { "mDataProp": "dlogFile", sTitle: "Logfile Path", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }
            // "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var xmlTable = $('#xmlTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
        "paging":   false,
        "ordering": false,
        "info":     false,
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [6]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		xmlTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	xmlTable.columns().iterator('column', function(ctx, idx) {
		$(xmlTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="xmlTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	xmlTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();

    $("#host").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#smsFolder").val('');
    $("#logFile").val('');

    $("#host").removeAttr('readonly');
    $("#port").removeAttr('readonly');
    $("#userName").removeAttr('readonly');
    $("#dbName").removeAttr('readonly');
    $('#pwd').removeAttr('readonly');
    $("#smsFolder").removeAttr('readonly');
    $("#logFile").removeAttr('readonly');
    var cancel_count = $("#xmlTable").DataTable().data().count();
    if (cancel_count <= 1) {
        $("#form1Submit").hide();
    }
});