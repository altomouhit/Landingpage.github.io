//FAQ Button
$(".smart-Wizard-CAD").hide();
$("#cadMasterBtn").click(function() {
	$(".smart-Wizard-CAD").show();
});
function MCIDetailFn() {
    if ($.trim($("#MCIDetailBtn").text()) == "Update") {
        SubSubEdit.remove().draw();
        $("#MCIDetailBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var MCI = {};

    var PTN = $("#PTN").val();
    var gender = $("#gender option:selected").text();
	var gender_val = $("#gender option:selected").val();

    var ageID = $("#ageID").val();

    var cardColor = $("#cardColor option:selected").text();
	var cardColor_val = $("#cardColor option:selected").val();

    var modeTrans = $("#modeTrans option:selected").text();
	var modeTrans_val = $("#modeTrans option:selected").val();

    var timeTrans = $("#timeTrans").val();
    var ambulance = $("#ambulance").val();
    var receHealthFacility = $("#receHealthFacility").val();
    var blackHandedOver = $("#blackHandedOver").val();

    MCI.DPTN                    = PTN;
    MCI.Dgender                 = gender;
    MCI.Dgender_val             = gender_val;

    MCI.DageID                  = ageID;

    MCI.DcardColor              = cardColor ;
    MCI.DcardColor_val          = cardColor_val;

    MCI.DmodeTrans              = modeTrans;
    MCI.DmodeTrans_val          = modeTrans_val;

    MCI.DtimeTrans              = timeTrans;
    MCI.Dambulance              = ambulance;
    MCI.DreceHealthFacility     = receHealthFacility;
    MCI.DblackHandedOver        = blackHandedOver;


    var MCITable = $('#MCITable').DataTable();
    MCITable.row.add(MCI).draw();

    $("#PTN").val('');
    $("#gender").val('');
    $("#ageID").val('');
    $("#cardColor").val("");
    $("#modeTrans").val("");
    $("#timeTrans").val("");
    $("#ambulance").val("");
    $("#receHealthFacility").val("");
    $("#blackHandedOver").val('');

}
//edit MCIDetailFn details
function MCIEditFunction(data1) {
    //$(".smart-Wizard-CAD").show();
    //$('#offcanvasCAD').offcanvas('show');
    var data = data1.data();
    $("#MCIDetailBtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#PTN").val(data.DPTN);
    $("#gender").val(data.Dgender_val);
    $("#ageID").val(data.DageID);
    $("#cardColor").val(data.DcardColor_val);
    $("#modeTrans").val(data.DmodeTrans_val);
    $("#timeTrans").val(data.DtimeTrans);
    $("#ambulance").val(data.Dambulance);
    $("#receHealthFacility").val(data.DreceHealthFacility);
    $("#blackHandedOver").val(data.DblackHandedOver);
}
//View MCIDetailFn details
function MCIViewFunction(data1) {
    //$(".smart-Wizard-CAD").show();
    //$('#offcanvasCAD').offcanvas('show');
    var data = data1.data();
    $("#MCIDetailBtn").html("<i class='far fa-eye'></i>&nbsp; View");
    $("#PTN").val(data.DPTN);
    $("#gender").val(data.Dgender_val);
    $("#ageID").val(data.DageID);
    $("#cardColor").val(data.DcardColor_val);
    $("#modeTrans").val(data.DmodeTrans_val);
    $("#timeTrans").val(data.DtimeTrans);
    $("#ambulance").val(data.Dambulance);
    $("#receHealthFacility").val(data.DreceHealthFacility);
    $("#blackHandedOver").val(data.DblackHandedOver);

    $('#PTN, #ageID, #ambulance, #receHealthFacility, #blackHandedOver').attr('readonly', true);
    $("#gender, #cardColor, #modeTrans").prop('disabled', true);
}
//Add FAQ
$(document).ready(function() {
    $('#MCITable tbody').on('click', '#MCIViewBtn', function() {
        var MCITable = $('#MCITable').DataTable();
        var data = MCITable.row($(this).parents('tr'));
        $("#MCIDetailBtn").hide();
        $("#FAQClear").show();
        $('#lookupDetailSubStxt').attr('readonly', true);
        $("#lookUpSelSub, #lookupDetailSub_Sel, #lookupDetailSubsel, #lookupDetailSubSubStatus").prop('disabled', true);
        MCIViewFunction(data);
    });
    $('#MCITable tbody').on('click', '#MCIEditBtn', function() {
        var table = $('#MCITable').DataTable();
        SubSubEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        MCIEditFunction(data);
    });
    $('#MCITable tbody').on('click', '#MCIDelBtn', function() {
        var table = $('#MCITable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    
    var MCITable = $('#MCITable').DataTable({
		processing: true,
		//serverSide: true,
        "ajax": "assets/js/json/MCI.json",
        "columns": [
            { "data": "DPTN" },
            { "data": "Dgender" },
            { "data": "Dgender_val" },
            { "data": "DageID" },
            { "data": "DcardColor" },
            { "data": "DcardColor_val" },
            { "data": "DmodeTrans" },
            { "data": "DmodeTrans_val" },
            { "data": "DtimeTrans" },
            { "data": "Dambulance" },
            { "data": "DreceHealthFacility" },
            { "data": "DblackHandedOver" },
            { "data": "Actions", "orderable": false, "defaultContent":
                "<button type='button' id = 'MCIViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;" +
                "<button type='button' id = 'MCIEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;" +
                "<button type='button' id = 'MCIDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" }],
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			//"orderable": false,
            "visible": false,
			"targets": [2, 5, 7]
		}],
		"order": [[1, 'desc']]
	});
	$('#cadSearch').keyup(function() {
		MCITable.search($(this).val()).draw(); // this  is for customized search box with data table search feature.
	});
	MCITable.columns().iterator('column', function(ctx, idx) {
		$(MCITable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="MCITable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	MCITable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#MCICancelid, #MCICancelidBtn").click(function() {
    $("#MCIDetailBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#PTN, #gender, #ageID, #cardColor, #modeTrans, #ambulance, #receHealthFacility, #blackHandedOver").val('');
    $('#PTN, #ageID, #ambulance, #receHealthFacility, #blackHandedOver').removeAttr('readonly');
    $("#gender, #cardColor, #modeTrans").prop('disabled', false);
    //$(".smart-Wizard-CAD").hide();
    $('#offcanvasCAD').offcanvas('hide');
});