//FAQ Button
function adConfigFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var adConfig_object = {};

    var IP = $("#IP").val();
    var port = $("#port").val();

	var domain = $("#domain").val();

	var sampleUser = $("#sampleUser").val();

    var pwd = $("#pwd").val();
    var OU = $("#OU").val();

    adConfig_object.dIP = IP;
    adConfig_object.dport = port;

    adConfig_object.ddomain = domain;

    adConfig_object.dsampleUser = sampleUser;

    adConfig_object.dpwd = pwd;
    adConfig_object.dOU = OU;


    var adConfigTable = $('#adConfigTable').DataTable();
    adConfigTable.row.add(adConfig_object).draw();

    $("#IP").val('');
    $("#port").val('');
    $("#domain").val('');
    $("#sampleUser").val('');
    $("#pwd").val('');
    $("#OU").val('');
    var adConfigTable_count = $("#adConfigTable").DataTable().data().count();
    if (adConfigTable_count === 1) {
        $("#form1Submit").hide();
    }
}
//edit adConfigFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").show().text("Update");
    $("#IP").val(data.dIP);
    $("#port").val(data.dport);
    $("#domain").val(data.ddomain);
    $("#sampleUser").val(data.dsampleUser);
    $('#pwd').val(data.dpwd);
    $("#OU").val(data.dOU);
}
//View adConfigFn details
function Faqviewfunction(data) {
    var data = data.data();
    $("#IP").val(data.dIP);
    $("#port").val(data.dport);
    $("#domain").val(data.ddomain);
    $("#sampleUser").val(data.dsampleUser);
    $('#pwd').val(data.dpwd);
    $("#OU").val(data.dOU);
}

//Add FAQ
$(document).ready(function() {
    $('#adConfigTable tbody').on('click', '#viewDetails', function() {
        var adConfigTable = $('#adConfigTable').DataTable();
        var data = adConfigTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#IP").attr('readonly', true);
        $("#port").attr('readonly', true);
        $("#domain").attr('readonly', true);
        $("#sampleUser").attr('readonly', true);
        $('#pwd').attr('readonly', true);
        $("#OU").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#adConfigTable tbody').on('click', '#editDetails', function() {
        var table = $('#adConfigTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#adConfigTable tbody').on('click', '#removeDetails', function() {
        var table = $('#adConfigTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dIP", sTitle: "IP", sType: "string" }, 
        { "mDataProp": "dport", sTitle: "Port", sType: "string" }, 
        { "mDataProp": "ddomain", sTitle: "Domain", sType: "string" },
        { "mDataProp": "dsampleUser", sTitle: "Sample user", sType: "string" },
        { "mDataProp": "dpwd", sTitle: "Password", sType: "string" }, 
        { "mDataProp": "dOU", sTitle: "OU", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }
            // "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var adConfigTable = $('#adConfigTable').DataTable({
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
		adConfigTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	adConfigTable.columns().iterator('column', function(ctx, idx) {
		$(adConfigTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="adConfigTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	adConfigTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();

    $("#IP").val('');
    $("#port").val('');
    $("#domain").val('');
    $("#sampleUser").val('');
    $("#pwd").val('');
    $("#OU").val('');

    $("#IP").removeAttr('readonly');
    $("#port").removeAttr('readonly');
    $("#domain").removeAttr('readonly');
    $("#sampleUser").removeAttr('readonly');
    $('#pwd').removeAttr('readonly');
    $("#OU").removeAttr('readonly');

    var cancelCount = $("#adConfigTable").DataTable().data().count();
    if (cancelCount <= 1) {
        $("#form1Submit").hide();
    }
});