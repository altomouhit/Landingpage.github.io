$(function() {
    $('.date').datepicker({
      format: "dd/mm/yyyy",
      orientation: "auto bottom",
      forceParse: false,
      autoclose: true,
      todayHighlight: true,
      toggleActive: true,
      todayBtn: true
    });
});

$(document).ready(function() {
	$('#Fee_Collections').DataTable({
        "destroy": true,
	});

	// Report Table
	$('#reportTable').DataTable({
        "destroy": true,
        "dom": '<"top"Bf>rt<"bottom"ilp>',
        buttons: [{
                extend:    'excelHtml5',
                text:      '<i class="fal fa-file-excel fa-2x"></i>',
                titleAttr: 'Excel'
            }, {
                extend:    'pdfHtml5',
                text:      '<i class="fal fa-file-pdf fa-2x"></i>',
                titleAttr: 'PDF',
                className: 'btn btn-danger',
            }
        ]
	});
	var FeeStatus1 = $('#Fee_Status1').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	// Request Status
	var ReqStatus = $('#Req_Status').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	var Req_Status1 = $('#Req_Status1').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
	// Municipality Service
	var Muniserv = $('#Muni_serv').DataTable({
		dom: 'Bfrtip',
		buttons: ['excel']
	});
});