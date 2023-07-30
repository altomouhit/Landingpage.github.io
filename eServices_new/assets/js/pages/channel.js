//FAQ Button
function channelFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var channel_object = {};
    var channelEn = $("#channelEn").val();
    var channelAr = $("#channelAr").val();

    channel_object.channel_En = channelEn;
    channel_object.channel_Ar = channelAr;

    var channelTable = $('#channelTable').DataTable();
    channelTable.row.add(channel_object).draw();

    $("#channelEn").val('');
    $("#channelAr").val('');
}
//edit channelFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#channelEn").val(data.channel_En);
    $("#channelAr").val(data.channel_Ar);
}
//View channelFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#channelEn").val(data.channel_En);
    $("#channelAr").val(data.channel_Ar);
}
//Add FAQ
$(document).ready(function() {
    $('#channelTable tbody').on('click', '#viewDetails', function() {
        var channelTable = $('#channelTable').DataTable();
        var data = channelTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#channelEn').attr('readonly', true);
        $('#channelAr').attr('readonly', true);
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
        { "mDataProp": "channel_En", sTitle: "channel(En)", sType: "string" }, 
        { "mDataProp": "channel_Ar", sTitle: "channel(Ar)", sType: "string" },
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
$("#FAQClear").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#channelEn").val('');
    $("#channelAr").val('');
    $('#channelEn').removeAttr('readonly');
    $('#channelAr').removeAttr('readonly');
});