//FAQ Button
function userFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var user_object = {};


    var displayName = $("#displayName").val();
    var displayNameAr = $("#displayNameAr").val();
	var userName = $("#userName").val();
    var eMail = $("#eMail").val();
    var workTitle = $("#workTitle").val();

    var supportLine = $("#supportLine option:selected").text();
	var supportLine_val = $("#supportLine option:selected").val();

    var group = $("#group option:selected").text();
	var group_val = $("#group option:selected").val();

    var role = $("#role option:selected").text();
	var role_val = $("#role option:selected").val();

    var branch = $("#branch option:selected").text();
	var branch_val = $("#branch option:selected").val();

    var slaStatus = $("#slaStatus option:selected").text();
	var slaStatus_val = $("#slaStatus option:selected").val();

    var userType = $("#userType option:selected").text();
	var userType_val = $("#userType option:selected").val();

    var dept = $("#dept option:selected").text();
    var dept_val = $("#dept option:selected").val();

    var firstName = $("#firstName").val();
    var lastName = $("#lastName").val();
	

    user_object.ddisplayName = displayName;
    user_object.ddisplayNameAr = displayNameAr;
    user_object.duserName = userName;
    user_object.deMail = eMail;
    user_object.dworkTitle = workTitle;

    user_object.dsupportLine = supportLine;
    user_object.dsupportLine_val = supportLine_val;

    user_object.dgroup = group;
    user_object.dgroup_val = group_val;

    user_object.drole = role;
    user_object.drole_val = role_val;

    user_object.dbranch = branch;
    user_object.dbranch_val = branch_val;

    user_object.dslaStatus = slaStatus;
    user_object.dslaStatus_val = slaStatus_val;

    user_object.duserType = userType;
    user_object.duserType_val = userType_val;

    user_object.ddept = dept;
    user_object.ddept = dept_val;

    user_object.dfirstName = firstName;
    user_object.dlastName = lastName;


    var userTable = $('#userTable').DataTable();
    userTable.row.add(user_object).draw();

    $("#userName").val('');
    $("#displayName").val('');
    $("#displayNameAr").val('');
    $("#eMail").val('');
    $("#workTitle").val('');
    $("#supportLine").val('');
    $("#group").val('');
    $("#role").val('');
    $("#branch").val('');
    $("#slaStatus").val('');
    $("#userType").val('');
    $("#dept").val('');
    $("#firstName").val('');
    $("#lastName").val('');
}
//edit userFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#userName").val(data.duserName);
    $("#displayName").val(data.ddisplayName);
    $("#displayNameAr").val(data.ddisplayNameAr);
    $("#eMail").val(data.deMail);
    $("#workTitle").val(data.dworkTitle);
    $("#supportLine").val(data.dsupportLine_val);
    $("#group").val(data.dgroup_val);
    $("#role").val(data.drole_val);
    $("#branch").val(data.dbranch_val);
    $("#slaStatus").val(data.dslaStatus_val);
    $("#userType").val(data.duserType_val);
    $("#dept").val(data.ddept);
    $("#firstName").val(data.dfirstName);
    $("#lastName").val(data.dlastName);
}
//View userFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#userName").val(data.duserName);
    $("#displayName").val(data.ddisplayName);
    $("#displayNameAr").val(data.ddisplayNameAr);
    $("#eMail").val(data.deMail);
    $("#workTitle").val(data.dworkTitle);
    $("#supportLine").val(data.dsupportLine_val);
    $("#group").val(data.dgroup_val);
    $("#role").val(data.drole_val);
    $("#branch").val(data.dbranch_val);
    $("#slaStatus").val(data.dslaStatus_val);
    $("#userType").val(data.duserType_val);
    $("#dept").val(data.ddept);
    $("#firstName").val(data.dfirstName);
    $("#lastName").val(data.dlastName);
}
//Add FAQ
$(document).ready(function() {
    $('#userTable tbody').on('click', '#viewDetails', function() {
        var userTable = $('#userTable').DataTable();
        var data = userTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#cancelid").show();
        $("#userName").attr('readonly', true);
        $("#displayName").attr('readonly', true);
        $("#displayNameAr").attr('readonly', true);
        $("#eMail").attr('readonly', true);
        $("#workTitle").attr('readonly', true);
        $("#supportLine").prop('disabled', true);
        $("#dept").prop('disabled', true);
        $("#group").prop('disabled', true);
        $("#role").prop('disabled', true);
        $("#branch").prop('disabled', true);
        $("#slaStatus").prop('disabled', true);
        $("#userType").prop('disabled', true);
        $("#dept").prop('disabled', true);
        $("#firstName").attr('readonly', true);
        $("#lastName").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#userTable tbody').on('click', '#editDetails', function() {
        var table = $('#userTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#userTable tbody').on('click', '#removeDetails', function() {
        var table = $('#userTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "duserName", sTitle: "User Name", sType: "string" }, 
        { "mDataProp": "dsupportLine", sTitle: "Support Line", sType: "string" }, 
        { "mDataProp": "dgroup", sTitle: "Group", sType: "string" },
        { "mDataProp": "drole", sTitle: "Role", sType: "string" }, 
        { "mDataProp": "dbranch", sTitle: "Branch", sType: "string" }, 
        { "mDataProp": "dslaStatus", sTitle: "User Status", sType: "string" },
        { "mDataProp": "dslaStatus", sTitle: "SLA Notification", sType: "string" }, 
        { "mDataProp": "duserType", sTitle: "User Type", sType: "string" },
        { "mDataProp": "dfirstName", sTitle: "User Details", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var userTable = $('#userTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [5]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		userTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	userTable.columns().iterator('column', function(ctx, idx) {
		$(userTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="userTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	userTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#userName").val('');
    $("#displayName").val('');
    $("#displayNameAr").val('');
    $("#eMail").val('');
    $("#workTitle").val('');
    $("#supportLine").val('');
    $("#dept").val('');
    $("#group").val('');
    $("#role").val('');
    $("#branch").val('');
    $("#slaStatus").val('');
    $("#userType").val('');
    $("#dept").val();
    $("#firstName").val('');
    $("#lastName").val('');

    $("#userName").removeAttr('readonly');
    $("#displayName").removeAttr('readonly');
    $("#displayNameAr").removeAttr('readonly');
    $("#eMail").removeAttr('readonly');
    $("#workTitle").removeAttr('readonly');
    $("#supportLine").prop('disabled', false);
    $("#dept").prop('disabled', false);
    $("#group").prop('disabled', false);
    $("#role").prop('disabled', false);
    $("#branch").prop('disabled', false);
    $("#slaStatus").prop('disabled', false);
    $("#userType").prop('disabled', false);
    $("#dept").prop('disabled', false);
    $("#firstName").removeAttr('readonly');
    $("#lastName").removeAttr('readonly');
});