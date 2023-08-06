//FAQ Button
$(".smart-Wizard-CAD").hide();
$("#cadMasterBtn").click(function() {
	$(".smart-Wizard-CAD").show();
});
function CADDetailFn() {
    if ($.trim($("#CADDetailBtn").text()) == "Update") {
        SubSubEdit.remove().draw();
        $("#CADDetailBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var CAD_object = {};

    var callNo = $("#callNo").val();
    var callDate = $("#callDate").val();
    var dispatchTime = $("#dispatchTime").val();

    var callCategory = $("#callCategory option:selected").text();
	var callCategory_val = $("#callCategory option:selected").val();

    var callSubCategory = $("#callSubCategory option:selected").text();
	var callSubCategory_val = $("#callSubCategory option:selected").val();

    var callType = $("#callType option:selected").text();
	var callType_val = $("#callType option:selected").val();

    var governorateID = $("#governorateID option:selected").text();
	var governorateID_val = $("#governorateID option:selected").val();

    var incidentLocation = $("#incidentLocation option:selected").text();
	var incidentLocation_val = $("#incidentLocation option:selected").val();

    var stationID = $("#stationID :selected").map((_, e) => e.text).get();
    var stationID_val = $("#stationID :selected").map((_, e) => e.value).get();

    CAD_object.DcallNo                  = callNo;
    CAD_object.DcallDate                = callDate;
    CAD_object.DdispatchTime            = dispatchTime;
    CAD_object.DcallCategory            = callCategory ;
    CAD_object.DcallCategory_val        = callCategory_val;

    CAD_object.DcallSubCategory         = callSubCategory;
    CAD_object.DcallSubCategory_val     = callSubCategory_val;

    CAD_object.DcallType                = callType;
    CAD_object.DcallType_val            = callType_val;

    CAD_object.DgovernorateId           = governorateID;
    CAD_object.DgovernorateId_val       = governorateID_val;

    CAD_object.DIncidentLocation        = incidentLocation;
    CAD_object.DIncidentLocation_val    = incidentLocation_val;

    CAD_object.DstationId               = stationID;
    CAD_object.DstationId_val           = stationID_val;


    var CADTable = $('#CADTable').DataTable();
    CADTable.row.add(CAD_object).draw();

    $("#callNo").val('');
    $("#callDate").val('');
    $("#dispatchTime").val('');
    $("#callCategory").val("");
    //$("#callCategory").trigger('change');
    $("#callSubCategory").val("");
    //$("#callSubCategory").trigger('change');
    $("#callType").val("");
    //$("#callType").trigger('change');
    $("#governorateID").val("");
    //$("#governorateID").trigger('change');
    $("#incidentLocation").val("");
    //$("#incidentLocation").trigger('change');
    $("#stationID option:selected").prop("selected", false);
    $('#stationID').multiselect('refresh');
    $('#offcanvasCAD').offcanvas('hide');

}
//edit CADDetailFn details
function CADEditFunction(data1) {
    //$(".smart-Wizard-CAD").show();
    $('#offcanvasCAD').offcanvas('show');
    var data = data1.data();
    $("#CADDetailBtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#callNo").val(data.DcallNo);
    $("#callDate").val(data.DcallDate).flatpickr("set");
    $("#dispatchTime").val(data.DdispatchTime);
    $("#callCategory").val(data.DcallCategory_val).trigger('change');
    $("#callSubCategory").val(data.DcallSubCategory_val).trigger('change');
    $("#callType").val(data.DcallType_val);
    $("#governorateID").val(data.DgovernorateId_val).trigger('change');
    $("#incidentLocation").val(data.DIncidentLocation_val);
    $('select#stationID').val(data.DstationId_val).multiselect('rebuild');
}
//View CADDetailFn details
function CADViewFunction(data1) {
    //$(".smart-Wizard-CAD").show();
    $('#offcanvasCAD').offcanvas('show');
    var data = data1.data();
    $("#callNo").val(data.DcallNo);
    $("#callDate").val(data.DcallDate);
    $("#dispatchTime").val(data.DdispatchTime);
    $("#callCategory").val(data.DcallCategory_val).trigger('change');
    $("#callSubCategory").val(data.DcallSubCategory_val).trigger('change');
    $("#callType").val(data.DcallType_val);
    $("#governorateID").val(data.DgovernorateId_val).trigger('change');
    $("#incidentLocation").val(data.DIncidentLocation_val);
    $('select#stationID').val(data.DstationId_val).multiselect('rebuild');

    $('#callNo').attr('readonly', true);
    $("#callDate, #dispatchTime, #callCategory, #callSubCategory, #callType, #governorateID, #incidentLocation").prop('disabled', true);
}
//Add FAQ
$(document).ready(function() {
    $('#CADTable tbody').on('click', '#CADViewBtn', function() {
        var CADTable = $('#CADTable').DataTable();
        var data = CADTable.row($(this).parents('tr'));
        $("#CADDetailBtn").hide();
        $("#FAQClear").show();
        $('#lookupDetailSubStxt').attr('readonly', true);
        $("#lookUpSelSub, #lookupDetailSub_Sel, #lookupDetailSubsel, #lookupDetailSubSubStatus").prop('disabled', true);
        CADViewFunction(data);
    });
    $('#CADTable tbody').on('click', '#CADEditBtn', function() {
        var table = $('#CADTable').DataTable();
        SubSubEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        CADEditFunction(data);
    });
    $('#CADTable tbody').on('click', '#CADDelBtn', function() {
        var table = $('#CADTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    
    var CADTable = $('#CADTable').DataTable({
		processing: true,
		//serverSide: true,
        "ajax": "assets/js/CAD_data.txt",
        "columns": [
            { "data": "DcallNo" },
            { "data": "DcallDate" },
            { "data": "DdispatchTime" },
            { "data": "DcallCategory" },
            { "data": "DcallCategory_val" },
            { "data": "DcallSubCategory" },
            { "data": "DcallSubCategory_val" },
            { "data": "DcallType" },
            { "data": "DcallType_val" },
            { "data": "DgovernorateId" },
            { "data": "DgovernorateId_val" },
            { "data": "DIncidentLocation" },
            { "data": "DIncidentLocation_val" },
            { "data": "DstationId" },
            { "data": "DstationId_val" },
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'CADViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'CADEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }],
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			//"orderable": false,
            "visible": false,
			"targets": [4, 6, 8, 10, 12, 14]
		}],
		"order": [[0, 'asc']]
	});
	$('#cadSearch').keyup(function() {
		CADTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	CADTable.columns().iterator('column', function(ctx, idx) {
		$(CADTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="CADTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	CADTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#CADCancelid").click(function() {
    $("#CADDetailBtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#callNo, #callDate, #dispatchTime, #callCategory, #callSubCategory, #callType, #governorateID, #incidentLocation").val('');
    $('#callNo').removeAttr('readonly');
    $("#callDate, #dispatchTime, #callCategory, #callSubCategory, #callType, #governorateID, #incidentLocation").prop('disabled', false);
    $("#stationID option:selected").prop("selected", false);
    $('#stationID').multiselect('refresh');
    //$(".smart-Wizard-CAD").hide();
    $('#offcanvasCAD').offcanvas('hide');
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

//Governorate
$('#governorateID').on('change', function() {
    //alert($(this).find(":selected").val());
    $('#stationID').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
    $('select#stationID').multiselect('rebuild');
    $("#stationID option:selected").prop("selected", false);
    // $('#stationID').multiselect('refresh');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
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
            $('select#stationID').multiselect('rebuild');
        });
    }
});