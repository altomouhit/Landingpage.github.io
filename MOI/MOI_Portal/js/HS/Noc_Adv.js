hide_id();
$(document).ready(function() {
	$("#Vehicle_Weight").change(function() {
		$('#Advt_type').find('option').remove().end().append('<option value="1000">Please select</option>').val('1000');
		var storedata;
		if (this.value <= 2999) {
			//alert("<2999");
			storedata = [{
				value: '16',
				text: 'Advertising on one side of the truck (NOC Vehicles)'
			}, {
				value: '17',
				text: 'Advertisement poster on the entire body of the truck or paint a car completely (NOC Vehicles)'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if (this.value >= 3000) {
			//alert("> 3000");
			storedata = [{
				value: '19',
				text: 'Advertising on one side of the truck'
			}, {
				value: '20',
				text: 'Advertisement poster on the entire body of the truck or paint a car completely'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		}
	});
	$("#UsageType_VI").change(function() {
		$('#Advt_type').find('option').remove().end().append('<option value="1000">Please select</option>').val('1000');
		var storedata;
		if (this.value == 7267) {
			storedata = [{
				value: '33',
				text: 'Advertizing on Taxi (Full)'
			}, {
				value: '34',
				text: 'Advertizing on Taxi (Partial)'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		} else if (this.value == 7268) {
			$('#Vehicle_Weight').trigger('change');
		}
	});
	$("#request_type").change(function() {
		if (this.value == 7218) {
			$("#InspectionID, #typeid, #Expiry_ID , #Update_Adv").show();
			$("#form1Submit").hide();
			Advclick("remove");
			$("#Button").prop("disabled", true);
		} else if (this.value == 7254) {
			$("#InspectionID, #typeid, #Expiry_ID , #Update_Adv").show();
			$("#form1Submit").hide();
			Advclick("add");
		} else {
			hide_id();
			$("#InspectionID, #Update_Adv").hide();
			$("#form1Submit").show();
			Advclick("remove");
		}
	});
	$("#Taxi_Type").change(function() {
		if (this.value == 7291) {
			$('#Vehicle_Weight').trigger('change');
		} else {
			$('#UsageType_VI').trigger('change');
		}
	});
});

function hide_id() {
	$("#Sides_id, #Update_Adv").hide();
	$("#InspectionID, #typeid, #Expiry_ID").hide();
}
