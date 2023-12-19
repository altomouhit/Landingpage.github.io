
function fencingFn() {
    if ($.trim($("#fencingBtn").text()) == "Update") {
        editfencingBtn.remove().draw();
        $("#fencingBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add");
    }
    // 1. Get the input values from HTML elements
    var fencing_obj = {};
    fencing_obj.pType = $("#pType option:selected").text(); //1
	fencing_obj.pType_val = $("#pType option:selected").val();

    fencing_obj.pFootprint = $('#pFootprint').val(); //2

    fencing_obj.pColorType = $("#pColorType option:selected").text(); //3
	fencing_obj.pColorType_val = $("#pColorType option:selected").val();

    fencing_obj.pLengthFence = $('#pLengthFence').val(); //4
    
    fencing_obj.pFenceColor = $('#pFenceColor option:selected').text(); //5
    fencing_obj.pFenceColor_val = $('#pFenceColor option:selected').val();

    var fencingTable = $('#fencingTable').DataTable();
    fencingTable.row.add(fencing_obj).draw();

    $('#pFootprint, #pLengthFence').val('');
    $('#pType, #pColorType, #pFenceColor').val('1000');
}
//edit editFencingFn details
function editFencingFn(data1) {
    //Set value in form
	var data = data1.data();
	$("#fencingBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
    $("#pType").val(data.pType_val);
    $("#pFootprint").val(data.pFootprint);
    $("#pColorType").val(data.pColorType_val);
    $("#pLengthFence").val(data.pLengthFence);
    $("#pFenceColor").val(data.pFenceColor_val);
}
//view viewFencingFn details
function viewFencingFn(data1) {
    var data = data1.data();
    $("#pType").val(data.pType_val);
    $("#pFootprint").val(data.pFootprint);
    $("#pColorType").val(data.pColorType_val);
    $("#pLengthFence").val(data.pLengthFence);
    $("#pFenceColor").val(data.pFenceColor_val);

    $('#pFootprint, #pLengthFence').attr('readonly', true);
	$("#pType, #pColorType, #pFenceColor").prop('disabled', true);
}
$(document).ready(function () {
    $('#fencingTable tbody').on('click', '#fencingViewBtn', function () {
		var fencingTable = $('#fencingTable').DataTable();
		var data = fencingTable.row($(this).parents('tr'));
		$("#MCIDetailBtn").hide();
		viewFencingFn(data);
	});
	$('#fencingTable tbody').on('click', '#fencingEditBtn', function () {
		var table = $('#fencingTable').DataTable();
		editfencingBtn = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editFencingFn(data);
	});
	$('#fencingTable tbody').on('click', '#fencingDelBtn', function () {
		var table = $('#fencingTable').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
    
    $('#fencingTable').DataTable({
        processing: true,
        serverSide: false,
        ajax: "js/TS/fencing.json",
        columns: [
            { "data": "pType" },            //0
            { "data": "pType_val" },        //1
            { "data": "pFootprint" },       //2
            { "data": "pColorType" },       //3
            { "data": "pColorType_val" },   //4
            { "data": "pLengthFence"},      //5
            { "data": "pFenceColor" },      //6
            { "data": "pFenceColor_val" },  //7
            { "data": "Actions", "orderable": false, "defaultContent":  //8
                    "<button type='button' id = 'fencingViewBtn' class='btn p-0 text-primary'><i class='fal fa-eye fa-lg'></i></button>&nbsp;" +
                    "<button type='button' id = 'fencingEditBtn' class='btn p-0 text-success'><i class='fal fa-edit fa-lg'></i></button>&nbsp;"+
                    "<button type='button' id = 'fencingDelBtn' class='btn p-0 text-danger'><i class='fal fa-trash fa-lg'></i></button>"
            }],
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "columnDefs": [{
            "searchable": false,
            //"orderable": false,
            visible: false,
            "targets": [1, 4, 7]
        }],
        "order": [[0, 'asc']]
    });
});
$("#cancelBtn").click(function () {
    $("#fencingBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $('#pFootprint, #pLengthFence').val('');
    $('#pType, #pColorType, #pFenceColor').val('1000');
    $('#pFootprint, #pLengthFence').removeAttr('readonly');
	$("#pType, #pColorType, #pFenceColor").prop('disabled', false);
});