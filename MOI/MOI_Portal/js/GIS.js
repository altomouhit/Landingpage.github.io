 //GIS Button 
 //Kiran-28-4-2017
 var regexNumber = /^[0-9]+([\.][0-9]+)?/;

 function GIS() {
   if ($("#GISid").text() == "Update") {
     gisedit.remove().draw();
     $("#GISid").text("Add GIS");
   } else {}
   var GIS_object = {};
   var GIS_Point = $("#Point").val();
   var GIS_Northings = $("#Northings").val();
   var GIS_Eastings = $("#Eastings").val();
   //  GIS_object.GISPoint = GIS_Point;
   //  GIS_object.GISNorthingse = GIS_Northings;
   //  GIS_object.GISEastings = GIS_Eastings;
   //Kiran-28-4-2017
   if ((regexNumber.test(GIS_Northings)) && (regexNumber.test(GIS_Eastings)) || (GIS_Northings == "" && GIS_Eastings == "")) {
     //if  ((regexNumber.test(GIS_Eastings)) || (GIS_Northings=="" && GIS_Eastings=="")){     
     //Kiran-28-4-2017
     if (GIS_Northings != "" && GIS_Eastings != "") {
       GIS_object.GISPoint = GIS_Point;
       GIS_object.GISNorthingse = GIS_Northings;
       GIS_object.GISEastings = GIS_Eastings;
       var GIS_table = $('#GIS_table').DataTable();
       GIS_table.row.add(GIS_object).draw();
       //GIS_table.order([0,'disc']).draw();
       $("#Northings").val('');
       $("#Eastings").val('');
       removevalidation('remove');
     } else {
       $('#myModal').modal('show');
     }
   } else {
     if (!(regexNumber.test(GIS_Eastings))) {
       $('#smartwizard').find("#Eastings").focus();
       document.getElementById("Eastings").setCustomValidity('Please enter valid numbers');
     } else {
       document.getElementById("Northings").setCustomValidity('Please enter valid numbers');
       $('#smartwizard').find("#Northings").focus();
     }
   }
 }
 //edit GIS details
 function giseditfunction(data1) {
   var data = data1.data();
   $("#GISid").text("Update");
   //$("#Point").val(data.GISPoint);
   $("#Northings").val(data.GISNorthingse);
   $("#Eastings").val(data.GISEastings);
 }
 //add storeys
 $(document).ready(function() {
   $('#GIS_table tbody').on('click', '#editgisdetails', function() {
     var table = $('#GIS_table').DataTable();
     gisedit = table.row($(this).parents('tr'));
     var data = table.row($(this).parents('tr'));
     giseditfunction(data);
   });
   $('#GIS_table tbody').on('click', '#removegisdetails', function() {
     var table = $('#GIS_table').DataTable();
     table.row($(this).parents('tr')).remove().draw();
     alert(table.data().count());
        if (table.data().count() === 0) {
            removevalidation('add');
        }
   });
   var cols = [
    { "mDataProp": "GISPoint", sTitle: "Points", sType: "numeric" },
    { "mDataProp": "GISEastings", sTitle: "Eastings", sType: "numeric" }, 
    { "mDataProp": "GISNorthingse", sTitle: "Northings", sType: "numeric" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editgisdetails' href='javascript:;' data-toggle='tooltip' data-placement='bottom' title='Edit' class='text-green'><i class='fa fa-edit'></i></a> <a id = 'removegisdetails' href='javascript:;' data-toggle='tooltip' data-placement='bottom' title='Delete' class='text-red'><i class='fa fa-trash-o'></i></a>"
   }];
   var table = $('#GIS_table').DataTable({
     "aoColumns": cols,
     "columnDefs": [{
       "searchable": false,
       "orderable": false,
       "targets": 0
    }],
    "order": [
      [1, 'asc']
    ]
   });
   table.page.len(5).draw();
   $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
   $(".page").keyup(function() {
     table.page.len(eval($(".page").val())).draw();
   });
   /* auto increament */
   table.on('order.dt search.dt', function() {
     table.column(0, {
       search: 'applied',
       order: 'applied'
     }).nodes().each(function(cell, i) {
       cell.innerHTML = i + 1;
     });
   }).draw();
 });

 function removevalidation(type) {
    if (type == 'add') {
        $("#Eastings").attr("required", "true");
        $("#Northings").attr("required", "true");
    } else {
        $("#Eastings").removeAttr('required');
        $("#Northings").removeAttr('required');
    }
}
