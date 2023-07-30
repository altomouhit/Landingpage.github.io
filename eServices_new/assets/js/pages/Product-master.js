//FAQ Button
function productMasterFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var productMaster_object = {};
    var productCategoryEn = $("#productCategoryEn").val();
    var productCategoryAr = $("#productCategoryAr").val();

    productMaster_object.dproductCategoryEn = productCategoryEn;
    productMaster_object.dproductCategoryAr = productCategoryAr;

    var productMasterTable = $('#productMasterTable').DataTable();
    productMasterTable.row.add(productMaster_object).draw();

    $("#productCategoryEn").val('');
    $("#productCategoryAr").val('');
}
//edit productMasterFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#productCategoryEn").val(data.dproductCategoryEn);
    $("#productCategoryAr").val(data.dproductCategoryAr);
}
//View productMasterFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#productCategoryEn").val(data.dproductCategoryEn);
    $("#productCategoryAr").val(data.dproductCategoryAr);
}
//Add FAQ
$(document).ready(function() {
    $('#productMasterTable tbody').on('click', '#viewDetails', function() {
        var productMasterTable = $('#productMasterTable').DataTable();
        var data = productMasterTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#productCategoryEn').attr('readonly', true);
        $('#productCategoryAr').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#productMasterTable tbody').on('click', '#editDetails', function() {
        var table = $('#productMasterTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#productMasterTable tbody').on('click', '#removeDetails', function() {
        var table = $('#productMasterTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var productMaster_cols = [
        { "mDataProp": "dproductCategoryEn", sTitle: "Product Category(En)", sType: "string" }, 
        { "mDataProp": "dproductCategoryAr", sTitle: "Product Category(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var productMasterTable = $('#productMasterTable').DataTable({
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
		productMasterTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	productMasterTable.columns().iterator('column', function(ctx, idx) {
		$(productMasterTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="productMasterTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	productMasterTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#FAQClear").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#productCategoryEn").val('');
    $("#productCategoryAr").val('');
    $('#productCategoryEn').removeAttr('readonly');
    $('#productCategoryAr').removeAttr('readonly');
});