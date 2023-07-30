//FAQ Button
function serviceProviderFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var serviceProvider_object = {};

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var serviceProvider = $("#serviceProvider option:selected").text();
	var serviceProvider_val = $("#serviceProvider option:selected").val();

    // var channelAr = $("#channelAr option:selected").text();
	// var channelAr_val = $("#channelAr option:selected").val();


    serviceProvider_object.dcompType = compType;
    serviceProvider_object.dcompType_val = compType_val;

    serviceProvider_object.dserviceProvider = serviceProvider;
    serviceProvider_object.dserviceProvider_val = serviceProvider_val;

    // serviceProvider_object.dchannelAr = channelAr;
    // serviceProvider_object.dchannelAr_val = channelAr_val;


    var serviceProviderTable = $('#serviceProviderTable').DataTable();
    serviceProviderTable.row.add(serviceProvider_object).draw();

    $("#compType").val('');
    $("#serviceProvider").val('');
   // $("#channelAr").val('');
}
//edit serviceProviderFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#compType").val(data.dcompType_val);
    $("#serviceProvider").val(data.dserviceProvider_val);
    //$("#channelAr").val(data.dchannelAr_val);
}
//View serviceProviderFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#compType").val(data.dcompType_val);
    $("#serviceProvider").val(data.dserviceProvider_val);
    //$("#channelAr").val(data.dchannelAr_val);
}
//Add FAQ
$(document).ready(function() {
    $('#serviceProviderTable tbody').on('click', '#viewDetails', function() {
        var serviceProviderTable = $('#serviceProviderTable').DataTable();
        var data = serviceProviderTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#serviceProvider").attr('readonly', true);
       // $('#channelAr').attr('readonly', true);
        $('#compType').attr('readonly', true);
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
    var comp_cols = [
        { "mDataProp": "dcompType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dserviceProvider", sTitle: "Service Provider", sType: "string" }, 
        //{ "mDataProp": "dchannelAr", sTitle: "Channel(AR)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var serviceProviderTable = $('#serviceProviderTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
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
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#serviceProvider").val('');
    //$("#channelAr").val('');
    $("#compType").val('');
    $("#serviceProvider").removeAttr('readonly');
    //$('#channelAr').removeAttr('readonly');
    $('#compType').removeAttr('readonly');
});