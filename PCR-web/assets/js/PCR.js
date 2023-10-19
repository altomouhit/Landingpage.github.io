window.onload = function() {
	$("#pastMedicalHistoryTxt, #pComments, #transportDiv, #nonTransportDiv, #hospitalDiv, #nonTransportCrimeDiv, #transportTypeDiv, #DNRDiv").hide();
	$("#locationTypeDiv, #governmentHospitalDiv, #privateHospitalDiv").hide();
	$("#mAirwayCommentDiv, #IVIODiv, #mOthersDiv, #timeDiv").hide();
	$(".PDOADiv, #refused").hide();
	$("#resuscitationDiv, #painDiv").hide();
	//Oxygen / LPM
	$("#oxygenLPMDiv, #oxygenLPMDoneByDiv, #nasalDiv, #SFMDiv, #SFMLPMDoneByDiv, #NRMDiv, #NRMLPMDoneByDiv, #BVMDiv, #BVMLPMDoneByDiv").hide();
	//Airway, Breathing, 
	$("#airwayNotClearDiv, #breathingNormalDiv, #breathingAbnormalDiv").hide();
	$("#mAirwayDoneByDiv, #nasalDoneByDiv, #combiDoneByDiv, #ETTDoneByDiv, #LMADoneByDiv").hide();
	//circulation
	$("#circulationPulseDiv, #circulationSkinDiv").hide();
	//Burns
	$("#headBurnsDiv, #neckBurnsDiv, #pelvicBurnsDiv, #chestBurnsDiv, #chestRightBurnsDiv, #leftChestDiv, #rightChestDiv").hide();
	//Abdomen
	$("#leftUpAbdomenDiv, #abdomenBurnsDiv,#rightUpAbdomenDiv ,#rightUpAbdomenBurnsDiv, #leftDownAbdomenDiv, #leftDownAbdomenBurnsDiv, #rightDownAbdomenDiv, #rightDownAbdomenBurnsDiv").hide();
	//Back
	$("#backDiv, #backBurnsDiv, #backLumbarDiv, #backLumbarBurnsDiv, #backSacrumDiv, #backSacrumBurnsDiv").hide();
	//Patient & Incident Info > Patient Management > Management> Air way
	$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide();
	//Patient & Incident Info > Patient Management > Management> immobilization
	$("#immobilizationAdultDiv, #immoblazatiomDoneByDiv, #KEDDoneByDiv, #LBBDoneByDiv, #ScoopDoneByDiv, #StairDoneByDiv, #immoblazatiomDiv").hide();
	//Patient & Incident Info > Patient Management > Management> Splinting
	$("#rigidDoneByDiv, #tractionDoneByDiv, #splintingDiv").hide();
	//Patient & Incident Info > Patient Management > Management> Electrical Intervention (Cardiac)
	$("#AEDUsedDiv, #AEDUsedDoneByDiv,#DefibrillationDiv, #DefibrillationDoneByDiv, #CardiversionDiv, #CardiversionDoneByDiv, #TCPDiv, #TCPDoneByDiv, #defibrillationDiv, #ECGDoneByDiv, #cardiversionTableDiv , #TCPTableDiv").hide();
	//Patient & Incident Info > Patient Management > Management> Others
	$("#BandageDoneByDiv, #coldPackDoneByDiv, #AssistDeliveryDoneByDiv, #WarmingDoneByDiv, #CoolingDoneByDiv, #BleedingDoneByDiv,"+
	"#IrrigationDoneByDiv, #SuctionDoneByDiv, #NGTDoneByDiv, #BurnCareDoneByDiv").hide();

	$("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
	//Patient & Incident Info > Resuscitation Management > Indication Procedures > Tube Type
	$("#ETtubeSizeDiv, #COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
	$("#RTLFDiv").hide();
	//Total Burn Score
	$("#adultDiv, #peditricDiv").hide();
	//Upper EXT > Upper EXT Left Burns
	$(".upperEXTLeft, .upperEXTRight, .lwEXTLeft, .lwEXTRight, #upperEXTLeftBurnsDiv, #upperEXTRightBurnsDiv,#lwEXTLeftBurnsDiv, #lwEXTRightBurnsDiv").hide();
	$("#downTimeDiv, #handoverDiv, #CPRProgressDiv, .AEDApplied").hide();
	// Location Type
	$("#locationSelectDiv, #dutyDiv").hide();
	//Patient & Incident Info > Incident info > Factors Affecting EMS
	$(".factorsAffectingEMSDiv, #governmentHospitalRefusedDiv, #privateHospitalRefusedDiv").hide();
	//Patient & Incident Info > Additional Resources On Scene
	$("#royalOmanPoliceDiv, #militaryGovernmentDiv, #privateSectorDiv").hide();
	//Patient Assessment & Management > Resuscitation Management > Treatment > Intervention > Electrical Intervention
	$("#electIntOtherDiv, #RHYTHMDiv").hide();
	//$('.selector').editableSelect();
	$('.selector').editableSelect({
		// enable filter
		filter: true,
		// default, fade or slide
		effects: 'slide',
		// fast, slow or [0-9]+
		duration: 'fast',
		// "focus" or "manual"
		trigger: 'focus',
		// callback events
		//onCreate: function() {},
		//onShow: function() {},
		//onHide: function() {},
		//onSelect: function(element) {}
	});
}
$(document).ready(function() {
	// $('#pastMedicalHistory').editableSelect().on('select.editable-select', function(e, li) {
	//     //$('#afterSelect').html(li.val() + '. ' + li.text());
	//     if (li.val() == 12) {
	//         $("#pastMedicalHistoryTxt").show();
	//     } else {
	//         $("#pastMedicalHistoryTxt").hide();
	//     }
	// });
	// $('#pregnancy').editableSelect().on('select.editable-select', function(e, li) {
	//     //$('#afterSelect').html(li.val() + '. ' + li.text());
	//     if (li.val() == 1) {
	//         $("#pComments").show();
	//     } else {
	//         $("#pComments").hide();
	//     }
	// });
});
//Patient Assessment > Airway
$("#airway").on('change', function() {
	if (this.value == 2) {
		$("#airwayNotClearDiv").show();
	} else {
		$("#airwayNotClearDiv").hide();
	}
});
//Patient Assessment > Breathing
$("#breathing").on('change', function() {
	if (this.value == 1) {
		$("#breathingNormalDiv").show();
		$("#breathingAbnormalDiv").hide('');
	} else if (this.value == 2) {
		$("#breathingNormalDiv").hide();
		$("#breathingAbnormalDiv").show('');
	} else {
		$("#breathingNormalDiv, #breathingAbnormalDiv").hide();
	}
});
//Patient Assessment > Circulation
$("#circulation").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#circulationPulseDiv").show();
		$("#circulationSkinDiv").hide();
	} else if (Value.indexOf("2") > -1) {
		$("#circulationSkinDiv").show();
		$("#circulationPulseDiv").hide();
	}
	if (Value.indexOf("1") > -1 && Value.indexOf("2") > -1) {
		$("#circulationSkinDiv").show();
		$("#circulationPulseDiv").show();
	}
	if (!(Value.indexOf("1") > -1) && !(Value.indexOf("2") > -1)) {
		$("#circulationSkinDiv").hide();
		$("#circulationPulseDiv").hide();
	}
});
//Patient Assessment > head
$('#head').on('change', function() {
	if ($("#head option[value=5]:selected") ?.length > 0) {
		$("#headBurnsDiv").show();
	} else {
		$("#headBurnsDiv").hide();
	}
});
//Patient Assessment > Neck
$('#neck').on('change', function() {
	if ($("#neck option[value=5]:selected") ?.length > 0) {
		$("#neckBurnsDiv").show();
	} else {
		$("#neckBurnsDiv").hide();
	}
});
//Patient Assessment > Abdomen
$('#abdomen').on('change', function() {
	if ($("#abdomen option[value=5]:selected") ?.length > 0) {
		$("#abdomenBurnsDiv").show();
	} else {
		$("#abdomenBurnsDiv").hide();
	}
});
//Patient Assessment > Pelvic
$('#pelvic').on('change', function() {
	if ($("#pelvic option[value=5]:selected") ?.length > 0) {
		$("#pelvicBurnsDiv").show();
	} else {
		$("#pelvicBurnsDiv").hide();
	}
});
//Patient Assessment > Chest
$("#chestLeftRight").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#leftChestDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#leftChestDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#rightChestDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#rightChestDiv").hide();
	}
});
//Patient Assessment > Chest Left
$('#chest').on('change', function() {
	if ($("#chest option[value=5]:selected") ?.length > 0) {
		$("#chestBurnsDiv").show();
	} else {
		$("#chestBurnsDiv").hide();
	}
});
//Patient Assessment > Chest Right
$('#chestRight').on('change', function() {
	if ($("#chest option[value=5]:selected") ?.length > 0) {
		$("#chestRightBurnsDiv").show();
	} else {
		$("#chestRightBurnsDiv").hide();
	}
});
//Patient Assessment > Back
$('#back').on('change', function() {
	if ($("#back option[value=5]:selected") ?.length > 0) {
		$("#backBurnsDiv").show();
	} else {
		$("#backBurnsDiv").hide();
	}
});
//Upper EXT > Upper EXT Left Burns
$('#upperEXTLeft').on('change', function() {
	if ($("#upperEXTLeft option[value=5]:selected") ?.length > 0) {
		$("#upperEXTLeftBurnsDiv").show();
	} else {
		$("#upperEXTLeftBurnsDiv").hide();
	}
});
$('#upperEXTRight').on('change', function() {
	if ($("#upperEXTRight option[value=5]:selected") ?.length > 0) {
		$("#upperEXTRightBurnsDiv").show();
	} else {
		$("#upperEXTRightBurnsDiv").hide();
	}
});
//Lw EXT > Lw EXT Left Burns
$('#lwEXTLeft').on('change', function() {
	if ($("#lwEXTLeft option[value=5]:selected") ?.length > 0) {
		$("#lwEXTLeftBurnsDiv").show();
	} else {
		$("#lwEXTLeftBurnsDiv").hide();
	}
});
$('#lwEXTRight').on('change', function() {
	if ($("#lwEXTRight option[value=5]:selected") ?.length > 0) {
		$("#lwEXTRightBurnsDiv").show();
	} else {
		$("#lwEXTRightBurnsDiv").hide();
	}
});
$('#pregnancy').on('change', function() {
	if (this.value == 1) {
		$("#pComments").show();
	} else {
		$("#pComments").hide();
	}
});
$('#pastMedicalHistory').on('change', function() {
	//$('#afterSelect').html(li.val() + '. ' + li.text());
	if ($("#pastMedicalHistory option[value=12]:selected") ?.length > 0) {
		$("#pastMedicalHistoryTxt").show();
	} else {
		$("#pastMedicalHistoryTxt").hide();
	}
});
$("#transportCategory").on('change', function() {
	if (this.value == 1) {
		$("#transportDiv, #hospitalDiv, #transportTypeDiv, #locationTypeDiv").show();
		$("#nonTransportDiv, #nonTransportCrimeDiv, .PDOADiv, #refused, #DNRDiv").hide();
	} else if (this.value == 2) {
		$("#transportDiv, #hospitalDiv, #transportTypeDiv, #locationTypeDiv").hide();
		$("#governmentHospitalDiv, #privateHospitalDiv").hide();
		$("#nonTransportDiv").show();
	} else {
		$("#transportDiv").hide();
		$("#nonTransportDiv").hide();
		$("#transportDiv, #hospitalDiv, #transportTypeDiv, #locationTypeDiv").hide();
		$("#governmentHospitalDiv, #privateHospitalDiv").hide();
	}
});
// $('#transport').on('change', function() {
// 	if (this.value == 5 || this.value == 5 && this.value != "") {
// 		$("#hospitalDiv").show();
// 		$("#transportTypeDiv, #locationTypeDiv").hide();
// 	} else if (this.value == 6) {
// 		$("#transportTypeDiv").show();
// 		$("#hospitalDiv, #locationTypeDiv").hide();
// 		$("#governmentHospitalDiv, #privateHospitalDiv").hide();
// 	} else if (this.value == 7) {
// 		$("#locationTypeDiv").show();
// 		$("#hospitalDiv, #transportTypeDiv").hide();
// 		$("#governmentHospitalDiv, #privateHospitalDiv").hide();
// 	} else {
// 		$("#hospitalDiv, #transportTypeDiv, #locationTypeDiv").hide();
// 	}
// });
$("#hospitalFacility").on('change', function() {
	if (this.value == 1) {
		$("#governmentHospitalDiv").show();
		$("#privateHospitalDiv").hide();
	} else if (this.value == 2) {
		$("#governmentHospitalDiv").hide();
		$("#privateHospitalDiv").show();
	} else {
		$("#governmentHospitalDiv, #privateHospitalDiv").hide();
	}
});
// Patient & Incident Info > Incident info > Factors Affecting EMS > Refuse Receiving Patient
$("#hospitalRefused").on('change', function() {
	if (this.value == 1) {
		$("#governmentHospitalRefusedDiv").show();
		$("#privateHospitalRefusedDiv").hide();
	} else if (this.value == 2) {
		$("#governmentHospitalRefusedDiv").hide();
		$("#privateHospitalRefusedDiv").show();
	} else {
		$("#governmentHospitalRefusedDiv, #privateHospitalRefusedDiv").hide();
	}
});
$('#nonTansport').on('change', function() {
	if (this.value == 8) {
		$("#nonTransportCrimeDiv").show();
		$(".PDOADiv, #refused, #DNRDiv").hide();
	} else if (this.value == 4) {
		$(".PDOADiv").show();
		$("#nonTransportCrimeDiv, #refused, #DNRDiv").hide();
	} else if (this.value == 7) {
		$("#refused").show();
		$("#nonTransportCrimeDiv, .PDOADiv, #DNRDiv").hide();
	} else if (this.value == 9) {
		$("#DNRDiv").show();
		$("#nonTransportCrimeDiv, .PDOADiv, #refused").hide();
	} else {
		$("#nonTransportCrimeDiv, .PDOADiv, #refused, #DNRDiv").hide();
	}
});

$("#mAirway").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#oralSizeDiv, #mAirwayDoneByDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#oralSizeDiv, #mAirwayDoneByDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#nasalSizeDiv, #nasalDoneByDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#nasalSizeDiv, #nasalDoneByDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#combiDoneByDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#combiDoneByDiv").hide();
	 }
	if (Value.indexOf("4") > -1) {
		$("#ETTSizeDiv, #ETTDoneByDiv").show();
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#ETTSizeDiv, #ETTDoneByDiv").hide();
	}
	if (Value.indexOf("5") > -1) {
		$("#mAirwayCommentDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#mAirwayCommentDiv").hide();
	}
	if (Value.indexOf("6") > -1) {
		$("#LMASizeDiv, #LMADoneByDiv").show();
	}
	if (!(Value.indexOf("6") > -1)) {
		$("#LMASizeDiv, #LMADoneByDiv").hide();
	}
});
$("#oxygenLPM").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#nasalDiv, #oxygenLPMDoneByDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#nasalDiv, #oxygenLPMDoneByDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#SFMDiv, #SFMLPMDoneByDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#SFMDiv, #SFMLPMDoneByDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#NRMDiv, #NRMLPMDoneByDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#NRMDiv, #NRMLPMDoneByDiv").hide();
	 }
	if (Value.indexOf("4") > -1) {
		$("#BVMDiv, #BVMLPMDoneByDiv").show();
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#BVMDiv, #BVMLPMDoneByDiv").hide();
	}
	if (Value.indexOf("5") > -1) {
		$("#oxygenLPMDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#oxygenLPMDiv").hide();
	}
});

$("#immoblazatiom").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#immobilizationAdultDiv, #immoblazatiomDoneByDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#immobilizationAdultDiv, #immoblazatiomDoneByDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#KEDDoneByDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#KEDDoneByDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#LBBDoneByDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#LBBDoneByDiv").hide();
	 }
	if (Value.indexOf("4") > -1) {
		$("#ScoopDoneByDiv").show();
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#ScoopDoneByDiv").hide();
	}
	if (Value.indexOf("5") > -1) {
		$("#immoblazatiomDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#immoblazatiomDiv").hide();
	}
	if (Value.indexOf("6") > -1) {
		$("#StairDoneByDiv").show();
	}
	if (!(Value.indexOf("6") > -1)) {
		$("#StairDoneByDiv").hide();
	}
});

$("#splinting").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#rigidDoneByDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#rigidDoneByDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#tractionDoneByDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#tractionDoneByDiv").hide();
	}
});
$("#defibrillation").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#AEDUsedDiv, #AEDUsedDoneByDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#AEDUsedDiv, #AEDUsedDoneByDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#DefibrillationDiv, #DefibrillationDoneByDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#DefibrillationDiv, #DefibrillationDoneByDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#CardiversionDiv, #CardiversionDoneByDiv, #cardiversionTableDiv").show();
		$('.nav-tabs-custom a[href="#cardiVersion_Tab"]').tab('show');
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#CardiversionDiv, #CardiversionDoneByDiv, #cardiversionTableDiv").hide();
		$('.nav-tabs-custom a[href="#IVIOIMTab"]').tab('show');
	}
	if (Value.indexOf("4") > -1) {
		$("#TCPDiv, #TCPDoneByDiv, #TCPTableDiv").show();
		$('.nav-tabs-custom a[href="#TCPTab"]').tab('show');
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#TCPDiv, #TCPDoneByDiv, #TCPTableDiv").hide();
		$('.nav-tabs-custom a[href="#IVIOIMTab"]').tab('show');
	}
	if (Value.indexOf("5") > -1) {
		$("#defibrillationDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#defibrillationDiv").hide();
	}
});
$("#IVIO").on('change', function() {
	if (this.value == 1 || this.value == 3 || this.value == 5) {
		$("#IVIODoneByDiv").show();
		$("#IVIODiv, #timeDiv").hide();
	} else if (this.value == 2) {
		$("#timeDiv").show();
		$("#IVIODoneByDiv, #IVIODiv").hide();
	} else if (this.value == 4) {
		$("#IVIODiv").show();
		$("#IVIODoneByDiv, #timeDiv").hide();
	} else {
		$("#IVIODiv, #timeDiv").hide();
		$("#IVIODoneByDiv").show();
	}
});

$("#mOthers").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#BandageDoneByDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#BandageDoneByDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#coldPackDoneByDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#coldPackDoneByDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#assistDeliveryDiv, #AssistDeliveryDoneByDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#assistDeliveryDiv, #AssistDeliveryDoneByDiv").hide();
	}
	if (Value.indexOf("4") > -1) {
		$("#WarmingDoneByDiv").show();
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#WarmingDoneByDiv").hide();
	}
	if (Value.indexOf("5") > -1) {
		$("#IrrigationDoneByDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#IrrigationDoneByDiv").hide();
	}
	if (Value.indexOf("6") > -1) {
		$("#SuctionDoneByDiv").show();
	}
	if (!(Value.indexOf("6") > -1)) {
		$("#SuctionDoneByDiv").hide();
	}
	if (Value.indexOf("7") > -1) {
		$("#NGTSizeDiv, #NGTDoneByDiv").show();
	}
	if (!(Value.indexOf("7") > -1)) {
		$("#NGTSizeDiv, #NGTDoneByDiv").hide();
	}
	if (Value.indexOf("8") > -1) {
		$("#BurnCareDoneByDiv").show();
	}
	if (!(Value.indexOf("8") > -1)) {
		$("#BurnCareDoneByDiv").hide();
	}
	if (Value.indexOf("9") > -1) {
		$("#mOthersDiv").show();
	}
	if (!(Value.indexOf("9") > -1)) {
		$("#mOthersDiv").hide();
	}
	if (Value.indexOf("10") > -1) {
		$("#CoolingDoneByDiv").show();
	}
	if (!(Value.indexOf("10") > -1)) {
		$("#CoolingDoneByDiv").hide();
	}
	if (Value.indexOf("11") > -1) {
		$("#BleedingDoneByDiv").show();
	}
	if (!(Value.indexOf("11") > -1)) {
		$("#BleedingDoneByDiv").hide();
	}
});

$("#assistDelivery").on('change', function() {
	if (this.value == 2) {
		$("#actualDeliveryDiv").show();
	} else {
		$("#actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv").hide();
	}
});
$("#actualDelivery").on('change', function() {
	if (this.value == 6) {
		$("#resuscitationManagementDiv").show();
		$("#obstetricCareDiv").hide();
	} else if (this.value == 7) {
		$("#resuscitationManagementDiv").hide();
		$("#obstetricCareDiv").show();
	} else {
		$("#resuscitationManagementDiv, #obstetricCareDiv").hide();
	}
});
$("#resuscitationRequired").on('change', function() {
	if (this.value == 1) {
		//$("#resuscitationRequiredModal").modal('show');
		$('.nav-tabs-custom a[href="#resuscitationManagement"]').tab('show');
		$("#resuscitationDiv").show();
	} else {
		$("#resuscitationDiv").hide();
	}
});
$("#resuscitation").on('change', function() {
	if (this.value == 1) {
		//$("#resuscitationRequiredModal").modal('show');
		$('.nav-tabs-custom a[href="#resuscitationManagement"]').tab('show');
		$("#resuscitationDiv").show();
	} else {
		$("#resuscitationDiv").hide();
	}
});
$("#presentIllness").on('change', function() {
	if (this.value == 1) {
		$("#painDiv").show();
	} else {
		$("#painDiv").hide();
	}
});
//Patient & Incident Info > Resuscitation Management > Indication Procedures > Tube Type
$("#tubeType").on('change', function() {
	if (this.value == 1) {
		$("#ETtubeSizeDiv").show();
		$("#COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
	} else if (this.value == 2) {
		$("#COMBItubeSizeDiv").show();
		$("#ETtubeSizeDiv, #LMAtubeSizeDiv").hide();
	} else if (this.value == 3) {
		$("#LMAtubeSizeDiv").show();
		$("#ETtubeSizeDiv, #COMBItubeSizeDiv").hide();
	} else {
		$("#ETtubeSizeDiv, #COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
	}
});
$("#breathSound").on('change', function() {
	if (this.value == 1 || this.value == "") {
		$("#RTLFDiv").hide();
	} else {
		$("#RTLFDiv").show();
	}
});
$("#burnType").on('change', function() {
	if (this.value == 1) {
		$("#adultDiv").show();
		$("#peditricDiv").hide();
	} else if (this.value == 2) {
		$("#adultDiv").hide();
		$("#peditricDiv").show();
	} else {
		$("#adultDiv, #peditricDiv").hide();
	}
});
$("#preEMSArrival").on('change', function() {
	if (this.value == 1) {
		$("#downTimeDiv").show();
	} else {
		$("#downTimeDiv").hide();
	}
});
$("#CPRProgress").on('change', function() {
	if (this.value == 1) {
		$("#CPRProgressDiv").show();
	} else {
		$("#CPRProgressDiv").hide();
	}
});
$("#AEDApplied").on('change', function() {
	if (this.value == 1) {
		$(".AEDApplied").show();
	} else {
		$(".AEDApplied").hide();
	}
});
$("#belongingHandover").on('change', function() {
	if (this.value == 1) {
		$("#handoverDiv").show();
	} else {
		$("#handoverDiv").hide();
	}
});
$(".actualDelivery").on('change', function() {
	if ($("#resuscitationRadio").prop("checked") == true) {
		$("#resuscitationManagementDiv").show();
		$("#obstetricCareDiv").hide();
	} else if ($("#obstetricRadio").prop("checked") == true) {
		$("#resuscitationManagementDiv").hide();
		$("#obstetricCareDiv").show();
	} else {
		$("#resuscitationManagementDiv, #obstetricCareDiv").hide();
	}
});
//New Change Bugs
$("#CPRProgress").on('change', function() {
	if (this.value == 1) {
		$("#resuscitationManagementDiv").show();
		$("#obstetricCareDiv").hide();
	} else {
		$("#resuscitationManagementDiv, #obstetricCareDiv").hide();
	}
});
//Staff Info
$("#staff_name").on('change', function() {
	if (this.value == 6 || this.value == 7) {
		$("#dutyDiv").show();
	} else {
		$("#dutyDiv").hide();
	}
});
//Patient & Incident Info > Incident info > Factors Affecting EMS
$("#factorsAffectingEMS").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("17") > -1) {
		$(".factorsAffectingEMSDiv").show();
	}
	if (!(Value.indexOf("17") > -1)) {
		$(".factorsAffectingEMSDiv, #governmentHospitalRefusedDiv, #privateHospitalRefusedDiv").hide();
	}
});
//Patient Assessment & Management > Patient Assessment > Abdomen
$("#abdomenLeftRight").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#leftUpAbdomenDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#leftUpAbdomenDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#rightUpAbdomenDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#rightUpAbdomenDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#leftDownAbdomenDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#leftDownAbdomenDiv").hide();
	}
	if (Value.indexOf("4") > -1) {
		$("#rightDownAbdomenDiv").show();
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#rightDownAbdomenDiv").hide();
	}
});
$("#rightUpAbdomen").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("5") > -1) {
		$("#rightUpAbdomenBurnsDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#rightUpAbdomenBurnsDiv").hide();
	}
});
$("#leftDownAbdomen").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("5") > -1) {
		$("#leftDownAbdomenBurnsDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#leftDownAbdomenBurnsDiv").hide();
	}
});
$("#rightDownAbdomen").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("5") > -1) {
		$("#rightDownAbdomenBurnsDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#rightDownAbdomenBurnsDiv").hide();
	}
});
//Patient Assessment & Management > Patient Assessment > Back
$("#backType").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#backDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#backDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#backLumbarDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#backLumbarDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#backSacrumDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#backSacrumDiv").hide();
	}
});
$("#backLumbar").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("5") > -1) {
		$("#backLumbarBurnsDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#backLumbarBurnsDiv").hide();
	}
});
$("#backSacrum").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("5") > -1) {
		$("#backSacrumBurnsDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#backSacrumBurnsDiv").hide();
	}
});
//Patient Assessment & Management > Patient Assessment > Upper EXT
$("#upperEXT").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$(".upperEXTLeft").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$(".upperEXTLeft").hide();
	}
	if (Value.indexOf("2") > -1) {
		$(".upperEXTRight").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$(".upperEXTRight").hide();
	}
});
//Patient Assessment & Management > Patient Assessment > Lw EXT
$("#lwEXT").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$(".lwEXTLeft").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$(".lwEXTLeft").hide();
	}
	if (Value.indexOf("2") > -1) {
		$(".lwEXTRight").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$(".lwEXTRight").hide();
	}
});
//Patient & Incident Info > Additional Resources On Scene
$("#additionalResources").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#royalOmanPoliceDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#royalOmanPoliceDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#militaryGovernmentDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#militaryGovernmentDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#privateSectorDiv").show();
	}
	if (!(Value.indexOf("3") > -1)) {
		$("#privateSectorDiv").hide();
	}
});
//Patient Assessment & Management > Resuscitation Management > Treatment > Intervention > Electrical Intervention
$("#ECG_txt").on('change', function() {
	if (this.value == 1 || this.value == 2) {
		$("#RHYTHMDiv").show();
	} else {
		$("#RHYTHMDiv").hide();
	}
});
//Patient Assessment & Management > Resuscitation Management > Treatment > Intervention > Electrical Intervention
$("#electricalIntervention").on('change', function() {
	if (this.value == 4) {
		$("#RHYTHMDiv").show();
	} else {
		$("#RHYTHMDiv").hide();
	}
});
$("#resuscitationRequiredBtn").click(function() {
	$('.nav-tabs-custom a[href="#resuscitationManagement"]').tab('show');
	//$("#resuscitationRequiredModal").modal('hide');
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
// Call Category
$(document).ready(function() {
	$('#callCategory').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#callSubCategory').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
		//$('#callSubCategory').trigger("chosen:updated");
		var storedata;
		if ($(this).find(":selected").val() == "1") {
			//alert("1");
			storedata = [{
				value: '1',
				text: 'Assault'
			}, {
				value: '2',
				text: 'MVC'
			}, {
				value: '3',
				text: 'Drowning'
			}, {
				value: '4',
				text: 'Falls'
			}, {
				value: '5',
				text: 'Burn'
			}, {
				value: '6',
				text: 'Other injuries'
			}, {
				value: '7',
				text: 'Others Transport Injury'
			}];
			$.each(storedata, function(index, value) {
				$('#callSubCategory').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "2") {
			//alert("2");
			storedata = [{
				value: '8',
				text: 'Respiratory'
			}, {
				value: '9',
				text: 'Cardiac / Chest Pain'
			}, {
				value: '10',
				text: 'Neurologic'
			}, {
				value: '11',
				text: 'Environmental'
			}, {
				value: '12',
				text: 'Poisoning / Drugs'
			}, {
				value: '13',
				text: 'Obstetrics / Gynecology'
			}, {
				value: '14',
				text: 'Other Medical'
			}];
			$.each(storedata, function(index, value) {
				$('#callSubCategory').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		}
	});

	$('#callSubCategory').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#callType').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
		//$('#callType').trigger("chosen:updated");
		var storedata;
		if ($(this).find(":selected").val() == "1") {
			//alert("1");
			storedata = [{
				value: '1',
				text: 'Assault (unknown)'
			}, {
				value: '2',
				text: 'Blunt force'
			}, {
				value: '3',
				text: 'Shooting'
			}, {
				value: '4',
				text: 'Stabbing'
			}, {
				value: '5',
				text: 'Suspected abuse'
			}, {
				value: '6',
				text: 'Suspected sexual abuse'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "2") {
			//alert("2");
			storedata = [{
				value: '1',
				text: 'Single Car'
			}, {
				value: '2',
				text: 'Multiple Car'
			}, {
				value: '3',
				text: 'Head-on (Frontal)'
			}, {
				value: '4',
				text: 'T-bone (Lateral Impact)'
			}, {
				value: '5',
				text: 'Side Swipe Impact'
			}, {
				value: '6',
				text: 'Rear'
			}, {
				value: '7',
				text: 'Roll over'
			}, {
				value: '8',
				text: 'With bicycle'
			}, {
				value: '9',
				text: 'With fixed object'
			}, {
				value: '10',
				text: 'With motorcycle'
			}, {
				value: '11',
				text: 'Ejection'
			}, {
				value: '12',
				text: 'Pedestrian-Human'
			}, {
				value: '13',
				text: 'Pedestrian-Animal'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "3") {
			//alert("2");
			storedata = [{
				value: '1',
				text: 'In the sea'
			}, {
				value: '2',
				text: 'In the swimming pool'
			}, {
				value: '3',
				text: 'In the wadi/falaj'
			}, {
				value: '4',
				text: 'A Well'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "4") {
			//alert("2");
			storedata = [{
				value: '1',
				text: 'Fall- unknown height'
			}, {
				value: '2',
				text: 'Fall from height > 6 Meters'
			}, {
				value: '3',
				text: 'Fall from height < 6 Meters'
			}, {
				value: '4',
				text: 'Fall from same level'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "5") {
			//alert("5");
			storedata = [{
				value: '1',
				text: 'Scald (Hot Water)'
			}, {
				value: '2',
				text: 'Other Hot Liquid'
			}, {
				value: '3',
				text: 'Hot Object'
			}, {
				value: '4',
				text: 'Steam'
			}, {
				value: '5',
				text: 'Flame'
			}, {
				value: '6',
				text: 'Electricity'
			}, {
				value: '7',
				text: 'Chemical'
			}, {
				value: '8',
				text: 'Lighting'
			}, {
				value: '9',
				text: 'Radiation'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "6") {
			//alert("6");
			storedata = [{
				value: '1',
				text: 'Barotrauma'
			}, {
				value: '2',
				text: 'Bites (Stings - Snake - insect)'
			}, {
				value: '3',
				text: 'Electrical shock'
			}, {
				value: '4',
				text: 'Explosion'
			}, {
				value: '5',
				text: 'Fireworks'
			}, {
				value: '6',
				text: 'Hanging / strangulation'
			}, {
				value: '7',
				text: 'Household machine/tools injury'
			}, {
				value: '8',
				text: 'Industrial machine/tools injury'
			}, {
				value: '9',
				text: 'Natural disaster'
			}, {
				value: '10',
				text: 'Suffocation'
			}, {
				value: '11',
				text: 'Vehicle burnt out'
			}, {
				value: '12',
				text: 'Aircraft accident'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "7") {
			//alert("7");
			storedata = [{
				value: '1',
				text: 'All-terrain vehicle involved'
			}, {
				value: '2',
				text: 'Bicycle accident'
			}, {
				value: '3',
				text: 'Animal / Horses involved incident'
			}, {
				value: '4',
				text: 'Motorcycle incident'
			}, {
				value: '5',
				text: 'Recreational device incident'
			}, {
				value: '6',
				text: 'Watercraft incident'
			}, {
				value: '7',
				text: 'Unknown mechanism or injury'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "8") {
			//alert("8");
			storedata = [{
				value: '1',
				text: 'Choking (Airway Obstrucation)'
			}, {
				value: '2',
				text: 'Hyperventilation'
			}, {
				value: '3',
				text: 'Respiratory Arrest'
			}, {
				value: '4',
				text: 'Shortness Of Breath- Suspected Asthma / COPD'
			}, {
				value: '5',
				text: 'Shortness Of Breath- Suspected Pulmonary Edema'
			}, {
				value: '6',
				text: 'Respiratory Distress'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "9") {
			//alert("9");
			storedata = [{
				value: '1',
				text: 'Cardiac Arrest'
			}, {
				value: '2',
				text: 'Chest pain'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "10") {
			//alert("10");
			storedata = [{
				value: '1',
				text: 'Altered Level of Consciousness (Unknown Reason)'
			}, {
				value: '2',
				text: 'Syncope'
			}, {
				value: '3',
				text: 'Seizure - Activity/ Status Epileptics'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "11") {
			//alert("11");
			storedata = [{
				value: '1',
				text: 'Cold Illness / Injury'
			}, {
				value: '2',
				text: 'Hot Illness / Injury'
			}, {
				value: '3',
				text: 'Hazmat Exposure'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "12") {
			//alert("12");
			storedata = [{
				value: '1',
				text: 'Alcohol Intoxication'
			}, {
				value: '2',
				text: 'Drug Abuse'
			}, {
				value: '3',
				text: 'Carbon Monoxide'
			}, {
				value: '4',
				text: 'Chemical Cleaner'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "13") {
			//alert("13");
			storedata = [{
				value: '1',
				text: 'Delivery / Labor'
			}, {
				value: '2',
				text: 'Vaginal Bleed (Non - Pregnant)'
			}, {
				value: '3',
				text: 'Vaginal Bleed (Pregnant)'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "14") {
			//alert("14");
			storedata = [{
				value: '1',
				text: 'Abdominal Pain (Including Pelvic Pain)'
			}, {
				value: '2',
				text: 'Allergic Reaction (Unspecified Allergen)'
			}, {
				value: '3',
				text: 'Disturbance In Behavior'
			}, {
				value: '4',
				text: 'Epistaxis (Nosebleed)'
			}, {
				value: '5',
				text: 'Fever'
			}, {
				value: '6',
				text: 'Gastrointestinal Bleeding'
			}, {
				value: '7',
				text: 'Hyperglycemic'
			}, {
				value: '8',
				text: 'Hypoglycemic'
			}, {
				value: '9',
				text: 'Non - Traumatic Body Pain'
			}, {
				value: '10',
				text: 'Obviously Dead'
			}, {
				value: '11',
				text: 'General Unwell …( Weak / Dizzy / Sick / Nausea / Headache)'
			}, {
				value: '12',
				text: 'Vomiting / Diarrhea'
			}, {
				value: '13',
				text: 'Dehydration'
			}];
			$.each(storedata, function(index, value) {
				$('#callType').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		}
	});

	$('#locationType').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#locationLabel').text($(this).find(":selected").text());
		$('#locationSelect').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
		//$('#locationSelect').trigger("chosen:updated");
		if (this.value == 6 || this.value == 7 || this.value == 8 || this.value == 9 || this.value == 12) {
			$("#locationSelectDiv").hide();
		} else {
			$("#locationSelectDiv").show();
		}
		var storedata;
		if ($(this).find(":selected").val() == "1") {
			//alert("1");
			storedata = [{
				value: '1',
				text: 'Nursery'
			}, {
				value: '2',
				text: 'Preschool'
			}, {
				value: '3',
				text: 'Private School'
			}, {
				value: '4',
				text: 'Public School'
			}, {
				value: '5',
				text: 'College'
			}, {
				value: '6',
				text: 'Institute'
			}, {
				value: '7',
				text: 'University'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "2") {
			//alert("2");
			storedata = [{
				value: '8',
				text: 'Factory'
			}, {
				value: '9',
				text: 'Workshop'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "3") {
			//alert("3");
			storedata = [{
				value: '10',
				text: 'Clinic'
			}, {
				value: '11',
				text: 'Health Center'
			}, {
				value: '12',
				text: 'Polyclinic'
			}, {
				value: '13',
				text: 'Hospital'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "4") {
			//alert("4");
			storedata = [{
				value: '14',
				text: 'Hotel'
			}, {
				value: '15',
				text: 'Park'
			}, {
				value: '16',
				text: 'Resort'
			}, {
				value: '17',
				text: 'Play-yard'
			}, {
				value: '18',
				text: 'Chalet'
			}, {
				value: '19',
				text: 'Theatre / Cinema'
			}, {
				value: '20',
				text: 'Museum'
			}, {
				value: '21',
				text: 'Restaurant'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "5") {
			//alert("5");
			storedata = [{
				value: '22',
				text: 'Gym'
			}, {
				value: '23',
				text: 'Club'
			}, {
				value: '24',
				text: 'Complex'
			}, {
				value: '25',
				text: 'Stadium'
			}, {
				value: '26',
				text: 'Playing field'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "10") {
			//alert("10");
			storedata = [{
				value: '27',
				text: 'Souq'
			}, {
				value: '28',
				text: 'Supermarket'
			}, {
				value: '29',
				text: 'Mall'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		} else if ($(this).find(":selected").val() == "11") {
			//alert("11");
			storedata = [{
				value: '30',
				text: 'Street'
			}, {
				value: '31',
				text: 'Highway'
			}, {
				value: '32',
				text: 'Service Road '
			}, {
				value: '33',
				text: 'Airport'
			}, {
				value: '34',
				text: 'Bus Station'
			}, {
				value: '35',
				text: 'Train Station'
			}, {
				value: '36',
				text: 'Ports'
			}];
			$.each(storedata, function(index, value) {
				$('#locationSelect').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger('change');
			});
		}
	});

	//Governorate
	$('#governorateID').on('change', function() {
        //alert($(this).find(":selected").val());
        $('#stationID').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
		$('#incidentLocation').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
        //$('#stationID').trigger("chosen:updated");
        var storedata;
		var incidentLocData;
        if ($(this).find(":selected").val() == "1") {
            //alert("1");
			incidentLocData = [{
                value: '1',
                text: 'Muscat'
            }, {
                value: '2',
                text: 'Muttarah'
            }, {
                value: '3',
                text: 'Seeb'
            }, {
                value: '4',
                text: 'Qurayyat'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
            storedata = [{
                value: '1',
                text: 'Al-Amirat'
            }, {
                value: '2',
                text: 'AL-Athaiba'
            }, {
                value: '3',
                text: 'Al-Khudh1'
            }, {
                value: '4',
                text: 'Al-Khudh2'
            }, {
                value: '5',
                text: 'Al-Watayah'
            }, {
                value: '6',
                text: 'Boshar-1'
            }, {
                value: '7',
                text: 'Boshar-2'
            }, {
                value: '8',
                text: 'Darsate'
            }, {
                value: '9',
                text: 'Qurayyat'
            }, {
                value: '10',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
			
        } else if ($(this).find(":selected").val() == "2") {
            //alert("2");
			incidentLocData = [{
                value: '5',
                text: 'Al Rustaq'
            }, {
                value: '6',
                text: 'Al Awabi'
            }, {
                value: '7',
                text: 'Nakahl'
            }, {
                value: '8',
                text: 'Wadi Al Muwawal'
            },  {
                value: '9',
                text: 'Barka'
            }, {
                value: '10',
                text: 'AL-Mansnaa'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
            storedata = [{
                value: '11',
                text: 'AL-Musina'
            }, {
                value: '12',
                text: 'Barka'
            }, {
                value: '13',
                text: 'Nakhal'
            }, {
                value: '14',
                text: 'Rustaq'
            }, {
                value: '15',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "3") {
			//alert("3");
			incidentLocData = [{
                value: '11',
                text: 'Shinas'
            }, {
                value: '12',
                text: 'Lewa'
            }, {
                value: '13',
                text: 'Sohar'
            }, {
                value: '14',
                text: 'Saham'
            },  {
                value: '15',
                text: 'Al Khaboura'
            }, {
                value: '16',
                text: 'Al Suwaiq'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
            storedata = [{
                value: '16',
                text: 'Sohar'
            }, {
                value: '17',
                text: 'Saham'
            }, {
                value: '18',
                text: 'Al Khaborah'
            }, {
                value: '19',
                text: 'Shinas'
            }, {
                value: '20',
                text: 'Port Sohar'
            }, {
                value: '21',
                text: 'Al Swaiq'
            }, {
                value: '22',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "4") {
            //alert("4");
			incidentLocData = [{
                value: '17',
                text: 'Haima'
            }, {
                value: '18',
                text: 'Muhot'
            }, {
                value: '19',
                text: 'Al Duqm'
            }, {
                value: '20',
                text: 'AL Jazer'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
            storedata = [{
                value: '23',
                text: 'Haima'
            }, {
                value: '24',
                text: 'Ghaba'
            }, {
                value: '25',
                text: 'Al Ghaftin'
            }, {
                value: '26',
                text: 'Qatbit'
            }, {
                value: '27',
                text: 'Saih Al Kairat'
            }, {
                value: '28',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "5") {
            //alert("5");
			incidentLocData = [{
                value: '21',
                text: 'Khasab'
            }, {
                value: '22',
                text: 'Dibba'
            }, {
                value: '23',
                text: 'Mudhah'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
            storedata = [{
                value: '29',
                text: 'Khasab'
            }, {
                value: '30',
                text: 'Daba'
            }, {
                value: '31',
                text: 'Madha'
            }, {
                value: '32',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "6") {
            //alert("6");
			incidentLocData = [{
                value: '24',
                text: 'Al Buraimi'
            }, {
                value: '25',
                text: 'AL Sunnah'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
            storedata = [{
                value: '33',
                text: 'Al Burimi'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "7") {
            //alert("7");
			incidentLocData = [{
                value: '26',
                text: 'Nizwa'
            }, {
                value: '27',
                text: 'Bahla'
            }, {
                value: '28',
                text: 'Manah'
            }, {
                value: '29',
                text: 'Adam'
            }, {
                value: '30',
                text: 'Izki'
            }, {
                value: '31',
                text: 'Samail'
            }, {
                value: '32',
                text: 'Bedbed'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });

            storedata = [{
                value: '34',
                text: 'Smail'
            }, {
                value: '35',
                text: 'Izki'
            }, {
                value: '36',
                text: 'Bahla'
            }, {
                value: '37',
                text: 'Adam'
            }, {
                value: '38',
                text: 'Nizwa'
            }, {
                value: '39',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "8") {
            //alert("8");
			incidentLocData = [{
                value: '33',
                text: 'Ibri'
            }, {
                value: '34',
                text: 'Yanqul'
            }, {
                value: '35',
                text: 'Dhank'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });

            storedata = [{
                value: '40',
                text: 'Ibri'
            }, {
                value: '41',
                text: 'Yanqul'
            }, {
                value: '42',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "9") {
            //alert("9");
			incidentLocData = [{
                value: '36',
                text: 'Ibra'
            }, {
                value: '37',
                text: 'Al Mudhaibi'
            }, {
                value: '38',
                text: 'Bidiya'
            }, {
                value: '39',
                text: 'Al Khabil'
            }, {
                value: '40',
                text: 'Wadi Bani Khalid'
            }, {
                value: '41',
                text: 'Duma and Taein'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
			
            storedata = [{
                value: '43',
                text: 'Ibra'
            }, {
                value: '44',
                text: 'Bidiya'
            }, {
                value: '45',
                text: 'Sienaw'
            }, {
                value: '46',
                text: 'Al Mudhaibi'
            }, {
                value: '47',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "10") {
            //alert("10");
			incidentLocData = [{
                value: '42',
                text: 'Sur'
            }, {
                value: '43',
                text: 'Al Kamil and Al -Wafi'
            }, {
                value: '44',
                text: 'Jalan Bani Bohassen'
            }, {
                value: '45',
                text: 'Jalan Bani Boali'
            }, {
                value: '46',
                text: 'Masira'
            }];
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });

            storedata = [{
                value: '48',
                text: 'AL-Kamil & AL-Wafi'
            }, {
                value: '49',
                text: 'Jaalan'
            }, {
                value: '50',
                text: 'Qalhat'
            }, {
                value: '51',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "11") {
            //alert("11");
			incidentLocData = [{
                value: '47',
                text: 'Salalah'
            }, {
                value: '48',
                text: 'Taqah'
            }, {
                value: '49',
                text: 'Merbat'
            }, {
                value: '50',
                text: 'Thamrit'
            }, {
                value: '51',
                text: 'Thalqot'
            }, {
                value: '52',
                text: 'Al Mazyouna'
            }, {
                value: '53',
                text: 'Makshen'
            }, {
                value: '54',
                text: 'Shalim and the Halmaniyah Islands'
            }, {
                value: '55',
                text: 'Sadah'
            }];
			
            $.each(incidentLocData, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
			
            storedata = [{
                value: '52',
                text: 'Oqad'
            }, {
                value: '53',
                text: 'Thamrit'
            }, {
                value: '54',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        }
    });
});

var ecgTable = $('#ecgTable').DataTable({
	processing: true,
	"destroy": true,
	"dom": '<"top"f>rt<"bottom"ilp>',
	"order": [[0, 'asc']]
});

$('#ecgTable tbody').on('click', '#removeBtn', function() {
	var table = $('#ecgTable').DataTable();
	bootbox.confirm({
		message: "Do you want to delete a record?",
		buttons: {
			confirm: {
				label: '<i class="fal fa-check fa-fw fa-lg"></i> Yes',
				className: 'btn-success'
			},
			cancel: {
				label: '<i class="fa fa-times fa-fw fa-lg"></i> No',
				className: 'btn-danger'
			}
		},
		callback: function(result) {
			//alert("result="+result);
			if (result) {
				table.row($(this).parents('tr')).remove().draw();
			}
			//  console.log('This was logged in the callback: ' + result);
		}
	});
});
//New changes on 20-08-2023
//Number Validition
$(document).on("input", ".numeric", function() {
	$(this).val($(this).val().replace(/[^\d,/ \u0600-\u06FF \s \_]/gi, ''));
});

$('#BP_txt, #TreatmentBP_txt').on('keyup', function() {
	var card_number = '';
	$(this).attr('maxlength', '7');
	$(this).each(function() {
	  card_number = $(this).val();
	  if (card_number.length == 3) {
		card_number = card_number.concat('/');
	  }
	  $(this).val(card_number);
	});
});
// $(document).ready(function() {
// 	$('select').niceSelect();
// }); 