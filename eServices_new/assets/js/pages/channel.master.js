//FAQ Button
function channelFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var channel_object = {};

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var channelEn = $("#channelEn option:selected").text();
	var channelEn_val = $("#channelEn option:selected").val();

    // var channelAr = $("#channelAr option:selected").text();
	// var channelAr_val = $("#channelAr option:selected").val();


    channel_object.dcompType = compType;
    channel_object.dcompType_val = compType_val;

    channel_object.dchannelEn = channelEn;
    channel_object.dchannelEn_val = channelEn_val;

    // channel_object.dchannelAr = channelAr;
    // channel_object.dchannelAr_val = channelAr_val;


    var channelTable = $('#channelTable').DataTable();
    channelTable.row.add(channel_object).draw();

    $("#compType").val('');
    $("#channelEn").val('');
   // $("#channelAr").val('');
}
//edit channelFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#compType").val(data.dcompType_val);
    $("#channelEn").val(data.dchannelEn_val);
    //$("#channelAr").val(data.dchannelAr_val);
}
//View channelFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#compType").val(data.dcompType_val);
    $("#channelEn").val(data.dchannelEn_val);
    //$("#channelAr").val(data.dchannelAr_val);
}
//Add FAQ
$(document).ready(function() {
    $('#channelTable tbody').on('click', '#viewDetails', function() {
        var channelTable = $('#channelTable').DataTable();
        var data = channelTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#channelEn").attr('readonly', true);
       // $('#channelAr').attr('readonly', true);
        $('#compType').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#channelTable tbody').on('click', '#editDetails', function() {
        var table = $('#channelTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#channelTable tbody').on('click', '#removeDetails', function() {
        var table = $('#channelTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dcompType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dchannelEn", sTitle: "Channel", sType: "string" }, 
        //{ "mDataProp": "dchannelAr", sTitle: "Channel(AR)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var channelTable = $('#channelTable').DataTable({
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
		channelTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	channelTable.columns().iterator('column', function(ctx, idx) {
		$(channelTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="channelTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	channelTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#channelEn").val('');
    //$("#channelAr").val('');
    $("#compType").val('');
    $("#channelEn").removeAttr('readonly');
    //$('#channelAr').removeAttr('readonly');
    $('#compType').removeAttr('readonly');
});