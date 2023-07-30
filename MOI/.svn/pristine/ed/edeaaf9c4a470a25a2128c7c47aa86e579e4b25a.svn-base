hide_id();
$(document).ready(function() {
	$("#Vehicle_Weight").change(function() {
		$('#Advt_type').find('option').remove().end().append('<option value="1000">الرجاء الاختيار</option>').val('1000');
		var storedata;
		if (this.value <= 2999) {
			//alert("<2999");
			storedata = [{
				value: '16',
				text: 'الإعلان على أحد جوانب الشاحنة'
			}, {
				value: '17',
				text: 'ملصق إعلاني على كامل جسم الشاحنة أو صبغ سيارة بالكامل'
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
				text: 'الإعلان على أحد جوانب الشاحنة'
			}, {
				value: '20',
				text: 'ملصق إعلاني على كامل جسم الشاحنة أو صبغ سيارة بالكامل'
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
		$('#Advt_type').find('option').remove().end().append('<option value="1000">الرجاء الاختيار</option>').val('1000');
		var storedata;
		if (this.value == 7267) {
			storedata = [{
				value: '33',
				text: 'الإعلان على سيارات الأجرة   (كامل)'
			}, {
				value: '34',
				text: 'الإعلان على سيارات الأجرة   (جزئي)'
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
