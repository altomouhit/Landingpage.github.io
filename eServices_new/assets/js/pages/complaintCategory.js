//FAQ Button
$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function catFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var cat_object = {};
    var feedbackType = $("#feedbackType option:selected").text();
	var feedbackType_val = $("#feedbackType option:selected").val();

    var productCategory = $("#productCategory option:selected").text();
	var productCategory_val = $("#productCategory option:selected").val();

    cat_object.dfeedbackType = feedbackType;
    cat_object.dfeedbackType_val = feedbackType_val;
    cat_object.dproductCategory = productCategory;
    cat_object.dproductCategory_val = productCategory_val;

    var categoryTable = $('#categoryTable').DataTable();
    categoryTable.row.add(cat_object).draw();

    $("#feedbackType").val('');
    $("#productCategory").val('');
}
//edit catFn details
function adveditfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#feedbackType").val(data.dfeedbackType_val);
    $("#productCategory").val(data.dproductCategory_val);
}
//View catFn details
function Faqviewfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#feedbackType").val(data.dfeedbackType_val);
    $("#productCategory").val(data.dproductCategory_val);
}
//Add FAQ
$(document).ready(function() {
    $('#categoryTable tbody').on('click', '#viewDetails', function() {
        var categoryTable = $('#categoryTable').DataTable();
        var data = categoryTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#feedbackType').prop('disabled', true);
        $('#productCategory').prop('disabled', true);
        Faqviewfunction(data);
    });
    $('#categoryTable tbody').on('click', '#editDetails', function() {
        var table = $('#categoryTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#categoryTable tbody').on('click', '#removeDetails', function() {
        var table = $('#categoryTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dfeedbackType", sTitle: "Feedback Type (En)", sType: "string" }, 
        { "mDataProp": "dfeedbackType", sTitle: "Feedback Type (Ar)", sType: "string" }, 
        { "mDataProp": "dproductCategory", sTitle: "Product Category (EN)", sType: "string" }, 
        { "mDataProp": "dproductCategory", sTitle: "Product Category (AR)", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var categoryTable = $('#categoryTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [4]
		}],
		"order": [[0, 'asc']]
	});
	$('#compCatSearch').keyup(function() {
		categoryTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	categoryTable.columns().iterator('column', function(ctx, idx) {
		$(categoryTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="categoryTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	categoryTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#feedbackType").val('');
    $("#productCategory").val('');
    $('#feedbackType').prop('disabled', false);
    $('#productCategory').prop('disabled', false);
    $(".smart-Wizard").hide();
});