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
/*================================================================================================*/
// Advertising License (New / Renew) - BPHS09 - Advertisement Category
$(document).ready(function() {
	$('#Advt_cat').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#Advt_type').find('option').remove().end().append('<option value="1000">الرجاء الاختيار</option>').val('1000').trigger('change');
		$('#Advt_type').trigger("chosen:updated");
		var storedata;
		if ($(this).find(":selected").val() == "1") {
			//alert("1");
			storedata = [{
				value: '13',
				text: 'التصديق على المنشورات الدعائية لكل 1000 ورقة'
			}, {
				value: '14',
				text: 'ترخيص طباعة تذاكر دور السينما ومراكز فنون التسلية والترفيه والحفلات والكوبونات الترويجية لكل تصميم'
			}, {
				value: '21',
				text: 'ترخيص تسيير حافلة إعلانية متنقلة'
			}, {
				value: '28',
				text: 'لافتة مؤقتة ترويجية للتخفيضات والتنزيلات (بدون شعار الشركة أو المنتج) '
			}, {
				value: '31',
				text: 'لافتة إعلانية على شكل بوابة دخول'
			}, {
				value: '35',
				text: 'الإعلان على منطاد '
			}, {
				value: '36',
				text: 'لافتة إرشادية مؤقتة لمناسبة لمدة شهر بحد أقصى'
			}, {
				value: '38',
				text: 'إعلان متحرك مؤقت على موقع عام لمدة شهر بحد أقصى'
			}, {
				value: '39',
				text: 'إعلان متحرك مؤقت على أرض خاصة لمدة شهر بحد أقصى'
			}, {
				value: '40',
				text: 'لوحة إعلانية لعرض الأفلام على مباني دور السينما'
			}, {
				value: '9',
				text: 'رض خاصة :لافتة إعلانية على أعمدة الإنارة (مواقف السيارات بالمجمعات التجارية)'
			}, {
				value: '10',
				text: 'أرض عامة : لافتة إعلانية على أعمدة الإنارة'
			}, {
				value: '11',
				text: 'الإعلان على شكل مجسم على أرض عامة بما لا يتجاوز 5 م2'
			}, {
				value: '12',
				text: 'الإعلان على شكل مجسم على أرض خاصة للطرف الأول بما لا يتجاوز 5 م2'
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
				text: 'الإعلان المؤقت للترويج عن منتج أو خدمة على مواقف السيارات الخاضعة للرسوم للموقف الواحد( يشمل اللوحات الإعلانية الموجودة على المنصة )'
			}, {
				value: '45',
				text: 'الإعلان المؤقت للترويج عن منتج أو خدمة بالمواقف العامة غير الخاضعة للرسوم أو بالأماكن العامة للموقف الواحد(يشمل اللوحات الإعلانية الموجودة على المنصة)'
			}, {
				value: '46',
				text: 'عرض سيارة أمام المحلات التجارية على الأراضي العامة الخاضعة لرسوم العدادات (يشمل اللوحات الاعلانية بجانب السيارة)'
			}, {
				value: '47',
				text: 'عرض سيارة أمام المحلات التجارية على الأراضي العامة غير الخاضعة لرسوم العدادات(يشمل اللوحات الاعلانية بجانب السيارة)'
			}, {
				value: '58',
				text: 'عرض سيارة داخل المجمعات التجارية (يشمل اللوحات الاعلانية بجانب السيارة)'
			}, {
				value: '59',
				text: 'عرض سيارة أمام المحلات التجارية على الأراضي الخاصة (يشمل اللوحات الاعلانية بجانب السيارة)'
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
				text: 'الإعلان لإسم مقاول المشروع على معدّة ثابتة بموقع المشروع'
			}, {
				value: '60',
				text: 'الإعلان على سور البناء بالأراضي العامة'
			}, {
				value: '61',
				text: 'لإعلان على سور البناء بالأراضي الخاصة '
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
				text: 'لافتة إلكترونية إعلانية على واجهة المحل'
			}, {
				value: '64',
				text: 'لافتة إلكترونية إعلانية على أرض خاصة / واجهة مبنى / سطح مبنى'
			}, {
				value: '65',
				text: 'لافتة إلكترونية إعلانية على أرض عامة'
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
				text: 'الإعلان بإستخدام منظر طبيعي على أرض عامة'
			}, {
				value: '54',
				text: 'الإعلان بإستخدام منظر طبيعي على أرض خاصة'
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
				text: 'تركيب لافتة اعلانية على الأراضي العامة '
			}, {
				value: '2',
				text: 'تركيب لافتة اعلانية على الأراضي الخاصة '
			}, {
				value: '3',
				text: 'تركيب لافتة اعلانية على المباني الخاصة '
			}, {
				value: '4',
				text: 'ترخيص إعلان على أرض عامة للوجهين'
			}, {
				value: '5',
				text: 'ترخيص إعلان على أرض خاصة لكل وجه '
			}, {
				value: '27',
				text: 'الإعلان على الدراجة النارية (يسمح فقط لدراجات توصيل الطلبات)'
			}, {
				value: '29',
				text: 'ترخيص برج للأسماء التجارية على أرض عامة '
			}, {
				value: '30',
				text: 'ترخيص برج للأسماء التجارية على أرض خاصة'
			}, {
				value: '32',
				text: 'الإعلان على جسور المشاة لكل وجه'
			}, {
				value: '55',
				text: 'ترخيص تركيب لافتة إعلانية للبيع أو للإيجار على واجهة المبنى (تحتوي على الاسم التجاري أو الشعار)'
			}, {
				value: '56',
				text: 'الإعلان عن منتج أو أسم تجاري على المظلات أو الكراسي على أرض عامة'
			}, {
				value: '57',
				text: 'الإعلان عن منتج أو أسم تجاري على المظلات أو الكراسي على أرض خاصة'
			}];
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
	} else {}
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
	/*var Product_type = $("#Product_type option:selected").text();
	var Product_type_val = $("#Product_type option:selected").val();*/
	var Equi_id = $("#Equi_id").val();
	Adv_product.CAdvt_cat = Advt_cat;
	Adv_product.CAdvt_cat_val =Advt_cat_val;
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
	/*Adv_product.CProduct_type = Product_type;
	Adv_product.CProduct_type_val = Product_type_val;*/
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
	//$("#Product_type").val('1000');
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
	//$("#Product_type").val(data.CProduct_type_val);
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
	{ "mDataProp": "msno", sTitle: "الرقم المتسلسل", sType: "string", width: "9%", "defaultContent" : "text" },
	{ "mDataProp": "CAdvt_cat", sTitle: "فئة الإعلان ", sType: "string" },
	{ "mDataProp": "CAdvt_type", sTitle: "نوع الإعلان", sType: "string" },
	{ "mDataProp": "CNo_meters", sTitle: "عدد الأمتار", sType: "string" },
	{ "mDataProp": "CNo_month", sTitle: "عدد الأشهر", sType: "string" },
	{ "mDataProp": "CNo_poles", sTitle: "عدد الأعمدة", sType: "numeric" },
	{ "mDataProp": "CNo_Bundle", sTitle: "عدد الحزم", sType: "string" },
	{ "mDataProp": "CNo_Design", sTitle: "عدد التصاميم", sType: "string" },
	{ "mDataProp": "CNo_Sides", sTitle: "عدد الجوانب", sType: "string" },
	{ "mDataProp": "CExtra_Meters", sTitle: "أمتار إضافية", sType: "string" },
	{ "mDataProp": "CNo_Ballons", sTitle: "عدد البالونات", sType: "numeric" },
	{ "mDataProp": "CNo_Flags", sTitle: "عدد الأعلام", sType: "numeric" },
	{ "mDataProp": "CNo_Parking", sTitle: "عدد المواقف", sType: "numeric" },
	{ "mDataProp": "CNo_Parking", sTitle: "عدد السيارات", sType: "numeric" },
	{ "mDataProp": "CNo_Umbrella", sTitle: "عدد المظلات", sType: "numeric" },
	{ "mDataProp": "CNo_Chairs", sTitle: "عدد الكراسي", sType: "numeric" },
	//{ "mDataProp": "CProduct_type", sTitle: " نوع المنتج", sType: "numeric" },
	{ "mDataProp": "CEqui_id", sTitle: "عدد المعدات", sType: "numeric" },
	{ "mDataProp": "CPrice_advt", sTitle: "المبلغ(ريال عماني)", width: "10%", sType: "numeric" },
	{ "mDataProp": "Actions",
	    sTitle: "الاجراء", width: "7%", sType: "string",
	    "defaultContent": "<a id = 'editAdvdetails' href='javascript:;' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeAdvdetails' href='javascript:;' class='text-red'><i class='fa fa-trash-o'></i></a>"
	}];
	var Adv_table = $('#Adv_table').DataTable({
		"aoColumns": cols,
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"visible": false,
			"targets": [3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16], // hiding td
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