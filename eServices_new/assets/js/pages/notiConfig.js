//FAQ Button
function notiConfigFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var notiConfig_object = {};

    var IP = $("#IP").val();
    var port = $("#port").val();

	var userName = $("#userName").val();

	var dbName = $("#dbName").val();

    var pwd = $("#pwd").val();
    var viewName = $("#viewName").val();

    notiConfig_object.dIP = IP;
    notiConfig_object.dport = port;

    notiConfig_object.duserName = userName;

    notiConfig_object.ddbName = dbName;

    notiConfig_object.dpwd = pwd;
    notiConfig_object.dviewName = viewName;


    var notiConfigTable = $('#notiConfigTable').DataTable();
    notiConfigTable.row.add(notiConfig_object).draw();

    $("#IP").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#viewName").val('');
}
//edit notiConfigFn details
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
//View notiConfigFn details
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
    $('#notiConfigTable tbody').on('click', '#viewDetails', function() {
        var notiConfigTable = $('#notiConfigTable').DataTable();
        var data = notiConfigTable.row($(this).parents('tr'));
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
    $('#notiConfigTable tbody').on('click', '#editDetails', function() {
        var table = $('#notiConfigTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#notiConfigTable tbody').on('click', '#removeDetails', function() {
        var table = $('#notiConfigTable').DataTable();
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
    var notiConfigTable = $('#notiConfigTable').DataTable({
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
		notiConfigTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	notiConfigTable.columns().iterator('column', function(ctx, idx) {
		$(notiConfigTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="notiConfigTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	notiConfigTable.page.len(sessionStorage.getItem("selectedLength")).draw();
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