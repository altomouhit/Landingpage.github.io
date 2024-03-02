$(".staffRadio").on('change', function() {
    if ($("#doneBy").prop("checked") == true) {
        $("#patientTableDiv").show();
        $("#mgmtOutcomeTableDiv").hide();
    } else if ($("#allStaff").prop("checked") == true) {
        $("#patientTableDiv").hide();
        $("#mgmtOutcomeTableDiv").show();
    }
});
$(document).ready(function () {
    $('#medicationReportTable').DataTable({
        processing: true,
        serverSide: false,
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "order": [[0, 'asc']]
    });
});
$("#medicalDirectorsCancelId").click(function () {
    $("#medicalDirectorsBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#governorateID, #incidentLocation, #stationID, #fromDate, #toDate, #callCategory, #transport").val('').prop('disabled', false);
});