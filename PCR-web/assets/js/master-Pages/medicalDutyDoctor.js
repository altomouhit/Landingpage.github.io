//$(".smart-Wizard").hide();
$("#createUserProfileBtn").click(function() {
    $(".smart-Wizard").show();
});
function medicalDutyDoctorFn() {
    if ($.trim($("#medicalDutyDoctorBtn").text()) == "Update") {
        editUserProfile.remove().draw();
        $("#medicalDutyDoctorBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add");
    }
    var medicalDutyDoctor = {};
    medicalDutyDoctor.dutyDoctor = $("#dutyDoctor option:selected").text();
	medicalDutyDoctor.dutyDoctor_val = $("#dutyDoctor option:selected").val();

    medicalDutyDoctor.governorateID = $("#governorateID option:selected").text();
	medicalDutyDoctor.governorateID_val = $("#governorateID option:selected").val();

    medicalDutyDoctor.stationID = $("#stationID option:selected").text();
	medicalDutyDoctor.stationID_val = $("#stationID option:selected").val();

    medicalDutyDoctor.fromDate = $("#fromDate").val();
    medicalDutyDoctor.toDate = $("#toDate").val();

    medicalDutyDoctor.statusYN = $("#statusYN option:selected").text();
	medicalDutyDoctor.statusYN_val = $("#statusYN option:selected").val();

    if (medicalDutyDoctor.statusYN_val == 1) {
		medicalDutyDoctor.statusYN = "<i class='fas fa-check-circle text-success fa-xl'></i>";
	} else {
        medicalDutyDoctor.statusYN = "<i class='fas fa-times-circle text-danger fa-xl'></i>";
    }
    var medicalDutyDoctorTable = $('#medicalDutyDoctorTable').DataTable();
    medicalDutyDoctorTable.row.add(medicalDutyDoctor).draw();

    $("#governorateID, #stationID, #fromDate, #toDate, #statusYN").val('');
    $("#dutyDoctor option:selected").prop("selected", false);
    $('#dutyDoctor').multiselect('refresh');
}

//edit editMedicalDutyDoctorFn details
function editMedicalDutyDoctorFn(data1) {
    //Set value in form
    $(".smart-Wizard").show();
	var data = data1.data();
	$("#medicalDutyDoctorBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
    $("#dutyDoctor").val(data.dutyDoctor_val).multiselect('rebuild');
    $("#governorateID").val(data.governorateID_val).trigger('change');
    $("#stationID").val(data.stationID_val);
    $("#fromDate").val(data.fromDate);
    $("#toDate").val(data.toDate);
    $("#statusYN").val(data.statusYN_val);
}
//view viewMedicalDutyDoctorFn details
function viewMedicalDutyDoctorFn(data1) {
    var data = data1.data();
    $(".smart-Wizard").show();
    $("#dutyDoctor").val(data.dutyDoctor_val).multiselect('rebuild');
    $("#governorateID").val(data.governorateID_val).trigger('change');
    $("#stationID").val(data.stationID_val);
    $("#fromDate").val(data.fromDate);
    $("#toDate").val(data.toDate);
    $("#statusYN").val(data.statusYN_val);
    $("#dutyDoctor, #governorateID, #stationID, #fromDate, #toDate, #statusYN").prop('disabled', true);
}
$(document).ready(function () {
    $('#medicalDutyDoctorTable tbody').on('click', '#medicalDutyDoctorViewBtn', function () {
		var medicalDutyDoctorTable = $('#medicalDutyDoctorTable').DataTable();
		var data = medicalDutyDoctorTable.row($(this).parents('tr'));
		$("#MCIDetailBtn").hide();
		viewMedicalDutyDoctorFn(data);
	});
	$('#medicalDutyDoctorTable tbody').on('click', '#medicalDutyDoctorEditBtn', function () {
		var table = $('#medicalDutyDoctorTable').DataTable();
		editUserProfile = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editMedicalDutyDoctorFn(data);
	});
	$('#medicalDutyDoctorTable tbody').on('click', '#medicalDutyDoctorDelBtn', function () {
		var table = $('#medicalDutyDoctorTable').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
    
    var medicalDutyDoctorTable = $('#medicalDutyDoctorTable').DataTable({
        processing: true,
        serverSide: false,
        ajax: "assets/js/json/medicalDutyDoctor.json",
        columns: [
            { "data": "dutyDoctor" },
            { "data": "dutyDoctor_val" },
            { "data": "governorateID" },
            { "data": "governorateID_val" },
            { "data": "stationID" },
            { "data": "stationID_val" },
            { "data": "fromDate" },
            { "data": "toDate" },
            { "data": "statusYN" },
            { "data": "statusYN_val" },
            { "data": "Actions", "orderable": false, "defaultContent":
                    "<button type='button' id = 'medicalDutyDoctorViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;" +
                    "<button type='button' id = 'medicalDutyDoctorEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>"
            }],
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "columnDefs": [{
            "searchable": false,
            //"orderable": false,
            visible: false,
            "targets": [1, 3, 5, 9]
        }],
        "order": [[0, 'asc']]
    });
    $('#medicalDutyDoctorSearch').keyup(function () {
        medicalDutyDoctorTable.search($(this).val()).draw(); // this  is for customized search box with data table search feature.
    });
    medicalDutyDoctorTable.columns().iterator('column', function (ctx, idx) {
        $(medicalDutyDoctorTable.column(idx).header()).append('<span class="sort-icon"/>')
    });
    if (sessionStorage.getItem("selectedLength") < 20) {
        sessionStorage.setItem("selectedLength", 10);
    }
    $('select[name="medicalDutyDoctorTable_length"]').change(function () {
        sessionStorage.setItem("selectedLength", $(this).val());
    });
    medicalDutyDoctorTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#medicalDutyDoctorCancelId").click(function () {
    $("#medicalDutyDoctorBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $('#dutyDoctor, #loginID, #userName, #contactNo, #emailID, #roleName, #statusYN').val('');
    $('#dutyDoctor, #loginID, #userName, #contactNo, #emailID').removeAttr('readonly');
	$("#roleName, #statusYN").prop('disabled', false);
    $(".smart-Wizard").hide();
});