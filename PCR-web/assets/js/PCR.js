window.onload = function() {
	$("#pastMedicalHistoryTxt, #pComments, #transportDiv, #nonTransportDiv, #hospitalDiv, #nonTransportCrimeDiv, #transportTypeDiv, #DNRDiv").hide();
	$("#locationTypeDiv, #governmentHospitalDiv, #privateHospitalDiv").hide();
	$("#mAirwayCommentDiv, #oxygenLPMDiv, #immoblazatiomDiv, #splintingDiv, #defibrillationDiv, #IVIODiv, #mOthersDiv, #timeDiv").hide();
	$(".PDOADiv, #refused").hide();
	$("#resuscitationDiv, #painDiv").hide();
	//Airway, Breathing, 
	$("#airwayNotClearDiv, #breathingNormalDiv, #breathingAbnormalDiv").hide();
	//circulation
	$("#circulationPulseDiv, #circulationSkinDiv").hide();
	//Burns
	$("#headBurnsDiv, #neckBurnsDiv, #abdomenBurnsDiv, #pelvicBurnsDiv, #chestBurnsDiv, #backBurnsDiv").hide();
	//Patient & Incident Info > Patient Management > Management> Air way
	$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide();
	//Patient & Incident Info > Patient Management > Management> immobilization
	$("#immobilizationAdultDiv").hide();
	//
	$("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
	//Patient & Incident Info > Resuscitation Management > Indication Procedures > Tube Type
	$("#ETtubeSizeDiv, #COMBItubeSizeDiv, #LMAtubeSizeDiv").hide();
	$("#RTLFDiv").hide();
	//Total Burn Score
	$("#adultDiv, #peditricDiv").hide();
	//Upper EXT > Upper EXT Left Burns
	$("#upperEXTLeftBurnsDiv, #upperEXTRightBurnsDiv,#lwEXTLeftBurnsDiv, #lwEXTRightBurnsDiv").hide();
	$("#downTimeDiv, #handoverDiv").hide();
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
$('#chest').on('change', function() {
	if ($("#chest option[value=5]:selected") ?.length > 0) {
		$("#chestBurnsDiv").show();
	} else {
		$("#chestBurnsDiv").hide();
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
// $("#mAirway").on('change', function() {
// 	if (this.value == 1) {
// 		$("#oralSizeDiv").show();
// 		$("#ETTSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
// 	} else if (this.value == 2) {
// 		$("#nasalSizeDiv").show();
// 		$("#oralSizeDiv, #ETTSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
// 	} else if (this.value == 4) {
// 		$("#ETTSizeDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
// 	} else if (this.value == 5) {
// 		$("#mAirwayCommentDiv, #mAirwayDoneByDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide();
// 	} else if (this.value == 6) {
// 		$("#LMASizeDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #ETTSizeDiv").hide();
// 	} else {
// 		$("#mAirwayDoneByDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv, #mAirwayCommentDiv").hide();
// 	}
// });

// $("#mAirway").on('change', function() {
// 	var Value = $(this).val();
// 	if (Value.indexOf("1") > -1) {
// 		$("#oralSizeDiv").show();
// 		$("#ETTSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
// 	} 
// 	if (Value.indexOf("2") > -1) {
// 		$("#nasalSizeDiv").show();
// 		$("#oralSizeDiv, #ETTSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
// 	}
// 	if (Value.indexOf("4") > -1) {
// 		$("#ETTSizeDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #LMASizeDiv").hide();
// 	} 
// 	if (Value.indexOf("5") > -1) {
// 		$("#mAirwayCommentDiv, #mAirwayDoneByDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv").hide();
// 	} 
// 	if (Value.indexOf("6") > -1) {
// 		$("#LMASizeDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #mAirwayCommentDiv, #ETTSizeDiv").hide();
// 	} 
// 	if (Value.indexOf("1") > -1 && Value.indexOf("2") > -1 && Value.indexOf("4") > -1 && Value.indexOf("5") > -1 && Value.indexOf("6")) {
// 		$("#mAirwayDoneByDiv").hide();
// 		$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv, #mAirwayCommentDiv").show();
// 	}
// 	if (!(Value.indexOf("1") > -1) && !(Value.indexOf("2") > -1) && !(Value.indexOf("4") > -1) && !(Value.indexOf("5") > -1) && !(Value.indexOf("6") > -1)) {
// 		$("#mAirwayDoneByDiv").show();
// 		$("#oralSizeDiv, #nasalSizeDiv, #ETTSizeDiv, #LMASizeDiv, #mAirwayCommentDiv").hide();
// 	}
// });
$("#mAirway").on('change', function() {
	var Value = $(this).val();
	if (Value.indexOf("1") > -1) {
		$("#oralSizeDiv").show();
	}
	if (!(Value.indexOf("1") > -1)) {
		$("#oralSizeDiv").hide();
	}
	if (Value.indexOf("2") > -1) {
		$("#nasalSizeDiv").show();
	}
	if (!(Value.indexOf("2") > -1)) {
		$("#nasalSizeDiv").hide();
	}
	if (Value.indexOf("3") > -1) {
		$("#mAirwayDoneByDiv").show();
	}
	if (Value.indexOf("4") > -1) {
		$("#ETTSizeDiv").show();
	}
	if (!(Value.indexOf("4") > -1)) {
		$("#ETTSizeDiv").hide();
	}
	if (Value.indexOf("5") > -1) {
		$("#mAirwayCommentDiv, #mAirwayDoneByDiv").show();
	}
	if (!(Value.indexOf("5") > -1)) {
		$("#mAirwayCommentDiv").hide();
	}
	if (!(Value.indexOf("3") > -1) && !(Value.indexOf("5") > -1)) {
		$("#mAirwayDoneByDiv").hide();
	}
	if (Value.indexOf("6") > -1) {
		$("#LMASizeDiv").show();
	}
	if (!(Value.indexOf("6") > -1)) {
		$("#LMASizeDiv").hide();
	}
});
$("#oxygenLPM").on('change', function() {
	if (this.value == 5) {
		$("#oxygenLPMDiv, #oxygenLPMDoneByDiv").show();
		$("#oxygenLPMAdultDiv").hide();
	} else {
		$("#oxygenLPMDiv").hide();
		$("#oxygenLPMDoneByDiv, #oxygenLPMAdultDiv").show();
	}
});
$("#immoblazatiom").on('change', function() {
	if (this.value == 1) {
		$("#immobilizationAdultDiv, #immoblazatiomDoneByDiv").show();
		$("#immoblazatiomDiv").hide();
	} else if (this.value == 5) {
		$("#immoblazatiomDiv, #immoblazatiomDoneByDiv").show();
		$("#immobilizationAdultDiv").hide('');
	} else {
		$("#immoblazatiomDiv, #immobilizationAdultDiv").hide();
		$("#immoblazatiomDoneByDiv").show();
	}
});
$("#splinting").on('change', function() {
	if (this.value == 3) {
		$("#splintingDiv").show();
	} else {
		$("#splintingDiv").hide();
	}
});
$("#defibrillation").on('change', function() {
	if (this.value == 5) {
		$("#defibrillationDiv").show();
		$("#defibrillationDoneByDiv").hide();
	} else {
		$("#defibrillationDiv").hide();
		$("#defibrillationDoneByDiv").show();
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
	if (this.value == 3) {
		$("#assistDeliveryDiv").show();
		$("#mOthersDiv, #NGTSizeDiv").hide();
	} else if (this.value == 9) {
		$("#mOthersDiv").show();
		$("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
	} else if (this.value == 7) {
		$("#NGTSizeDiv").show();
		$("#assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #mOthersDiv").hide();
	} else {
		$("#mOthersDiv, #assistDeliveryDiv, #actualDeliveryDiv, #resuscitationManagementDiv, #obstetricCareDiv, #NGTSizeDiv").hide();
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
		$("#resuscitationRequiredModal").modal('show');
		$("#resuscitationDiv").show();
	} else {
		$("#resuscitationDiv").hide();
	}
});
$("#resuscitation").on('change', function() {
	if (this.value == 1) {
		$("#resuscitationRequiredModal").modal('show');
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
$("#belongingHandover").on('change', function() {
	if (this.value == 1) {
		$("#handoverDiv").show();
	} else {
		$("#handoverDiv").hide();
	}
});
$(".actualDelivery").change(function() {
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
$("#resuscitationRequiredBtn").click(function() {
	$('.nav-tabs-custom a[href="#resuscitationManagement"]').tab('show');
	$("#resuscitationRequiredModal").modal('hide');
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
// Advertising License (New / Renew) - BPHS09 - Advertisement Category
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
});