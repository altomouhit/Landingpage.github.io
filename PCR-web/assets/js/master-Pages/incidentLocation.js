//FAQ Button
$(".smart-Wizard-incidentLoc").hide();
$("#regionNew").click(function() {
	$(".smart-Wizard-incidentLoc").show();
});
function incidentLocationFn() {
    if ($.trim($("#incidentLocationBtn").text()) == "Update") {
        regionEdit.remove().draw();
        $("#incidentLocationBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var region_object = {};

    var regionID = $("#regionID option:selected").text();
	var regionID_val = $("#regionID option:selected").val();

    var incidentLocationtxt = $("#incidentLocationtxt").val();

    var regionStatus = $("#regionStatus option:selected").text();
	var regionStatus_val = $("#regionStatus option:selected").val();

    region_object.DregionID = regionID;
    region_object.DregionID_val = regionID_val;

    region_object.incidentLocationtxt_En = incidentLocationtxt;

    region_object.Cstatus = regionStatus;
    region_object.Cstatus_val = regionStatus_val;

    var incidentLocTable = $('#incidentLocTable').DataTable();
    incidentLocTable.row.add(region_object).draw();

    $("#regionID").val('');
    $("#incidentLocationtxt").val('');
    $("#regionStatus").val('');
}
//edit incidentLocationFn details
function regionEditFunction(data1) {
    $(".smart-Wizard-incidentLoc").show();
    var data = data1.data();
    $("#incidentLocationBtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#regionID").val(data.DregionID_val);
    $("#incidentLocationtxt").val(data.incidentLocationtxt_En);
    $("#regionStatus").val(data.Cstatus_val);
}
//View incidentLocationFn details
function regionViewFunction(data1) {
    $(".smart-Wizard-incidentLoc").show();
    var data = data1.data();
    $("#regionID").val(data.DregionID_val);
    $("#incidentLocationtxt").val(data.incidentLocationtxt_En);
    $("#regionStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#incidentLocTable tbody').on('click', '#incidentLocationViewBtn', function() {
        var incidentLocTable = $('#incidentLocTable').DataTable();
        var data = incidentLocTable.row($(this).parents('tr'));
        $("#incidentLocationBtn").hide();
        $("#FAQClear").show();
        $('#incidentLocationtxt').attr('readonly', true);
        $("#regionStatus, #regionID").prop('disabled', true);
        regionViewFunction(data);
    });
    $('#incidentLocTable tbody').on('click', '#incidentLocationEditBtn', function() {
        var table = $('#incidentLocTable').DataTable();
        regionEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        regionEditFunction(data);
    });
    $('#incidentLocTable tbody').on('click', '#incidentLocationDelBtn', function() {
        var table = $('#incidentLocTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var region_cols = [
        { "mDataProp": "DregionID", sTitle: "Governorate", sType: "string" }, 
        { "mDataProp": "incidentLocationtxt_En", sTitle: "Incident Location", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'incidentLocationViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'incidentLocationEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'incidentLocationDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var incidentLocTable = $('#incidentLocTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": region_cols,
		"ajax": "assets/js/json/incidentLocation.json",
        "columns": [
            { "data": "DregionID" },
            { "data": "DregionID_val" },
            { "data": "incidentLocationtxt_En" },
            { "data": "Cstatus" },
            { "data": "Cstatus_val"},
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'incidentLocationViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'incidentLocationEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;"  }],
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
	$('#regionSearch').keyup(function() {
		incidentLocTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	incidentLocTable.columns().iterator('column', function(ctx, idx) {
		$(incidentLocTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="incidentLocTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	incidentLocTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#incidentLocationId").click(function() {
    $("#incidentLocationBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#incidentLocationtxt").val('');
    $('#incidentLocationtxt').removeAttr('readonly');
    $("#regionStatus, #regionID").prop('disabled', false);
    $(".smart-Wizard-incidentLoc").hide();
});