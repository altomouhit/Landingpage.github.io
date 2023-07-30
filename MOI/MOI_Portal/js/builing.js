/* $(window).bind('beforeunload', function() {
  localStorage.setItem("buildingdata_localsg1", JSON.stringify(building_dataarray));
 });*/
 //addbuilding Button
 function addbuilding() {
  $("#Building_show").show();
  $("#building_details").hide(); // BPHS01 - Lease Contract New / Renew - Property Details Tab
  //$("#addbuildingid").attr('disabled','true');
  //var xt = $("#addbuildingid").text();
  //console.log("AAAAAAAAAqqqqqq",xt);
  if ($("#addbuildingid").text() == "Update") {
    buildingedit.remove().draw();
    $("#addbuildingid").text("Add Building");
  } else {}
  var building_object = {};
  var building_no = $("#BuildingNo").val();
  var building_name = $("#Buildingname").val();
  var building_typevalue = $("#Btype").val();
  var building_type = $("#Btype option:selected").text();
  var building_type_val = $("#Btype option:selected").val();
  var building_statusvalue = $("#Bstatus").val();
  var building_totalArea = $("#Buildingtotalarea").val();
  var building_status = $("#Bstatus option:selected").text();
  var building_status_val = $("#Bstatus option:selected").val();
  var building_units = $("#BuildingNumberofunits").val();
  var building_floors = $("#BuildingNumberoffloors").val();
  var footPrints = $("#Footprint_ExBld").val();
  var powerLoad = $("#Powerlaod").val();
  var Carparkcapacity = $("#Carparkcapacity").val();
  var Bcolor_val = $("#Bcolor option:selected").val();
  var Street_Exbld = $("#Street_Exbld").val();
  var Alley_Exbld = $("#Alley_Exbld").val();
  var WillbeDemolish_val = $('#smartwizard').find('input[name=optradio3]:checked').val();
  //var WillbeDemolish_txt = $('#smartwizard').find('input[name=optradio3]:checked').text();
  //console.log("Hellooooooooooooooooooo",WillbeDemolish_txt);
  //$("#Alley_Exbld").val();
  //  building_object.BuildingNumber = building_no;
  //  building_object.BuildingName = building_name;
  //  building_object.BuildingType = building_type;
  //  building_object.BuildingTypevalue = building_typevalue;
  //  building_object.BuildingStatus = building_status;
  //  building_object.BuildingStatusvalue = building_statusvalue;
  //  building_object.Units = building_units;
  //  building_object.Floors = building_floors;
  if (building_no != "" && building_name != "" && building_type_val != 0 && building_totalArea != "" && building_units != "" && building_floors != "" && building_status_val != 0) {
    building_object.BuildingNumber = building_no;
    building_object.BuildingName = building_name;
    building_object.BuildingType = building_type;
    building_object.BuildingTypevalue = building_typevalue;
    building_object.building_totalArea = building_totalArea;
    building_object.BuildingStatus = building_status;
    building_object.BuildingStatusvalue = building_statusvalue;
    building_object.Units = building_units;
    building_object.Floors = building_floors;
    building_object.footPrints = footPrints;
    building_object.powerLoad = powerLoad;
    building_object.Carparkcapacity = Carparkcapacity;
    building_object.Bcolor_val = Bcolor_val;
    building_object.Street_Exbld = Street_Exbld;
    building_object.Alley_Exbld = Alley_Exbld;
    var building_details_table = $('#building_details_table').DataTable();
    building_details_table.row.add(building_object).draw();
    //building_dataarray.push(building_object);
    $("#BuildingNo").val('');
    $("#Buildingname").val('');
    $("#Btype").val('0');
    $("#Bstatus").val('0');
    $("#BuildingNumberofunits").val('');
    $("#BuildingNumberoffloors").val('');
    $("#Buildingtotalarea").val('');
    $("#Footprint_ExBld").val('');
    $("#Powerlaod").val('');
    $("#Carparkcapacity").val('');
    $("#Street_Exbld").val('');
    $("#Alley_Exbld").val('');
    $("#Bcolor").val('0');
  } else {
    $('#ExtBuilding').modal('show');
  }
 }
 //edit building details
 function buildingeditfunction(data1) {
  var data = data1.data();
  //console.log("Data>>>>>>>>>>>>>>>",data);
  $("#addbuildingid").text("Update");
  // var xc = $("#addbuildingid").text("Update");
  // alert("Update",xc);
  $("#BuildingNo").val(data.BuildingNumber);
  $("#Buildingname").val(data.BuildingName);
  $("#Btype").val(data.BuildingTypevalue);
  $("#Bstatus").val(data.BuildingStatusvalue);
  $("#BuildingNumberofunits").val(data.Units);
  $("#BuildingNumberoffloors").val(data.Floors);
  $("#Footprint_ExBld").val(data.footPrints);
  $("#Buildingtotalarea").val(data.building_totalArea);
  $("#Powerlaod").val(data.powerLoad);
  $("#Carparkcapacity").val(data.Carparkcapacity);
  $("#Street_Exbld").val(data.Street_Exbld);
  $("#Alley_Exbld").val(data.Alley_Exbld);
  $("#Bcolor").val(data.Bcolor_val);
 }

 function buildinguniteditfunction(data1) {
  var data = data1.data();
  //$("#editunitsfunctionid").text("Update");
  // console.log("Data>>>>>>>>>>>>>>>",data);
  $("#editUBuildingNo").val(data.BuildingNumber);
  $("#edituntstype").val(data.untstypevalue);
  $("#editauNumberofunits").val(data.auNumberofunits);
  $("#editauIdnumber").val(data.auIdnumber);
  // $("#addbuildingid").text("Update");      
 }

 function buildingstoreyeditfunction(data1) {
  var data = data1.data();
  // $("#addbuildingid").text("Update");
  // console.log("Data>>>>>>>>>>>>>>>",data);
  $("#editSBuildingNo").val(data.BuildingNumber);
  $("#editSstoreyNo").val(data.StoreyNumber);
  $("#editStoreytype").val(data.StoreyTypeval);
  $("#editSurfaceM2").val(data.SurfaceM2);
  $("#editunitsitmno").val(data.unitsitmno);
  //    $("#addbuildingid").text("Update");      
 }
 //edit units
 function editunitsfunction() {
  var units_object = {};
  var UBuildingNo = $("#editUBuildingNo").val();
  var untstypevalue = $("#edituntstype").val();
  var untstypeype = $("#edituntstype option:selected").text();
  var untstypeype_val = $("#edituntstype option:selected").val();
  var auNumberofunits = $("#editauNumberofunits").val();
  var auIdnumber = $("#editauIdnumber").val();

  if (untstypeype_val != 0 && auIdnumber != "") {
    units_object.BuildingNumber = UBuildingNo;
    units_object.untstypevalue = untstypevalue;
    units_object.untstypeype = untstypeype;
    units_object.auNumberofunits = auNumberofunits;
    units_object.auIdnumber = auIdnumber;

    buildingunitsedit.remove().draw();
    var units_detailstable = $('#units_detailstable').DataTable();

    units_detailstable.row.add(units_object).draw();
    $('#editunitsModal').modal('toggle');
    $("#edituntstype").val('0');
    $("#editauNumberofunits").val('');
    $("#editauIdnumber").val('');
  } else {
    $('#ExtBuilding').modal('show');
  }
 }
 //add units
 function addunitsfunction1() {
  var units_object = {};
  var UBuildingNo = $("#UBuildingNo").val();
  var untstypevalue = $("#untstype").val();
  var untstypeype = $("#untstype option:selected").text();
  var untstypeype_val = $("#untstype option:selected").val();
  var auNumberofunits = $("#auNumberofunits").val();
  var auIdnumber = $("#auIdnumber").val();
  // alert(building_no);
  //  units_object.BuildingNumber = UBuildingNo;
  //  units_object.unitsitmno = unitsitmno;
  //  units_object.untstypevalue = untstypevalue;
  //  units_object.untstypeype = untstypeype;
  //  units_object.auNumberofunits = auNumberofunits;
  //  units_object.auIdnumber = auIdnumber;
  if (untstypeype_val != 0 && auIdnumber != "") {
    units_object.BuildingNumber = UBuildingNo;
    
    units_object.untstypevalue = untstypevalue;
    units_object.untstypeype = untstypeype;
    units_object.auNumberofunits = auNumberofunits;
    units_object.auIdnumber = auIdnumber;

    var units_detailstable = $('#units_detailstable').DataTable();
    units_detailstable.row.add(units_object).draw();
    $('#addunitsModal').modal('toggle');
    
    $("#untstype").val('0');
    $("#auNumberofunits").val('');
    $("#auIdnumber").val('');
  } else {
    $('#ExtBuilding').modal('show');
  }
 }

 function addunitsfunction() {
  addunitsfunction1();
  //$('#addunitsModal').modal('toggle');
 }
 //edit Storeys
 function editstrfunction() {
  var storeys_object = {};
  var BuildingNumber = $("#editSBuildingNo").val();
  var StoreyNumber = $("#editSstoreyNo").val();
  var StoreyTypeval = $("#editStoreytype").val();
  var StoreyType = $("#editStoreytype option:selected").text();
  var StoreyType_val = $("#editStoreytype option:selected").val();
  var SurfaceM2 = $("#editSurfaceM2").val();
  var unitsitmno = $("#editunitsitmno").val();

  if (unitsitmno != "" &&  StoreyNumber != "" && StoreyType_val != 0) {
    storeys_object.BuildingNumber = BuildingNumber;
    storeys_object.StoreyNumber = StoreyNumber;
    storeys_object.StoreyType = StoreyType;
    storeys_object.StoreyTypeval = StoreyTypeval;
    storeys_object.SurfaceM2 = SurfaceM2;
    storeys_object.unitsitmno = unitsitmno;

    buildingstredit.remove().draw();
    var storeys_table = $('#storeys_table').DataTable();
    storeys_table.row.add(storeys_object).draw();

    $('#editstoreysModal').modal('toggle');
    //$("#SBuildingNo").val('');
    $("#editSstoreyNo").val('');
    // $("#Storeytype option:eq(1)");
    $("#editStoreytype").val("0");
    $("#editSurfaceM2").val('');
    $("#editunitsitmno").val('');
  } else {
    // $('#smartwizard').find("#StoreyError").show();
    $('#ExtBuilding').modal('show');
  }
 }
 //add storeys
 function addstrfunction1() {
  //alert("hello");
  var storeys_object = {};
  var BuildingNumber = $("#SBuildingNo").val();
  var StoreyNumber = $("#SstoreyNo").val();
  var StoreyTypeval = $("#Storeytype").val();
  var StoreyType = $("#Storeytype option:selected").text();
  var StoreyType_val = $("#Storeytype option:selected").val();
  var SurfaceM2 = $("#SurfaceM2").val();
  var unitsitmno = $("#unitsitmno").val();

  if (unitsitmno != "" && StoreyNumber != "" && StoreyType_val != 0) {
    storeys_object.BuildingNumber = BuildingNumber;
    storeys_object.StoreyNumber = StoreyNumber;
    storeys_object.StoreyType = StoreyType;
    storeys_object.StoreyTypeval = StoreyTypeval;
    storeys_object.SurfaceM2 = SurfaceM2;
    storeys_object.unitsitmno = unitsitmno;
    var storeys_table = $('#storeys_table').DataTable();
    storeys_table.row.add(storeys_object).draw();

    $('#addstoreysModal').modal('toggle');
    //$("#SBuildingNo").val('');
    $("#SstoreyNo").val('');
    // $("#Storeytype option:eq(1)");
    $("#Storeytype").val("0");
    $("#SurfaceM2").val('');
    $("#unitsitmno").val('');
  } else {
    // $('#smartwizard').find("#StoreyError").show();
    $('#ExtBuilding').modal('show');
  }
 }

 function addstrfunction() {
  addstrfunction1();
  // alert("hai");
  //console.log("StoreyNumber",StoreyNumber);
  //$('#addstoreysModal').modal('toggle');
 }
 $(document).ready(function() {
  $('#building_details_table tbody').on('click', '#editbuilgdetails', function() {
    var table = $('#building_details_table').DataTable();
    buildingedit = table.row($(this).parents('tr'));
    var data = table.row($(this).parents('tr'));
    buildingeditfunction(data);
  });
  $('#building_details_table tbody').on('click', '#removebuilgdetails', function() {
    var table = $('#building_details_table').DataTable();
    table.row($(this).parents('tr')).remove().draw();
  });
  
  $('#building_details_table tbody').on('click', '#buildingaddstoreys', function() {
    var table = $('#building_details_table').DataTable();
    var data = table.row($(this).parents('tr')).data();
    $("#SBuildingNo").val(data.BuildingNumber);
    //$("#SUnitNo").val(data.unitsitmno);
  });
  var cols = [
    { "mDataProp": "", sTitle: "Storeys", sType: "string", "defaultContent": "<a href='javascript:void(0);' id='buildingaddstoreys' data-toggle='modal' data-target='#addstoreysModal' class='btn btn-ts'>Add Storeys</a>" }, 
    { "mDataProp": "BuildingNumber", sTitle: "Building Number", sType: "numeric" }, 
    { "mDataProp": "BuildingName", sTitle: "Building Name", sType: "string" }, 
    { "mDataProp": "BuildingType", sTitle: "Type of Use", sType: "string" }, 
    { "mDataProp": "BuildingStatus", sTitle: "Building Status", sType: "string" }, 
    { "mDataProp": "Units", sTitle: "Units", sType: "numeric" }, 
    { "mDataProp": "Floors", sTitle: "Floors", sType: "numeric" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editbuilgdetails' href='javascript:void(0);' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removebuilgdetails' href='javascript:void(0);' class='text-red'><i class='fa fa-trash-o'></i></a>" }, 
    { "mDataProp": "footPrints", sTitle: "FootPrints", sType: "numeric" }, 
    { "mDataProp": "building_totalArea", sTitle: "BTotalArea", sType: "numeric" },
    { "mDataProp": "powerLoad", sTitle: "PowerLoad", sType: "numeric" }, 
    { "mDataProp": "Carparkcapacity", sTitle: "Car park capacity", sType: "numeric" }, 
    { "mDataProp": "Bcolor_val", sTitle: "Bcolor", sType: "numeric" }, 
    { "mDataProp": "Street_Exbld", sTitle: "Street", sType: "numeric" }, 
    { "mDataProp": "Alley_Exbld", sTitle: "Alley", sType: "numeric" }
    // { "mDataProp": "WillbeDemolish_val" , sTitle: "WillbeDemolished",sType : "string"}
  ];
  var table = $('#building_details_table').DataTable({
    "aoColumns": cols,
    "columnDefs": [{
      "targets": [8, 9, 10, 11, 12, 13, 14],
      "visible": false,
      "searchable": false
    }]
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
  // if(localStorage.getItem("buildingdata_localsg1") == null){
  //  building_dataarray = [];
  // }else{
  //  building_dataarray = JSON.parse(localStorage.getItem("buildingdata_localsg1"));
  //  for (i = 0; i < building_dataarray.length; i++) { 
  //    var building_details_table = $('#building_details_table').DataTable();
  //  building_details_table.row.add(building_dataarray[i]).draw();
  //  }
  //  }
 });
 $(document).ready(function() {
  $('#units_detailstable tbody').on('click', '#editbuilgunitdetails', function() {
    var table = $('#units_detailstable').DataTable();
    buildingunitsedit = table.row($(this).parents('tr'));
    var data = table.row($(this).parents('tr'));
    $('#editunitsModal').modal('toggle');
    buildinguniteditfunction(data);
  });
  $('#units_detailstable tbody').on('click', '#removebuilgunitdetails', function() {
    var table = $('#units_detailstable').DataTable();
    table.row($(this).parents('tr')).remove().draw();
  });
  $('#storeys_table tbody').on('click', '#editbuilgstoreydetails', function() {
    var table = $('#storeys_table').DataTable();
    buildingstredit = table.row($(this).parents('tr'));
    var data = table.row($(this).parents('tr'));
    $('#editstoreysModal').modal('toggle');
    buildingstoreyeditfunction(data);
  });
  $('#storeys_table tbody').on('click', '#buildingaddunits', function() {
    var table = $('#storeys_table').DataTable();
    var data = table.row($(this).parents('tr')).data();
    $("#UBuildingNo").val(data.BuildingNumber);
    $('#auIdnumber').val(data.StoreyNumber);
  });
  

  var cols = [
  { "mDataProp": "BuildingNumber", sTitle: "Building Number", sType: "numeric" },
  { "mDataProp": "auIdnumber", sTitle: "Storey Number", sType: "numeric" },
  { "mDataProp": "auNumberofunits", sTitle: "Number of Units", sType: "numeric" },
  { "mDataProp": "untstypeype", sTitle: "Unit Type", sType: "string" }, 
  { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editbuilgunitdetails' href='javascript:void(0);' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removebuilgunitdetails' href='javascript:void(0);' class='text-red'><i class='fa fa-trash-o'></i></a>" }
  ];
  var table = $('#units_detailstable').DataTable({
    "aoColumns": cols,
    "columnDefs": [{
      "targets": [],
      "visible": false,
      "searchable": false
    }]
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'>Units</label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
 });
 $(document).ready(function() {
  $('#storeys_table tbody').on('click', '#removebuilgstrdetails', function() {
    var table = $('#storeys_table').DataTable();
    table.row($(this).parents('tr')).remove().draw();
  });
  var cols = [
    { "mDataProp": "", sTitle: "Units", sType: "string", "defaultContent": "<a href='javascript:void(0);' id='buildingaddunits' data-toggle='modal' data-target='#addunitsModal' class='btn btn-ts'>Add Units</a>" }, 
    { "mDataProp": "BuildingNumber", sTitle: "Building Number", sType: "numeric" },
    { "mDataProp": "StoreyNumber", sTitle: "Storey No", sType: "numeric" }, 
    { "mDataProp": "StoreyType", sTitle: "Storey Type", sType: "string" },
    { "mDataProp": "unitsitmno", sTitle: "Unit No", sType: "numeric" },
    { "mDataProp": "SurfaceM2", sTitle: "Storey Area(m2)", sType: "numeric" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editbuilgstoreydetails' href='javascript:void(0);' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removebuilgstrdetails' href='javascript:void(0);' class='text-red'><i class='fa fa-trash-o'></i></a>" }
  ];
  var table = $('#storeys_table').DataTable({
    "aoColumns": cols,
    "columnDefs": [{
      "targets": [],
      "visible": false,
      "searchable": false
    }]
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'>Storeys</label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
 });