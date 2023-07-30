hide_id();
$("#Advt_type").change(function() {
	if (this.value == 4 || this.value == 23 || this.value == 24 || this.value == 55) {
		hide_id();
		$("#meter_id").show();
	} else if (this.value == 25 || this.value == 43 || this.value == 48 ||
			   this.value == 50  || this.value == 60 || this.value == 61 || this.value == 62 || this.value == 63 || this.value == 64 || this.value == 65) {
		hide_id();
		$("#meter_id, #Product_id").show();
	} else if (this.value == 5) {
		hide_id();
		$("#meter_id, #month_id").show();
	} else if (this.value == 9 || this.value == 10) {
		hide_id();
		$("#meter_id, #month_id, #Poles_id").show();
	} else if (this.value == 32) {
		hide_id();
		$("#month_id, #Sides_id").show();
	} else if (this.value == 35) {
		hide_id();
		$("#month_id, #Ballons_id").show();
	} else if (this.value == 26 || this.value == 36) {
		hide_id();
		$("#Sides_id").show();
	} else if (this.value == 41 || this.value == 42) {
		hide_id();
		$("#Flags_id").show();
	} else if (this.value == 44 || this.value == 45) {
		hide_id();
		$("#month_id, #Parking_id").show();
	} else if (this.value == 13) {
		hide_id();
		$("#Bundle_id").show();
	} else if (this.value == 14) {
		hide_id();
		$("#Design_id").show();
	} else if (this.value == 46 || this.value == 47 || this.value == 58 || this.value == 59) {
		hide_id();
		$("#month_id, #car_id").show();
	} else if (this.value == 56 || this.value == 57) {
		hide_id();
		$("#Umbrella_id, #Chairs_id").show();
		$("#Product_id").show();
	} else if (this.value == 11 || this.value == 12 || this.value == 28 || this.value == 53 || this.value == 54) {
		hide_id();
		$("#month_id").show();
	} else if (this.value == 52) {
		hide_id();
		$("#Equi_id, #Product_id").show();
	} else if (this.value == 6 || this.value == 7 || this.value == 8 || this.value == 21 || this.value == 27 || this.value == 31 ||
			   this.value == 40 || this.value == 49) {
		hide_id();
		$("#Product_id").show();
	} else {
		hide_id();
	}
});

function hide_id() {
	$("#meter_id, #month_id, #Poles_id, #Bundle_id, #Design_id, #Sides_id").hide();
	$("#Extra_id, #Ballons_id, #Flags_id, #Parking_id, #car_id, #Umbrella_id, #Chairs_id, #Equi_id, #Product_id").hide();
}
// Advertising License (New / Renew) - BPHS09 - Advertisement Category
$(document).ready(function() {
	$('#Advt_cat').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#Advt_type').find('option').remove().end().append('<option value="1000">Please select</option>').val('1000').trigger('change');
		$('#Advt_type').trigger("chosen:updated");
		var storedata;
		if ($(this).find(":selected").val() == "1") {
			//alert("1");
			storedata = [{
				value: '13',
				text: 'Ratification of propaganda publications per 1000 paper Bundle.1000 +/- 25 R.O need to be collected.'
			}, {
				value: '14',
				text: 'License to print cinema tickets, entertainment centers, parties and promotional coupons for each design'
			}, {
				value: '21',
				text: 'License to run a mobile advertising bus'
			}, {
				value: '28',
				text: 'Discount or Sale Banner without company / Product Logo'
			}, {
				value: '31',
				text: 'Signing Board With Information - Entry Board'
			}, {
				value: '35',
				text: 'Adevrtizing on Ballons'
			}, {
				value: '36',
				text: 'Information Board - During occassions'
			}, {
				value: '38',
				text: 'Advertizement on the Running Text Sign Board (Public)'
			}, {
				value: '39',
				text: 'Advertizement on the Running Text Sign Board (Private)'
			}, {
				value: '40',
				text: 'Billboards for Cinema'
			}, {
				value: '9',
				text: 'Private land: Advertisement banner on the lighting poles(Parking spaces in commercial complexes)'
			}, {
				value: '10',
				text: 'Public land: Advertisement banner on the lighting poles'
			}, {
				value: '11',
				text: 'Advertising in the form of a stereogram on a public land not exceeding 5 m2'
			}, {
				value: '12',
				text: 'Advertising in the form of a stereotype on the private land of the first party not exceeding 5 m2'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		} else if ($(this).find(":selected").val() == "2") {
			//alert("2");
			storedata = [{
				value: '44',
				text: 'Temporary Advt.in Parking with Fees'
			}, {
				value: '45',
				text: 'Temporary Advt.in Parking without  Fees'
			}, {
				value: '46',
				text: 'Advertizing the car inside the Shopping Mall Including the board'
			}, {
				value: '47',
				text: 'Car Display in front of the shops Including Advertizing Boards'
			}, {
				value: '58',
				text: 'Advt. Cars infront of shops in public land in Park with Parking Fee & including Advt.Board'
			}, {
				value: '59',
				text: 'Advt. Cars infront of shops in public land in Park without Parking Fee & including Advt.Board'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		} else if ($(this).find(":selected").val() == "3") {
			//alert("108");
			storedata = [{
				value: '52',
				text: 'Advt. of the contractor brand / logo in Construction Area Equipments'
			}, {
				value: '60',
				text: 'Advertizement on the Construction walls in Public Land'
			}, {
				value: '61',
				text: 'Advertizement on the Construction walls in Private Land'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		} else if ($(this).find(":selected").val() == "4") {
			//alert("4");
			storedata = [{
				value: '63',
				text: 'Electronic Board in front of the shop'
			}, {
				value: '64',
				text: 'Electronic Board in Private Land / Building Roof / Building Elevation Area'
			}, {
				value: '65',
				text: 'Electronic Board in Public Land'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		} else if ($(this).find(":selected").val() == "5") {
			//alert("5");
			storedata = [{
				value: '53',
				text: 'Advt. using Natural View in Public Land'
			}, {
				value: '54',
				text: 'Advt. using Natural View in Private Land'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		} else if ($(this).find(":selected").val() == "6") {
			//alert("6");
			storedata = [{
				value: '1',
				text: 'Installation of an advertising banner on public land'
			}, {
				value: '2',
				text: 'Installation of banner advertising on private land'
			}, {
				value: '3',
				text: 'Installation of advertising signboards on individual buildings'
			}, {
				value: '4',
				text: 'License to advertise on public land for both sides'
			}, {
				value: '5',
				text: 'License to advertise on private land for each face'
			}, {
				value: '27',
				text: 'Motor Cycle Delivery'
			}, {
				value: '29',
				text: 'Tower infront of the Building with no Information (Public Land)'
			}, {
				value: '30',
				text: 'Tower infront of the Building with no Information (Private Land)'
			}, {
				value: '32',
				text: 'Advertizing on Walking Brides each Side'
			}, {
				value: '55',
				text: 'Sign board for sale / Rent including the commercial name or logo'
			}, {
				value: '56',
				text: 'Advt. Umbrellas and chairs in Public Land'
			}, {
				value: '57',
				text: 'Advt. Umbrellas and chairs in Private Land'
			}];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		} else if ($(this).find(":selected").val() == "7") {
			//alert("8");
			storedata = [{
					value: '6',
					text: 'Licensing of advertising on the roofs and facades of private buildings(For a foreign product or trademark)'
				}, {
					value: '7',
					text: 'Licensing of advertising on the roofs and facades of private buildings(A local product / Gulf or brand)'
				}, {
					value: '8',
					text: 'Change an ad poster ad banners on the roofs of buildings &amp; confronted'
				}, {
					value: '22',
					text: 'Signs of Petrol stations in the form of a tower within the boundaries of the piece, including (2) banner guidance'
				}, /*{
					value: '23',
					text: 'Mainboard Service'
				},*/ {
					value: '24',
					text: 'Mainboard Service - Side Board'
				}, {
					value: '25',
					text: 'board only with Logo'
				}, {
					value: '26',
					text: 'Information / Instructions Board in the street (Public)'
				}, {
					value: '37',
					text: 'Information / Instructions Board in Private Land'
				}, {
					value: '41',
					text: 'Advertizement of Flag in Public Land'
				}, {
					value: '42',
					text: 'Advertizement of Flag in Private Land'
				}, {
					value: '43',
					text: 'Add Logo / company Name / service - Mainboard'
				}, {
					value: '48',
					text: 'Displaying of Umbrella in front of the shops including the commercial name , Logo &amp; Trademark'
				}, {
					value: '49',
					text: 'Advt. on the Building Roof , where company is not part of the building'
				}, {
					value: '50',
					text: 'Advt. on the Building Roof , where company is  part of the building'
				}, {
					value: '51',
					text: 'Sticker on the glass for Advertizement in front of the shops'
				}, {
					value: '62',
					text: 'Advt. Name of image of the Product inside main board'
				}
			];
			$.each(storedata, function(index, value) {
				$('#Advt_type').append($('<option>', {
					value: value.value,
					text: value.text
				})).trigger("chosen:updated");
			});
		}
	});
});
/*================================================================================================*/
//Advertisement Details Button
function AdvLic() {
	if ($("#AdvLicid").text() == "Update") {
		Advedit.remove().draw();
		$("#AdvLicid").text("Add");
	}
	var Adv_product = {};
	var Advt_cat = $("#Advt_cat option:selected").text();
	var Advt_cat_val = $("#Advt_cat option:selected").val();
	var Advt_type = $("#Advt_type option:selected").text();
	var Advt_type_val = $("#Advt_type option:selected").val();
	var No_meters = $("#No_meters").val();
	var No_month = $("#No_month").val();
	var No_poles = $("#No_poles").val();
	var No_Bundle = $("#No_Bundle").val();
	var No_Design = $("#No_Design").val();
	var No_Sides = $("#No_Sides").val();
	var Extra_Meters = $("#Extra_Meters").val();
	var No_Ballons = $("#No_Ballons").val();
	var No_Flags = $("#No_Flags").val();
	var No_Parking = $("#No_Parking").val();
	var No_car = $("#No_car").val();
	var No_Umbrella = $("#No_Umbrella").val();
	var No_Chairs = $("#No_Chairs").val();
	var Price_advt = $("#Price_advt").val();
	var Product_type = $("#Product_type option:selected").text();
	var Product_type_val = $("#Product_type option:selected").val();
	var Equi_id = $("#Equi_id").val();
	Adv_product.CAdvt_cat = Advt_cat;
	Adv_product.CAdvt_cat_val = Advt_cat_val;
	Adv_product.CAdvt_type = Advt_type;
	Adv_product.CAdvt_type_val = Advt_type_val;
	Adv_product.CNo_meters = No_meters;
	Adv_product.CNo_month = No_month;
	Adv_product.CNo_poles = No_poles;
	Adv_product.CNo_Bundle = No_Bundle;
	Adv_product.CNo_Design = No_Design;
	Adv_product.CNo_Sides = No_Sides;
	Adv_product.CExtra_Meters = Extra_Meters;
	Adv_product.CNo_Ballons = No_Ballons;
	Adv_product.CNo_Flags = No_Flags;
	Adv_product.CNo_Parking = No_Parking;
	Adv_product.CNo_car = No_car;
	Adv_product.CNo_Umbrella = No_Umbrella;
	Adv_product.CNo_Chairs = No_Chairs;
	Adv_product.CPrice_advt = Price_advt;
	Adv_product.CProduct_type = Product_type;
	Adv_product.CProduct_type_val = Product_type_val;
	Adv_product.CEqui_id = Equi_id;
	var Adv_table = $('#Adv_table').DataTable();
	Adv_table.row.add(Adv_product).draw();
	$("select#Advt_cat").val('1000').trigger('change');
	$('#Advt_type').val('1000').trigger('chosen:updated');
	$("select#Advt_type").val('1000').trigger('change');
	$("#No_meters").val('');
	$("#No_month").val('');
	$("#No_poles").val('');
	$("#No_Bundle").val('');
	$("#No_Design").val('');
	$("#No_Sides").val('');
	$("#Extra_Meters").val('');
	$("#No_Ballons").val('');
	$("#No_Flags").val('');
	$("#No_Parking").val('');
	$("#No_car").val('');
	$("#No_Umbrella").val('');
	$("#No_Chairs").val('');
	$("#Price_advt").val('');
	$("#Product_type").val('1000');
	$("#Equi_id").val('');
}
//edit Advertisement Details
function Adveditfunction(data1) {
	var data = data1.data();
	$("#AdvLicid").text("Update");
	$("#Advt_cat").val(data.CAdvt_cat_val).trigger('change');
	$('#Advt_type').val(data.CAdvt_type_val).trigger('chosen:updated');
	$("#Advt_type").val(data.CAdvt_type_val).trigger('change');
	$("#No_meters").val(data.CNo_meters);
	$("#No_month").val(data.CNo_month);
	$("#No_poles").val(data.CNo_poles);
	$("#No_Bundle").val(data.CNo_Bundle);
	$("#No_Design").val(data.CNo_Design);
	$("#No_Sides").val(data.CNo_Sides);
	$("#Extra_Meters").val(data.CExtra_Meters);
	$("#No_Ballons").val(data.CNo_Ballons);
	$("#No_Flags").val(data.CNo_Flags);
	$("#No_Parking").val(data.CNo_Parking);
	$("#No_car").val(data.CNo_car);
	$("#No_Umbrella").val(data.CNo_Umbrella);
	$("#No_Chairs").val(data.CNo_Chairs);
	$("#Price_advt").val(data.CPrice_advt);
	$("#Product_type").val(data.CProduct_type_val).trigger('change');
	$("#Equi_id").val(data.CEqui_id);
}
//add Advertisement Details
$(document).ready(function() {
	$('#Adv_table tbody').on('click', '#editAdvdetails', function() {
		var table = $('#Adv_table').DataTable();
		Advedit = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		Adveditfunction(data);
	});
	$('#Adv_table tbody').on('click', '#removeAdvdetails', function() {
		var table = $('#Adv_table').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
	var cols = [
	{ "mDataProp": "msno", sTitle: "S.No", sType: "string", width: "5%", "defaultContent" : "text" },
	{ "mDataProp": "CAdvt_cat", sTitle: "Advertisement Category", sType: "string" },
	{ "mDataProp": "CAdvt_type", sTitle: "Advertisement Type", sType: "string" },
	{ "mDataProp": "CNo_meters", sTitle: "No.of Meters", sType: "string" },
	{ "mDataProp": "CNo_month", sTitle: "No.of Month", sType: "string" },
	{ "mDataProp": "CNo_poles", sTitle: "No.of Poles", sType: "numeric" },
	{ "mDataProp": "CNo_Bundle", sTitle: "No.of Bundle", sType: "string" },
	{ "mDataProp": "CNo_Design", sTitle: "No.of Design", sType: "string" },
	{ "mDataProp": "CNo_Sides", sTitle: "No.of Sides", sType: "string" },
	{ "mDataProp": "CExtra_Meters", sTitle: "Extra Meters", sType: "string" },
	{ "mDataProp": "CNo_Ballons", sTitle: "No.of Ballons", sType: "numeric" },
	{ "mDataProp": "CNo_Flags", sTitle: "No.of Flags", sType: "numeric" },
	{ "mDataProp": "CNo_Parking", sTitle: "No.of Parking", sType: "numeric" },
	{ "mDataProp": "CNo_Parking", sTitle: "No.of car", sType: "numeric" },
	{ "mDataProp": "CNo_Umbrella", sTitle: "No.of Umbrella", sType: "numeric" },
	{ "mDataProp": "CNo_Chairs", sTitle: "No.of Chairs", sType: "numeric" },
	{ "mDataProp": "CProduct_type", sTitle: "Product Type", sType: "numeric" },
	{ "mDataProp": "CEqui_id", sTitle: "No.of Equipments", sType: "numeric" },
	{ "mDataProp": "CPrice_advt", sTitle: "Price (OMR)", width: "9%", sType: "numeric" },
	{ "mDataProp": "Actions", sTitle: "Actions", width: "7%", sType: "string", "defaultContent":
			"<a id = 'editAdvdetails' href='javascript:;' class='text-green'><i class='fa fa-edit'></i></a>"+
			"<a id = 'removeAdvdetails' href='javascript:;' class='text-red'><i class='fa fa-trash-o'></i></a>" }
	];
	var Adv_table = $('#Adv_table').DataTable({
		"aoColumns": cols,
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"visible": false,
			"targets": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17], // hiding td
		}],
		"order": [
			[1, 'asc']
		]
	});
	Adv_table.page.len(5).draw();
	$(".dataTables_length").replaceWith("<label class='dataTables_length hidden'>Show <input type=text class='adv_page form-control form-control-sm' value='5'> entries</label>");
	$(".adv_page").keyup(function() {
		Adv_table.page.len(this.value).draw();
	});
	/* auto increment */
	Adv_table.on('order.dt search.dt', function() {
		Adv_table.column(0, {
			search: 'applied',
			order: 'applied'
		}).nodes().each(function(cell, i) {
			cell.innerHTML = i + 1;
		});
	}).draw();
});
