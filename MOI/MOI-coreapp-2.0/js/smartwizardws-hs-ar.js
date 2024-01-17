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
  var btnApprove = $('<button class="btn btn-grad btn-ts" data-bs-toggle="modal" data-bs-target="#approveRequest" type="button"><i class="fas fa-check-circle fa-lg" aria-hidden="true"></i> الموافقة على الطلب</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReject = $('<button class="btn btn-grad btn-ts" data-bs-toggle="modal" data-bs-target="#rejecttRequest" type="button"><i class="fa fa-times-circle fa-lg" aria-hidden="true"></i> رفض الطلب</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnNext = $('<button class="btn btn-grad btn-ts" data-bs-toggle="modal" data-bs-target="#nextRequest" type="button"><i class="fa fa-chevron-left fa-lg" aria-hidden="true"></i> أرسال للمستوى التالى </button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
  var btnReturn = $('<button class="btn btn-grad btn-ts" data-bs-toggle="modal" data-bs-target="#returnSite" type="button"><i class="fa fa-clock fa-lg" aria-hidden="true"></i> عودة للمراجعة</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnsetsitevisit = $('<button class="btn btn-grad btn-ts" data-bs-toggle="modal" data-bs-target="#ScheduleSiteVisit" type="button"><span class="fa fa-calendar fa-lg"></span> جدولة زيارة الموقع</button>').on('click', function() {
    //alert('Finish Clicked');
  }) 
  var btnClarifications = $('<button data-bs-toggle="modal" data-bs-target="#requestClarifications" type="button" class="btn btn-grad btn-ts"><span class="fa fa-pencil-square fa-lg"></span> طلب توضيحات</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReassign = $('<button class="btn btn-grad btn-ts" data-bs-toggle="modal" data-bs-target="#reAssign" type="button"><i class="fa fa-exchange fa-lg" aria-hidden="true"></i> إعادة تعيين</button>').on('click', function() {
    //alert('Finish Clicked');
  });
   
  
  
 // var btnSubmit = $('<button id="submitButton" onclick="submitpage()" style="display:none;" class="btn btn-ts"><span class="fa fa-arrow-circle-left"></span> تسليم </button>')
    // Smart Wizard
  $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'fade', // Effect on navigation, none/slide/fade
    showStepURLhash: false, // Show url hash based on step
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarExtraButtons: [btnApprove, btnReject, btnNext, btnReturn, btnsetsitevisit, btnClarifications, btnReassign]
    },
    lang: { // Language variables for button
      next: "التالى",
      previous: "السابق"
    }
  });
  // ..................................smartwizard code start here...........................................//
});
function sitevisitpage() {
  window.location.href = "site-visits-calendar-arabic.html";
}

// function submitpage() {
  // window.location.href = "success.html";
// }