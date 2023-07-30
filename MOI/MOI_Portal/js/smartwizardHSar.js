var formNumber = $('#form_number').val();
var formlang = $("#formlang").val();
var AdvtType_LAdvt;
$(document).ready(function() {
  var org_type, AppType_BND, ConsType_Value, req_type, sec_party, reqTypePSL, PrCarLNo, HealthCard_type, VIreq_type, Advtreq_type, shishareq_type, Health_Complaints;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength)
  hideErrorlabels(); // hide all ID On-loading time - Custom functions
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
  $("#Ph_OrgError").hide();
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
  // Building Details Total Plot area
  $("#Total_PlotError").hide();
  $("#Car_Error").hide();
  $("#pTotal_PlotError").hide();
  $("#pCar_Error").hide();
  $(this).on('keyup keypress blur change ready load', function() {
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
    if (AppType_BND == "117") {
      $(".benradio1").hide();
    } else {
      $(".benradio1").show();
    }
    if (org_type == "Organization") {
      $("#OrganizationDetails").show();
      $("#benType").hide();
      $("#optradio2").val('مؤسسة');
      $("#samehide").hide();
      $("#SponsorId").hide(); // BPHS05,BPHS06 - Health Card only
      $("#sameowner").hide();
      skipvalidation1('remove');
    } else {
      $("#OrganizationDetails").hide();
      $("#benType").show();
      $("#optradio2").val('فرد للعمانيين فقط');
      $("#samehide").show();
      $("#SponsorId").show(); // BPHS05,BPHS06 - Health Card only
      $("#sameowner").hide();
      skipvalidation1('add');
    }
    if (req_type == "7218" && $("#Municipal_Shisha").val() != 1000) {
      $("#Contact_req").attr("required", "true");
      $("#ReqType, #renewTypeDiv").show();
      $("#form1Submit").hide();
      $("#Beneficiary_first").hide();
    } else {
      $("#Contact_req").removeAttr('required');
      $("#ReqType, #renewTypeDiv, #reqTypeDiv, #form-step-03").hide();
      $("#form1Submit").show();
      $("#Beneficiary_first").show();
    }
    if ($("#Municipal_Shisha").val() == "7224" && req_type == 7218 && formNumber == 3) {
      $("#typeid, #ExpiryID").show();
    } else {
      $("#typeid, #ExpiryID").hide();
    }
    //BPHS01
    if (sec_party == "Individual") {
      $("#Individual_Sponsor").show();
      $("#AuthorizedUser").hide();
      $("#Civilid").text('الرقم المدني');
      $("#Civilname").text('الأسم');
      $("#secondPartyExpDate").show();
      $("#secondPartyID").attr("placeholder", $("#Civilid").html());
      $("#sName").attr("placeholder", $("#Civilname").html());
    } else {
      $("#Individual_Sponsor").hide();
      $("#secondPartyExpDate").hide();
      $("#AuthorizedUser").show();
      $("#Civilid").text('رقم السجل التجاري');
      $("#Civilname").text('الإسم التجاري')
      $("#secondPartyID").attr("placeholder", $("#Civilid").html());
      $("#sName").attr("placeholder", $("#Civilname").html());
    }
    //Contract Details - Lease Contract New / Renew - BPHS01
    if ($('#Renttype_id').val() == "Industrial" && sec_party == "Organization" || $('#Renttype_id').val() == "Commercial" && sec_party == "Organization") {
      $("#ActivityType_hidden").show();
      $("#ActivityType_RT").attr("required", "true");
    } else {
      $("#ActivityType_hidden").hide();
      $("#ActivityType_RT").removeAttr('required');
      $("#ActivityType_RT").val('');
    }
    //BPHS03
    //Ownership Type - Municipal License (New / Renew) / Shisha Permit (New/Renew) - BPHS03 - Strat
    var Municiplity_RT = $("#Municiplity_RT option:selected").text();
    var Municiplity_RT_val = $("#Municiplity_RT option:selected").val();
    if (Municiplity_RT_val == "7230" || Municiplity_RT_val == "7231") {
      $("#Contractlabel").text(Municiplity_RT);
      $("#ContractNumber_PD").attr("placeholder", $("#Contractlabel").html());
      $("#ContractNumber").show();
      $("#Leaseshow").show();
    } else {
      $("#ContractNumber").hide();
      $("#Leaseshow").hide();
    }
    //License Details - Municipal License (Cancel)- BPHS04 - select box
    if ($('#Municipal_Shisha').val() == "Car") {
      $("#MunicipalCancel").hide();
      $("#Carcancel").show();
      $("#Peddlercancel").hide();
      $("#DrinkingCancel").hide();
      $("#BuildingsDetails_id").hide();
      $("#advhide").hide();
    } else if ($('#Municipal_Shisha').val() == "Peddler") {
      $("#MunicipalCancel").hide();
      $("#Carcancel").hide();
      $("#Peddlercancel").show();
      $("#DrinkingCancel").hide();
      $("#BuildingsDetails_id").hide();
      $("#advhide").hide();
    } else if ($('#Municipal_Shisha').val() == "Drinking") {
      $("#MunicipalCancel").hide();
      $("#Carcancel").hide();
      $("#Peddlercancel").hide();
      $("#DrinkingCancel").show();
      $("#BuildingsDetails_id").hide();
      $("#advhide").show();
    } else {
      $("#MunicipalCancel").show();
      $("#Carcancel").hide();
      $("#Peddlercancel").hide();
      $("#DrinkingCancel").hide();
      $("#BuildingsDetails_id").show();
      $("#advhide").show();
    }
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
    //BPHS05
    if (HealthCard_type == "Renew") {
      $("#HealthCardID").show();
      $("#form1Submit").hide();
    } else {
      $("#HealthCardID").hide();
      $("#form1Submit").show();
    }
    
    //BPHS09
    if (Advtreq_type == "Renew") {
      $("#LNo_Id").show();
      $("#form1Submit").hide();
    } else {
      $("#LNo_Id").hide();
      $("#form1Submit").show();
    }
    //BPHS11
    if (shishareq_type == "Renew") {
      $("#Permit_Shisha").show();
      $("#MunLicNo_shisha_hide").hide();
      $("#MunLicNo_shisha").attr('readonly', 'true');
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
    //Beneficiary Type - Lease Contract New / Renew - BPHS01 - select box
    if ($('#Beneficiary_select').val() == "Owner" || $('#Beneficiary_select').val() == "Usufructer") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").hide();
      //$("#samehide").show();
      //$("#sameowner").show();
    } else if ($('#Beneficiary_select').val() == "Investor") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").show();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").show();
      $("#samehide").hide();
      $("#benradio").hide();
      $("#sameowner").hide();
    } else if ($('#Beneficiary_select').val() == "Attorney" || $('#Beneficiary_select').val() == "Heirs") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $(".Attorney_hide").hide();
      $("#Munlic").show();
      $("#UpdateID").show();
      $("#sameowner").hide();
    } else if ($('#Beneficiary_select').val() == "Individual") {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $(".Attorney_hide").show();
      $("#employeeDiv").hide();
      $("#Munlic").hide();
      $("#UpdateID").hide();
      $("#sameowner").hide();
    } else if ($('#Beneficiary_select').val() == "waqf") {
      $("#InvestorNo").hide();
      $("#benId").hide();
      $("#waqf_Name").show();
      $("#benradio").hide();
      $("#benhide").show();
      $("#sameowner").hide();
    } else if ($('#Beneficiary_select').val() == "Organization") { //BPHS03 only
      $("#InvestorNo").hide();
      $("#AuthorizationNo").hide();
      $("#samehide").hide();
      $("#benType").hide();
      $("#OrganizationDetails").show();
      $("#employeeDiv").show();
      $("#benradio").hide();
      $("#optradio2").val('مؤسسة');
      $("#Munlic").show();
      $("#UpdateID").show();
      $("#sameowner").hide();
    } else {
      $("#AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $(".benradio1").show();
      $("#employeeDiv").hide();
      $("#sameowner").hide();
      $("#Munlic").hide();
    }
    //Car Details- NOC for Vehicles (New / Renew) - BPHS07 - select box
    if ($('#UsageType_VI').val() == 7267) {
      $("#Taxidiv").show();
      $("#Product_id").hide();
    } else {
      $("#Taxidiv").hide();
      $("#Product_id").show();
    }
    //Advertising License (New / Renew) - BPHS09 - select box
    if (AdvtType_LAdvt == 7333) {
      $("#carshow").show();
      $("#product").hide();
      $("#DisplayType_LAdvt").val('Temporary').attr('readonly', 'readonly');
      $("#Price_advt").val('10');
    } else if (AdvtType_LAdvt == 7331 || AdvtType_LAdvt == 7339) {
      $("#carshow").hide();
      $("#product").hide();
      $("#DisplayType_LAdvt").val('Temporary').attr('readonly', 'readonly');
      $("#Price_advt").val('10');
    } else if (AdvtType_LAdvt == 7332 || AdvtType_LAdvt == 7335 || AdvtType_LAdvt == 7337) {
      $("#carshow").hide();
      $("#product").hide();
      $("#DisplayType_LAdvt").val('Always').attr('readonly', 'readonly');
    } else if (AdvtType_LAdvt == 7330 || AdvtType_LAdvt == 7336) {
      $("#carshow").hide();
      $("#product").show();
      $("#Nationalval").val('30.00');
      $("#interNationalval").val('45.00');
      $("#DisplayType_LAdvt").val('Always').attr('readonly', 'readonly');
    } else if (AdvtType_LAdvt == 7334) {
      $("#carshow").hide();
      $("#product").show();
      $("#Nationalval").val('15.00');
      $("#interNationalval").val('20.00');
      $("#DisplayType_LAdvt").val('Always').attr('readonly', 'readonly');
    } else if (AdvtType_LAdvt == 7338) {
      $("#carshow").hide();
      $("#product").show();
      $("#Nationalval").val('5');
      $("#interNationalval").val('10');
      $("#DisplayType_LAdvt").val('Always').attr('readonly', 'readonly');
    } else {
      $("#carshow").hide();
      $("#product").show();
      $("#DisplayType_LAdvt").val('Always').attr('readonly', 'readonly');
    }
    //Request for Main Board (New / Renew / Update / Cancel) - BPHS15 - select box
    if (formNumber == 15) {
      if (($('#request_type').val() == 7217 || $('#request_type').val() == 1000)) {
        $("#Board_lic").hide();
      } else {
        $("#Board_lic").show();
      }
    }
  });
  // ..................................smartwizard code start here...........................................//
  // Step show event 
  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    stNumber = stepNumber;
    //console.log(stepPosition);
    if (stepNumber == (tabslength - 1)) {
      $("#submitButton").show();
    }
    if (stepNumber != (tabslength - 1)) {
      $("#submitButton").hide();
    }
  });
  // Toolbar extra buttons
  var btnFinish = $('<button></button>').text('\u062d\u0641\u0638 \u0643\u0645\u0633\u0648\u062f\u0629').addClass('btn btn-hs').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnSubmit = $('<button id="submitButton" onclick="submitpage()" style="display:none;margin-right:10px;"></button>').text('\u062a\u0633\u0644\u064a\u0645').addClass('btn btn-hs').on('click', function() {
    $("#loader").show();
    $("#loader-wrapper").show();
  });
  // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'slide', // Effect on navigation, none/slide/fade
    showStepURLhash: true, // Show url hash based on step
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarExtraButtons: [btnFinish, btnSubmit]
    },
    lang: { // Language variables for button
      next: "التالي",
      previous: "السابق"
    }
  });
  // ..................................smartwizard Validation Start Here (Dynamic)...........................................//
  /*$("#smartwizard").on("leaveStep", function(e, anchorObject, stepNumber, stepDirection) {
    var elmForm = $("#form-step-" + stepNumber);
    //alert("#form-step-" + stNumber);
    // stepDirection === 'forward' :- this condition allows to do the form validation 
    // only on forward navigation, that makes easy navigation on backwards still do the validation when going next
    if (stepDirection === 'forward' && elmForm) {
      elmForm.validator('validate');
      var divMax = 7;
      for (step = 1; step < divMax; step++) {
        var divid = "#form-step-" + stepNumber + step;
        //console.log(divid);
        $(divid + " select").each(function() {
          if ($("#" + this.id + " option:selected").val() == '1000') {
            $("#" + this.id).parent().removeClass("has-success");
            $("#" + this.id).parent().addClass("has-error");
          }
        });
      }
      var elmErr = elmForm.find('.has-error'); // Bootstrap validator
      if (elmErr && elmErr.length > 0) {
        //alert(false);
        showValidationErrors(stepNumber, false);
        // Form validation failed
        return false;
      } else {
        //alert(true);
        showValidationErrors(stepNumber, true);
        // Form validation success
        //$('#loader').show();
        //$('#loader-wrapper').show();
        return true;
      }
    }
  });
  $(this).on('keyup', function(e) {
    //var elmForm = $("#form-step-01");
    var validategroup = $(e.target).attr("validate-group");
    var errorlabel = validategroup + "-err";
    elmForm = $("#" + validategroup);
    //alert("#form-step-" + stNumber);
    if (elmForm) {
      elmForm.validator('validate');
      var divMax = 7;
      for (step = 1; step < divMax; step++) {
        //$("#form-step-02-err").show();
        var divid = "#form-step-" + stNumber + step;
        $(divid + " select").each(function() {
          if ($("#" + this.id + " option:selected").val() == '1000') {
            $("#" + this.id).parent().removeClass("has-success");
            $("#" + this.id).parent().addClass("has-error");
          }
        });
      }
      var elmErr = elmForm.find('.has-error');
      if (elmErr && elmErr.length > 0) {
        $("#" + errorlabel).show();
        $('#smartwizard').find("#" + errorlabel).focus();
        // Form validation failed
        return false;
      } else {
        $("#" + errorlabel).hide();
        return true;
      }
    }
  });*/
});
$('input[name="requestType"]').change(function() {
  if (this.value == 7218) {
    $("#Contact_req").attr("required", "true");
    $("#renewTypeDiv").show();
    $("#oldRenewModal").modal("show");
  } else {
    $("#Contact_req").removeAttr('required');
    $("#renewTypeDiv").hide();
  }
});
function showValidationErrors(stepNumber, isFormValid) {
  var divMax = 7;
  var elmForm = "#form-step-" + stepNumber;
  if (isFormValid) {
    for (step = 1; step < divMax; step++) {
      $(elmForm + step + '-err').hide();
    }
  } else {
    for (step = 1; step < divMax; step++) {
      //$("#form-step-02-err").show();
      var divid = elmForm + step;
      var haserror = $(divid).find('.has-error');
      if (haserror && haserror.length > 0) {
        $(divid + "-err").show();
      } else {
        $(divid + "-err").hide();
      }
    }
    var isFocus = false;
    for (step = 1; step < divMax; step++) {
      var divid = elmForm + step;
      $(divid).find('input,select').each(function() {
        if ($(this).prop('required')) {
          if ($(this).val().length == 0) {
            $(this).focus();
            $(divid + "-err span").text($(this).attr('placeholder'));
            isFocus = true;
            return false;
          }
        }
      });
      if (isFocus) {
        return false;
      }
    }
  }
}

function hideErrorlabels() {
  var maxForms = 10
  var divMax = 7;
  for (stepNumber = 0; stepNumber < maxForms; stepNumber++) {
    var elmForm = "#form-step-" + stepNumber;
    for (step = 1; step < divMax; step++) {
      $(elmForm + step + '-err').hide();
    }
  }
}

function skipvalidation1(type) {
  // if (type == 'add') {
  // //Individual Add the required attr 
  // $("#BeneficiaryID").attr("required", "true");
  // $("#Bname").attr("required", "true");
  // $("#Baddress").attr("required", "true");
  // $("#Bph").attr("required", "true");
  // //Organization remove the required attr 
  // $("#crid").removeAttr('required');
  // $("#crid").val('');
  // } else {
  // //Individual remove the required attr 
  // $("#BeneficiaryID").removeAttr('required');
  // $("#Bname").removeAttr('required');
  // $("#Baddress").removeAttr('required');
  // $("#Bph").removeAttr('required');
  // $("#BeneficiaryID").val('');
  // $("#Bname").val('');
  // $("#Baddress").val('');
  // $("#Bph").val('');
  // //Organization Add the required attr
  // $("#crid").attr("required", "true");
  // }
}
// ..................................smartwizard Validation End Here (Dynamic)...........................................//
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
//BPHS03
//Ownership Type - Municipal License (New / Renew) / Shisha Permit (New/Renew) - BPHS03 - Strat
$("#Municipal_Shisha").change(function() {
  var Municipal_Shisha = $("#Municipal_Shisha option:selected").text();
  var Municipal_Shisha_val = $("#Municipal_Shisha option:selected").val();
  var req_type = $('input[name=optradio_RT]:checked').val(); //Request Type
  if ((Municipal_Shisha_val == "7222" || Municipal_Shisha_val == "7224" || Municipal_Shisha_val == "7225" || Municipal_Shisha_val == "7226")) {
    $("#Licenselabel").text(Municipal_Shisha);
    $("#Contact_req").attr("placeholder", $("#Licenselabel").html());
    $("#legendlabel").text(Municipal_Shisha);
  }
  if ((Municipal_Shisha_val == "7222" || Municipal_Shisha_val == "7224" || Municipal_Shisha_val == "7225" || Municipal_Shisha_val == "7226") && req_type == 7218 && formNumber == 3) {
    $("#ReqType").show();
  } else {
    $("#ReqType").hide();
  }
  if (Municipal_Shisha_val == 7222) {
    $("#Municipal_owner").show();
    $("#Municipality_Activity").show();
    $("#Peddler_Activity").hide();
    $("#Peddler_Request").hide();
    $("#Type_Municipal").hide();
    $("#Peddlershow").hide();
    $("#BothID").hide();
    $("#Vehicleshow").hide();
    $("#UsageTypeHide, #advTab").hide();
    $("#InspectionID").hide();
  } else if (Municipal_Shisha_val == 7224) {
    $("#Municipal_owner").hide();
    $("#Municipality_Activity").hide();
    $("#Peddler_Activity").hide();
    $("#Peddler_Request").hide();
    $("#Type_Municipal").show();
    $("#Peddlershow").hide();
    $("#BothID").hide();
    $("#Vehicleshow").show();
    $("#UsageTypeHide, #advTab").show();
    $("#InspectionID").show();
  } else if (Municipal_Shisha_val == 7225) {
    $("#Municipal_owner").hide();
    $("#Municipality_Activity").hide();
    $("#Peddler_Activity").show();
    $("#Peddler_Request").show();
    $("#Type_Municipal").hide();
    $("#Peddlershow").hide();
    $("#BothID").show();
    $("#Vehicleshow").show();
    $("#UsageTypeHide, #advTab").hide();
    $("#InspectionID").hide();
  } else if (Municipal_Shisha_val == 7226) {
    $("#Municipal_owner").hide();
    $("#Municipality_Activity").hide();
    $("#Peddler_Activity").hide();
    $("#Peddler_Request").hide();
    $("#Type_Municipal").hide();
    $("#Peddlershow").show();
    $("#BothID").show();
    $("#Vehicleshow").hide();
    $("#UsageTypeHide, #advTab").hide();
    $("#InspectionID").hide();
  }
});
//BPHS01 - Lease Contract(New/Renew) - New Change
$("#license_issued").change(function() {
  if (this.value == 252) {
    $("#Municipal_label").removeClass("required");
  } else {
    $("#Municipal_label").addClass("required");
  }
});
//BPHS03 Peddler License - code commented on New Change - 10/01/2019
/*$("#car_both").change(function() {
  if (this.value == 7239) {
    $("BothID").show();
    $("#Vehicleshow").hide();
  } else if (this.value == 7238) {
    $("#BothID").show();
    $("#Vehicleshow").show();
  }
});*/
//Ownership Type - Municipal License (New / Renew) / Shisha Permit (New/Renew) - BPHS03 - End
//Advertising License (New / Renew) - BPHS09 - select box
$("#AdvtType_LAdvt").change(function() {
  AdvtType_LAdvt = this.value; // cannot remove
  $('#startDate_Adv, #ExpiryDate_Adv').val('').datepicker('update');
});
//Advertising License (New / Renew) - BPHS09 - select box
// jquery years dropdowns BPWS03 in Equipment selection Under Manufacture Year - Start
for (i = new Date().getFullYear(); i > 2000; i--) {
  $('#Car_Manuf').append($('<option />').val(i).html(i));
}
// jquery years dropdowns BPWS03 in Equipment selection Under Manufacture Year - End
function submitpage() {
  window.location.href = "success.html";
}
$('.required').addClass('control-label');
// .................................. Datepicker ..................................//
function addDays(selectedDate, daysCount) {
  var date = new Date(selectedDate);
  var next_date = new Date(date.setDate(date.getDate() + daysCount));
  return next_date;
}

function addMonths(selectedDate, monthCount) {
  var date1 = new Date(selectedDate);
  var date2 = new Date(date1.setMonth(selectedDate.getMonth() + monthCount));
  return date2;
}

function addYear(selectedDate, yearCount) {
  var date1 = new Date(selectedDate);
  var date2 = new Date(date1.setMonth(selectedDate.getMonth() + (12 * yearCount)));
  var date3 = new Date(date2.setDate(date2.getDate() - 1));
  return date3;
}
$(function() {
  $('.date').datepicker({
    format: "dd/mm/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    todayBtn: true
  });
  //$(".date").datepicker("setDate", new Date());
  //$(".date input").attr("required", "true");
  $("#srdate, #sdate").datepicker("setDate", new Date());
  /* BPHS09 - StartDate and EndDate for 90day only */
  $("#startDate_Adv").datepicker({
    format: "dd/mm/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    startDate: '0d',
    todayBtn: true,
  }).on('changeDate', function(selected) {
    var startDate = new Date(selected.date.valueOf());
    if (AdvtType_LAdvt == 7330) {
      var endDate = addYear(startDate, 1);
    } else if (AdvtType_LAdvt == 7331 || AdvtType_LAdvt == 7333 || AdvtType_LAdvt == 7339) {
      var endDate = addDays(startDate, 90);
    } else {
      var endDate = addYear(startDate, 2);
    }
    $('#ExpiryDate_Adv').datepicker('setStartDate', startDate);
    $('#ExpiryDate_Adv').datepicker('setEndDate', endDate);
  }).on('clearDate', function(selected) {
    $('#ExpiryDate_Adv').datepicker('setStartDate', null);
  });
  $("#ExpiryDate_Adv").datepicker({
    format: "dd/mm/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    startDate: '0d',
    todayBtn: true,
  }).on('changeDate', function(selected) {
    var endDate = new Date(selected.date.valueOf());
    $('#startDate_Adv').datepicker('setEndDate', endDate);
    console.log(endDate);
  }).on('clearDate', function(selected) {
    $('#startDate_Adv').datepicker('setEndDate', null);
  });
  /* BPHS09 - StartDate and EndDate for 90day only */
});
// .................................. Datepicker ..................................//
// .................................. Payment Table ..................................//
$(document).ready(function() {
  var pay_table = $('#pay_table').DataTable();
  pay_table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div class='hidden' hidden><label>Show</label><input type='text' class='pay_page form-control' value='5'> <label>Entries</label></div>");
  $(".pay_page").keyup(function() {
    pay_table.page.len(this.value).draw();
  });
});
$(document).ready(function() {
  var firstParty_Table = $('#firstParty_Table').DataTable();
  firstParty_Table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div class='hidden' hidden><label>Show</label><input type='text' class='firstParty_page form-control' value='5'> <label>Entries</label></div>");
  $(".firstParty_page").keyup(function() {
    firstParty_Table.page.len(this.value).draw();
  });
});
$(document).ready(function() {
  var Main_Muni = $('#Main_Muni').DataTable();
  Main_Muni.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div class='hidden' hidden><label>Show</label><input type='text' class='Muni_page form-control' value='5'> <label>Entries</label></div>");
  $(".Muni_page").keyup(function() {
    Main_Muni.page.len(this.value).draw();
  });
});
// .................................. Payment Table ..................................//
// .................................. multiselect Checkboxes ..................................//
(function($) {
  $(function() {
    $('#ActivityType_RT').mselect();
    //$('#Data_ser').mselect();
  });
})(jQuery);
// .................................. multiselect Checkboxes ..................................//
// .................................. footerHeight ..................................//
$(document).ready(function() {
  var docHeight = $(window).height();
  var footerHeight = $('#footer-main').height();
  var footerTop = $('#footer-main').position().top + footerHeight;
  //alert(docHeight);
  if (footerTop < docHeight) {
    $('#footer-main').css('margin-top', 10 + (docHeight - footerTop) + 'px');
  }
});
// .................................. footerHeight ..................................//
// .................................. Advertisement ..................................//
function Advclick(type) {
  if (type == "add") {
    $("#Adv_show").show();
    $("#Button").prop("disabled", true);
  } else {
    $("#Adv_show").hide();
    $("#Button").prop("disabled", false);
  }
}
// .................................. Advertisement ..................................//
// .................................. Building_Details ..................................//
$("#building_details").show(); // BPHS01 - Lease Contract New / Renew - Property Details Tab
$("#Building_show").hide();
$("#buildlic").hide(); // building details hiding based on the license number
function Modal_Building(event) {
  $("#Building_show").show();
  $("#building_details").hide(); // BPHS01 - Lease Contract New / Renew - Property Details Tab
  //$("#addbuildingid").attr('disabled','true');
};

function skip_click(event) {
  $("#Building_show").hide();
  $("#building_details").show();
  $("#addbuildingid").removeAttr('disabled');
  $("#buildlic").hide();
  $("#showbuildingid").show();
};

function showbuilding(showbuildingid) {
  $("#buildlic").show(); // building details hiding based on the license number
  $("#showbuildingid").hide();
  $("#building_details").hide();
};
// .................................. Building_Details ..................................//
$(document).ready(function() {
  $('.price, .subtot, #Price_advt').attr('readonly', true);
  var $tblrows = $("#tblProducts tbody tr");
  $tblrows.each(function(index) {
    var $tblrow = $(this);
    $tblrow.find('.qty').on('keyup', function() {
      var qty = $tblrow.find("[name=qty]").val();
      var price = $tblrow.find("[name=price]").val();
      var subTotal = parseInt(qty, 10) * parseFloat(price);
      if (!isNaN(subTotal)) {
        $tblrow.find('.subtot').val(subTotal.toFixed(2));
        var grandTotal = 0;
        $(".subtot").each(function() {
          var stval = parseFloat($(this).val());
          grandTotal += isNaN(stval) ? 0 : stval;
        });
        $('#Price_advt').val(grandTotal.toFixed(2));
      }
    });
  });
});