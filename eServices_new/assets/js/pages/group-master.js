//FAQ Button
$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function gmasterFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var cat_object = {};
    var supportLine = $("#supportLine option:selected").text();
	var supportLine_val = $("#supportLine option:selected").val();

    var groupTo = $("#groupTo option:selected").text();
	var groupTo_val = $("#groupTo option:selected").val();

    var groupNameEn = $("#groupNameEn").val();
    var groupNameAr = $("#groupNameAr").val();

    cat_object.dsupportLine = supportLine;
    cat_object.dsupportLine_val = supportLine_val;
    cat_object.dgroupTo = groupTo;
    cat_object.dgroupTo_val = groupTo_val;
    cat_object.dgroupNameEn = groupNameEn;
    cat_object.dgroupNameAr = groupNameAr;

    var groupMasterTable = $('#groupMasterTable').DataTable();
    groupMasterTable.row.add(cat_object).draw();

    $("#supportLine").val('');
    $("#groupTo").val('');
    $("#groupNameEn").val('');
    $("#groupNameAr").val('');
}
//edit gmasterFn details
function adveditfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#supportLine").val(data.dsupportLine_val);
    $("#groupTo").val(data.dgroupTo_val);
    $("#groupNameEn").val(data.dgroupNameEn);
    $("#groupNameAr").val(data.dgroupNameAr);
}
//View gmasterFn details
function Faqviewfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#supportLine").val(data.dsupportLine_val);
    $("#groupTo").val(data.dgroupTo_val);
    $("#groupNameEn").val(data.dgroupNameEn);
    $("#groupNameAr").val(data.dgroupNameAr);
}
//Add FAQ
$(document).ready(function() {
    $('#groupMasterTable tbody').on('click', '#viewDetails', function() {
        var groupMasterTable = $('#groupMasterTable').DataTable();
        var data = groupMasterTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#supportLine').prop('disabled', true);
        $('#groupTo').prop('disabled', true);
        $("#groupNameEn").attr('readonly', true);
        $("#groupNameAr").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#groupMasterTable tbody').on('click', '#editDetails', function() {
        var table = $('#groupMasterTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#groupMasterTable tbody').on('click', '#removeDetails', function() {
        var table = $('#groupMasterTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dsupportLine", sTitle: "Support Line", sType: "string" },
        { "mDataProp": "dgroupNameEn", sTitle: "Group Name (EN)", sType: "string" }, 
        { "mDataProp": "dgroupNameAr", sTitle: "Group Name (AR)", sType: "string" },
        { "mDataProp": "dgroupTo", sTitle: "Group Type", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var groupMasterTable = $('#groupMasterTable').DataTable({
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
	$('#groupMasterSearch').keyup(function() {
		groupMasterTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	groupMasterTable.columns().iterator('column', function(ctx, idx) {
		$(groupMasterTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="groupMasterTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	groupMasterTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#supportLine").val('');
    $("#groupTo").val('');
    $('#groupNameEn').val('');
    $('#groupNameAr').val('');
    $('#supportLine').prop('disabled', false);
    $('#groupTo').prop('disabled', false);
    $('#groupNameEn').removeAttr('readonly');
    $('#groupNameAr').removeAttr('readonly');
    $(".smart-Wizard").hide();
});