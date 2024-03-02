$(document).ready(function () {
    $('#callAttendanceTable').DataTable({
        processing: true,
        serverSide: false,
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "order": [[0, 'asc']]
    });
});
$("#callAttendanceCancelId").click(function () {
    $("#callAttendanceBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#governorateID, #incidentLocation, #stationID, #fromDate, #toDate,#callCategory, #transport").val('').prop('disabled', false);
});