//FAQ Button
function currencyNameFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var prioritySLA_object = {};
    var group = $("#countryName option:selected").text();
	var countryName_val = $("#countryName option:selected").val();
    var currencyNameEn = $("#currencyNameEn").val();
    var currencyNameAr = $("#currencyNameAr").val();

    prioritySLA_object.dcountryName = countryName;
    prioritySLA_object.dcountryName_val = countryName_val;
    prioritySLA_object.dcurrencyNameEn = currencyNameEn;
    prioritySLA_object.dcurrencyNameAr = currencyNameAr;

    var currencyNameTable = $('#currencyNameTable').DataTable();
    currencyNameTable.row.add(prioritySLA_object).draw();

    $("#countryName").val('');
    $("#currencyNameEn").val('');
    $("#currencyNameAr").val('');
}
//edit currencyNameFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#countryName").val(data.dcountryName_val);
    $("#currencyNameEn").val(data.dcurrencyNameEn);
    $("#currencyNameAr").val(data.dcurrencyNameAr);
}
//View currencyNameFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#countryName").val(data.dcountryName_val);
    $("#currencyNameEn").val(data.dcurrencyNameEn);
    $("#currencyNameAr").val(data.dcurrencyNameAr);
}
//Add FAQ
$(document).ready(function() {
    $('#currencyNameTable tbody').on('click', '#viewDetails', function() {
        var currencyNameTable = $('#currencyNameTable').DataTable();
        var data = currencyNameTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#countryName').attr('readonly', true);
        $('#currencyNameEn').attr('readonly', true);
        $('#currencyNameAr').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#currencyNameTable tbody').on('click', '#editDetails', function() {
        var table = $('#currencyNameTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#currencyNameTable tbody').on('click', '#removeDetails', function() {
        var table = $('#currencyNameTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var productMaster_cols = [
        { "mDataProp": "dcountryName", sTitle: "Country Name", sType: "string" }, 
        { "mDataProp": "dcurrencyNameEn", sTitle: "Currency Name(En)", sType: "string" },
        { "mDataProp": "dcurrencyNameAr", sTitle: "Currency Name(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var currencyNameTable = $('#currencyNameTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": productMaster_cols,
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
		currencyNameTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	currencyNameTable.columns().iterator('column', function(ctx, idx) {
		$(currencyNameTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="currencyNameTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	currencyNameTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#FAQClear").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#countryName").val('');
    $("#currencyNameEn").val('');
    $("#currencyNameAr").val('');
    $('#countryName').removeAttr('readonly');
    $('#currencyNameEn').removeAttr('readonly');
    $('#currencyNameAr').removeAttr('readonly');
});