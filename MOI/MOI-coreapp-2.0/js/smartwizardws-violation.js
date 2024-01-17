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
	  $('#vioTypeNone').hide();
      $('#vioType').show();
      $('#violabel').text('License Number');
    } else if ($('#Violationid').val() == '502') {
		$('#vioTypeNone').hide();
      $('#vioType').show();
      $('#violabel').text('Civil ID');
    } else if ($('#Violationid').val() == '503') {
		$('#vioTypeNone').hide();
      $('#vioType').show();
      $('#violabel').text('Commercial Registration No');
    }else if ($('#Violationid').val() == '504') {
		$('#vioTypeNone').hide();
      $('#vioType').show();
      $('#violabel').text('Plot Serial Number');
    }
	else if ($('#Violationid').val() == '505') {
		$('#vioType').hide();
      $('#vioTypeNone').show();
      $('#violabel1').text('Northings');
	  $('#vioTypeNone').show();
      $('#violabel2').text('Eastings');
    }
	else if ($('#Violationid').val() == '506') {
      $('#vioType').show();
      $('#violabel').text('Permit');
    } else {
      $('#vioType').hide();
	  $('#vioTypeNone').hide();
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
   var btnSubmitViolation = $('<button  class="btn btn-ts btn-violation-submit" data-bs-toggle="modal" data-bs-target="#violationSubmit" type="button"><span class="fa fa-arrow-circle-right"></span> Submit</button>');
   // Toolbar extra buttons
  var btnApprove = $('<button class="btn btn-ts" id="ApproveId" type="button" data-bs-toggle="modal" data-bs-target="#approveRequest" ><i class="fa fa-check" aria-hidden="true"></i> Approve Request</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReject = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#rejecttRequest" type="button"><i class="fa fa-times" aria-hidden="true"></i> Reject Request</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnNext = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#nextRequest" type="button"><i class="fa fa-chevron-right" aria-hidden="true"></i> Submit to Next Level</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  
  var btnReturn = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#returnSite" type="button"><i class="fa fa-clock-o" aria-hidden="true"></i> Return for Review</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnsetsitevisit = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#ScheduleSiteVisit" type="button"><span class="fa fa-calendar"></span> Schedule Site Visit / Interview</button>').on('click', function() {
    //alert('Finish Clicked');
  }) 
  var btnClarifications = $('<button data-bs-toggle="modal" data-bs-target="#requestClarifications" type="button" class="btn btn-ts"><span class="fa fa-pencil-square-o"></span> Req. Clarifications</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnReassign = $('<button class="btn btn-ts" data-bs-toggle="modal" data-bs-target="#reAssign" type="button"><i class="fa fa-exchange" aria-hidden="true"></i> Reassign</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnSubmitbg = $('<button class="btn btn-ts" type="button"><i class="fa fa-arrow-right" aria-hidden="true"></i> Submit by BG</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnFreeze = $('<button class="btn btn-ts" id="Freezeid"  data-bs-toggle="modal" data-bs-target="#Freeze" type="button"><i class="fa fa-hand-rock-o" aria-hidden="true"></i> Hold</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnUnFreeze = $('<button class="btn btn-ts" id="UnFreezeid" data-bs-toggle="modal" data-bs-target="#UnFreeze" type="button"><i class="fa fa-hand-rock-o" aria-hidden="true"></i> Resume</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnStudy = $('<button class="btn btn-ts" id="Studyid" data-bs-toggle="modal" data-bs-target="#Tostudy" type="button"><span class="fa fa-arrow-circle-right"></span>To Study</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnlegal = $('<button class="btn btn-ts" id="legalid" data-bs-toggle="modal" data-bs-target="#Tolegal" type="button"></span> To Legal Reseacher</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var btnStaff = $('<button class="btn btn-ts" id="Staffid" data-bs-toggle="modal" data-bs-target="#ToStaff" type="button"><span class="fa fa-arrow-circle-right"></span> To Legal Staff</button>').on('click', function() {
    //alert('Finish Clicked');
  });
  var srname = $("#srname").val();
  // Smart Wizard
    $('#smartwizard').smartWizard({
    selected: 0,
    theme: 'default',
    transitionEffect: 'slide', // Effect on navigation, none/slide/fade
    showStepURLhash: false, // Show url hash based on step
    toolbarSettings: {
      toolbarPosition: 'bottom',
      toolbarExtraButtons: [btnApprove, btnReject, btnNext, btnReturn, btnClarifications, btnReassign, btnFreeze, btnUnFreeze, btnSubmitViolation]
    },
    lang: { // Language variables for button
      next: "Next",
      previous: "Previous"
    }
  });
  if (srname == "111") {
    $("#ApproveId").show();
    $("#Freezeid").hide();
    $("#UnFreezeid").hide();
  } else {
    $("#ApproveId").hide();
    $("#Freezeid").show();
    $("#UnFreezeid").show();
  }
  // ..................................smartwizard code start here...........................................//
});
function submitViolation() {
  
}

// function submitpage() {
  // window.location.href = "success.html";
// }

//- BPWS05 -> Water Violations view issue Details  -> Immediately Remove 
function Immediately_fn() {
    if ($("#Immediatelyid").text() == "Update") {
        Immediatelyedit.remove().draw();
        $("#Immediatelyid").text("Add");
    } else {}
    var Immediately_object = {};
    var idno = $('#idno').val();
    var Uname = $('#Uname').val();
    var desiname = $('#desiname').val();
    var orgname = $('#orgname').val();

    Immediately_object.Immediately_idno = idno;
    Immediately_object.Immediately_Uname = Uname;
    Immediately_object.Immediately_desiname = desiname;
    Immediately_object.Immediately_orgname = orgname;

    var Immediately_table = $('#Immediately_table').DataTable();
    Immediately_table.row.add(Immediately_object).draw();
    $("#idno").val('');
    $("#Uname").val('');
    $("#desiname").val('');
    $('#orgname').val('');
}
//Edit Immediately_fn Details
function Immediatelyeditfunction(data1) {
    var data = data1.data();
    $("#Immediatelyid").text("Update");
    $("#idno").val(data.Immediately_idno);
    $("#Uname").val(data.Immediately_Uname);
    $("#desiname").val(data.Immediately_desiname);
    $('#orgname').val(data.Immediately_orgname);
}
$(document).ready(function() {
    $('#Immediately_table tbody').on('click', '#editImmediatelydetails', function() {
        var table = $('#Immediately_table').DataTable();
        Immediatelyedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Immediatelyeditfunction(data);
    });
    $('#Immediately_table tbody').on('click', '#removeImmediatelydetails', function() {
        var table = $('#Immediately_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Immediately_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Immediately_idno", sTitle: "ID No", sType: "string" },
    { "mDataProp": "Immediately_Uname", sTitle: "User Name", sType: "string" }, 
    { "mDataProp": "Immediately_desiname", sTitle: "Designation Name", sType: "string" },
    { "mDataProp": "Immediately_orgname", sTitle: "Organization", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editImmediatelydetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeImmediatelydetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Immediately_table').DataTable({
        "aoColumns": Immediately_cols,
        "columnDefs": [{
            "searchable": false,
            "autoFill": true,
            "orderable": false,
            "targets": 0
        }],
        "order": [
            [0, 'asc']
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