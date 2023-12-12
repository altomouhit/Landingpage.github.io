$(".smart-Wizard").hide();
$("#createUserProfileBtn").click(function() {
    $(".smart-Wizard").show();
});
function userProfileFn() {
    if ($.trim($("#userProfileBtn").text()) == "Update") {
        editUserProfile.remove().draw();
        $("#userProfileBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add");
    }
    var userProfile = {};
    userProfile.forceNo = $("#forceNo").val();
    userProfile.loginID = $("#loginID").val();
    userProfile.userName = $("#userName").val();
    userProfile.roleName = $("#roleName option:selected").text();
    userProfile.roleName_val = $("#roleName option:selected").val();
    userProfile.contactNo = $("#contactNo").val();
    userProfile.emailID = $("#emailID").val();
    userProfile.statusYN = $("#statusYN option:selected").text();
	userProfile.statusYN_val = $("#statusYN option:selected").val();
    // if ($("#statuSwitch").is(':checked')) {
    //     userProfile.statuSwitch = "<i class='fas fa-check-circle text-success fa-xl'></i>";
    // } else {
    //     userProfile.statuSwitch = "<i class='fas fa-times-circle text-danger fa-xl'></i>";
    // }
    // userProfile.statuSwitch_val = $("#statuSwitch").val();
    if (userProfile.statusYN_val == 1) {
		userProfile.statusYN = "<i class='fas fa-check-circle text-success fa-xl'></i>";
	} else {
        userProfile.statusYN = "<i class='fas fa-times-circle text-danger fa-xl'></i>";
    }
    var userProfileTable = $('#userProfileTable').DataTable();
    userProfileTable.row.add(userProfile).draw();

    $("#forceNo").val('');
    $("#loginID").val('');
    $("#userName").val('');
    $("#roleName").val('');
    $("#contactNo").val('');
    $("#emailID").val('');
    $("#statusYN").val('');
    //$("#statuSwitch").prop('checked', false);
}

//edit editUserProfileFn details
function editUserProfileFn(data1) {
    //Set value in form
    $(".smart-Wizard").show();
	var data = data1.data();
	$("#userProfileBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
    $("#forceNo").val(data.forceNo);
    $("#loginID").val(data.loginID);
    $("#userName").val(data.userName);
    $("#roleName").val(data.roleName_val);
    $("#contactNo").val(data.contactNo);
    $("#emailID").val(data.emailID);
    $("#statusYN").val(data.statusYN_val);
    //$("#statuSwitch").val(data.statuSwitch).is(":checked");
}
//view viewUserProfileFn details
function viewUserProfileFn(data1) {
    var data = data1.data();
    $(".smart-Wizard").show();
    $("#forceNo").val(data.forceNo);
    $("#loginID").val(data.loginID);
    $("#userName").val(data.userName);
    $("#roleName").val(data.roleName_val);
    $("#contactNo").val(data.contactNo);
    $("#emailID").val(data.emailID);
    $("#statusYN").val(data.statusYN_val);
    //$("#statuSwitch").val(data.statuSwitch).is(":checked");
    $('#forceNo, #loginID, #userName, #contactNo, #emailID').attr('readonly', true);
	$("#roleName, #statusYN").prop('disabled', true);
}
$(document).ready(function () {
    $('#userProfileTable tbody').on('click', '#userProfileViewBtn', function () {
		var userProfileTable = $('#userProfileTable').DataTable();
		var data = userProfileTable.row($(this).parents('tr'));
		$("#MCIDetailBtn").hide();
		viewUserProfileFn(data);
	});
	$('#userProfileTable tbody').on('click', '#userProfileEditBtn', function () {
		var table = $('#userProfileTable').DataTable();
		editUserProfile = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editUserProfileFn(data);
	});
	$('#userProfileTable tbody').on('click', '#userProfileDelBtn', function () {
		var table = $('#userProfileTable').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
    
    var userProfileTable = $('#userProfileTable').DataTable({
        processing: true,
        serverSide: false,
        ajax: "assets/js/json/userProfile.json",
        columns: [
            { "data": "forceNo" },
            { "data": "loginID" },
            { "data": "userName" },
            { "data": "roleName" },
            { "data": "roleName_val" },
            { "data": "contactNo" },
            { "data": "emailID" },
            { "data": "statusYN" },
            { "data": "statusYN_val" },
            { "data": "Actions", "orderable": false, "defaultContent":
                    "<button type='button' id = 'userProfileViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;" +
                    "<button type='button' id = 'userProfileEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>"
            }],
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "columnDefs": [{
            "searchable": false,
            //"orderable": false,
            visible: false,
            "targets": [4, 8]
        }],
        "order": [[0, 'asc']]
    });
    $('#userProfileSearch').keyup(function () {
        userProfileTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    });
    userProfileTable.columns().iterator('column', function (ctx, idx) {
        $(userProfileTable.column(idx).header()).append('<span class="sort-icon"/>')
    });
    if (sessionStorage.getItem("selectedLength") < 20) {
        sessionStorage.setItem("selectedLength", 10);
    }
    $('select[name="userProfileTable_length"]').change(function () {
        sessionStorage.setItem("selectedLength", $(this).val());
    });
    userProfileTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#userProfileCancelid").click(function () {
    $("#userProfileBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $('#forceNo, #loginID, #userName, #contactNo, #emailID, #roleName, #statusYN').val('');
    $('#forceNo, #loginID, #userName, #contactNo, #emailID').removeAttr('readonly');
	$("#roleName, #statusYN").prop('disabled', false);
    $(".smart-Wizard").hide();
});