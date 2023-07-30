//FAQ Button
function regionFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var channel_object = {};
    var regionCode = $("#regionCode").val();
    var regionEn = $("#regionEn").val();
    var regionAr = $("#regionAr").val();

    channel_object.region_Code = regionCode;
    channel_object.region_En = regionEn;
    channel_object.region_Ar = regionAr;

    var regionTable = $('#regionTable').DataTable();
    regionTable.row.add(channel_object).draw();

    $("#regionCode").val('');
    $("#regionEn").val('');
    $("#regionAr").val('');
}
//edit regionFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#regionCode").val(data.region_Code);
    $("#regionEn").val(data.region_En);
    $("#regionAr").val(data.region_Ar);
}
//View regionFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#regionCode").val(data.region_Code);
    $("#regionEn").val(data.region_En);
    $("#regionAr").val(data.region_Ar);
}
//Add FAQ
$(document).ready(function() {
    $('#regionTable tbody').on('click', '#viewDetails', function() {
        var regionTable = $('#regionTable').DataTable();
        var data = regionTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#regionCode").attr('readonly', true);
        $('#regionEn').attr('readonly', true);
        $('#regionAr').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#regionTable tbody').on('click', '#editDetails', function() {
        var table = $('#regionTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#regionTable tbody').on('click', '#removeDetails', function() {
        var table = $('#regionTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "region_Code", sTitle: "Region Code", sType: "string" },
        { "mDataProp": "region_En", sTitle: "Region(En)", sType: "string" }, 
        { "mDataProp": "region_Ar", sTitle: "Region(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var regionTable = $('#regionTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [3]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		regionTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	regionTable.columns().iterator('column', function(ctx, idx) {
		$(regionTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="regionTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	regionTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#regionCode").val('');
    $("#regionEn").val('');
    $("#regionAr").val('');
    $("#regionCode").removeAttr('readonly');
    $('#regionEn').removeAttr('readonly');
    $('#regionAr').removeAttr('readonly');
});