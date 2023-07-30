hide_id();
$('#Advt_type').on('change', function() {
	if (this.value == 3 || this.value == 4 || this.value == 6 || this.value == 16 || this.value == 17 || this.value == "15C") {
		$("#Product_id, #days_id, #Parking_id").hide();
		$("select#Product_type").val('1000').trigger('change');
	} else if (this.value == 18) {
    $("#Product_id").hide();
		$("#days_id, #Parking_id").show();
		$("select#Product_type").val('1000').trigger('change');
	} else if (this.value == 1000) {
		hide_id();
		$("select#Product_type").val('1000').trigger('change');
	} else {
		$("#Product_id").show();
		$("select#Product_type").val('1000').trigger('change');
	}
});
$("#Product_type").change(function() {
	if (this.value == 7273) {
		$("#national_id").show();
		$("#inational_id").hide();
    $("#days_id, #Parking_id").hide();
	} else if (this.value == 7274) {
		$("#national_id").hide();
		$("#inational_id").show();
    $("#days_id, #Parking_id").hide();
	} else if (this.value == 7275) {
		$("#national_id").show();
		$("#inational_id").show();
    $("#days_id, #Parking_id").hide();
	} else {
		$("#national_id, #inational_id").hide();
	}
});

$("#national_chk").click(function() {
	if ($(this).is(":checked")) {
		$("#national_id").show();
	} else {
		hide_id();
	}
});
$("#inational_chk").click(function() {
	if ($(this).is(":checked")) {
		$("#inational_id").show();
	} else {
		hide_id();
	}
});

function hide_id() {
	$("#Product_id, #days_id, #Parking_id, #meter_id, #Sides_id, #Flags_id, #national_id, #inational_id").hide();
}
//Advertisement Button
function Adv_board() {
	if ($("#board_btn").text() == "Update") {
		boardedit.remove().draw();
		$("#board_btn").text("Add");
	}
	var Adv_object = {};
	var Advt_type = $("#Advt_type option:selected").text();
	var Advt_type_val = $("#Advt_type option:selected").val();
	var Product_type = $("#Product_type option:selected").text();
	var Product_type_val = $("#Product_type option:selected").val();
	var No_product = $("#No_product").val();
	var No_productI = $("#No_productI").val();
	var No_Sides = $("#No_Sides").val();
	var No_Flags = $("#No_Flags").val();
	var No_days = $("#No_days").val();
	var No_Parking = $("#No_Parking").val();
	var Price_advt = $("#Price_advt").val();
	Adv_object.CAdvt_type = Advt_type;
	Adv_object.CAdvt_type_val = Advt_type_val;
	Adv_object.CProduct_type = Product_type;
	Adv_object.CProduct_type_val = Product_type_val;
	Adv_object.CNo_product = No_product;
	Adv_object.CNo_productI = No_productI;
	Adv_object.CNo_Sides = No_Sides;
	Adv_object.CNo_Flags = No_Flags;
	Adv_object.CNo_days = No_days;
	Adv_object.CNo_Parking = No_Parking;
	Adv_object.CPrice_advt = Price_advt;
	var board_table = $('#board_table').DataTable();
	board_table.row.add(Adv_object).draw();
	$('#Advt_type').val('1000').trigger('chosen:updated');
	$("select#Advt_type").val('1000').trigger('change');
	$("#Product_type").val('1000');
	$("#No_product").val('');
	$("#No_productI").val('');
	$("#No_Sides").val('');
	$("#No_Flags").val('');
	$("#No_days").val('');
	$("#No_Parking").val('');
	$("#Price_advt").val('');
}
//edit Advertisement Details
function boardeditfunction(data1) {
	var data = data1.data();
	$("#board_btn").text("Update");
	$('#Advt_type').val(data.CAdvt_type_val).trigger('chosen:updated');
	$("#Advt_type").val(data.CAdvt_type_val).trigger('change');
	$("#Product_type").val(data.CProduct_type_val).trigger('change');
	$("#No_product").val(data.CNo_product);
	$("#No_productI").val(data.CNo_productI);
	$("#No_Sides").val(data.CNo_Sides);
	$("#No_Flags").val(data.CNo_Flags);
	$("#No_days").val(data.CNo_days);
	$("#No_Parking").val(data.CNo_Parking);
	$("#Price_advt").val(data.CPrice_advt);
}
//add Advertisement Details
$(document).ready(function() {
	$('#board_table tbody').on('click', '#editboarddetails', function() {
		var table = $('#board_table').DataTable();
		boardedit = table.row($(this).parents('tr'));
		var data = table.row($(this).parents('tr'));
		boardeditfunction(data);
	});
	$('#board_table tbody').on('click', '#removeboarddetails', function() {
		var table = $('#board_table').DataTable();
		table.row($(this).parents('tr')).remove().draw();
	});
	var board_cols;
	board_cols = [
	    { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent" : "text" },
	    { "mDataProp": "CAdvt_type", sTitle: "Advertisement Type", sType: "string" },
	    { "mDataProp": "CProduct_type", sTitle: "Product Type", sType: "string" },
	    { "mDataProp": "CNo_product", sTitle: "No.of Product(National)", sType: "string" },
	    { "mDataProp": "CNo_productI", sTitle: "No.of Product(International)", sType: "string" },
	    { "mDataProp": "CNo_Sides", sTitle: "No.of Sides", sType: "numeric" },
	    { "mDataProp": "CNo_Flags", sTitle: "No.of Flags", sType: "string" },
			{ "mDataProp": "CNo_days", sTitle: "No.of Days", sType: "string" },
			{ "mDataProp": "CNo_Parking", sTitle: "No.of Parking", sType: "string" },
	    { "mDataProp": "CPrice_advt", sTitle: "Price(OMR)", sType: "string" },
	    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent":
	        "<a id = 'editboarddetails' href='javascript:;' class='text-green'><i class='fa fa-edit'></i></a>"+
	        "<a id = 'removeboarddetails' href='javascript:;' class='text-red'><i class='fa fa-trash-o'></i></a>" }
	];
	var board_table = $('#board_table').DataTable({
		"aoColumns": board_cols,
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"visible": false,
			"targets": [3, 4, 5, 6, 7, 8],
		}],
		"order": [
			[1, 'asc']
		]
	});
	board_table.page.len(5).draw();
	$(".dataTables_length").replaceWith("<label class='dataTables_length hidden'>Show <input type=text class='Adv_page form-control' value='5'>entries</label>");
	$(".Adv_page").keyup(function() {
		board_table.page.len(this.value).draw();
	});
	/* auto increment */
	board_table.on('order.dt search.dt', function() {
		board_table.column(0, {
			search: 'applied',
			order: 'applied'
		}).nodes().each(function(cell, i) {
			cell.innerHTML = i + 1;
		});
	}).draw();
});
