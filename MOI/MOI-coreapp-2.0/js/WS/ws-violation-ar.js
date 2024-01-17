$(document).ready(function() {
  var AppType_BND;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength);
  $(this).on('keyup keypress blur change ready load', function() {
    //BeneficiaryDetails Radio(Yes/No)
    AppType_BND = $('input[name=optradio6]:checked').val();
    if (AppType_BND == "No") {
      $("#benType").show();
    } else {
      $("#benType").hide();
    }
    // Violations 
    if ($('#Violationid').val() == '501') {
      $('#vioType').show();
      $('#violabel').text('الرقم المتسلسل');
    } else if ($('#Violationid').val() == '502') {
      $('#vioType').show();
      $('#violabel').text('الرقم المدني');
    } else if ($('#Violationid').val() == '503') {
      $('#vioType').show();
      $('#violabel').text('رقم السجل التجاري');
    }	else if ($('#Violationid').val() == '504') {
      $('#vioType').show();
      $('#violabel').text('رقم الحصر');
    }
	else if ($('#Violationid').val() == '505') {
      $('#vioType').show();
      $('#violabel').text('Work Completion');
    }
	else if ($('#Violationid').val() == '506') {
      $('#vioType').show();
      $('#violabel').text('Permit Number');
    }
	else if ($('#Violationid').val() == '507') {
      $('#vioType').show();
      $('#violabel').text('Certification Number');
    }
	else if ($('#Violationid').val() == '508') {
      $('#vioType').show();
      $('#violabel').text('Letter Number');
    } else {
      $('#vioType').hide();
    }
  });
  // ..................................smartwizard code start here...........................................//
  // Step show event 
  $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
    //alert("You are on step "+stepNumber+" now");
    if (stepNumber == (tabslength - 1)) {
      $("#submitButton").show();
    }
    if (stepNumber != (tabslength - 1)) {
      $("#submitButton").hide();
    }
  });
  // Toolbar extra buttons

  
  // var btnReturn = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#returnSite" type="button"><i class="fa fa-clock-o" aria-hidden="true"></i> عودة للمراجعة</button>').on('click', function() {
    // //alert('Finish Clicked');
  // });
  // var btnsetsitevisit = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#ScheduleSiteVisit" type="button"><span class="fa fa-calendar"></span> جدولة زيارة الموقع</button>').on('click', function() {
    // //alert('Finish Clicked');
  // }) 
  // var btnReassign = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#reAssign" type="button"><i class="fa fa-exchange" aria-hidden="true"></i> إعادة تعيين</button>').on('click', function() {
    // //alert('Finish Clicked');
  // });
  
  var btnSubmitViolation = $('');
   
  
  
 // var btnSubmit = $('<button id="submitButton" onclick="submitpage()" style="display:none;" class="btn btn-ts"><span class="fa fa-arrow-circle-left"></span> تسليم </button>')
    // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'fade', // Effect on navigation, none/slide/fade
    showStepURLhash: false, // Show url hash based on step
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarExtraButtons: [btnSubmitViolation]
    },
    lang: { // Language variables for button
      next: "التالى",
      previous: "السابق"
    }
  });
  // ..................................smartwizard code start here...........................................//
});
function submitViolation() {
  
}

// function submitpage() {
  // window.location.href = "success.html";
// }