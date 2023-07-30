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
  var btnApprove = $('<button class="btn btn-ts" type="button"><i class="fa fa-check" aria-hidden="true"></i> Approve Request</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReject = $('<button class="btn btn-ts" data-toggle="modal" data-target="#rejecttRequest" type="button"><i class="fa fa-times" aria-hidden="true"></i> Reject Request</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnNext = $('<button class="btn btn-ts" data-toggle="modal" data-target="#nextRequest" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i> Submit to Next Level</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
  var btnReturn = $('<button class="btn btn-ts" data-toggle="modal" data-target="#returnSite" type="button"><i class="fa fa-clock-o" aria-hidden="true"></i> Return for Review</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnsetsitevisit = $('<button class="btn btn-ts" data-toggle="modal" data-target="#ScheduleSiteVisit" type="button"><span class="fa fa-calendar"></span> Schedule Site Visit</button>').on('click', function() {
    //alert('Finish Clicked');
  }) 
  var btnClarifications = $('<button data-toggle="modal" data-target="#requestClarifications" type="button" class="btn btn-ts"><span class="fa fa-pencil-square-o"></span> Req. Clarifications</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReassign = $('<button class="btn btn-ts" data-toggle="modal" data-target="#reAssign" type="button"><i class="fa fa-exchange" aria-hidden="true"></i> Reassign</button>').on('click', function() {
    //alert('Finish Clicked');
  });
   
  
  
  //var btnSubmit = $('<button id="submitButton" onclick="submitpage()" style="display:none;" class="btn btn-ts"><span class="fa fa-arrow-circle-right"></span> Submit</button>')
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
      next: "Next",
      previous: "Previous"
    }
  });
  // ..................................smartwizard code start here...........................................//
});
function sitevisitpage() {
  window.location.href = "site-visits-calendar.html";
}

// function submitpage() {
  // window.location.href = "success.html";
// }