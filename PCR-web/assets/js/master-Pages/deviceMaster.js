$(".smart-Wizard").hide();
$("#deviceMasterBtn").click(function() {
    $(".smart-Wizard").show();
});
$(document).ready(function() {
    var deviceStatusTable = $('#deviceStatusTable').DataTable({
        processing: true,
    //serverSide: true,
    "destroy": true,
    "dom": '<"top"f>rt<"bottom"ilp>',
    "columnDefs": [{
        "searchable": false,
        "orderable": false,
        "targets": [2]
    }],
    "order": [[0, 'asc']]
    });
    $('#deviceMasterSearch').keyup(function() {
		deviceStatusTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
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
    $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#deviceNametxt, #deviceIMEItxt, #governorateID, #stationID").val('');
    $('#deviceNametxt, #deviceIMEItxt').removeAttr('readonly');
    $("#governorateID, #stationID").prop('disabled', false);
    $(".smart-Wizard").hide();
});