$(".smart-Wizard").hide();
$("#deviceMasterBtn").click(function() {
    $(".smart-Wizard").show();
});
function deviceDetailFn() {
    if ($.trim($("#deviceDetailBtn").text()) == "Update") {
        editUserProfile.remove().draw();
        $("#deviceDetailBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add");
    }
    let device_obj = {};
    device_obj.deviceNametxt =  $.trim($("#deviceNametxt").val());
    device_obj.deviceIMEItxt =  $.trim($("#deviceIMEItxt").val());

    device_obj.assignedTo = $("#assignedTo option:selected").text();
    device_obj.assignedTo_val = $("#assignedTo option:selected").val();

    device_obj.governorateID = $("#governorateID option:selected").text();
    device_obj.governorateID_val = $("#governorateID option:selected").val();

    device_obj.stationID = $("#stationID option:selected").text();
    device_obj.stationID_val = $("#stationID option:selected").val();

    device_obj.statusYN = $("#statusYN option:selected").text();
	device_obj.statusYN_val = $("#statusYN option:selected").val();

    if (device_obj.statusYN_val == 1) {
		device_obj.statusYN = "<i class='fas fa-toggle-on text-success fa-2x'></i>";
	} else {
        device_obj.statusYN = "<i class='fas fa-toggle-off text-danger fa-2x'></i>";
    }
    var device_objTable = $('#deviceStatusTable').DataTable();
    device_objTable.row.add(device_obj).draw();

    $("#deviceNametxt, #deviceIMEItxt, #governorateID, #stationID, #statusYN").val("");
    $("#assignedTo option:selected").prop("selected", false);
    $('#assignedTo').multiselect('refresh');
}

//edit edit deviceDetailFn details
function editdeviceDetailFn(data1) {
    //Set value in form
    $(".smart-Wizard").show();
	var data = data1.data();
	$("#deviceDetailBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
    $(`#deviceNametxt`).val(data.deviceNametxt)
    $(`#deviceIMEItxt`).val(data.deviceIMEItxt)
    $("#assignedTo").val(data.assignedTo_val).multiselect('rebuild');
    $("#governorateID").val(data.governorateID_val).trigger('change');
    $("#stationID").val(data.stationID_val);
    $("#statusYN").val(data.statusYN_val);
}
//view view deviceDetailFn details
function viewdeviceDetailFn(data1) {
    var data = data1.data();
    $(".smart-Wizard").show();
    
    $("#deviceDetailBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
    $(`#deviceNametxt`).val(data.deviceNametxt)
    $(`#deviceIMEItxt`).val(data.deviceIMEItxt)
    $("#assignedTo").val(data.assignedTo_val).multiselect('rebuild');
    $("#governorateID").val(data.governorateID_val).trigger('change');
    $("#stationID").val(data.stationID_val);
    $("#statusYN").val(data.statusYN_val);

    $(`#deviceNametxt, #deviceIMEItxt`).attr('readonly', true);
    $("#assignedTo, #governorateID, #stationID, #statusYN").prop('disabled', true);
}

$(document).ready(function() {

    $('#deviceStatusTable tbody').on('click', '#deviceViewBtn', function () {
		var deviceStatusTable = $('#deviceStatusTable').DataTable();
		var data = deviceStatusTable.row($(this).parents('tr'));
		$("#MCIDetailBtn").hide();
		viewdeviceDetailFn(data);
	});
	$('#deviceStatusTable tbody').on('click', '#deviceEditBtn', function () {
		var table = $('#deviceStatusTable').DataTable();
		editUserProfile = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editdeviceDetailFn(data);
	});
	$('#deviceStatusTable tbody').on('click', '#deviceDelBtn', function () {
		var table = $('#deviceStatusTable').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
    
    var deviceStatusTable = $('#deviceStatusTable').DataTable({
        processing: true,
        serverSide: false,
        ajax: "assets/js/json/deviceMaster.json",
        columns: [
            { "data": "deviceNametxt" },
            { "data": "deviceIMEItxt" },
            { "data": "assignedTo" },
            { "data": "assignedTo_val" },
            { "data": "governorateID" },
            { "data": "governorateID_val" },
            { "data": "stationID" },
            { "data": "stationID_val" },
            { "data": "statusYN" },
            { "data": "statusYN_val" },
            { "data": "Actions", "orderable": false, "defaultContent":
                    "<button type='button' id = 'deviceViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;" +
                    "<button type='button' id = 'deviceEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>"
            }],
    "destroy": true,
    "dom": '<"top"f>rt<"bottom"ilp>',
    "columnDefs": [{
        "searchable": false,
        //"orderable": false,
        visible: false,
        "targets": [3, 5, 7, 9]
    }],
    "order": [[0, 'asc']]
    });
    $('#deviceMasterSearch').keyup(function() {
		deviceStatusTable.search($(this).val()).draw(); // this  is for customized search box with data table search feature.
	});
	deviceStatusTable.columns().iterator('column', function(ctx, idx) {
		$(deviceStatusTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="deviceStatusTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	deviceStatusTable.page.len(sessionStorage.getItem("selectedLength")).draw();

    $('.multiSelect').multiselect({
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true,
		nonSelectedText: 'Please select',
	});
});
$("#deviceCancelid").click(function() {
    $("#deviceDetailBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#deviceNametxt, #deviceIMEItxt, #governorateID, #stationID").val('');
    $('#deviceNametxt, #deviceIMEItxt').removeAttr('readonly');
    $("#governorateID, #stationID, #statusYN").prop('disabled', false);
    $("#assignedTo option:selected").prop("selected", false);
    $('#assignedTo').multiselect('refresh');
    $(".smart-Wizard").hide();
});