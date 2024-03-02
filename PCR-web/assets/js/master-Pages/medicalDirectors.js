$(document).ready(function () {
    $('#medicalDirectorsTable').DataTable({
        processing: true,
        serverSide: false,
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "order": [[0, 'asc']]
    });
});
$("#medicalDirectorsCancelId").click(function () {
    $("#medicalDirectorsBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#governorateID, #incidentLocation, #stationID, #fromDate, #toDate,#callCategory, #transport").val('').prop('disabled', false);
});