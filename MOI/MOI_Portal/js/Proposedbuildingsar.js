 $(window).bind('beforeunload', function() {
  localStorage.setItem("buildingdata_localsg1", JSON.stringify(building_dataarray));
 });
 //add Propase building Button
 function addProposed() {
  //var xt = $("#addProposedid").text();
  //alert($("#addProposedid").text());
  //alert($("#addProposedid").val());
  if ($("#addProposedid").text() == "Update") {
    probuildingedit.remove().draw();
    $("#addProposedid").text("Add Proposed");
  } else {}
  var Proposed_object = {};
  var Proposed_no = $("#PBuildingNo").val();
  var Proposed_name = $("#PBuildingname").val();
  var Proposed_typevalue = $("#Ptype").val();
  var Proposed_type = $("#Ptype option:selected").text();
  var Proposed_type_val = $("#Ptype option:selected").val();
  var Proposed_statusvalue = $("#Pstatus").val();
  var Proposed_totalArea = $("#Ptotalarea").val();
  var Proposed_status = $("#Pstatus option:selected").text();
  var Proposed_status_val = $("#Pstatus option:selected").val();
  var Proposed_units = $("#PNumberofunits").val();
  var Proposed_floors = $("#PNumberoffloors").val();
  var PfootPrints = $("#PFootprint").val();
  var PpowerLoad = $("#PPowerlaod").val();
  var PCarparkcapacity = $("#PCarparkcapacity").val();
  var PBcolor = $("#Pcolor").val();
  var PBcolor_val = $("#Pcolor option:selected").val();
  var PStreet_Pbld = $("#PStreet").val();
  var PAlley_Pbld = $("#PAlley").val();
  if (Proposed_no != "" && Proposed_name != "" && Proposed_type_val != 0 && Proposed_totalArea != "" && Proposed_units != "" && Proposed_floors != "" && Proposed_status_val != 0) {
    Proposed_object.ProposedNumber = Proposed_no;
    Proposed_object.ProposedName = Proposed_name;
    Proposed_object.ProposedType = Proposed_type;
    Proposed_object.Proposed_totalArea = Proposed_totalArea;
    Proposed_object.ProposedTypevalue = Proposed_typevalue;
    Proposed_object.ProposedStatus = Proposed_status;
    Proposed_object.ProposedStatusvalue = Proposed_statusvalue;
    Proposed_object.ProposedUnits = Proposed_units;
    Proposed_object.ProposedFloors = Proposed_floors;
    Proposed_object.PfootPrints = PfootPrints;
    Proposed_object.PpowerLoad = PpowerLoad;
    Proposed_object.PCarparkcapacity = PCarparkcapacity;
    Proposed_object.PBcolor_val = PBcolor_val;
    Proposed_object.PBcolor = PBcolor;
    Proposed_object.PStreet_Pbld = PStreet_Pbld;
    Proposed_object.PAlley_Pbld = PAlley_Pbld;
    var Proposed_details_table = $('#Proposed_details_table').DataTable();
    Proposed_details_table.row.add(Proposed_object).draw();
    $("#PBuildingNo").val('');
    $("#PBuildingname").val('');
    $("#Ptype").val('0');
    $("#Pstatus").val('0');
    $("#PNumberofunits").val('');
    $("#PNumberoffloors").val('');
    $("#Ptotalarea").val('');
    $("#PFootprint").val('');
    $("#PPowerlaod").val('');
    $("#PCarparkcapacity").val('');
    $("#PStreet").val('');
    $("#PAlley").val('');
    $("#Pcolor").val('0');
  } else {
    $('#PrpBuilding').modal('show');
  }
  //building_dataarray.push(building_object);
 }
 //edit building details
 function buildingeditfunction1(data1) {
  var data = data1.data();
  // alert("Hai");
  // console.log("MyData",data);
  $("#addProposedid").text("Update");
  // var xc = $("#addProposedID").text("Update");
  // alert("Update",xc);
  $("#PBuildingNo").val(data.ProposedNumber);
  $("#PBuildingname").val(data.ProposedName);
  $("#Ptype").val(data.ProposedTypevalue);
  $("#Pstatus").val(data.ProposedStatusvalue);
  $("#PNumberofunits").val(data.ProposedUnits);
  $("#PNumberoffloors").val(data.ProposedFloors);
  // $("#Buildingtotalarea").val(data.building_totalArea); 
  $("#PFootprint").val(data.PfootPrints);
  $("#Ptotalarea").val(data.Proposed_totalArea);
  $("#PPowerlaod").val(data.PpowerLoad);
  $("#PCarparkcapacity").val(data.PCarparkcapacity);
  $("#PStreet").val(data.PStreet_Pbld);
  $("#PAlley").val(data.PAlley_Pbld);
  $("#Pcolor").val(data.PBcolor);
 }
 //populate data to modal//
 function Pbuildinguniteditfunction(data1) {
  var data = data1.data();
  //$("#editunitsfunctionid").text("Update");
  //console.log("Data>>>>>>>>>>>>>>>", data);
  $("#editPUBuildingNo").val(data.BuildingNumber);
  $("#editPuntstype").val(data.untstypevalue);
  $("#editPauNumberofunits").val(data.auNumberofunits);
  $("#editPauIdnumber").val(data.auIdnumber);
  // $("#addbuildingid").text("Update");      
 }
 //populate data to modal//
 function Pbuildingstoreyeditfunction(data1) {
  var data = data1.data();
  // $("#addbuildingid").text("Update");
  //console.log("Data>>>>>>>>>>>>>>>", data);
  $("#editPSBuildingNo").val(data.BuildingNumber);
  $("#editPSstoreyNo").val(data.StoreyNumber);
  $("#editPStoreytype").val(data.StoreyTypeval);
  $("#editPSurfaceM2").val(data.SurfaceM2);
  $("#editPunitsitmno").val(data.unitsitmno);
  //    $("#addbuildingid").text("Update");      
 }
 //edit units
 function editPunitsfunction() {
  var units_object = {};
  var UBuildingNo = $("#editPUBuildingNo").val();
  var untstypevalue = $("#editPuntstype").val();
  var untstypeype = $("#editPuntstype option:selected").text();
  var untstypeype_val = $("#editPuntstype option:selected").val();
  var auNumberofunits = $("#editPauNumberofunits").val();
  var auIdnumber = $("#editPauIdnumber").val();

  if (untstypeype_val != 0 && auIdnumber != "") {
    units_object.BuildingNumber = UBuildingNo;
    units_object.untstypevalue = untstypevalue;
    units_object.untstypeype = untstypeype;
    units_object.auNumberofunits = auNumberofunits;
    units_object.auIdnumber = auIdnumber;

    Pbuildingunitsedit.remove().draw();
    var units_Proposed = $('#units_Proposed').DataTable();
    units_Proposed.row.add(units_object).draw();
    $('#editPunitsModal').modal('toggle');
    $("#Puntstype").val('0');
    $("#PauNumberofunits").val('');
    $("#PauIdnumber").val('');
  } else {
    $('#PrpBuilding').modal('show');
  }
 }
 //add units
 function addPunitsfunction1() {
  var units_object = {};
  var UBuildingNo = $("#PUBuildingNo").val();
  var untstypevalue = $("#Puntstype").val();
  var untstypeype = $("#Puntstype option:selected").text();
  var untstypeype_val = $("#Puntstype option:selected").val();
  var auNumberofunits = $("#PauNumberofunits").val();
  var auIdnumber = $("#PauIdnumber").val();
  // alert(building_no);
  if (untstypeype_val != 0 && auIdnumber != "") {
    units_object.BuildingNumber = UBuildingNo;
    
    units_object.untstypevalue = untstypevalue;
    units_object.untstypeype = untstypeype;
    units_object.auNumberofunits = auNumberofunits;
    units_object.auIdnumber = auIdnumber;
    var units_Proposed = $('#units_Proposed').DataTable();
    units_Proposed.row.add(units_object).draw();
    $('#addPunitsModal').modal('toggle');
    $("#Puntstype").val('0');
    $("#PauNumberofunits").val('');
    $("#PauIdnumber").val('');
  } else {
    $('#PrpBuilding').modal('show');
  }
  //  var units_Proposed = $('#units_Proposed').DataTable();
  // units_Proposed.row.add(units_object).draw();
 }

 function addPunitsfunction() {
  addPunitsfunction1();
  //$('#addPunitsModal').modal('toggle');
 }
 //edit Storeys
 function editPstrfunction() {
  var storeys_object = {};
  var BuildingNumber = $("#editPSBuildingNo").val();
  var StoreyNumber = $("#editPSstoreyNo").val();
  var StoreyTypeval = $("#editPStoreytype").val();
  var StoreyType = $("#editPStoreytype option:selected").text();
  var StoreyType_val = $("#editPStoreytype option:selected").val();
  var SurfaceM2 = $("#editPSurfaceM2").val();
  var unitsitmno = $("#editPunitsitmno").val();

  if (unitsitmno != "" &&  StoreyNumber != "" && StoreyType_val != 0) {
    storeys_object.BuildingNumber = BuildingNumber;
    storeys_object.StoreyNumber = StoreyNumber;
    storeys_object.StoreyType = StoreyType;
    storeys_object.StoreyTypeval = StoreyTypeval;
    storeys_object.SurfaceM2 = SurfaceM2;
    storeys_object.unitsitmno = unitsitmno;

    Pbuildingstredit.remove().draw();
    var storeys_Proposed = $('#storeys_Proposed').DataTable();
    storeys_Proposed.row.add(storeys_object).draw();

    $('#editPstoreysModal').modal('toggle');
    $("#editPSBuildingNo").val('');
    $("#editPSstoreyNo").val('');
    $("#editPStoreytype").val("0");
    $("#editPSurfaceM2").val('');
    $("#editPunitsitmno").val('');
  } else {
    $('#PrpBuilding').modal('show');
  }
 }
 //add storeys
 function addPstrfunction1() {
  var storeys_object = {};
  var BuildingNumber = $("#PSBuildingNo").val();
  var StoreyNumber = $("#PSstoreyNo").val();
  var StoreyTypeval = $("#PStoreytype").val();
  var StoreyType = $("#PStoreytype option:selected").text();
  var StoreyType_val = $("#PStoreytype option:selected").val();
  var SurfaceM2 = $("#PSurfaceM2").val();
  var unitsitmno = $("#Punitsitmno").val();
  // alert(building_no);
  if (unitsitmno != "" && StoreyNumber != "" && StoreyType_val != 0) {
    storeys_object.BuildingNumber = BuildingNumber;
    storeys_object.StoreyNumber = StoreyNumber;
    storeys_object.StoreyType = StoreyType;
    storeys_object.StoreyTypeval = StoreyTypeval;
    storeys_object.SurfaceM2 = SurfaceM2;
    storeys_object.unitsitmno = unitsitmno;
    var storeys_Proposed = $('#storeys_Proposed').DataTable();
    storeys_Proposed.row.add(storeys_object).draw();
    $('#addPstoreysModal').modal('toggle');
    $("#PSBuildingNo").val('');
    $("#PSstoreyNo").val('');
    $("#PStoreytype").val("0");
    $("#PSurfaceM2").val('');
    $("#Punitsitmno").val('');
  } else {
    $('#PrpBuilding').modal('show');
  }
  //  var storeys_Proposed = $('#storeys_Proposed').DataTable();
  //   storeys_Proposed.row.add(storeys_object).draw();
 }

 function addPstrfunction() {
  addPstrfunction1();
  //$('#addPstoreysModal').modal('toggle');
 }
 $(document).ready(function() {
  $('#Proposed_details_table tbody').on('click', '#editbuilgdetails1', function() {
    var table = $('#Proposed_details_table').DataTable();
    probuildingedit = table.row($(this).parents('tr'));
    var data = table.row($(this).parents('tr'));
    buildingeditfunction1(data);
  });
  $('#Proposed_details_table tbody').on('click', '#removebuilgdetails', function() {
    var table = $('#Proposed_details_table').DataTable();
    table.row($(this).parents('tr')).remove().draw();
  });
  $('#Proposed_details_table tbody').on('click', '#Proposedaddstoreys', function() {
    var table = $('#Proposed_details_table').DataTable();
    var data = table.row($(this).parents('tr')).data();
    $("#PSBuildingNo").val(data.ProposedNumber);
    alert(data.ProposedNumber);
    //$("#SUnitNo").val(data.unitsitmno);
  });
  var cols = [ 
    { "mDataProp": "", sTitle: "\u0625\u0636\u0627\u0641\u0629 \u0637\u0627\u0628\u0642", sType: "string", "defaultContent": "<a href='javascript:void(0);' id='Proposedaddstoreys' data-toggle='modal' data-target='#addPstoreysModal' class='btn btn-ts'>\u0625\u0636\u0627\u0641\u0629 \u0637\u0627\u0628\u0642</a>" }, 
    { "mDataProp": "ProposedNumber", sTitle: "رقم المبنى",sType : "numeric"},
    { "mDataProp": "ProposedName", sTitle: "اسم المبنى",sType : "string"},
    { "mDataProp": "ProposedType" , sTitle: "نوع الاستعمال",sType : "string"},
    { "mDataProp": "ProposedStatus" ,  sTitle: "حالة المبنى",sType : "string"},
    { "mDataProp": "ProposedUnits" , sTitle: "الوحدات",sType : "numeric"},
    { "mDataProp": "ProposedFloors" ,  sTitle: "الطوابق",sType : "numeric"},
    { "mDataProp": "Actions" , sTitle: "الإجراء", sType : "string", "defaultContent": "<a id = 'editbuilgdetails1' href='javascript:void(0);' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removebuilgdetails' href='javascript:void(0);' class='text-red'><i class='fa fa-trash-o'></i></a>" },
    { "mDataProp": "PfootPrints" , sTitle: "FootPrints",sType : "numeric"},
    { "mDataProp": "Proposed_totalArea" , sTitle: "PTotalArea",sType : "numeric"},
    { "mDataProp": "PpowerLoad" , sTitle: "PowerLoad",sType : "numeric"},
    { "mDataProp": "PCarparkcapacity" , sTitle: "Car park capacity",sType : "numeric"},
    { "mDataProp": "PBcolor_val" , sTitle: "Pcolor",sType : "numeric"},
    { "mDataProp": "PStreet_Pbld" , sTitle: "Street",sType : "numeric"},
    { "mDataProp": "PAlley_Pbld" , sTitle: "Alley",sType : "numeric"}
    // { "mDataProp": "WillbeDemolish_val" , sTitle: "WillbeDemolished",sType : "string"}
  ];
  var table = $('#Proposed_details_table').DataTable({
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
  //    var Proposed_details_table = $('#Proposed_details_table').DataTable();
  //  Proposed_details_table.row.add(building_dataarray[i]).draw();
  //  }
  //  }
 });
 $(document).ready(function() {
  $('#units_Proposed tbody').on('click', '#editPbuilgunitdetails', function() {
    var table = $('#units_Proposed').DataTable();
    Pbuildingunitsedit = table.row($(this).parents('tr'));
    var data = table.row($(this).parents('tr'));
    $('#editPunitsModal').modal('toggle');
    Pbuildinguniteditfunction(data);
  });
  $('#storeys_Proposed tbody').on('click', '#editPbuilgstoreydetails', function() {
    var table = $('#storeys_Proposed').DataTable();
    Pbuildingstredit = table.row($(this).parents('tr'));
    var data = table.row($(this).parents('tr'));
    $('#editPstoreysModal').modal('toggle');
    Pbuildingstoreyeditfunction(data);
  });
  $('#units_Proposed tbody').on('click', '#removebuilgdetails', function() {
    var table = $('#units_Proposed').DataTable();
    table.row($(this).parents('tr')).remove().draw();
  });
  $('#storeys_Proposed tbody').on('click', '#Proposedaddunits', function() {
    var table = $('#storeys_Proposed').DataTable();
    var data = table.row($(this).parents('tr')).data();
    // alert(data.ProposedNumber);
    $("#PUBuildingNo").val(data.BuildingNumber);
    $('#PauIdnumber').val(data.StoreyNumber);
  });
  var cols = [
    { "mDataProp": "BuildingNumber", sTitle: "رقم المبنى",sType : "numeric"},
    { "mDataProp": "auIdnumber", sTitle: "رقم الطابق", sType: "numeric" },
    { "mDataProp": "auNumberofunits" , sTitle: "عدد الوحدات",sType : "numeric"}, 
    { "mDataProp": "untstypeype" , sTitle: "نوع الوحدة",sType : "string"},
    { "mDataProp": "Actions" , sTitle: "الإجراء", sType : "string", "defaultContent": "<a id = 'editPbuilgunitdetails' href='javascript:void(0);' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removebuilgdetails' href='javascript:void(0);' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
  var table = $('#units_Proposed').DataTable({
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
  $('#storeys_Proposed tbody').on('click', '#removebuilgdetails', function() {
    var table = $('#storeys_Proposed').DataTable();
    table.row($(this).parents('tr')).remove().draw();
  });
  var cols = [
    { "mDataProp": "", sTitle: "\u0625\u0636\u0627\u0641\u0629 \u0648\u062d\u062f\u0629", sType: "string", "defaultContent": "<a href='javascript:void(0);' id='Proposedaddunits' data-toggle='modal' data-target='#addPunitsModal' class='btn btn-ts'>\u0625\u0636\u0627\u0641\u0629 \u0648\u062d\u062f\u0629</a>" },
    { "mDataProp": "BuildingNumber", sTitle: "رقم المبنى",sType : "numeric"},
    { "mDataProp": "StoreyNumber", sTitle: "رقم الطابق",sType : "numeric"},
    { "mDataProp": "StoreyType" , sTitle: "نوع الطابق",sType : "string"},
    { "mDataProp": "unitsitmno", sTitle: "رقم الوحدة",sType : "numeric"}, 
    { "mDataProp": "SurfaceM2" , sTitle: "مساحة الطابق بالمتر المربع",sType : "numeric"},
    { "mDataProp": "Actions" , sTitle: "الإجراء", sType : "string", "defaultContent": "<a id = 'editPbuilgstoreydetails' href='javascript:void(0);' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removebuilgdetails' href='javascript:void(0);' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
  var table = $('#storeys_Proposed').DataTable({
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