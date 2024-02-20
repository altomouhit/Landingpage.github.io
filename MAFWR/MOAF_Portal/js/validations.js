function isNumberKey(evt, obj) {
  var inputId = obj.id;
  var inputValue = obj.value;
  var inputLength = inputValue.length;
  var reqiredLength = 8; //required length of phone number 
  var interest = $('ul#credit').find('li.active').data('interest');
  var PhNo_cont_val = $('#smartwizard').find("#Phone_cont").val();
  var charCode = (evt.which) ? evt.which : event.keyCode
  if (charCode > 31 && (charCode < 48 || charCode > 57)) {
    // $('#smartwizard').find("#Ph_Error").show();          
  } else {}
  //validation for Phone number in all Tabs-Starts        
  if (inputLength < 8 || inputLength > 8) {
    //validation for Phone number in "Applicant Details" Tab 
    if (interest == 1 && interest != 2) {
      if (inputLength < reqiredLength || inputLength > reqiredLength) {
        $('#smartwizard').find("#Ph_Error").show();
        $('#smartwizard').find("#Ph_OrgError").hide();
        $('#smartwizard').find("#" + inputId).focus();
      } else {
        $('#smartwizard').find("#Ph_Error").hide();
      }
    }
    //validation for Phone number in "Organization Details" Tab 
    else if (interest == 1 && interest != 2) {
      if (inputLength < reqiredLength || inputLength > reqiredLength) {
        $('#smartwizard').find("#Ph_OrgError").show();
        $('#smartwizard').find("#Ph_Error").hide();
        $("#smartwizard").find("SParty_Error").show();
        $('#smartwizard').find("#" + inputId).focus();
      } else {
        $('#smartwizard').find("#Ph_OrgError").hide();
        $("#smartwizard").find("SParty_Error").hide();
      }
    }
    //validation for Phone number in "Benificiary Details" Tab 
    else if (interest == 2 && interest != 1) {
      if (inputLength < reqiredLength || inputLength > reqiredLength) {
        $('#smartwizard').find("#Ph_BenfError").show();
        $('#smartwizard').find("#Ph_Error").hide();
        $('#smartwizard').find("#Ph_OrgError").hide();
        $('#smartwizard').find("#" + inputId).focus();
      } else {
        $('#smartwizard').find("#Ph_BenfError").hide();
      }
    }
    //validation for Phone number in "Contractor Details" Tab 
    else if (interest == 5 && interest != 1 && interest != 2 && interest != 3 && PhNo_cont_val != "") {
      if (inputLength < reqiredLength || inputLength > reqiredLength) {
        $('#smartwizard').find("#Ph_ContError").show();
        $('#smartwizard').find("#Ph_BenfError").hide();
        $('#smartwizard').find("#Ph_Error").hide();
        $('#smartwizard').find("#Ph_OrgError").hide();
        $('#smartwizard').find("#" + inputId).focus();
      } else {
        $('#smartwizard').find("#Ph_ContError").hide();
      }
    } else {}
  } else {
    $('#smartwizard').find("#Ph_OrgError").hide();
    $('#smartwizard').find("#Ph_Error").hide();
    $('#smartwizard').find("#Ph_BenfError").hide();
    $('#smartwizard').find("#Ph_ContError").hide();
    $("#smartwizard").find("#SParty_Error").hide();
  }
}

function isValidEmail(obj) {
  //alert('test');
  var regexEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  var inputId = obj.id;
  var inputValue = obj.value;
  // alert(regexEmail.test(inputValue));
  if (inputValue != "") {
    if (regexEmail.test(inputValue)) {
      //alert("It's Okay");
      $("#email_Error").hide();
      //$("#Bemail_Error").hide();
    } else {
      $("#email_Error").show();
      //$("#Bemail_Error").show();
      // alert("It's Not Okay");
    }
  }
}

function isFileSizeAndType(rowId, obj) {
  console.log("inside isFileSizeAndType " + rowId);
  var requiredFileSize = 1;
  var fileTypeEr = false;
  var fileSizeEr = false;
  var fileName = $('#attach_' + rowId).val();
  console.log("fileName :: " + fileName);
  var ext = fileName.substring(fileName.lastIndexOf('.') + 1).toLowerCase();
  console.log("f size >> : " + ext);
  var fileSize = $('#attach_' + rowId)[0].files[0].size / 1024 / 1024;
  console.log("fileSize :: " + fileSize);
  if (!(ext == "pdf" || ext == "jpg" || ext == "jpeg" || ext == "png")) {
    fileTypeEr = true;
    $('#attach_' + rowId).val('');
    $("#fileEr").modal("show");
    $("#fileTypeEr").show();
    $("#fileSizeEr").hide();
  }
  if (fileSize > 1) {
    fileSizeEr = true;
    $('#attach_' + rowId).val('');
    $("#fileEr").modal("show");
    $("#fileSizeEr").show();
    $("#fileTypeEr").hide();
  }
  if (fileTypeEr && fileSizeEr) {
    $('#attach_' + rowId).val('');
    $("#fileEr").modal("show");
    $("#fileTypeEr").show();
    $("#fileSizeEr").show();
  }
}

function dwnldLicense() {
  var dmsId = $('#licenseDmsId').val();
  console.log("Inside Download" + dmsId);
  $.ajax({
    url: "fobo/downloaddoc?dmsref=" + dmsId,
    type: 'GET',
    dataType: 'json',
    success: function(response) {
      var dmsResp = response.result;
      var fileName = dmsResp.fileName;
      var byte = dmsResp.bytes;
      var base64Decode = base64ToArrayBuffer(byte);
      saveByteArray(fileName, base64Decode);
      console.log("PDF :" + response);
      //base64ToArrayBuffer(base64)
    },
    error: function(response) {
      console.log("Server Exception in retrieving pdf Download.");
    }
  });
}

function base64ToArrayBuffer(base64) {
  var binaryString = window.atob(base64);
  var binaryLen = binaryString.length;
  var bytes = new Uint8Array(binaryLen);
  for (var i = 0; i < binaryLen; i++) {
    var ascii = binaryString.charCodeAt(i);
    bytes[i] = ascii;
  }
  return bytes;
}

function saveByteArray(reportName, byte) {
  var blob = new Blob([byte]);
  var link = document.createElement('a');
  link.href = window.URL.createObjectURL(blob);
  var fileName = reportName;
  link.download = fileName;
  link.click();
};
//Added for field length for Number fields TS-363 Start
function checklength(obj) {
  console.log("Inside check legth");
  var fieldValue = $(obj).val();
  if (fieldValue.length > 24) {
    console.log(fieldValue.substr(0, 2));
    fieldValue = fieldValue.substr(0, 24);
    $(obj).val(fieldValue);
  }
}
//Added for field length for Number fields TS-363 End
$(document).on("input", ".numeric", function() {
  this.value = this.value.replace(/[^\d]/g, '');
});
// $(document).on("input", ".numeric_gis", function() {
//     this.value = this.value.replace(/[^\d\.\d]/,'');
// });
//.................................. tooltip by balaram on 14/11/2017..................................//
$(document.body).tooltip({
  selector: '[title]'
}).on('click mouseenter mouseleave', '[title]', function(ev) {
  $(this).tooltip('mouseenter' === ev.type ? 'show' : 'hide');
});
//.................................. tooltip by balaram on 14/11/2017..................................//

//set maximum length for input text elements start
$(document).ready(function() {
  //Applicant Details
  $("#appId").attr('maxlength', '50');
  $("#aname").attr('maxlength', '50');
  $("#Phnumber_app").attr('maxlength', '8');
  //Benificiary Details
  $("#BeneficiaryID").attr('maxlength', '25');
  $("#Bname").attr('maxlength', '100');
  $("#Baddress").attr('maxlength', '100');
  $("#Bph").attr('maxlength', '8');
  $("#Bemail").attr('maxlength', '50');
  $("#Phnumber").attr('maxlength', '8');
  //Land Details
  $("#PSN_land").attr('maxlength', '25');
  $("#square_Ld").attr('maxlength', '25');
  $("#lndStreetName").attr('maxlength', '25');
  $("#Eastings").attr('maxlength', '6');
  $("#Northings").attr('maxlength', '7');
  //Building Details
  $("#unitsitmno").attr('maxlength', '5');
  $("#editunitsitmno").attr('maxlength', '5');
  $("#SstoreyNo").attr('maxlength', '5');
  $("#editunitsitmno").attr('maxlength', '5');
  $("#editSstoreyNo").attr('maxlength', '5');
  //Proposed Building Details
  $("#Punitsitmno").attr('maxlength', '5');
  $("#editPunitsitmno").attr('maxlength', '5');
  $("#editunitsitmno").attr('maxlength', '5');
  $("#PSstoreyNo").attr('maxlength', '5');
});
//set maximum length for input text elements end