 $(window).bind('beforeunload', function() {
   localStorage.setItem("buildingdata_localsg1", JSON.stringify(building_dataarray));
 });
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
   var GIS_Tech_Northings = $("#Tech_Northings").val();
   var GIS_Tech_Eastings = $("#Tech_Eastings").val();
   //  GIS_object.GISPoint = GIS_Point;
   //  GIS_object.GISTech_Northingse = GIS_Tech_Northings;
   //  GIS_object.GISTech_Eastings = GIS_Tech_Eastings;
   //Kiran-28-4-2017
   if ((regexNumber.test(GIS_Tech_Northings)) && (regexNumber.test(GIS_Tech_Eastings)) || (GIS_Tech_Northings == "" && GIS_Tech_Eastings == "")) {
     //if  ((regexNumber.test(GIS_Tech_Eastings)) || (GIS_Tech_Northings=="" && GIS_Tech_Eastings=="")){     
     //Kiran-28-4-2017
     if (GIS_Tech_Northings != "" && GIS_Tech_Eastings != "") {
       GIS_object.GISPoint = GIS_Point;
       GIS_object.GISTech_Northingse = GIS_Tech_Northings;
       GIS_object.GISTech_Eastings = GIS_Tech_Eastings;
       var GIS_table = $('#GIS_table').DataTable();
       GIS_table.row.add(GIS_object).draw();
       //GIS_table.order([0,'disc']).draw();
       $("#Tech_Northings").val('');
       $("#Tech_Eastings").val('');
     } else {
       $('#myModal').modal('show');
     }
   } else {
     if (!(regexNumber.test(GIS_Tech_Eastings))) {
       $('#smartwizard').find("#Tech_Eastings").focus();
       document.getElementById("Tech_Eastings").setCustomValidity('Please enter valid 6 Tech_Eastings');
     } else {
       document.getElementById("Tech_Northings").setCustomValidity('Please enter valid 7 Tech_Northings');
       $('#smartwizard').find("#Tech_Northings").focus();
     }
   }
 }
 //edit GIS details
 function giseditfunction(data1) {
   var data = data1.data();
   $("#GISid").text("Update");
   //$("#Point").val(data.GISPoint);
   $("#Tech_Northings").val(data.GISTech_Northingse);
   $("#Tech_Eastings").val(data.GISTech_Eastings);
 }
 //add storeys
 $(document).ready(function() {
   $('#GIS_table tbody').on('click', '#editgisdetails', function() {
     var table = $('#GIS_table').DataTable();
     gisedit = table.row($(this).parents('tr'));
     var data = table.row($(this).parents('tr'));
     giseditfunction(data);
   });
   // $('#GIS_table tbody').on('click', '#removegisdetails', function() {
   //   var table = $('#GIS_table').DataTable();
   //   table.row($(this).parents('tr')).remove().draw();
   // });

   $('#GIS_table tbody').on('click', 'tr', '#removegisdetails', function() {
    $('#confirm').modal()
        .on('click', '#delete-btn', function(){
          var table = $('#GIS_table').DataTable();
          table.row($("#removegisdetails").parents('tr')).remove().draw();
          $('#confirm').modal('hide');
        });
    });

   var cols = [
   { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
   { "mDataProp": "GISTech_Eastings", sTitle: "Eastings", sType: "numeric" }, 
   { "mDataProp": "GISTech_Northingse", sTitle: "Northings", sType: "numeric"}, 
   { "mDataProp": "Actions", sTitle: "Actions", sType: "string",
     "defaultContent": "<a id = 'editgisdetails' href='javascript:;' data-toggle='tooltip' data-placement='bottom' title='Edit' class='text-green'><i class='fa fa-edit'></i></a> <a id = 'removegisdetails' href='javascript:;' data-toggle='tooltip' data-placement='bottom' title='Delete' class='text-red'><i class='fa fa-trash-o'></i></a>"
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



