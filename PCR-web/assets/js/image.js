
var dropzonePreviewNode = document.querySelector("#dropzone-preview-list"),
	previewTemplate = (dropzonePreviewNode.itemid = "", dropzonePreviewNode.parentNode.innerHTML),
	dropzone = (dropzonePreviewNode.parentNode.removeChild(dropzonePreviewNode), new Dropzone(".dropzone", {
		url: "https://httpbin.org/post",
		method: "post",
		previewTemplate: previewTemplate,
		previewsContainer: "#dropzone-preview"
	}));
