//FAQ Button
function oracleConfigFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var oracleConfig_object = {};

    var IP = $("#IP").val();
    var port = $("#port").val();

	var userName = $("#userName").val();

	var dbName = $("#dbName").val();

    var pwd = $("#pwd").val();
    var viewName = $("#viewName").val();

    oracleConfig_object.dIP = IP;
    oracleConfig_object.dport = port;

    oracleConfig_object.duserName = userName;

    oracleConfig_object.ddbName = dbName;

    oracleConfig_object.dpwd = pwd;
    oracleConfig_object.dviewName = viewName;


    var oracleConfigTable = $('#oracleConfigTable').DataTable();
    oracleConfigTable.row.add(oracleConfig_object).draw();

    $("#IP").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#viewName").val('');
    var oracleConfigTable_count = $("#oracleConfigTable").DataTable().data().count();
    if (oracleConfigTable_count <= 1) {
        $("#form1Submit").hide();
    }
}
//edit oracleConfigFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").show().text("Update");
    $("#IP").val(data.dIP);
    $("#port").val(data.dport);
    $("#userName").val(data.duserName);
    $("#dbName").val(data.ddbName);
    $('#pwd').val(data.dpwd);
    $("#viewName").val(data.dviewName);
}
//View oracleConfigFn details
function Faqviewfunction(data) {
    var data = data.data();
    $("#IP").val(data.dIP);
    $("#port").val(data.dport);
    $("#userName").val(data.duserName);
    $("#dbName").val(data.ddbName);
    $('#pwd').val(data.dpwd);
    $("#viewName").val(data.dviewName);
}
//Add FAQ
$(document).ready(function() {
    $('#oracleConfigTable tbody').on('click', '#viewDetails', function() {
        var oracleConfigTable = $('#oracleConfigTable').DataTable();
        var data = oracleConfigTable.row($(this).parents('tr'));
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
    $('#oracleConfigTable tbody').on('click', '#editDetails', function() {
        var table = $('#oracleConfigTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#oracleConfigTable tbody').on('click', '#removeDetails', function() {
        var table = $('#oracleConfigTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dIP", sTitle: "IP", sType: "string" }, 
        { "mDataProp": "dport", sTitle: "Port", sType: "string" }, 
        { "mDataProp": "duserName", sTitle: "User Name", sType: "string" },
        { "mDataProp": "dpwd", sTitle: "Password", sType: "string" }, 
        { "mDataProp": "ddbName", sTitle: "DB Name", sType: "string" },
        { "mDataProp": "dviewName", sTitle: "View Name", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }
            // "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var oracleConfigTable = $('#oracleConfigTable').DataTable({
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
		oracleConfigTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	oracleConfigTable.columns().iterator('column', function(ctx, idx) {
		$(oracleConfigTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="oracleConfigTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	oracleConfigTable.page.len(sessionStorage.getItem("selectedLength")).draw();
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
    var cancel_count = $("#oracleConfigTable").DataTable().data().count();
    if (cancel_count <= 1) {
        $("#form1Submit").hide();
    }
});