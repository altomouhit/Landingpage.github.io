//FAQ Button
$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function offSiteFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var offSite_object = {};
    var branch = $("#branch option:selected").text();
	var branch_val = $("#branch option:selected").val();

    var offSiteName = $("#offSiteName").val();

    offSite_object.dbranch = branch;
    offSite_object.dbranch_val = branch_val;
    offSite_object.doffSiteName = offSiteName;

    var offSiteTable = $('#offSiteTable').DataTable();
    offSiteTable.row.add(offSite_object).draw();

    $("#branch").val('');
    $("#offSiteName").val('');
}
//edit offSiteFn details
function adveditfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#branch").val(data.dbranch_val);
    $("#offSiteName").val(data.doffSiteName);
}
//View offSiteFn details
function Faqviewfunction(data) {
    $(".smart-Wizard").show();
    var data = data.data();
    $("#branch").val(data.dbranch_val);
    $("#offSiteName").val(data.doffSiteName);
}
//Add FAQ
$(document).ready(function() {
    $('#offSiteTable tbody').on('click', '#viewDetails', function() {
        var offSiteTable = $('#offSiteTable').DataTable();
        var data = offSiteTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#branch').prop('disabled', true);
        $('#offSiteName').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#offSiteTable tbody').on('click', '#editDetails', function() {
        var table = $('#offSiteTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#offSiteTable tbody').on('click', '#removeDetails', function() {
        var table = $('#offSiteTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dbranch", sTitle: "Branch Name", sType: "string" }, 
        { "mDataProp": "doffSiteName", sTitle: "Offsite Name", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var offSiteTable = $('#offSiteTable').DataTable({
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
	$('#offSiteNameBranchSearch').keyup(function() {
		offSiteTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	offSiteTable.columns().iterator('column', function(ctx, idx) {
		$(offSiteTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="offSiteTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	offSiteTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#branch").val('');
    $("#offSiteName").val('');
    $('#branch').prop('disabled', false);
    $('#offSiteName').removeAttr('readonly');
    $(".smart-Wizard").hide();
});