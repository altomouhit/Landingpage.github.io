//FAQ Button
function serviceProviderFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var serviceProvider_object = {};
    var serviceProviderEn = $("#serviceProviderEn").val();
    var serviceProviderAr = $("#serviceProviderAr").val();

    serviceProvider_object.dserviceProviderEn = serviceProviderEn;
    serviceProvider_object.dserviceProviderAr = serviceProviderAr;

    var serviceProviderTable = $('#serviceProviderTable').DataTable();
    serviceProviderTable.row.add(serviceProvider_object).draw();

    $("#serviceProviderEn").val('');
    $("#serviceProviderAr").val('');
}
//edit serviceProviderFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#serviceProviderEn").val(data.dserviceProviderEn);
    $("#serviceProviderAr").val(data.dserviceProviderAr);
}
//View serviceProviderFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#serviceProviderEn").val(data.dserviceProviderEn);
    $("#serviceProviderAr").val(data.dserviceProviderAr);
}
//Add FAQ
$(document).ready(function() {
    $('#serviceProviderTable tbody').on('click', '#viewDetails', function() {
        var serviceProviderTable = $('#serviceProviderTable').DataTable();
        var data = serviceProviderTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#serviceProviderEn').attr('readonly', true);
        $('#serviceProviderAr').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#serviceProviderTable tbody').on('click', '#editDetails', function() {
        var table = $('#serviceProviderTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#serviceProviderTable tbody').on('click', '#removeDetails', function() {
        var table = $('#serviceProviderTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var productMaster_cols = [
        { "mDataProp": "dserviceProviderEn", sTitle: "Service Provider(En)", sType: "string" }, 
        { "mDataProp": "dserviceProviderAr", sTitle: "Service Provider(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var serviceProviderTable = $('#serviceProviderTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": productMaster_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		serviceProviderTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	serviceProviderTable.columns().iterator('column', function(ctx, idx) {
		$(serviceProviderTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="serviceProviderTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	serviceProviderTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#FAQClear").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#serviceProviderEn").val('');
    $("#serviceProviderAr").val('');
    $('#serviceProviderEn').removeAttr('readonly');
    $('#serviceProviderAr').removeAttr('readonly');
});