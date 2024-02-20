$(document).ready(function() {
    bsCustomFileInput.init()
});

$(document).ready(function() {
	/*filePurposePath = 0;
	var searchIdval = $("#cmsCaseId").val();
	if (searchIdval != "") {
		searchTicket("sr", searchIdval);
		$('#currentFile').prop("disabled", true);
		$('#btn_upload').prop("disabled", true);
	}*/
	var cols;
	if (formlang == 'ar_SA') {
		cols = [
			{ "mDataProp": "fileName", sTitle: "اسم الملف", sType: "string", "defaultContent": "text" }, 
			{ "mDataProp": "dmsId", sTittle: "DocumentId", sType: "string", "defaurltContent": "text" },
			{ "mDataProp": "Actions", sTitle: "الإجراء", sType: "string", "defaultContent": 
				"<button type='button' title='Download' id = 'downloadAttachment' class='edit-icon border-0'><i class='fas fa-download'></i></button>" + 
				"<button type='button' title='Delete' id = 'deleteAttachment' class='delete-icon border-0'><i class='fas fa-trash'></i></button>"
			}];
		rfcCols = [
			{ "mDataProp": "fileName", sTitle: "اسم الملف", sType: "string", "defaultContent": "text" }, 
			{ "mDataProp": "dmsId", sTittle: "DocumentId", sType: "string", "defaurltContent": "text" },
			{ "mDataProp": "Actions", sTitle: "الإجراء", sType: "string", "defaultContent": 
				"<button type='button' title='Download' id = 'downloadAttachment' class='edit-icon border-0'><i class='fas fa-download'></i></button>"
			}];
		
	} else {
		cols = [
			{ "mDataProp": "fileName", sTitle: "File Name", sType: "string", "defaultContent": "text" },
			{ "mDataProp": "dmsId", sTittle: "DocumentId", sType: "string", "defaurltContent": "text" },
			{ "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": 
				"<button type='button' title='Download' id = 'downloadAttachment' class='edit-icon border-0'><i class='fas fa-download'></i></button>" + 
				"<button type='button' title='Delete' id = 'deleteAttachment' class='delete-icon border-0'><i class='fas fa-trash'></i></button>"
			}];
		rfcCols = [
			{ "mDataProp": "fileName", sTitle: "File Name", sType: "string", "defaultContent": "text" },
			{ "mDataProp": "dmsId", sTittle: "DocumentId", sType: "string", "defaurltContent": "text" },
			{ "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": 
				"<button type='button' title='Download' id = 'downloadAttachment' class='edit-icon border-0'><i class='fas fa-download'></i></button>" 
			}];
	}
	var VDetails = $('#CmsAttachmentsTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"targets": [1],
			"searchable": false,
			"orderable": false,
			"visible": false
		}],
		"order": [
			[1, 'asc']
		]
	});
	//click on delete
	$('#CmsAttachmentsTable tbody').on('click', '#deleteAttachment', function() {
		var table = $('#CmsAttachmentsTable').DataTable();
		var data = table.row($(this).parents('tr'));
		removeAttachmentFile(data);
		table.row($(this).parents('tr')).remove().draw();
	});
	//click on download
	$('#CmsAttachmentsTable tbody').on('click', '#downloadAttachment', function() {
		var table = $('#CmsAttachmentsTable').DataTable();
		var data = table.row($(this).parents('tr'));
		downloadAttachmentFile(data.data());
	});
	
	
	var VRFCDetails = $('#CmsAttachmentsRFCTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": rfcCols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"targets": [1],
			"searchable": false,
			"orderable": false,
			"visible": false
		}],
		"order": [
			[1, 'asc']
		]
	});
	//click on delete
	/*$('#CmsAttachmentsRFCTable tbody').on('click', '#deleteAttachment', function() {
		var table = $('#CmsAttachmentsTable').DataTable();
		var data = table.row($(this).parents('tr'));
		removeAttachmentFile(data);
		table.row($(this).parents('tr')).remove().draw();
	});*/
	//click on download
	$('#CmsAttachmentsRFCTable tbody').on('click', '#downloadAttachment', function() {
		var table = $('#CmsAttachmentsRFCTable').DataTable();
		var data = table.row($(this).parents('tr'));
		downloadAttachmentFile(data.data());
	});
});
//.................................. Date picker by balaram on 14/11/2017..................................//
$(function() {
	$('.date').datepicker({
		format: "dd/mm/yyyy",
		orientation: "auto bottom",
		forceParse: false,
		autoclose: true,
		todayHighlight: true,
		toggleActive: true
	});
});