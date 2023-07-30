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

function hide_id() {
	$("#Product_id, #days_id, #Parking_id, #national_id, #inational_id").hide();
}
//Advertisement Details Button
 function AdvLic() {
    if ($("#AdvLicid").text() == "Update") {
        Advedit.remove().draw();
        $("#AdvLicid").text("Add");
    }
    var Adv_product = {};

    var Advt_type = $("#Advt_type option:selected").text();
    var Advt_type_val = $("#Advt_type option:selected").val();

    var Product_type = $("#Product_type option:selected").text();
  	var Product_type_val = $("#Product_type option:selected").val();

    var No_product = $("#No_product").val();
  	var No_productI = $("#No_productI").val();

    var No_days = $("#No_days").val();
    var No_Parking = $("#No_Parking").val();
    var Price_advt = $("#Price_advt").val();

    Adv_product.CAdvt_type = Advt_type;
    Adv_product.CAdvt_type_val = Advt_type_val;
    Adv_product.CProduct_type = Product_type;
  	Adv_product.CProduct_type_val = Product_type_val;
    Adv_product.CNo_product = No_product;
  	Adv_product.CNo_productI = No_productI;
    Adv_product.CNo_days = No_days;
    Adv_product.CNo_Parking = No_Parking;
    Adv_product.CPrice_advt = Price_advt;

    var Adv_table = $('#Adv_table').DataTable();
    Adv_table.row.add(Adv_product).draw();

    $('#Advt_type').val('1000').trigger('chosen:updated');
  	$("select#Advt_type").val('1000').trigger('change');
    $("#Product_type").val('1000');
    $("#No_product").val('');
  	$("#No_productI").val('');
    $("#No_days").val('');
    $("#No_Parking").val('');
    $("#Price_advt").val('');
 }
//edit Advertisement Details
 function Adveditfunction(data1) {
    var data = data1.data();
    $("#AdvLicid").text("Update");
    $('#Advt_type').val(data.CAdvt_type_val).trigger('chosen:updated');
  	$("#Advt_type").val(data.CAdvt_type_val).trigger('change');
    $("#Product_type").val(data.CProduct_type_val).trigger('change');
    $("#No_product").val(data.CNo_product);
  	$("#No_productI").val(data.CNo_productI);
    $("#No_days").val(data.CNo_days);
    $("#No_Parking").val(data.CNo_Parking);
    $("#Price_advt").val(data.CPrice_advt);
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
    var Adv_cols;
    Adv_cols = [
        { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent" : "text" },
        { "mDataProp": "CAdvt_type", sTitle: "Advertisement Type", sType: "string" },
        { "mDataProp": "CProduct_type", sTitle: "Product Type", sType: "string" },
        { "mDataProp": "CNo_product", sTitle: "No.of Product(National)", sType: "string" },
  	    { "mDataProp": "CNo_productI", sTitle: "No.of Product(International)", sType: "string" },
        { "mDataProp": "CNo_days", sTitle: "No.of Days", sType: "string" },
        { "mDataProp": "CNo_Parking", sTitle: "No.of Parking", sType: "string" },
        { "mDataProp": "CPrice_advt", sTitle: "Price(OMR)", sType: "numeric" },
        { "mDataProp": "Actions", sTitle: "Actions", width: "7%", sType: "string", "defaultContent":
      			"<a id = 'editAdvdetails' href='javascript:;' class='text-green'><i class='fa fa-edit'></i></a>"+
      			"<a id = 'removeAdvdetails' href='javascript:;' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var Adv_table = $('#Adv_table').DataTable({
      "aoColumns": Adv_cols,
  		"columnDefs": [{
  			"searchable": false,
  			"orderable": false,
  			"visible": false,
  			"targets": [3, 4, 5, 6],
  		}],
  		"order": [
  			[1, 'asc']
  		]
  	});
    Adv_table.page.len(5).draw();
  	$(".dataTables_length").replaceWith("<label class='dataTables_length hidden'>Show <input type=text class='adv_page form-control' value='5'> entries</label>");
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
