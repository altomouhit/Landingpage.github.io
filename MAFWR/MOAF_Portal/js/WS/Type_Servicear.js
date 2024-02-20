var Type_Service = new Array("جديد", 
							 "بديلة",
							 "الابقاء على البئر",
							 "التعميق / الصيانة",
							 "ردم",
							 "تغير نوع الاستخدام",
							 "أستغناء / استغلال ابار الوزارة",
							 "مضخة/وحدة تحلية المياه",
							 "اعادة استخدام",
							 "نقل / بيع / تمديد");
var Sub_type = new Array();
Sub_type[0] = "";
Sub_type[1] = "حفر بئر فردية جديدة|حفر بئر جديدة جماعية|حفر بئر جديدة للاستخدام العام|حفر بئر جديدة للمؤسسة حكومية|حفر بئر جديدة للهيئة العامة للكهرباء والمياه|حفر بئر جديدة لمساعدة فلج على نفقة الأهالي|حفر بئر جديدة لمساعدة فلج على نفقة الوزارة|حفر بئر جديدة لمصنع تنقية وتعبئة المياه|حفر بئر جديدة لحقول النفط|حفر بئر جديدة مؤقتة لغرض تجفيف التربة|حفر بئر جديدة مؤقتة لفحص التربة|حفر بئر جديدة لمشاريع تنموية|حفر بئر جديدة لمشاريع صناعية|حفر بئر جديدة لمشاريع تجارية|حفر بئر جديدة لمشاريع سياحية|حفر بئر جديدة لمشاريع زراعية";
Sub_type[2] = "حفر بئر بديلة مماثلة داخل حدود الموقع|حفر بئر بديلة مماثلة خارج حدود الموقع|حفر بئر بديلة غير مماثلة خارج حدود الموقع|حفر بئر بديلة من مفتوحة الى ثقب داخل حدود الموقع|حفر بئر بديلة من ثقب إلى  مفتوحة داخل حدود الموقع";
Sub_type[3] = "الابقاء على البئر المستبدلة (القديمة)|الإبقاء على البئرين البديلة والمستبدلة"
Sub_type[4] = "تعميق بئر مفتوحة يدويا|تعميق بئر مفتوحة آليا|تعميق بئر على هيئة ثقب اليا|صيانة وتنظيف بئر|توسيع قطر بئر";
Sub_type[5] = "ردم بئر";
Sub_type[6] = "تغيير نوع استخدام البئر الى زراعي|تغيير نوع استخدام البئر للأغراض المنزلية|تغيير نوع استخدام البئر للمنفعة العامة|تغيير نوع استخدام البئر للشرب|تغيير نوع استخدام البئر للبيع المياة|تغيير نوع البئر لسقي الحيوانات|تغيير نوع استخدام البئر لمساعدة فلج|تغيير نوع استخدام البئر للأغراض التجارية|تغيير نوع استخدام البئر للأغراض الصناعية|تغيير نوع استخدام البئر للمراقبة|تغيير نوع استخدام البئر للتجفيف|تغيير نوع استخدام البئر الى سياحي";
Sub_type[7] = "الاستغناء عن ابار الوزارة تمليك|استغلال ابار الوزارة لفترة مؤقتة|استغلال ابار الوزارة لمشاريع تنموية|استغلال ابار الوزارة لشركات مناطق الامتياز";
Sub_type[8] = "إضافة مضخة على بئر|استبدال مضخة على بئر بأخرى ذات سعة أكبر|تركيب وحدة تحلية مياة على بئر";
Sub_type[9] = "إعادة استخدام بئر غير عاملة (محصورة ومسجلة) |إعادة استخدام بئر لمشارع تنموية| إعادة استخدام بئر لشركات مناطق الامتياز";
Sub_type[10] = "نقل مياة من بئر|بيع مياة من بئر|تمديد أنابيب مياة من بئر";

function data_Service(country_id) {
	// given the id of the <select> tag as function argument, it inserts <option> tags
	var option_str = document.getElementById(country_id);
	option_str.length = 0;
	option_str.options[0] = new Option('الرجاء الإختيار...', '1000');
	option_str.selectedIndex = 0;
	for (var i = 0; i < Type_Service.length; i++) {
		option_str.options[option_str.length] = new Option(Type_Service[i], [i + 1]);
	}
}

function sub_Service(state_id, state_index) {
	//alert(length);
	var option_str = document.getElementById(state_id);
	option_str.length = 0; // Fixed by Julian Woods
	option_str.options[0] = new Option('الرجاء الإختيار...', '1000');
	option_str.selectedIndex = 0;
	var state_arr = Sub_type[state_index].split("|");
	for (var i = 0; i < state_arr.length; i++) {
		option_str.options[option_str.length] = new Option(state_arr[i], [i + 101]);
	}
}

$(document).ready(function() {
	$('#SubService').on('change', function() {
		//alert($(this).find(":selected").val());
		$('#Sub_Service').find('option').remove().end().append('<option value="1000">الرجاء الإختيار...</option>').val('1000');
		$('#Sub_SubService').find('option').remove().end().append('<option value="1000">الرجاء الإختيار...</option>').val('1000');
		if ($(this).find(":selected").val() == "106") {
			//alert("hi nag");
			var storedata = [{
				value: '109',
				text: 'طلب ترخيص لإقامة مصنع تنقية وتعبئة مياه على بئر القأئمة'
			}, {
				value: '110',
				text: 'طلب ترخيص لزيادة الطاقة الإنتاجية لمصنع على بئر قأئمة'
			}, {
				value: '111',
				text: 'طلب ترخيص حفر بئر جديد لإقامة مصنع تنقية وتعبئة مياه'
			}, {
				value: '112',
				text: 'طلب ترخيص حفر بئر إضافية لمصنع قائم'
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
				text: 'طلب حفر بئر جديدة لإقامة مشروع'
			}, {
				value: '116',
				text: 'طلب استغلال بئر قأئمة بالموقع لإقامة المشروع'
			}];
			$.each(storedata, function(index, value) {
				$('#Sub_Service').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
			var SubService = [{
				value: '119',
				text: 'إنتاج وتسويق الخضراوات'
			}, {
				value: '120',
				text: 'إقامة مصنع تعبئة التمور'
			}, {
				value: '121',
				text: 'المشاريع الزراعية المفتوحة'
			}, {
				value: '122',
				text: 'مشروع المخصبات الزراعية'
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
				text: 'طلب حفر آبار جديدة لمشروع جديد'
			}, {
				value: '118',
				text: 'طلب استغلال البئر القائمة في موقع إنشاء المشروع.'
			}];
			$.each(storedata, function(index, value) {
				$('#Sub_Service').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
			var SubService = [{
				value: '123',
				text: 'تربية وإنتاج وتسويق الدواجن اللاحمة'
			}, {
				value: '124',
				text: 'تربية البيض المخصب (الفقاسات)'
			}, {
				value: '125',
				text: 'تربية الحيوان'
			}, {
				value: '126',
				text: 'تربية النحل'
			}];
			$.each(SubService, function(index, value) {
				$('#Sub_SubService').append($('<option>', {
					value: value.value,
					text: value.text
				}));
			});
		}
		else if ($(this).find(":selected").val() == "109") {
			//alert("hi nag");
			var storedata = [{
				value: '113',
				text: 'طلب ترخيص حفر بئر جديدة للمخيمات السياحية'
			}, {
				value: '114',
				text: 'طلب ترخيص حفر بئر جديدة للمنتجعات السياحية'
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
		$('#Drilling_contractor').find('option').remove().end().append('<option value="1000">الرجاء الإختيار...</option>').val('1000');
		if ($(this).find(":selected").val() == "101") {
			//alert("hi nag");
			var storedata = [{
				value: '301',
				text: 'تسجيل مقاول حفر ابار جديد آلي'
			}, {
				value: '302',
				text: 'تسجيل مقاول حفر ابار جديد يدوي'
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
				text: 'تجديد تسجيل مقاول حفر ابار مياة الي'
			}, {
				value: '304',
				text: 'تجديد تسجيل مقاول حفر ابار جديد يدوي'
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
				text: 'إضافة معدات حفر ابار المياة لمقاول الي'
			}, {
				value: '306',
				text: 'إضافة معدات حفر ابار المياة لمفاول يدوي'
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
				text: 'تغيير نوع تسجيل المقاول الى مقاول يدوي'
			}, {
				value: '308',
				text: 'تغيير نوع تسجيل المقاول الى مقاول الي'
			}, {
				value: '309',
				text: 'تغيير مهنة عمالة نشاط حفر ابار المياة'
			}, {
				value: '310',
				text: 'مزاولة نشاط حفر ابار في المجالين'
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
				text: 'التنازل عن نشاط حفر ابار المياة'
			}, {
				value: '312',
				text: 'التنازل عن عمالة حفر ابار المياة'
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
				text: 'عمالة حفر ابار المياة الجديدة'
			}, {
				value: '314',
				text: 'عمالة حفر ابار المياة لسبب المغادرة'
			}, {
				value: '315',
				text: 'نقل عمالة الى نشاط حفر ابارة المياة'
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
