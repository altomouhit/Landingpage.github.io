$(document).ready(function() {
 	var requestTable = $('#Request').DataTable({
		processing: true,
		//serverSide: true,
		"destroy": true,
		"oLanguage": {
			"sLengthMenu": "Items per page: _MENU_",
		},
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"targets": [7],
			"visible": false
        }],
		"order": [
			[0, 'asc']
		]
	});
	$('#requestBox').keyup(function() {
		requestTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	requestTable.columns().iterator('column', function(ctx, idx) {
		$(requestTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="requestTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	requestTable.page.len(sessionStorage.getItem("selectedLength")).draw();
 	
 });
 $(document).ready(function() {
	  var violation = $('#Violation').DataTable({
		processing: true,
		//serverSide: true,
		"destroy": true,
		"oLanguage": {
			"sLengthMenu": "Items per page: _MENU_",
		},
		"dom": '<"top"f>rt<"bottom"ilp>',
		"order": [
			[0, 'asc']
		]
	});
	$('#violationBox').keyup(function() {
		violation.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	violation.columns().iterator('column', function(ctx, idx) {
		$(violation.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="requestTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	violation.page.len(sessionStorage.getItem("selectedLength")).draw();
 });
 
 
 $(document).ready(function() {
	  var cmsreqtbl = $('#CmsRequests').DataTable({ // 
		processing: true,
		//serverSide: true,
		"destroy": true,
		"oLanguage": {
			"sLengthMenu": "Items per page: _MENU_",
		},
		"dom": '<"top"f>rt<"bottom"ilp>',
		"order": [
			[3, 'desc']
		]
	});
	$('#cmsreqtblBox').keyup(function() {
		cmsreqtbl.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	cmsreqtbl.columns().iterator('column', function(ctx, idx) {
		$(cmsreqtbl.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="requestTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	cmsreqtbl.page.len(sessionStorage.getItem("selectedLength")).draw();
});
 
$(document).ready(function() {
	$('#setupform').on('click', function(e) {
		$('#loader').show();
		$('#loader-wrapper').show();
	});
});