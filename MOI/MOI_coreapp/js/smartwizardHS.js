$(document).ready(function() {
  var org_type, AppType_BND, ConsType_Value, req_type, sec_party, reqTypePSL, PrCarLNo, HealthCard_type, VIreq_type, Advtreq_type, shishareq_type, Health_Complaints, optradio_sample;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength)
  $("#BuildingsDetails_id").hide();
  $("#appDetails_Err").hide();
  $("#serDetails_Err").hide();
  $("#orgDetails_Err").hide();
  $("#BenfDetails_Err").hide();
  $("#reqTypeDetails_Err").hide();
  $("#Ph_Error").hide();
  $("#email_Error").hide();
  $("#Ph_BenfError").hide();
  $("#Bemail_Error").hide();
  $("#Phno_BenfError").hide();
  $("#Cemail_Error").hide();

  $("#LeaseRenew_Err").hide(); //BPHS01
  $("#FirstPartyDetails_Err").hide(); //BPHS01
  $("#secPartyDetails_Err").hide(); //BPHS01
  $("#LeaseContract_Err").hide(); //BPHS02
  $("#SParty_Error").hide();
  $("#propertyDetails_Err").hide(); //Include BPHS01, BPHS03
  $("#BuildingDetails_Err").hide(); //Include BPHS01
  $("#Advertisement_Err").hide(); //Include BPHS03, BPHS03_01, BPHS07
  $("#locationDetails_Err").hide(); //BPHS11, BPHS12
  $("#MunLicDetails_Err").hide(); //BPHS12
  $("#NOCDetails_Err").hide(); //BPHS07
  $("#Beneficiary_Err").hide(); //BPHS01
  $("#CurrentMunLicDetails_Err").hide(); //BPHS06

  $("#Carcancel_Err").hide(); //BPHS04
  $("#Peddlercancel_Err").hide(); //BPHS04
  $("#DrinkingCancel_Err").hide(); //BPHS04
  
  $(this).on('keyup keypress blur change ready load', function() {
    $("#appDetails_Err").hide();
    $("#serDetails_Err").hide();
    $("#orgDetails_Err").hide();
    $("#BenfDetails_Err").hide();
    $("#reqTypeDetails_Err").hide();
    $("#email_Error").hide();
    $("#Ph_BenfError").hide();
    $("#Bemail_Error").hide();
    $("#Phno_BenfError").hide();
    
    $("#LeaseRenew_Err").hide(); //BPHS01
    $("#FirstPartyDetails_Err").hide(); //BPHS01
    $("#secPartyDetails_Err").hide(); //BPHS01
    $("#LeaseContract_Err").hide(); //BPHS02
    $("#SParty_Error").hide();
    $("#propertyDetails_Err").hide(); //Include BPHS01, BPHS03
    $("#BuildingDetails_Err").hide(); //Include BPHS01
    $("#Advertisement_Err").hide(); //Include BPHS03, BPHS03_01, BPHS07
    $("#locationDetails_Err").hide(); //BPHS11, BPHS12
    $("#MunLicDetails_Err").hide(); //BPHS12
    $("#NOCDetails_Err").hide(); //BPHS07
    $("#Beneficiary_Err").hide(); //BPHS01
    $("#CurrentMunLicDetails_Err").hide(); //BPHS06

    $("#Carcancel_Err").hide(); //BPHS04
    $("#Peddlercancel_Err").hide(); //BPHS04
    $("#DrinkingCancel_Err").hide(); //BPHS04

    org_type = $('input[name=optradio]:checked').val();
    AppType_BND = $('input[name=optradio1]:checked').val();
    req_type = $('input[name=optradio_RT]:checked').val(); //Request Type
    req_type_RTL = $('input[name=optradio_RTL]:checked').val(); //BPHS03
    sec_party = $('input[name=optradio4]:checked').val(); //BPHS01
    req_type_PCLNo = $('input[name=optradio_PCLNo]:checked').val(); //BPHS03_01
    req_type_car = $('input[name=car_both]:checked').val(); //BPHS03_02
    HealthCard_type = $('input[name=optradio_HC]:checked').val(); //BPHS05
    VIreq_type = $('input[name=optradio_VI]:checked').val(); // InspectionID - BPHS07
    Advtreq_type = $('input[name=optradio_advt]:checked').val(); // License Number - BPHS09
    shishareq_type = $('input[name=optradio_shisha]:checked').val(); // Permit Number - BPHS11
    Health_Complaints = $('input[name=optradio_HCS]:checked').val(); // Health_Complaints
    Health_Update = $('input[name=optradio_Update]:checked').val(); // BPHS06

    
    
    if (AppType_BND == "Yes") {
      $("#benradio1").hide();
    } else {
      $("#benradio1").show();
    }

    if (org_type == "Organization") {
      $("#OrganizationDetails").show();
      $("#benType").hide();
      $("#optradio2").val('Organization');
      $("#samehide").hide();
      //BPHS01 - Lease Contract New / Renew - Only - Start Here
      $("#firstParty_ID").text('Commerical ID');
      $("#First_name").text('Commerical Name');
      $("#firstPartyID").attr("placeholder", $("#firstParty_ID").html());
      $("#fName").attr("placeholder", $("#First_name").html());
      //BPHS01 - Lease Contract New / Renew - Only - End Here
      $("#SponsorId").hide(); // BPHS05,BPHS06 - Health Card only
    } else {
      $("#OrganizationDetails").hide();
      $("#benType").show();
      $("#optradio2").val('Individual');
      $("#samehide").show();
      //BPHS01 - Lease Contract New / Renew - Only - Start Here
      $("#firstParty_ID").text('Civil ID');
      $("#First_name").text('Name');
      $("#firstPartyID").attr("placeholder", $("#firstParty_ID").html());
      $("#fName").attr("placeholder", $("#First_name").html());
      //BPHS01 - Lease Contract New / Renew - Only - End Here
      $("#SponsorId").show(); // BPHS05,BPHS06 - Health Card only
    }
    
    if (req_type == "Renew") {
      $("#ReqType").show();
    } else {
      $("#ReqType").hide();
    }

    //BPHS01
    if (req_type_RTL == "7218" ) {
      $("#renewTypeDiv").show();
    } else {
      $("#renewTypeDiv, #reqTypeDiv, #form-step-03").hide();
    }
    if (sec_party == "Individual") {
      $("#Individual_Sponsor").show();
      $("#ActivityType_hidden").hide();
      $("#Civilid").text('Civil ID');
      $("#Civilname").text('Name');
      $("#secondPartyID").attr("placeholder", $("#Civilid").html());
      $("#sName").attr("placeholder", $("#Civilname").html());
    } else {
      $("#Individual_Sponsor").hide();
      $("#ActivityType_hidden").show();
      $("#Civilid").text('Commerical ID');
      $("#Civilname").text('Commerical Name')
      $("#secondPartyID").attr("placeholder", $("#Civilid").html());
      $("#sName").attr("placeholder", $("#Civilname").html());
    }

    //Contract Details - Lease Contract New / Renew - BPHS01
    if($('#Renttype_id').val() == "Industrial") {
      $("#ActivityType_hidden").show();
    } else if ($('#Renttype_id').val() == "Commercial") {
      $("#ActivityType_hidden").show();
    } else if ($('#Renttype_id').val() == "Agriculture") {
      $("#ActivityType_hidden").show();
    } else {
      $("#ActivityType_hidden").hide();
    }

    //BPHS03
    if (req_type_RTL == "Renew") {
      $("#reqTypePSL").show();
    } else {
      $("#reqTypePSL").hide();
    }
    //BPHS03_01
    if (req_type_PCLNo == "Renew") {
      $("#PrCarLNo").show();
    } else {
      $("#PrCarLNo").hide();
    }
    //BPHS03_02
    if (req_type_car == "Both") {
      $("#BothID").show();
      $("#carID").hide();
    } else if (req_type_car == "Car") {
      $("#BothID").show();
      $("#carID").show();
    } else {

    }
    //BPHS05
    if (HealthCard_type == "Renew") {
      $("#HealthCardID").show();
    } else {
      $("#HealthCardID").hide();
    }
    //BPHS07
    if (VIreq_type == "Renew") {
      $("#InspectionID").show();
    } else {
      $("#InspectionID").hide();
    }
    //BPHS09
    if (Advtreq_type == "Renew") {
      $("#LNo_Id").show();
    } else {
      $("#LNo_Id").hide();
    }
    //BPHS11
    if (shishareq_type == "Renew") {
      $("#Permit_Shisha").show();
      $("#MunLicNo_shisha_hide").hide();
      $("#MunLicNo_shisha").attr('readonly','true');
    } else {
      $("#Permit_Shisha").hide();
      $("#MunLicNo_shisha_hide").show();
      $("#MunLicNo_shisha").removeAttr('readonly');
    }
    //Health_Complaints
    if (Health_Complaints == "Organization") {
      $("#Healthcomplaintsorg").show();
      $("#Healthcomplaintsind").hide();
    } else {
      $("#Healthcomplaintsorg").hide();
      $("#Healthcomplaintsind").show();
    }

    //BPHS06
    if (Health_Update == "Update") {
      $("#UpdateID").show();
    } else {
      $("#UpdateID").hide();
    }

    //Ownership Type - Municipal License (New / Renew) / Shisha Permit (New/Renew) - BPHS03
    if($('#Municiplity_RT').val() == "Lease") {
      $("#Expiry_Date").show();
      $("#Willayat").show();
      $("#Village").show();
      $("#Leaseshow").show();
      $("#Usufructshow").hide();
      //$("#BuildingsDetails1_id").hide();
      //$("#GIShide").hide();
    } else if($('#Municiplity_RT').val() == "Usufruct") {
      $("#Expiry_Date").show();
      $("#Willayat").show();
      $("#Village").show();
      $("#Leaseshow").hide();
      $("#Usufructshow").show();
      //$("#BuildingsDetails1_id").hide();
      //$("#GIShide").hide();
    } else {
      $("#Expiry_Date").hide();
      $("#Willayat").hide();
      $("#Village").hide();
      $("#Leaseshow").hide();
      $("#Usufructshow").hide();
      $("#BuildingsDetails1_id").show();
      $("#GIShide").show();
    }

    //Beneficiary Type - Lease Contract New / Renew - BPHS01 - select box
    if($('#Beneficiary_select').val() == "Owner1"){
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").hide();
      //$("#samehide").show();
    } else if ($('#Beneficiary_select').val() == "Investor") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").show();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").show();
      $("#samehide").hide();
      $("#benradio1").hide();
    } else if ($('#Beneficiary_select').val() == "Attorney" || $('#Beneficiary_select').val() == "Heirs") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $("#Attorney_hide").hide();
    } else if ($('#Beneficiary_select').val() == "Individual") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $("#Attorney_hide").show();
    } else if ($('#Beneficiary_select').val() == "waqf") {
      $("#InvestorNo").hide();
      $("#benId").hide();
      $("#waqf_Name").show();
      $("#benradio").hide();
      $("#benhide").show();
    } else if ($('#Beneficiary_select').val() == "Organization") { //BPHS03 only 
      $("#InvestorNo").hide();
      $("#AuthorizationNo").hide();
      $("#samehide").hide();
      $("#benType").hide();
      $("#OrganizationDetails").show();
      $("#benradio").hide();
      $("#optradio2").val('Organization');
    } else {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").hide();
      //$("#samehide").show();
      $("#benradio1").show();
    }

    //Car Details- NOC for Vehicles (New / Renew) - BPHS07 - select box
    if($('#UsageType_VI').val() == "Taxi") {
      $("#paymentid").hide();
    } else {
      $("#paymentid").show();
    }

    //Advertising License (New / Renew) - BPHS09 - select box
    if($('#AdvtType_LAdvt').val() == "Car") {
      $("#carshow").show();
      $("#Validity_hide").hide();
    } else {
      $("#carshow").hide();
      $("#Validity_hide").show();
    }

    //License Details - Municipal License (Cancel)- BPHS04 - select box
    if ($('#Municipal_Shisha').val() == "Car") {
      $("#MunicipalCancel").hide();
      $("#Carcancel").show();
      $("#Peddlercancel").hide();
      $("#DrinkingCancel").hide();
      $("#BuildingsDetails1_id").hide();
      $("#GIShide").hide();
      $("#advhide").show();
      $("#Main1").text('Advertisements Type');
      $("#Main2").text('Written on the car doors');
    } else if ($('#Municipal_Shisha').val() == "Peddler") {
      $("#MunicipalCancel").hide();
      $("#Carcancel").hide();
      $("#Peddlercancel").show();
      $("#DrinkingCancel").hide();
      $("#BuildingsDetails1_id").hide();
      $("#advhide").hide();
    } else if ($('#Municipal_Shisha').val() == "Drinking") {
      $("#MunicipalCancel").hide();
      $("#Carcancel").hide();
      $("#Peddlercancel").hide();
      $("#DrinkingCancel").show();
      $("#BuildingsDetails1_id").hide();
      $("#GIShide").hide();
      $("#advhide").show();
      $("#Main1").text('Board Type');
      $("#Main2").text('Main');
    } else {
      $("#MunicipalCancel").show();
      $("#Carcancel").hide();
      $("#Peddlercancel").hide();
      $("#DrinkingCancel").hide();
      $("#BuildingsDetails_id").show();
      //$("#GIShide").show();
      $("#advhide").show();
      $("#Main1").text('Board Type');
      $("#Main2").text('Main');
    }
    //Request for Main Board (New / Renew / Update / Cancel) - BPHS15 - select box
    if ($('#request_type').val() == 7217 || $('#request_type').val() == 1000) {
      $("#ReqType").hide();
    } else {
      $("#ReqType").show();
    }
  });
});

function submitpage() {
  window.location.href = "success.html";
}
// .................................. Datepicker ..................................//
$(function() {
  $('.input-group.date').datepicker({
    format: "dd/m/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true
  });
  $(".date").datepicker("setDate", new Date());
  $(".date input").attr('readonly', 'true').css('background-color', 'transparent');
  $("#srdate, #sdate").css('background-color', '#eee');
});
// .................................. Datepicker ..................................//




// .................................. Payment Table ..................................//
$(document).ready(function() {
  var table = $('#pay_table').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div class='hidden'><label>Show</label><input type='text' class='page form-control' value='5'> <label>Entries</label></div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#firstParty_Table').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div class='hidden'><label>Show</label><input type='text' class='page form-control' value='5'> <label>Entries</label></div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
// .................................. Payment Table ..................................//
// .................................. multiselect Checkboxes ..................................//
// $(function () {
//   //Initialize Select2 Elements
//   $(".select2").select2({ width: '100%' });
// });
// .................................. multiselect Checkboxes ..................................//
// .................................. footerHeight ..................................//
$(document).ready(function() {
  //BPHS01
$("#renew_Type").change(function() {
  if(this.value == "2000") {
    $("#reqTypeDiv").hide();
    $("#form-step-03").show();
  } else if(this.value == "2022") {
    $("#reqTypeDiv").show();
    $("#form-step-03").hide();
  } else {
    $("#reqTypeDiv").hide();
    $("#form-step-03").hide();
  }
});
  var docHeight = $(window).height();
  var footerHeight = $('#footer').height();
  var footerTop = $('#footer').position().top + footerHeight;
  //alert(docHeight);
  if (footerTop < docHeight) {
    $('#footer').css('margin-top', 10 + (docHeight - footerTop) + 'px');
  }
});
// .................................. footerHeight ..................................//


// .................................. Advertisement ..................................//
$("#Adv_show").hide();
function Advclick() {
    $("#Adv_show").show();
    $("#Button").attr('disabled','true');
}
// .................................. Advertisement ..................................//

// .................................. Building_Details ..................................//
$("#building_details").show(); // BPHS01 - Lease Contract New / Renew - Property Details Tab
$("#Building_show").hide();
function Modal_Building() {
    $("#Building_show").show();
    $("#building_details").hide(); // BPHS01 - Lease Contract New / Renew - Property Details Tab
    $("#Building_btn").attr('disabled','true');
}

function skip_click() {
  $("#Building_show").hide();
  $("#building_details").show();
  $("#Building_btn").removeAttr('disabled');
}
// .................................. Building_Details ..................................//