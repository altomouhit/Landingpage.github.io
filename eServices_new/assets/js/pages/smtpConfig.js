//FAQ Button
function smtpFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var adConfig_object = {};

    var smtpHost = $("#smtpHost").val();
    var smtpPort = $("#smtpPort").val();

	var fromAddress = $("#fromAddress").val();

    adConfig_object.dsmtpHost = smtpHost;
    adConfig_object.dsmtpPort = smtpPort;

    adConfig_object.dfromAddress = fromAddress;


    var smtpConfigTable = $('#smtpConfigTable').DataTable();
    smtpConfigTable.row.add(adConfig_object).draw();

    $("#smtpHost").val('');
    $("#smtpPort").val('');
    $("#fromAddress").val('');

    var smtpConfigTable_count = $("#smtpConfigTable").DataTable().data().count();
    if (smtpConfigTable_count <= 1) {
        $("#form1Submit").hide();
    }
}
//edit smtpFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").show().text("Update");
    $("#smtpHost").val(data.dsmtpHost);
    $("#smtpPort").val(data.dsmtpPort);
    $("#fromAddress").val(data.dfromAddress);
}
//View smtpFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#smtpHost").val(data.dsmtpHost);
    $("#smtpPort").val(data.dsmtpPort);
    $("#fromAddress").val(data.dfromAddress);
}
//Add FAQ
$(document).ready(function() {
    $('#smtpConfigTable tbody').on('click', '#viewDetails', function() {
        var smtpConfigTable = $('#smtpConfigTable').DataTable();
        var data = smtpConfigTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#smtpHost").attr('readonly', true);
        $("#smtpPort").attr('readonly', true);
        $("#fromAddress").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#smtpConfigTable tbody').on('click', '#editDetails', function() {
        var table = $('#smtpConfigTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#smtpConfigTable tbody').on('click', '#removeDetails', function() {
        var table = $('#smtpConfigTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dsmtpHost", sTitle: "SMTP Host", sType: "string" }, 
        { "mDataProp": "dsmtpPort", sTitle: "SMTP Port", sType: "string" }, 
        { "mDataProp": "dfromAddress", sTitle: "From Address", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }
            // "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var smtpConfigTable = $('#smtpConfigTable').DataTable({
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
			"targets": [3]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		smtpConfigTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	smtpConfigTable.columns().iterator('column', function(ctx, idx) {
		$(smtpConfigTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="smtpConfigTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	smtpConfigTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();

    $("#smtpHost").val('');
    $("#smtpPort").val('');
    $("#fromAddress").val('');

    $("#smtpHost").removeAttr('readonly');
    $("#smtpPort").removeAttr('readonly');
    $("#fromAddress").removeAttr('readonly');
    var cancel_count = $("#smtpConfigTable").DataTable().data().count();
    if (cancel_count <= 1) {
        $("#form1Submit").hide();
    }
});