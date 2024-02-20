$(document).ready(function() {
  var org_type, AppType_BND, ConsType_Value, Social_ID, sec_party, reqTypePSL, PrCarLNo, HealthCard_type, VIreq_type, Advtreq_type, shishareq_type, Health_Complaints, Beneficiary_select;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength)
  hideErrorlabels(); // hide all ID On-loading time - Custom functions
  $("#Ph_Error").hide();
  $("#email_Error").hide();
  $("#Ph_BenfError").hide();
  $("#Bemail_Error").hide();
  $("#Phno_BenfError").hide();
  $("#Ph_OrgError").hide();
  $("#Cemail_Error").hide();
  $("#Equi_Country_Error").hide(); // BPWS03 Labor & Equipment Tab > Equipment > Manufacture Country > Alphabet Validation
  $(this).on('keyup keypress blur change ready load', function() {
    org_type = $('input[name=optradio]:checked').val();
    AppType_BND = $('input[name=optradio1]:checked').val();
    Social_ID = $('input[name=optSocial]:checked').val(); // Beneficiary Details BPWS01 - 15-02-2018
    Beneficiary_select = $('#Beneficiary_select').val();
    if (AppType_BND == "Yes") {
      $(".benradio1").hide();
    } else {
      $(".benradio1").show();
    }
    if (Beneficiary_select == "Investor" || Beneficiary_select == "Attorney" || Beneficiary_select == "Heirs" || Beneficiary_select == "Student" || Beneficiary_select == "waqf") {
      org_type = "Individual";
    }

    if (org_type == "Organization" || org_type == "Company") {
      $("#OrganizationDetails").show();
      $("#benType").hide();
      $("#optradio2").val('مؤسسة');
      $("#samehide").hide();
      skipvalidation1('remove');
    } else {
      $("#OrganizationDetails").hide();
      $("#benType").show();
      $("#optradio2").val('فرد');
      $("#samehide").show();
      skipvalidation1('add');
    }
    if (Social_ID == 'Yes') {
      $('#sochide').show();
    } else {
      $('#sochide').hide();
    }
    

    //Beneficiary Type - Lease Contract New / Renew - BPHS01 - select box
    if ($('#Beneficiary_select').val() == "Owner" || $('#Beneficiary_select').val() == "Partner") {
      $(".AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").hide();
      //$("#samehide").show();
    } else if ($('#Beneficiary_select').val() == "Usufructer") {
      $(".AuthorizationNo").show();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").hide();
      //$("#samehide").show();
    } else if ($('#Beneficiary_select').val() == "Investor") {
      $(".AuthorizationNo").hide();
      $("#InvestorNo").show();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").show();
      $("#benhide").show();
      $("#samehide").hide();
      $(".benradio1").hide();
    } else if ($('#Beneficiary_select').val() == "Attorney" || $('#Beneficiary_select').val() == "Heirs" || $('#Beneficiary_select').val() == "Student") {
      $(".AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $("#Attorney_hide").hide();
    } else if ($('#Beneficiary_select').val() == "Individual") {
      $(".AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#waqf_Name").hide();
      $("#benId").show();
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
    } else if ($('#Beneficiary_select').val() == "Organization") {
      $("#InvestorNo").hide();
      $(".AuthorizationNo").hide();
      $("#samehide").hide();
      $("#benType").hide();
      $("#OrganizationDetails").show();
      $("#benradio").hide();
      $("#optradio2").val('Organization');
    } else {
      $(".AuthorizationNo").hide();
      $("#InvestorNo").hide();
      $("#benId").show();
      $("#waqf_Name").hide();
      $("#benradio").hide();
      $("#benhide").show();
      //$("#samehide").show();
      $(".benradio1").show();
    }
    if ($('#Beneficiary_select').val() == "Student") {
      $("#Bid").text('الرقم الجامعي');
      $("#benname").text('اسم الجامعة');
      $("#Benadd").text('العنوان');
      $("#Benmobi").text('رقم الهاتف');
      $("#Benemail").text('البريد اللإلكتروني');
      $("#BeneficiaryID").attr("placeholder", $("#Bid").html());
      $("#Bname").attr("placeholder", $("#benname").html());
      $("#Baddress").attr("placeholder", $("#Benadd").html());
      $("#Bph").attr("placeholder", $("#Benmobi").html());
      $("#Bemail").attr("placeholder", $("#Benemail").html());
    } else {
      $("#Bid").text('الرقم المدني للمستفيد');
      $("#benname").text('أسم المستفيد');
      $("#Benadd").text('عنوان المستفيد');
      $("#Benmobi").text('رقم الهاتف');
      $("#Benemail").text('البريد الالكتروني');
      $("#BeneficiaryID").attr("placeholder", $("#Bid").html());
      $("#Bname").attr("placeholder", $("#benname").html());
      $("#Baddress").attr("placeholder", $("#Benadd").html());
      $("#Bph").attr("placeholder", $("#Benmobi").html());
      $("#Bemail").attr("placeholder", $("#Benemail").html());
    }
    if ($('#Beneficiary_select').val() == "Owner" && org_type == "Individual") {
      $('#Securityhide').show();
    } else {
      $('#Securityhide').hide();
    }
    //Request for Well Permit - BPWS01
    if ($('#TypeSer') == '4' || $('#Sub_type').val() == '104') {
      $('#subserviceid').show();
    } else {
      $('#subserviceid').hide();
    }
    //Registration of Well - BPWS02
    if ($('#Type_Services').val() == '202' || $('#Type_Services').val() == '204' || $('#Type_Services').val() == '6') {
      $('#CertRegid').show();
      $('#Currid').show(); //BPWS01 Only this
    } else {
      $('#CertRegid').hide();
      $('#Currid').hide(); //BPWS01 Only this
    }
    //Well Water Drilling Contractors Request - BPWS03
    if ($('#Drilling_contractor').val() == '301' || $('#Drilling_contractor').val() == '302') {
      $('#Certihide').hide();
    } else {
      $('#Certihide').show();
    }
    if ($('#Name_Drilling').val() == '106' && $('#Drilling_contractor').val() == '313') {
      $('#laborid').hide();
      $('.laborhide').show();
      $('.activityid').hide();
      $('.Replacementid').hide();
      $('#Wnamehide').hide();
      $('#Cnamehide').hide();
      $('.Waiverhide').hide();
    } else if ($('#Drilling_contractor').val() == '314') {
      $('#laborid').show();
      $('.laborhide').hide();
      $('.activityid').hide();
      $('.Replacementid').show();
      $('#Wnamehide').hide();
      $('#Cnamehide').hide();
      $('.Waiverhide').hide();
    } else if ($('#Drilling_contractor').val() == '311') {
      $('#laborid').hide();
      $('.laborhide').hide();
      $('.activityid').hide();
      $('.Replacementid').hide();
      $('#Wnamehide').show();
      $('#Cnamehide').hide();
      $('.Waiverhide').show();
    } else if ($('#Drilling_contractor').val() == '312') {
      $('#laborid').hide();
      $('.laborhide').hide();
      $('.activityid').hide();
      $('.Replacementid').hide();
      $('#Wnamehide').hide();
      $('#Cnamehide').show();
      $('.Waiverhide').show();
    } else if ($('#Name_Drilling').val() == '104' && $('#Drilling_contractor').val() == '309') {
      $('#laborid').show();
      $('.laborhide').hide();
      $('.activityid').show();
      $('.Replacementid').hide();
      $('#Wnamehide').hide();
      $('#Cnamehide').hide();
      $('.Waiverhide').hide();
    } else {
      $('#laborid').show();
      $('.laborhide').hide();
      $('.activityid').hide();
      $('.Replacementid').hide();
      $('#Wnamehide').hide();
      $('#Cnamehide').hide();
      $('.Waiverhide').hide();
    }
    if ($('#Type_Equipment').val() == '330') {
      $('#srnoid').hide();
      $('#dateid').show();
    } else {
      $('#srnoid').show();
      $('#dateid').hide();
    }
    //Request for Water Situation, Hydrometric Information & Technical Surveys - BPWS04
    if ($('#Name_Service').val() == '405') {
      $('#Servicesid').show();
    } else {
      $('#Servicesid').hide();
    }
    if ($('#Name_Service').val() == '401' || $('#Name_Service').val() == '404' || $('#Name_Service').val() == '405') {
      $("#Delivery_id").show();
    } else {
      $("#Delivery_id").hide();
    }
    if ($('#Data_ser').val() == '6') {
      $('#otherdata').show();
    } else {
      $('#otherdata').hide();
    }
    // Request for Aflaj Water - BPWS06
    if ($('#Aflaj_Services').val() == '601' || $('#Aflaj_Services').val() == '1000') {
      $('#invertoryhide').hide();
      $('#plotbtn').show();
      $('#plotable').show();
      $('#plotlabel').text('بيانات قطع الاراضي المروية');
      $('#Aflajid').show();
      // label required
      $('#psr').addClass('required');
      $('#pno').addClass('required');
      $('#pgov').addClass('required');
      $('#pwillayat').addClass('required');
      $('#pvill').addClass('required');
      $('#pblock').addClass('required');
      $('#parea').addClass('required');
      $('#pstreet').addClass('required');
      $('#puse').addClass('required');
    } else {
      $('#invertoryhide').show();
      $('#plotbtn').hide();
      $('#plotable').hide();
      $('#plotlabel').text('بيانات قطعة الأرض');
      $('#Aflajid').hide();
      // label required
      $('#psr').removeClass('required');
      $('#pno').removeClass('required');
      $('#pgov').removeClass('required');
      $('#pwillayat').removeClass('required');
      $('#pvill').removeClass('required');
      $('#pblock').removeClass('required');
      $('#parea').removeClass('required');
      $('#pstreet').removeClass('required');
      $('#puse').removeClass('required');
    }
    //Request for Dams - BPWS08
    if ($('#Dam_name').val() == '802') {
      $('#labelwadi').text('اسم السد');
      $('#typeserid').show();
      $('#typedataid').hide();
    } else if ($('#Dam_name').val() == '803') {
      $('#labelwadi').text('وادي');
      $('#typeserid').hide();
      $('#typedataid').show();
    } else {
      $('#labelwadi').text('وادي');
      $('#typeserid').hide();
      $('#typedataid').hide();
    }
    if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '814' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '816' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '819') {
      $('#subserid').show();
      $('#subser1').hide();
      $('#subser2').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '817' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '820') {
      $('#subserid').hide();
      $('#subser1').show();
      $('#subser2').hide();
    } else if ($('#Dam_name').val() == '802' && $('#Dam_Type').val() == '824' || $('#Dam_name').val() == '802' && $('#Dam_Type').val() == '826') {
      $('#subserid').hide();
      $('#subser1').hide();
      $('#subser2').show();
    } else {
      $('#subserid').hide();
      $('#subser1').hide();
      $('#subser2').hide();
    }
    if ($('#Wadi_ser').val() == '6') {
      $('#wadihide').show();
    } else {
      $('#wadihide').hide();
    }
    if ($('#type_data').val() == '843') {
      $('#purshide').show();
      $('#purshow').hide();
    } else {
      $('#purshide').hide();
      $('#purshow').show();
    }
    //Request for Development Projects - BPWS18
    if ($('#Dev_Proj').val() == '105') {
      $('#subid').show();
      $('#Ssubid').show();
      $('#Sub_subid').show();
      $('#Agrid').hide();
      $('#Quarryid').hide();
    } else if ($('#Dev_Proj').val() == '101' || $('#Dev_Proj').val() == '102') {
      $('#Quarryid').show();
      $('#Agrid').hide();
    } else if ($('#Dev_Proj').val() == '104') {
      $('#Agrid').show();
      $('#Quarryid').hide();
    } else if ($('#Dev_Proj').val() == '108') {
      $('#Agrid').hide();
      $('#Quarryid').hide();
      $('#Studyhide').show();
    } else {
      $('#subid').hide();
      $('#Ssubid').hide();
      $('#Sub_subid').hide();
      $('#Quarryid').hide();
      $('#Agrid').hide();
      $('#Studyhide').hide();
    }
    if ($('#SubService').val() == '107' || $('#SubService').val() == '108') {
      $('#Sub_subid').show();
    } else {
      $('#Sub_subid').hide();
    }
  });
  // ..................................smartwizard code start here...........................................//
  // Step show event 
  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    stNumber = stepNumber;
    //console.log(stepPosition);
    if (stepNumber == (tabslength - 2)) {
      $("#submitButton").show();
    }
    if (stepNumber != (tabslength - 2)) {
      $("#submitButton").hide();
    }
  });
  // Toolbar extra buttons
  var btnFinish = $('<button></button>').text('\u062d\u0641\u0638 \u0643\u0645\u0633\u0648\u062f\u0629').addClass('btn btn-ws').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnSubmit = $('<button id="submitButton" onclick="submitpage()" style="display:none;margin-right:10px;"></button>').text('\u062a\u0633\u0644\u064a\u0645').addClass('btn btn-ws').on('click', function() {
    $('#loader').show();
    $('#loader-wrapper').show();
  });
  // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'slide', // Effect on navigation, none/slide/fade
    showStepURLhash: false, // Show url hash based on step
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
    //console.log(elmForm);
    //alert("#form-step-" + stNumber);
    //stepDirection === 'forward' :- this condition allows to do the form validation 
    //only on forward navigation, that makes easy navigation on backwards still do the validation when going next
    if (stepDirection === 'forward' && elmForm) {
      elmForm.validator('validate');
      var divMax = 7;
      for (step = 1; step < divMax; step++) {
        var divid = "#form-step-" + stepNumber + step;
        //console.log(step);
        //console.log(divid);
        $(divid + " select").each(function() {
          if ($("#" + this.id).prop('required')) {
            if ($("#" + this.id + " option:selected").val() == '1000') {
              //console.log("#" + this.id);
              $("#" + this.id).parent().removeClass("has-success");
              $("#" + this.id).parent().addClass("has-error");
            }
          }
        });
      }
      var elmErr = elmForm.find('.has-error'); // Bootstrap validator
      if (elmErr && elmErr.length > 0) {
        //alert(false);
        //console.log(elmErr);
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
    var validategroup = $(e.target).attr("validate-group");
    //console.log(e.target);
    //console.log(validategroup);
    var errorlabel = validategroup + "-err";
    elmForm = $("#" + validategroup);
    //alert("#form-step-" + stNumber);
    if (elmForm) {
      elmForm.validator('validate');
      var divMax = 7;
      for (step = 1; step < divMax; step++) {
        var divid = "#form-step-" + stNumber + step;
        $(divid + " select").each(function() {
          //console.log($("#" + this.id));
          if ($("#" + this.id).prop('required')) {
            if ($("#" + this.id + " option:selected").val() == '1000') {
              $("#" + this.id).parent().removeClass("has-success");
              $("#" + this.id).parent().addClass("has-error");
            }
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

function showValidationErrors(stepNumber, isFormValid) {
  var divMax = 7;
  var elmForm = "#form-step-" + stepNumber;
  //console.log(elmForm);
  if (isFormValid) {
    for (step = 1; step < divMax; step++) {
      $(elmForm + step + '-err').hide();
    }
  } else {
    for (step = 1; step < divMax; step++) {
      var divid = elmForm + step;
      //console.log(step);
      //console.log(divid);
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
function submitpage() {
  window.location.href = "successar.html";
}
$('.required').addClass('control-label');
// .................................. Datepicker ..................................//
$(function() {
  $('.date').datepicker({
    format: "dd/m/yyyy",
    startDate: "01/1/1900",
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
  //BPWS - Beneficiary Details - Usufructer
  $("#issusedate").datepicker({
    format: "dd/m/yyyy",
    endDate: '+0d',
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    todayBtn: true,
  }).on('changeDate', function(selected) {
    var issusedate = new Date(selected.date.valueOf());
    $('#Expirydate').datepicker('setStartDate', issusedate);
  }).on('clearDate', function(selected) {
    $('#Expirydate').datepicker('setStartDate', null);
  });
  $("#Expirydate").datepicker({
    format: "dd/m/yyyy",
    orientation: "auto bottom",
    forceParse: false,
    autoclose: true,
    todayHighlight: true,
    toggleActive: true,
    todayBtn: true,
  }).on('changeDate', function(selected) {
    var Expirydate = new Date(selected.date.valueOf());
    $('#issusedate').datepicker('setEndDate', Expirydate);
  }).on('clearDate', function(selected) {
    $('#issusedate').datepicker('setEndDate', null);
  });
  //BPWS - Beneficiary Details - Usufructer
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
// .................................. Payment Table ..................................//
// .................................. License_table ..................................//
$(document).ready(function() {
  var table = $('#License_table').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div class='hidden'><label>Show</label><input type='text' class='page form-control' value='5'> <label>Entries</label></div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
// .................................. License_table ..................................//
// .................................. multiselect Checkboxes ..................................//
(function($) {
  $(function() {
    $('#wellUse, #Data_ser, #Wadi_ser, #Eastings_Cat, #Northings_Cat, #Delivery_type').mselect();
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
//BPWS01
$("#Sub_type").change(function() {
  $("#srname").val($('#Sub_type').find('option:selected').text());
});
//BPWS02
$("#Type_Services").change(function() {
  $("#srname").val($('#Type_Services').find('option:selected').text());
});
//BPWS03
$("#Drilling_contractor").change(function() {
  $("#srname").val($('#Drilling_contractor').find('option:selected').text());
});
//BPWS04
$("#Name_Service").change(function() {
  $("#srname").val($('#Name_Service').find('option:selected').text());
});
//BPWS06
$("#Aflaj_Services").change(function() {
  $("#srname").val($('#Aflaj_Services').find('option:selected').text());
});
//BPWS08
$("#Dam_name").change(function() {
  $("#srname").val($('#Dam_name').find('option:selected').text());
});
//BPWS18
$("#Dev_Proj").change(function() {
  $("#srname").val($('#Dev_Proj').find('option:selected').text());
});
// Work Complition alert message...
$("#first_success").hide();
$('#workyes').click(function() {
  $("#first_success").fadeTo(5000, 5000).slideUp(5000, function() {
    $("#success-alert").alert('close');
  });
});
// Change Contactor alert message...
$("#Changemodal").hide();
$('#Changebtn').click(function() {
  $("#Changemodal").fadeTo(5000, 5000).slideUp(5000, function() {
    $("#success-alert").alert('close');
  });
});

$(function() {
  $('#Eastings_Cat').on('input', function() {
    this.value = this.value
      .replace(/[^\d.]/g, '')             // numbers and decimals only
      .replace(/(^[\d]{6})[\d]/g, '$1')   // not more than 2 digits at the beginning
      .replace(/(\..*)\./g, '$1')         // decimal can't exist more than once
      .replace(/(\.[\d]{4})./g, '$1');    // not more than 4 digits after decimal
  });
});

$(function() {
  $('#Northings_Cat').on('input', function() {
    this.value = this.value
      .replace(/[^\d.]/g, '')             // numbers and decimals only
      .replace(/(^[\d]{7})[\d]/g, '$1')   // not more than 2 digits at the beginning
      .replace(/(\..*)\./g, '$1')         // decimal can't exist more than once
      .replace(/(\.[\d]{4})./g, '$1');    // not more than 4 digits after decimal
  });
});

//BPWS03 Labor & Equipment Tab > Equipment > Manufacture Country > Alphabet Validation
$('#Equi_Country').keypress(function(e) {
  var regex = new RegExp("^[a-zA-Z]+$");
  var str = String.fromCharCode(!e.charCode ? e.which : e.charCode);
  if (regex.test(str)) {
    $('#Equi_Country_Error').hide();
    $(this).css('textTransform', 'uppercase');
    return true;
  } else {
    e.preventDefault();
    $('#Equi_Country_Error').show();
    return false;
  }
});
//BPWS03 Labor & Equipment Tab > Equipment > Manufacture Country > Alphabet Validation

// jquery years dropdowns BPWS03 in Equipment selection Under Manufacture Year - Start
for (i = new Date().getFullYear(); i > 2000; i--) {
  $('#Equi_Manuf').append($('<option />').val(i).html(i));
}
// jquery years dropdowns BPWS03 in Equipment selection Under Manufacture Year - End
