$(document).ready(function() {
	bsCustomFileInput.init()
});

$(document).ready(function() {

	// var cols;
	// cols = [
    //     { "mDataProp": "fileName", sTitle: "File Name", sType: "string", "defaultContent": "text" },
    //     { "mDataProp": "uploadBy", sTitle: "Upload By", sType: "string" },
    //     { "mDataProp": "date", sTitle: "Date", sType: "string" },
    //     { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent":
    //         "<button type='button' title='Download' id = 'downloadAttachment' class='edit-icon border-0'><i class='fas fa-download'></i></button>"
    // }];

	$('#VDetails, #suggestionTable, #complimentTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [0, 3]
		}],
		"order": [[1, 'asc']]
	});


	//click on delete
	$('#VDetails tbody').on('click', '#removeAttachmentFile', function() {
		var table = $('#VDetails').DataTable();
		var data = table.row($(this).parents('tr'));
		table.row($(this).parents('tr')).remove().draw();
		/*bootbox.confirm({
			message: "Do you want to delete a record?",
			buttons: {
				confirm: {
					label: 'Yes',
					className: 'btn-success'
				},
				cancel: {
					label: 'No',
					className: 'btn-danger'
				}
			},
			callback: function(result) {
				if (result) {
					removeAttachmentFile(data);
					table.row($(this).parents('tr')).remove().draw();
				}
			}
		});*/
	});

	//click on download
	$('#VDetails tbody').on('click', '#downloadAttachment', function() {
		var table = $('#VDetails').DataTable();
		var data = table.row($(this).parents('tr'));
		downloadAttachmentFile(data.data());
	});

});
function checkRegExpForExtraDot(fileName) {
	var regex = new RegExp('^[^.]*\\.?[^.]*$');
	if (fileName != "") {
		if (!(regex.test(fileName))) {
			return true;
		} else {
			return false;
		}
	}
	//return true;
}


function isFileSizeAndType(event) {
	console.log("inside isFileSizeAndType " + event);
	var requiredFileSize = 1;
	var fileTypeEr = false;
	var fileSizeEr = false;
	var uploadStatus = true;
	var fileName = $('#currentFile').val();
	console.log("fileName :: " + fileName);
	var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
	console.log("f size >> : " + ext);
	var fileSize = $('#currentFile')[0].files[0].size / 1024 / 1024;
	console.log("fileSize :: " + fileSize);
	if (!(ext == "pdf" || ext == "jpg" || ext == "jpeg" || ext == "png")) {
		fileTypeEr = true;
		uploadStatus = false;
		$('#currentFile').val('');
		$("#fileEr").modal("show");
		$("#fileTypeEr").show();
		$("#fileSizeEr").hide();
	}
	if (fileSize > 2) {
		fileSizeEr = true;
		uploadStatus = false;
		$('#currentFile').val('');
		$("#fileEr").modal("show");
		$("#fileSizeEr").show();
		$("#fileTypeEr").hide();
	} else if (checkRegExpForExtraDot(fileName)) {
		//fileExtraDot = true;
		uploadStatus = false;
		$('#currentFile').val('');
		$("#fileEr").modal("show");
		$("#fileSizeEr").hide();
		$("#fileTypeEr").hide();
		$("#extraDot").show();
	}
	if (fileTypeEr && fileSizeEr) {
		uploadStatus = false;
		$('#currentFile').val('');
		$("#fileEr").modal("show");
		$("#fileTypeEr").show();
		$("#fileSizeEr").show();
	}
}

// function uploadFile() {
// 	//filePurposePath++;
// 	var token = $("#tokenid").val();
// 	var draftNumber = $("#draftNumber").val();
// 	var filedata = $('#currentFile')[0].files[0];
// 	var fileName = filedata.name;
// 	var knowledgeBaseId = $("#knowledgebaseId").val();
// 	var userPKiId = $("#userPKiId").val();
// 	var formData = new FormData();
// 	formData.append("uploadFile", draftNumber);
// 	formData.append("filedata", filedata);
// 	formData.append("fileName", fileName);
// 	formData.append("knowledgeBaseId", knowledgeBaseId);
// 	formData.append("draftNumber", draftNumber);
// 	formData.append("userPKiId", userPKiId);
// 	formData.append("filePurposePath", filePurposePath);
// 	$.ajax({
// 		headers: {
// 			"Authorization": "Bearer " + token
// 		},
// 		url: 'cms/uploadFileAttachment',
// 		type: "POST",
// 		data: formData,
// 		enctype: 'multipart/form-data',
// 		processData: false,
// 		contentType: false,
// 		cache: false,
// 		timeout: 600000,
// 		beforeSend: function(jqXHR, settings) {
// 			ajaxindicatorstart('uploading file please wait..');
// 		},
// 		success: function(data) {
// 			if (data != null && data != '') {
// 				if (data == 'success') {
// 					loadAttachmentInfoOfKB();
// 					$('#currentFile').val('');
// 					console.log("data1 : ", data);
// 				} else if (data == 'already uploaded') {
// 					$('#currentFile').val('');
// 					alert("Already file is uploded...!")
// 				} else {
// 					console.log("data2 : ", data);
// 					$("#fileEr").modal("show");
// 					$('#currentFile').val('');
// 				}
// 			} else {
// 				console.log("data2 : ", data);
// 				$("#fileEr").modal("show");
// 				$('#currentFile').val('');
// 			}
// 		},
// 		error: function(e) {
// 			$("#fileEr").modal("show");
// 			$('#currentFile').val('');
// 			console.log("ERROR : ", e);
// 			ajaxindicatorstop();
// 		},
// 		complete: function(jqXHR, status) {
// 			ajaxindicatorstop();
// 		}
// 	});
// }
// // removing attachment file of case
// function removeAttachmentFile(data1) {
// 	var data = data1.data();
// 	var attachmentId = data.attachmentId;
// 	ajaxindicatorstart('Deleting file please wait..');
// 	$.post("cms/deleteAttachmentofKnowledgeBase", {
// 		attachmentId: attachmentId
// 	}, function(data, status) { }).done(function() {
// 		loadAttachmentInfoOfKB()
// 		ajaxindicatorstop();
// 		bootstrap_alerterror("File Deleted Successfully");
// 	}).fail(function() {
// 		ajaxindicatorstop();
// 	});
// }
// // download attachment file for case
// function downloadAttachmentFile(data) {
// 	var dmsRefId = data.attachmentFileDmsId;
// 	ajaxindicatorstart('Downloading file please wait..');
// 	$.post("cms/downloadFileAttachment", {
// 		dmsRefId: dmsRefId
// 	}, function(data, status) {
// 		console.log(data);
// 		var fileName = data.fileName;
// 		var byte = data.bytes;
// 		var base64Decode = base64ToArrayBuffer(byte);
// 		const test = saveByteArray(fileName, base64Decode);
// 		//console.log(test);
// 		test.click();
// 	}).done(function() {
// 		ajaxindicatorstop();
// 	}).fail(function() {
// 		ajaxindicatorstop();
// 	});
// }

// function loadAttachmentInfoOfKB() {

// 	var knowledgeBaseId = $("#knowledgebaseId").val();

// 	var draftNumber = $("#draftNumber").val();

// 	if (knowledgeBaseId && knowledgeBaseId != '' && knowledgeBaseId != '0') {
// 		$.post("cms/displayAttachmentByKnowledgeBaseId", {
// 			knowledgeBaseId: knowledgeBaseId
// 		}, function(data, status) {
// 			loadAttachmentInfoDataTable(data);
// 		}).done(function() { }).fail(function() {
// 			//bootstrap_alerterror("No records found");
// 		})
// 	}
// 	else {
// 		$.post("cms/displayAttachmentByDraftNumber", {
// 			draftNumber: draftNumber
// 		}, function(data, status) {
// 			loadAttachmentInfoDataTable(data);
// 		}).done(function() { }).fail(function() {
// 			//bootstrap_alerterror("No records found");
// 		})

// 	}

// }