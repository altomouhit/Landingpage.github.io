//FAQ Button
$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function gbranchFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var cat_object = {};
    var branch = $("#branch option:selected").text();
	var branch_val = $("#branch option:selected").val();

    var group = $("#group option:selected").text();
	var group_val = $("#group option:selected").val();

    cat_object.dbranch = branch;
    cat_object.dbranch_val = branch_val;
    cat_object.dgroup = group;
    cat_object.dgroup_val = group_val;

    var branchTable = $('#branchTable').DataTable();
    branchTable.row.add(cat_object).draw();

    $("#branch").val('');
    $("#group").val('');
}
//edit gbranchFn details
function adveditfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#branch").val(data.dbranch_val);
    $("#group").val(data.dgroup_val);
}
//View gbranchFn details
function Faqviewfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#branch").val(data.dbranch_val);
    $("#group").val(data.dgroup_val);
}
//Add FAQ
$(document).ready(function() {
    $('#branchTable tbody').on('click', '#viewDetails', function() {
        var branchTable = $('#branchTable').DataTable();
        var data = branchTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#branch').prop('disabled', true);
        $('#group').prop('disabled', true);
        Faqviewfunction(data);
    });
    $('#branchTable tbody').on('click', '#editDetails', function() {
        var table = $('#branchTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#branchTable tbody').on('click', '#removeDetails', function() {
        var table = $('#branchTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dbranch", sTitle: "Branch", sType: "string" }, 
        { "mDataProp": "dgroup", sTitle: "Group", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var branchTable = $('#branchTable').DataTable({
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
	$('#groupBranchSearch').keyup(function() {
		branchTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	branchTable.columns().iterator('column', function(ctx, idx) {
		$(branchTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="branchTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	branchTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#branch").val('');
    $("#group").val('');
    $('#branch').prop('disabled', false);
    $('#group').prop('disabled', false);
    $(".smart-Wizard").hide();
});