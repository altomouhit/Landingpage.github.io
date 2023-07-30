//FAQ Button
$(".smart-Wizard-details").hide();
$("#lookupDetailNew").click(function() {
	$(".smart-Wizard-details").show();
});
function lookupDetailFn() {
    if ($.trim($("#lookupDetailbtn").text()) == "Update") {
        lookupDetailEdit.remove().draw();
        $("#lookupDetailbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var lookupDetail_object = {};

    var lookUp = $("#lookUp option:selected").text();
	var lookUp_val = $("#lookUp option:selected").val();

    var lookupDetailtxt = $("#lookupDetailtxt").val();

    var lookupDetailStatus = $("#lookupDetailStatus option:selected").text();
	var lookupDetailStatus_val = $("#lookupDetailStatus option:selected").val();

    lookupDetail_object.DlookUp = lookUp;
    lookupDetail_object.DlookUp_val = lookUp_val;

    lookupDetail_object.lookupDetailtxt_En = lookupDetailtxt;

    lookupDetail_object.Cstatus = lookupDetailStatus;
    lookupDetail_object.Cstatus_val = lookupDetailStatus_val;

    var lookupDetailTable = $('#lookupDetailTable').DataTable();
    lookupDetailTable.row.add(lookupDetail_object).draw();

    $("#lookUp").val('');
    $("#lookUp option:selected").prop("selected", false);
    $('#lookUp').multiselect('refresh');
    $("#lookupDetailtxt").val('');
    $("#lookupDetailStatus").val('');
}
//edit lookupDetailFn details
function lookupDetailEditFunction(data1) {
    $(".smart-Wizard-details").show();
    var data = data1.data();
    $("#lookupDetailbtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#lookUp").val(data.DlookUp_val).multiselect('refresh');
    $("#lookupDetailtxt").val(data.lookupDetailtxt_En);
    $("#lookupDetailStatus").val(data.Cstatus_val);
}
//View lookupDetailFn details
function lookupDetailViewFunction(data1) {
    $(".smart-Wizard-details").show();
    var data = data1.data();
    $("#lookUp").val(data.DlookUp_val).multiselect('refresh');
    $("#lookupDetailtxt").val(data.lookupDetailtxt_En);
    $("#lookupDetailStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#lookupDetailTable tbody').on('click', '#lookupDetailViewBtn', function() {
        var lookupDetailTable = $('#lookupDetailTable').DataTable();
        var data = lookupDetailTable.row($(this).parents('tr'));
        $("#lookupDetailbtn").hide();
        $("#FAQClear").show();
        $('#lookupDetailtxt').attr('readonly', true);
        $("#lookupDetailStatus, #lookUp").prop('disabled', true);
        lookupDetailViewFunction(data);
    });
    $('#lookupDetailTable tbody').on('click', '#lookupDetailEditBtn', function() {
        var table = $('#lookupDetailTable').DataTable();
        lookupDetailEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        lookupDetailEditFunction(data);
    });
    $('#lookupDetailTable tbody').on('click', '#lookupDetailDelBtn', function() {
        var table = $('#lookupDetailTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var subCategory_cols = [
        { "mDataProp": "DlookUp", sTitle: "Lookup", sType: "string" }, 
        { "mDataProp": "lookupDetailtxt_En", sTitle: "Lookup Detail Description", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'lookupDetailViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'lookupDetailEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" 
            //+ "<button type='button' id = 'lookupDetailDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" 
        }
    ];
    var lookupDetailTable = $('#lookupDetailTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": subCategory_cols,
        "ajax": "assets/js/lookupDetail.txt",
        "columns": [
            { "data": "DlookUp" },
            { "data": "DlookUp_val"},
            { "data": "lookupDetailtxt_En" },
            { "data": "Cstatus" },
            { "data": "Cstatus_val"},
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'lookupDetailViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'lookupDetailEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;"  }],
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			//"orderable": false,
            "visible": false,
			"targets": [1, 4]
		}],
		"order": [[0, 'asc']]
	});
	$('#lookupDetailSearch').keyup(function() {
		lookupDetailTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	lookupDetailTable.columns().iterator('column', function(ctx, idx) {
		$(lookupDetailTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="lookupDetailTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	lookupDetailTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#lookupDetailCancelid").click(function() {
    $("#lookupDetailbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#lookupDetailtxt").val('');
    $('#lookupDetailtxt').removeAttr('readonly');
    $("#lookupDetailStatus, #lookUp").prop('disabled', false);
    $(".smart-Wizard-details").hide();
});
$(document).ready(function() {
	$('.multiSelect').multiselect({
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true,
		nonSelectedText: 'Please select',
	});
});