//$(".smart-Wizard").hide();
$("#createUserProfileBtn").click(function() {
    $(".smart-Wizard").show();
});
function ambulanceFn() {
    if ($.trim($("#ambulanceBtn").text()) == "Update") {
        editAmbulance.remove().draw();
        $("#ambulanceBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add");
    }
    var ambulanceObj = {};
    ambulanceObj.governorateID = $("#governorateID option:selected").text();
	ambulanceObj.governorateID_val = $("#governorateID option:selected").val();

    ambulanceObj.incidentLocation = $("#incidentLocation option:selected").text();
	ambulanceObj.incidentLocation_val = $("#incidentLocation option:selected").val();

    ambulanceObj.stationID = $("#stationID option:selected").text();
	ambulanceObj.stationID_val = $("#stationID option:selected").val();

    ambulanceObj.fromDate = $("#fromDate").val();
    ambulanceObj.toDate = $("#toDate").val();

    ambulanceObj.factorsAffectingEMS = $("#factorsAffectingEMS :selected").map((_, e) => e.text).get();
    ambulanceObj.factorsAffectingEMS_val = $("#factorsAffectingEMS :selected").map((_, e) => e.value).get();

    ambulanceObj.statusYN = $("#statusYN option:selected").text();
	ambulanceObj.statusYN_val = $("#statusYN option:selected").val();

    if (ambulanceObj.statusYN_val == 1) {
		ambulanceObj.statusYN = "<i class='fas fa-check-circle text-success fa-xl'></i>";
	} else {
        ambulanceObj.statusYN = "<i class='fas fa-times-circle text-danger fa-xl'></i>";
    }
    var ambulanceTable = $('#ambulanceTable').DataTable();
    ambulanceTable.row.add(ambulanceObj).draw();

    $("#governorateID, #incidentLocation, #stationID, #fromDate, #toDate").val('');
    $("#factorsAffectingEMS option:selected").prop("selected", false);
    $('#factorsAffectingEMS').multiselect('refresh');
}

//edit editAmbulanceFn details
function editAmbulanceFn(data1) {
    //Set value in form
	var data = data1.data();
	$("#ambulanceBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
    $("#governorateID").val(data.governorateID_val).trigger('change');
    $("#incidentLocation").val(data.incidentLocation_val);
    $("#stationID").val(data.stationID_val);
    $("#fromDate").val(data.fromDate);
    $("#toDate").val(data.toDate);
    $('select#factorsAffectingEMS').val(data.factorsAffectingEMS_val).multiselect('rebuild');
}
//view viewAmbulanceFn details
function viewAmbulanceFn(data1) {
    var data = data1.data();
    $("#governorateID").val(data.governorateID_val).trigger('change');
    $("#incidentLocation").val(data.incidentLocation_val);
    $("#stationID").val(data.stationID_val);
    $("#fromDate").val(data.fromDate);
    $("#toDate").val(data.toDate);
    $('select#factorsAffectingEMS').val(data.factorsAffectingEMS_val).multiselect('rebuild');
    $("#factorsAffectingEMS, #governorateID, #incidentLocation, #stationID, #fromDate, #toDate").prop('disabled', true);
}
$(document).ready(function () {
    $('#ambulanceTable tbody').on('click', '#ambulanceViewBtn', function () {
		var ambulanceTable = $('#ambulanceTable').DataTable();
		var data = ambulanceTable.row($(this).parents('tr'));
		$("#MCIDetailBtn").hide();
		viewAmbulanceFn(data);
	});
	$('#ambulanceTable tbody').on('click', '#ambulanceEditBtn', function () {
		var table = $('#ambulanceTable').DataTable();
		editAmbulance = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editAmbulanceFn(data);
	});
	$('#ambulanceTable tbody').on('click', '#ambulanceDelBtn', function () {
		var table = $('#ambulanceTable').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
    
    var ambulanceTable = $('#ambulanceTable').DataTable({
        processing: true,
        serverSide: false,
        //ajax: "assets/js/json/ambulance.json",
        columns: [
            { "data": "governorateID" },            // 0
            { "data": "governorateID_val" },        // 1
            { "data": "incidentLocation" },         // 2
            { "data": "incidentLocation_val" },     // 3
            { "data": "stationID" },                // 4
            { "data": "stationID_val" },            // 5
            { "data": "fromDate" },                 // 6
            { "data": "toDate" },                   // 7
            { "data": "factorsAffectingEMS" },      // 8
            { "data": "factorsAffectingEMS_val" },  // 9
            { "data": "total", "defaultContent":'' }, //10
            { "data": "Actions", "orderable": false, "defaultContent":  //11
                    "<button type='button' id = 'ambulanceViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;" +
                    "<button type='button' id = 'ambulanceEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>"
            }],
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "columnDefs": [{
            "searchable": false,
            //"orderable": false,
            visible: false,
            "targets": [0, 1, 2, 3, 5, 6, 7, 9]
        }],
        "order": [[0, 'asc']]
    });
    $('#ambulanceSearch').keyup(function () {
        ambulanceTable.search($(this).val()).draw(); // this  is for customized search box with data table search feature.
    });
    ambulanceTable.columns().iterator('column', function (ctx, idx) {
        $(ambulanceTable.column(idx).header()).append('<span class="sort-icon"/>')
    });
    if (sessionStorage.getItem("selectedLength") < 20) {
        sessionStorage.setItem("selectedLength", 10);
    }
    $('select[name="ambulanceTable_length"]').change(function () {
        sessionStorage.setItem("selectedLength", $(this).val());
    });
    ambulanceTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#ambulanceCancelId").click(function () {
    $("#ambulanceBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#governorateID, #incidentLocation, #stationID, #fromDate, #toDate").val('').prop('disabled', false);
    $("#factorsAffectingEMS option:selected").prop("selected", false);
    $('#factorsAffectingEMS').multiselect('refresh');
});