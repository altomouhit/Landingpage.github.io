$(document).ready(function() {
  var AppType_BND ,app_violation;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength);
  $(this).on('keyup keypress blur change ready load', function() {
    //BeneficiaryDetails Radio(Yes/No)
    AppType_BND = $('input[name=optradio6]:checked').val();
    app_violation = $('input[name=violation]:checked').val();

    if (AppType_BND == "No") {
      $("#benType").show();
    } else {
      $("#benType").hide();
    }



    // Violations 
	
    if ($('#Violationid').val() == '501') {
      $('#vioType').show();
	  $('#vioTypeInvent, #vioType2').hide();
      $('#violabel').text('License Number');
    } else if ($('#Violationid').val() == '502') {
      $('#vioType').show();
      $('#violabel').text('Civil ID / CR No');
	  $('#vioType2, #vioTypeInvent').hide();
	  
    } 
	/*else if ($('#Violationid').val() == '503') {
      $('#vioType').show();
	  $('#vioTypeInvent').hide();
      $('#violabel').text('Commercial Registration No');
    }*/
	else if ($('#Violationid').val() == '1000') {
	  $('#vioType, #vioType2, #vioTypeInvent').hide();
    }
	 
	 else if ($('#Violationid').val() == '504') {
	  
      $('#vioTypeInvent').show();
	  $('#vioType, #vioType2').hide();

    }
	else if ($('#Violationid').val() == '509') {
	  $('#vioType2, #vioTypeInvent').hide();
    }
	 else if ($('#Violationid2').val() == '505') {
	  $('#vioType2').show();
    }
	
	
	
	else if ($('#Violationid2').val() == '1001') {
	  $('#vioType, #vioType2, #vioTypeInvent').hide();
    }
	else {
      $('#vioTypeInvent').hide();
	  
    }
	if ($('#Violationid2').val() == '505') {
	  $('#vioType2').show();
      $('#violabel2').text('Work Completion');
    }
	else if ($('#Violationid2').val() == '506') {
      $('#vioType2').show();
      $('#violabel2').text('Permit Number');
    }
	else if ($('#Violationid2').val() == '507') {
      $('#vioType2').show();
      $('#violabel2').text('Certification Number');
    }
	else if ($('#Violationid2').val() == '508') {
      $('#vioType2').show();
      $('#violabel2').text('Letter Number');
    } 
	else {
	  $('#vioType2').hide();
	  
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
  var btnApprove = $('<button class="btn btn-ws" type="button"><i class="fa fa-check" aria-hidden="true"></i> Approve Request</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReject = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#rejecttRequest" type="button"><i class="fa fa-times" aria-hidden="true"></i> Reject Request</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnNext = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#nextRequest" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i> Submit to Next Level</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
  var btnReturn = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#returnSite" type="button"><i class="fa fa-clock-o" aria-hidden="true"></i> Return for Review</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnsetsitevisit = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#ScheduleSiteVisit" type="button"><span class="fa fa-calendar"></span> Schedule Site Visit</button>').on('click', function() {
    //alert('Finish Clicked');
  }) 
  var btnClarifications = $('<button data-bs-toggle="modal" data-bs-target="#requestClarifications" type="button" class="btn btn-ws"><span class="fa fa-pencil-square-o"></span> Req. Clarifications</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReassign = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#reAssign" type="button"><i class="fa fa-exchange" aria-hidden="true"></i> Reassign</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnStudy = $('<button class="btn btn-ws" data-bs-toggle="modal" data-bs-target="#StudyMore" type="button"><i class="fa fa-list-ul" aria-hidden="true"></i> More Study</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
   var btnSubmitViolation = $('');
  
  //var btnSubmit = $('<button id="submitButton" onclick="submitpage()"  class="btn btn-ts"><span class="fa fa-arrow-circle-right"></span> Submit</button>')
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
      next: "Next",
      previous: "Previous"
    }
  });
  // ..................................smartwizard code start here...........................................//
});
function submitViolation() {
  
}

// function submitpage() {
  // window.location.href = "success.html";
// }