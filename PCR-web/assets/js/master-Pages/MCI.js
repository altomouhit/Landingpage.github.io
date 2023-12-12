//Button
// $(".smart-Wizard-CAD").hide();
// $("#cadMasterBtn").click(function() {
// 	$(".smart-Wizard-CAD").show();
// });
function MCIDetailFn() {
	if ($.trim($("#MCIDetailBtn").text()) == "Update") {
		SubSubEdit.remove().draw();
		$("#MCIDetailBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add");
	}
	var MCI = {};
	//Incident Data Details
	var incidentNo = $("#incidentNo").val();
	var incidentType = $("#incidentType option:selected").text();
	var incidentType_val = $("#incidentType option:selected").val();
	var incidentDate = $("#incidentDate").val();
	var incidentLocationtxt = $("#incidentLocationtxt").val();
	var incidentTime = $("#incidentTime").val();
	//Add
	var PTN = $("#PTN").val();
	var gender = $("#gender option:selected").text();
	var gender_val = $("#gender option:selected").val();
	var ageID = $("#ageID").val();
	var cardColor = $("#cardColor option:selected").text();
	var cardColor_val = $("#cardColor option:selected").val();
	// Icon
	if (cardColor_val == 1) {
		cardColor = "<i class='fas fa-circle-dot text-danger fa-xl'></i>";
	} else if (cardColor_val == 2) {
		cardColor = "<i class='fas fa-circle-dot text-warning fa-xl'></i>";
	} else if (cardColor_val == 3) {
		cardColor = "<i class='fas fa-circle-dot text-success fa-xl'></i>";
	} else if (cardColor_val == 4) {
		cardColor = "<i class='fas fa-circle-dot text-primary fa-xl'></i>";
	}
	var modeTrans = $("#modeTrans option:selected").text();
	var modeTrans_val = $("#modeTrans option:selected").val();
	// Icons
	if (modeTrans_val == 1) {
		modeTrans = "<i class='fal fa-taxi-bus text-dark fa-xl'></i>";
	} else if (modeTrans_val == 2) {
		modeTrans = "<i class='fal fa-plane-departure text-dark fa-xl'></i>";
	} else if (modeTrans_val == 3) {
		modeTrans = "<i class='fal fa-ship text-dark fa-xl'></i>";
	}
	var timeTrans = $("#timeTrans").val();
	var ambulance = $("#ambulance").val();

	var hospital_Facility = $("#hospital_Facility option:selected").text();
	var hospital_Facility_val = $("#hospital_Facility option:selected").val();

	var receHealthFacility = $("#receHealthFacility option:selected").text();
	var receHealthFacility_val = $("#receHealthFacility option:selected").val();

	var blackHandedOver = $("#blackHandedOver").val();
	//Object append the data
	MCI.DincidentNo = incidentNo;
	MCI.DincidentType = incidentType;
	MCI.DincidentType_val = incidentType_val;
	MCI.DincidentDate = incidentDate;
	MCI.DincidentLocationtxt = incidentLocationtxt;
	MCI.incidentTime = incidentTime;
	//Add
	MCI.DPTN = PTN;
	MCI.Dgender = gender;
	MCI.Dgender_val = gender_val;
	MCI.DageID = ageID;
	MCI.DcardColor = cardColor;
	MCI.DcardColor_val = cardColor_val;
	MCI.DmodeTrans = modeTrans;
	MCI.DmodeTrans_val = modeTrans_val;
	MCI.DtimeTrans = timeTrans;
	MCI.Dambulance = ambulance;
	MCI.Dhospital_Facility = hospital_Facility;
	MCI.Dhospital_Facility_val = hospital_Facility_val;
	MCI.DreceHealthFacility = receHealthFacility;
	MCI.DreceHealthFacility_val = receHealthFacility_val;
	MCI.DblackHandedOver = blackHandedOver;
	//Call function to save Data
	var MCITable = $('#MCITable').DataTable();
	MCITable.row.add(MCI).draw();

	$("#PTN").val('');
	$("#gender").val('');
	$("#ageID").val('');
	$("#cardColor").val('');
	$("#modeTrans").val('');
	$("#timeTrans").val('');
	$("#ambulance").val('');
	$("#hospital_Facility").val('');
	$("#receHealthFacility option:selected").prop("selected", false);
    $('#receHealthFacility').multiselect('refresh');
	$("#blackHandedOver").val('');
}
//edit editMCIDetailFn details
function editMCIDetailFn(data1) {
	//Set value in form
	var data = data1.data();
	$("#MCIDetailBtn").html("<i class='fal fa-plus'></i>&nbsp; Update");
	$("#PTN").val(data.DPTN);
	$("#gender").val(data.Dgender_val);
	$("#ageID").val(data.DageID);
	$("#cardColor").val(data.DcardColor_val);
	$("#modeTrans").val(data.DmodeTrans_val);
	$("#timeTrans").val(data.DtimeTrans);
	$("#ambulance").val(data.Dambulance);
	$("#hospital_Facility").val(data.Dhospital_Facility_val).trigger('change');
	$("#receHealthFacility").val(data.DreceHealthFacility_val).multiselect('rebuild');
	$("#blackHandedOver").val(data.DblackHandedOver);
}
//View viewMCIDetailFn details
function viewMCIDetailFn(data1) {
	//Set value in form
	var data = data1.data();
	$("#MCIDetailBtn").html("<i class='far fa-eye'></i>&nbsp; View");
	$("#PTN").val(data.DPTN);
	$("#gender").val(data.Dgender_val);
	$("#ageID").val(data.DageID);
	$("#cardColor").val(data.DcardColor_val);
	$("#modeTrans").val(data.DmodeTrans_val);
	$("#timeTrans").val(data.DtimeTrans);
	$("#ambulance").val(data.Dambulance);
	$("#hospital_Facility").val(data.Dhospital_Facility_val).trigger('change');
	$("#receHealthFacility").val(data.DreceHealthFacility_val).multiselect('rebuild');
	$("#blackHandedOver").val(data.DblackHandedOver);
	$('#PTN, #ageID, #ambulance, #blackHandedOver').attr('readonly', true);
	$("#gender, #cardColor, #modeTrans, #receHealthFacility,").prop('disabled', true);
}
$(document).ready(function () {
	$('#MCITable tbody').on('click', '#MCIViewBtn', function () {
		var MCITable = $('#MCITable').DataTable();
		var data = MCITable.row($(this).parents('tr'));
		$("#MCIDetailBtn").hide();
		viewMCIDetailFn(data);
	});
	
	$('#MCITable tbody').on('click', '#MCIEditBtn', function () {
		var table = $('#MCITable').DataTable();
		SubSubEdit = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		editMCIDetailFn(data);
	});
	$('#MCITable tbody').on('click', '#MCIDelBtn', function () {
		var table = $('#MCITable').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
	var MCITable = $('#MCITable').DataTable({
		processing: true,
		serverSide: false,
		ajax: "assets/js/json/MCI.json",
		columns: [
		    { "data": "DPTN" }, 
		    { "data": "Dgender" }, 
		    { "data": "Dgender_val" }, 
		    { "data": "DageID" }, 
		    { "data": "DcardColor"}, 
		    { "data": "DcardColor_val" }, 
		    { "data": "DmodeTrans" }, 
		    { "data": "DmodeTrans_val" }, 
		    { "data": "DtimeTrans" }, 
		    { "data": "Dambulance" }, 
			{ "data": "Dhospital_Facility" },
			{ "data": "Dhospital_Facility_val" },
		    { "data": "DreceHealthFacility" }, 
			{ "data": "DreceHealthFacility_val" },
		    { "data": "DblackHandedOver" }, 
		    { "data": "Actions", "orderable": false, "defaultContent": 
		        "<button type='button' id = 'MCIViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;" + 
		        "<button type='button' id = 'MCIEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;" + 
		        "<button type='button' id = 'MCIDelBtn'  class='delete-icon'><i class='fal fa-trash'></i></button>"
		}],
		destroy: true,
		dom: '<"top"f>rt<"bottom"ilp>',
		columnDefs: [{
			searchable: false,
			//"orderable": false,
			visible: false,
			targets: [2, 5, 7, 10, 11, 13]
		}],
		order: [[1, 'desc']]
	});
	$('#cadSearch').keyup(function () {
		MCITable.search($(this).val()).draw(); // this  is for customized search box with data table search feature.
	});
	MCITable.columns().iterator('column', function (ctx, idx) {
		$(MCITable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="MCITable_length"]').change(function () {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	MCITable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#MCICancelid, #MCICancelidBtn").click(function () {
	$("#MCIDetailBtn").html("<i class='fal fa-plus fa-fw'></i>&nbsp; Add").show();
	$("#PTN, #gender, #ageID, #timeTrans, #cardColor, #modeTrans, #ambulance, #hospital_Facility, #blackHandedOver").val('');
	$('#PTN, #ageID, #timeTrans, #ambulance, #blackHandedOver').removeAttr('readonly');
	$("#gender, #cardColor, #modeTrans, #hospital_Facility").prop('disabled', false);
	$("#receHealthFacility option:selected").prop("selected", false);
    $('#receHealthFacility').multiselect('refresh');
	//$(".smart-Wizard-CAD").hide();
	$('#offcanvasCAD').offcanvas('hide');
});
var MCIShowTable = $("#MCIShowTable").DataTable({
	responsive: true,
	processing: true,
	serverSide: false,
	destroy: true,
	dom: '<"top"f>rt<"bottom"ilp>',
});
$('#MCIShowSearch').keyup(function () {
	MCIShowTable.search($(this).val()).draw(); // this  is for customized search box with data table search feature.
});