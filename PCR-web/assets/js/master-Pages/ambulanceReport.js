$(document).ready(function () {
    $('#ambulanceTable').DataTable({
        processing: true,
        serverSide: false,
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "order": [[0, 'asc']]
    });
});
$("#ambulanceCancelId").click(function () {
    $("#ambulanceBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#governorateID, #incidentLocation, #stationID, #fromDate, #toDate").val('').prop('disabled', false);
    $("#factorsAffectingEMS option:selected").prop("selected", false);
    $('#factorsAffectingEMS').multiselect('refresh');
});