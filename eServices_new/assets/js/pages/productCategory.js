//FAQ Button
function productCategoryFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var productCategory_object = {};

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var groupType = $("#groupType option:selected").text();
	var groupType_val = $("#groupType option:selected").val();

    productCategory_object.dcompType = compType;
    productCategory_object.dcompType_val = compType_val;

    productCategory_object.dcompType = compType;
    productCategory_object.dcompType_val = compType_val;

    productCategory_object.dgroupType = groupType;
    productCategory_object.dgroupType_val = groupType_val;


    var productCategoryTable = $('#productCategoryTable').DataTable();
    productCategoryTable.row.add(productCategory_object).draw();

    $("#compType").val('');
    $("#compType").val('');
    $("#groupType").val('');
}
//edit productCategoryFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#compType").val(data.dcompType_val);
    $("#compType").val(data.dcompType_val);
    $("#groupType").val(data.dgroupType_val);
}
//View productCategoryFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#compType").val(data.dcompType_val);
    $("#compType").val(data.dcompType_val);
    $("#groupType").val(data.dgroupType_val);
}
//Add FAQ
$(document).ready(function() {
    $('#productCategoryTable tbody').on('click', '#viewDetails', function() {
        var productCategoryTable = $('#productCategoryTable').DataTable();
        var data = productCategoryTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#compType").attr('readonly', true);
        $('#groupType').attr('readonly', true);
        $('#compType').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#productCategoryTable tbody').on('click', '#editDetails', function() {
        var table = $('#productCategoryTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#productCategoryTable tbody').on('click', '#removeDetails', function() {
        var table = $('#productCategoryTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dcompType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dcompType", sTitle: "Product Category", sType: "string" }, 
        { "mDataProp": "dgroupType", sTitle: "Group Type", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var productCategoryTable = $('#productCategoryTable').DataTable({
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
		productCategoryTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	productCategoryTable.columns().iterator('column', function(ctx, idx) {
		$(productCategoryTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="productCategoryTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	productCategoryTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#compType").val('');
    $("#groupType").val('');
    $("#compType").val('');
    $("#compType").removeAttr('readonly');
    $('#groupType').removeAttr('readonly');
    $('#compType').removeAttr('readonly');
});