var Type_Service = new Array("New", "Alternative", "Retaining the Well", "Deepen & Maintenance", "Demolish", "Change Type of Use", "Dispensing/Exploitation of the Ministry's Wells", "Pump/Desalination Unit", "Re-use", "Transfer/Sale/Extension");
var Sub_type = new Array();
Sub_type[0] = "";
Sub_type[1] = "New Drilling well for Individual|New Drilling Well for Group|New Drilling Well for Public Use|New Drilling Well for Governmental Institution|New Drilling Well for Public Authority for Electricity and Water|New Drilling Well to Help Falaj at the Expense of Residents|New Drilling Well to Help Falaj at the Expense of Ministry|New Drilling Well for Factory Purification and Water Bottling|New Drilling Well for Oil Fields|New Drilling Well for Temporarily for the Purpose of Soil Drying|New Drilling Well for Temporarily for Soil Testing|Drilling New Well for Development Projects|Drilling New Well for Industrial Projects|Drilling New Well for Commercial Projects|Drilling New Well for Tourism Projects|Drilling New Well for Agriculture Projects";
Sub_type[2] = "Alternative  Drilling of Wells Similar Inside the Boundaries of the Site|Similar Drilling Alternative Wells Outside the Boundaries of the Site|Alternative Drilling Well not Similar Outside the Boundaries of the Site|Alternative  Drilling of Wells from Open to Hole Within the Boundaries of the Site|Alternative  Drilling of wells from Hole to Open Within the Boundaries of the Site";
Sub_type[3] = "Retaining the Well Substituent(old)|Retaining the Wells Alternative and Substituent"
Sub_type[4] = "Deepen Open Wells Manually|Deepen Open Wells Automatically|Deepening Wells on Automatically Drilling|Maintenance and Cleaning of the Wells|Expanding the Diameter of the Wells";
Sub_type[5] = "Demolish Wells";
Sub_type[6] = "Change the Type of Use of the Well to Agriculture|Change the Type of Use of the Well for Domestic Purposes|Change the Type of Use of the Well for Public Benefit|Change the Type of Use the Well for Drinking|Change the Type of Use to Selling Water from a Well|Change the Type of Use of the Well to Feed Animals|Changing Type of the Use of the Well to Assist Falaj|Changing the Type of the Use of the Well to Commercial|Changing the Type of the Use of the Well to Industrial Projects|Change the type of well use for monitoring|Change the type of well use for Drying|Changing the Type of the Use of the Well to Tourism";
Sub_type[7] = "Dispensing the Ministry Well for Change of Owner ship / Titling|Exploitation Ministry Wells for a Temporary Period|Exploitation Ministry Wells for a Development Projects|Exploitation Ministry Wells for Companies Concession Areas";
Sub_type[8] = "Add Pump to Wells|Replacement Pump on Another Well with Higher Capacity|Installation of Water Desalination Units on the Wsells";
Sub_type[9] = "Re-use of Un-working Well (Confined and Registered)|Re-use of Wells for Development Projects|Re-use of Wells for Companies Concession Areas";
Sub_type[10] = "Transfer of Water from a Well|Selling Water from a Well|The Extension of a Water Pipeline from a Well";

function data_Service(country_id) {
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(country_id);
	option_str.length = 0;
	option_str.options[0] = new Option('Please select', '1000');
	option_str.selectedIndex = 0;
	for (var i = 0; i < Type_Service.length; i++) {
		option_str.options[option_str.length] = new Option(Type_Service[i], [i + 1]);
	}
}

function sub_Service(state_id, state_index) {
	//alert(length);
	var option_str = document.getElementById(state_id);
	option_str.length = 0; // Fixed by Julian Woods
	option_str.options[0] = new Option('Please select', '1000');
	option_str.selectedIndex = 0;
	var state_arr = Sub_type[state_index].split("|");
	for (var i = 0; i < state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i], [i + 101]);
	}
}
$(document).ready(function() {
	$('#SubService').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#Sub_Service').find('option').remove().end().append('<option value="1000">Please select</option>').val('1000');
		$('#Sub_SubService').find('option').remove().end().append('<option value="1000">Please select</option>').val('1000');
		if ($(this).find(":selected").val() == "106") {
			//alert("hi nag");
			var storedata = [{
				value: '109',
				text: 'Requesting license for Establishing Water Purification and Bottling factory on existing well'
			}, {
				value: '110',
				text: 'Requesting license to Increase the Production Capacity of factory on an Existing Well'
			}, {
				value: '111',
				text: 'Requesting license for Drilling a new well to establish Water purification and bottling factory'
			}, {
				value: '112',
				text: 'Requesting license for Drilling additional Well for existing factory'
			}];
			$.each(storedata, function(index, value) {
				$('#Sub_Service').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "107") {
			//alert("107");
			var storedata = [{
				value: '115',
				text: 'Requesting of Drilling New Well for New Project'
			}, {
				value: '116',
				text: 'Requesting to Exploit Existing well in the location of Establish the Project'
			}];
			$.each(storedata, function(index, value) {
				$('#Sub_Service').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
			var SubService = [{
				value: '119',
				text: 'Production and marketing of vegetables'
			}, {
				value: '120',
				text: 'Establishment of date filling Factory'
			}, {
				value: '121',
				text: 'Open Agricultural Projects'
			}, {
				value: '122',
				text: 'Agricultural Fertilizer Project'
			}];
			$.each(SubService, function(index, value) {
				$('#Sub_SubService').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "108") {
			//alert("108");
			var storedata = [{
				value: '117',
				text: 'Requesting of Drilling New Well for New Project'
			}, {
				value: '118',
				text: 'Requesting to exploit existing well in the location of establish the project.'
			}];
			$.each(storedata, function(index, value) {
				$('#Sub_Service').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
			var SubService = [{
				value: '123',
				text: 'Breeding, Production and Marketing of Poultry'
			}, {
				value: '124',
				text: 'Breeding of Fertilized Eggs (Hatcheries)'
			}, {
				value: '125',
				text: 'Animal Husbandry.'
			}, {
				value: '126',
				text: 'Beekeeping'
			}];
			$.each(SubService, function(index, value) {
				$('#Sub_SubService').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "109") {
			//alert("hi nag");
			var storedata = [{
				value: '113',
				text: 'Requesting license for Drilling new Well for Tourist Camps'
			}, {
				value: '114',
				text: 'Requesting license for Drilling new Well for Tourist Resorts'
			}];
			$.each(storedata, function(index, value) {
				$('#Sub_Service').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		}
	});
});
// Well Water Drilling Contractors Request - BPWS03
$(document).ready(function() {
	$('#Name_Drilling').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#Drilling_contractor').find('option').remove().end().append('<option value="1000">Please select</option>').val('1000');
		if ($(this).find(":selected").val() == "101") {
			//alert("hi nag");
			var storedata = [{
				value: '301',
				text: 'Registration New contractor for drilling the wells Autmatic'
			}, {
				value: '302',
				text: 'Registration New contractor for drilling the wells Manual'
			}];
			$.each(storedata, function(index, value) {
				$('#Drilling_contractor').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "102") {
			//alert("107");
			var storedata = [{
				value: '303',
				text: 'Renewal of the registration of contractor for Drilling  the water wells Autmatic'
			}, {
				value: '304',
				text: 'Renewal of the registration of contractor for Drilling  the water wells Manual'
			}];
			$.each(storedata, function(index, value) {
				$('#Drilling_contractor').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "103") {
			//alert("108");
			var storedata = [{
				value: '305',
				text: 'Adding Water Well Drilling Equipment for the Contractor Autmatic'
			}, {
				value: '306',
				text: 'Adding Water Well Drilling Equipment for the Contractor Manual'
			}];
			$.each(storedata, function(index, value) {
				$('#Drilling_contractor').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "104") {
			//alert("108");
			var storedata = [{
				value: '307',
				text: 'Change registration type of the contractor to manual contractor'
			}, {
				value: '308',
				text: 'Change registration type of the contractor to Autmatic contractor'
			}, {
				value: '309',
				text: 'Change the profession of labor Activity'
			}, {
				value: '310',
				text: 'Practicing drilling activity in Two fields'
			}];
			$.each(storedata, function(index, value) {
				$('#Drilling_contractor').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "105") {
			//alert("108");
			var storedata = [{
				value: '311',
				text: 'Waiver of activity Drilling of water wells'
			}, {
				value: '312',
				text: 'Waiver of Labor Activity for drilling wells'
			}];
			$.each(storedata, function(index, value) {
				$('#Drilling_contractor').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if ($(this).find(":selected").val() == "106") {
			//alert("108");
			var storedata = [{
				value: '313',
				text: 'Drilling of new water wells Labor'
			}, {
				value: '314',
				text: 'Drilling of water wells of departure'
			}, {
				value: '315',
				text: 'Transfer of labor to drilling water well Activity'
			}];
			$.each(storedata, function(index, value) {
				$('#Drilling_contractor').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		}
	});
});
