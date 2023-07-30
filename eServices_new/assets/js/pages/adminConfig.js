//FAQ Button
function adminFn() {
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


    var adminTable = $('#adminTable').DataTable();
    adminTable.row.add(oracleConfig_object).draw();

    $("#IP").val('');
    $("#port").val('');
    $("#userName").val('');
    $("#dbName").val('');
    $("#pwd").val('');
    $("#viewName").val('');
}
//edit adminFn details
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
//View adminFn details
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
    $('#adminTable tbody').on('click', '#viewDetails', function() {
        var adminTable = $('#adminTable').DataTable();
        var data = adminTable.row($(this).parents('tr'));
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
    $('#adminTable tbody').on('click', '#editDetails', function() {
        var table = $('#adminTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#adminTable tbody').on('click', '#removeDetails', function() {
        var table = $('#adminTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dIP", sTitle: "Display Name", sType: "string" }, 
        { "mDataProp": "dport", sTitle: "Support Line", sType: "string" }, 
        { "mDataProp": "duserName", sTitle: "Group", sType: "string" },
        { "mDataProp": "dpwd", sTitle: "Role", sType: "string" }, 
        { "mDataProp": "ddbName", sTitle: "User Details", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var adminTable = $('#adminTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [5]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		adminTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	adminTable.columns().iterator('column', function(ctx, idx) {
		$(adminTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="adminTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	adminTable.page.len(sessionStorage.getItem("selectedLength")).draw();
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