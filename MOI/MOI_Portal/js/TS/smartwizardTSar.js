$(document).ready(function() {
  var org_type, cons_detail, AppType_BND, ConsType_Value, Building_Type;
  var stNumber = 0;
  var selectedList = $('ul#credit').find('li.active').data('interest');
  var tabslength = $('ul#credit li').length;
  //alert(tabslength)
  $('#Cemail_Error').hide();
  $("#Total_PlotError").hide();
  $("#Car_Error").hide();
  $("#pTotal_PlotError").hide();
  $("#pCar_Error").hide();
  $("#others_hide").hide(); // BPTS13
  $(".renewData").hide();
  $(this).on('keyup keypress blur change ready load', function() {
  org_type = $('input[name=optradio]:checked').val();
  Building_Type = $('input[name=optradio5]:checked').val();
  ConsType_Value = $('#smartwizard').find('input[name=optradio4]:checked').val();

  if (AppType_BND == "Yes") {
     $(".benradio1").hide();
   } else {
     $(".benradio1").show();
   }
  if (org_type == "Organization") {
     $("#OrganizationDetails").show();
     $("#benType").hide();
     $("#optradio2").val('مؤسسة');
     $("#samehide").hide();
   } else {
     $("#OrganizationDetails").hide();
     $("#benType").show();
     $("#optradio2").val('فرد');
     $("#samehide").show();
   }
   // Request_Type - BPTS01 -select box 
   if($("#Request_ser").val() == "162" || $("#Request_ser").val() == "1000") {
     $("#lichide").hide();
     $('#Freezehide').hide();
     $("#Modificationdiv").hide();
     $("#addModificationdiv").hide();
     $(".renewData").hide();
     $(".newData").show();
   } else if($("#Request_ser").val() == "167" || $("#Request_ser").val() == "168") {
     $("#lichide").hide();
     $('#Freezehide').show();
     $("#Modificationdiv").hide();
     $("#addModificationdiv").hide();
     $(".renewData").hide();
     $(".newData").show();
   } else if($("#Request_ser").val() == "166") {
     $("#lichide").show();
     $("#Modificationdiv").show();
     $(".renewData").hide();
     $(".newData").show();
   } else if($("#Request_ser").val() == "164") {
     $("#lichide").show();
     $("#Modificationdiv").hide();
     $("#addModificationdiv").show();
     $(".renewData").hide();
     $(".newData").show();
   } else if($("#Request_ser").val() == "163" || $("#Request_ser").val() == "751") {
     $("#lichide").show();
     $("#Modificationdiv").hide();
     $("#addModificationdiv").hide();
     $(".renewData").show();
     $(".newData").hide();
   } else {
     $("#lichide").show();
     $('#Freezehide').hide();
     $("#Modificationdiv").hide();
     $("#addModificationdiv").hide();
     $(".renewData").hide();
     $(".newData").show();
   }
   
   if ($('#Bcolortype').val() == '101') {
     $('#Bcolorhide').show();
   }else {
     $('#Bcolorhide').hide();
   }
   if ($('#Pcolortype').val() == '101') {
     $('#Pcolorhide').show();
   }else {
     $('#Pcolorhide').hide();
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
   } else if ($('#Beneficiary_select').val() == "Investor") {
     $("#AuthorizationNo").hide();
     $("#InvestorNo").show();
     $("#benId").show();
     $("#waqf_Name").hide();
     $("#benradio").show();
     $("#benhide").show();
     $("#samehide").hide();
     $(".benradio1").hide();
   } else if ($('#Beneficiary_select').val() == "Attorney" || $('#Beneficiary_select').val() == "Heirs") {
     $("#AuthorizationNo").hide();
     $("#InvestorNo").hide();
     $("#waqf_Name").hide();
     $("#benradio").hide();
     $("#benhide").show();
     //$("#samehide").show();
     $("#Attorney_hide").hide();
     $("#Munlic").show();
   } else if ($('#Beneficiary_select').val() == "Individual") {
     $("#AuthorizationNo").hide();
     $("#InvestorNo").hide();
     $("#waqf_Name").hide();
     $("#benradio").hide();
     $("#benhide").show();
     //$("#samehide").show();
     $("#Attorney_hide").show();
     $("#Munlic").hide();
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
     $("#optradio2").val('مؤسسة');
     $("#Munlic").show();
   } else {
     $("#AuthorizationNo").hide();
     $("#InvestorNo").hide();
     $("#benId").show();
     $("#waqf_Name").hide();
     $("#benradio").hide();
     $("#benhide").show();
     //$("#samehide").show();
     $(".benradio1").show();
   }
   if (Building_Type == "Occupied") {
     $("#Existinghide").show();
     $("#Proposedhide").show();
   } else if (Building_Type == "Regularization") {
     $("#Existinghide").show();
     $("#Proposedhide").hide();
   } else {
     $("#Existinghide").hide();
     $("#Proposedhide").show();
   }
   if (ConsType_Value == "180") {
     $(".CommericalRegistrationID_val").show();
     $("#commrcialname").show(); //Add code on 3/05/2017 by Balaram
     $("#approved").hide(); //Add code on 3/05/2017 by Balaram
     $(".Civilno").hide(); //Add code on 3/05/2017 by Balaram
     $('#Address_cons').val('Other');
   } else {
     $(".CommericalRegistrationID_val").hide();
     $("#commrcialname").hide(); //Add code on 3/05/2017 by Balaram
     $("#approved").show(); //Add code on 3/05/2017 by Balaram
     $(".Civilno").show(); //Add code on 3/05/2017 by Balaram
     $('#Address_cons').val('Applicant');
   }
  });
  // ..................................smartwizard code start here...........................................//
 // Step show event 
 $("#smartwizard").on("showStep", function(e, anchorObject, stepNumber, stepDirection, stepPosition) {
   //alert("You are on step "+stepNumber+" now");
   if (stepNumber == (tabslength - 3)) {
     $("#submitButton").show();
   }
   if (stepNumber != (tabslength - 3)) {
     $("#submitButton").hide();
   }
 }); 
 // Toolbar extra buttons
 var btnFinish = $('<button></button>').text('\u062d\u0641\u0638 \u0643\u0645\u0633\u0648\u062f\u0629').addClass('btn btn-ts').on('click', function() {});
 var btnRest = $('<button id="submitButton" onclick="submitpage()" style="display:none;margin-right:10px;"></button>').text('\u062a\u0633\u0644\u064a\u0645').addClass('btn btn-ts').on('click', function() {});
  // Smart Wizard
 $('#smartwizard').smartWizard({
  selected: 0,
  theme: 'default',
  transitionEffect: 'slide', // Effect on navigation, none/slide/fade
  showStepURLhash: true, // Show url hash based on step
   toolbarSettings: {
     toolbarPosition: 'bottom',
     toolbarExtraButtons: [btnFinish, btnRest]
   },
   lang: { // Language variables for button
     next: "التالي",
     previous: "السابق"
   }
 });
});
//# Existing Buildings Details & Proposed Buildings Details Total build up area - TS-703,711 by Balaram on 17/11/2017 #//
$(document).bind('input', function() {
  var Footprint_ExBld = $("#Footprint_ExBld").val(); //Existing Buildings Details
  var Carparkcapacity = $("#Carparkcapacity").val(); //Existing Buildings Details
  var PFootprint = $("#PFootprint").val(); //Proposed Buildings Details
  var PCarparkcapacity = $("#PCarparkcapacity").val(); //Proposed Buildings Details
  var Buildingtotalarea = $("#Buildingtotalarea").val(); //Existing Buildings Details
  var Ptotalarea = $("#Ptotalarea").val(); //Proposed Buildings Details
  if (parseInt(Footprint_ExBld) > parseInt(Buildingtotalarea)) {
     //alert("greater then  Total Mrks");
     $("#Footprint_ExBld").val("");
     $("#Total_PlotError").show();
  } else if (parseInt(Carparkcapacity) > parseInt(Footprint_ExBld)) {
     $("#Carparkcapacity").val("");
     $("#Car_Error").show();
  } else if (parseInt(PFootprint) > parseInt(Ptotalarea)) {
     $("#PFootprint").val("");
     $("#pTotal_PlotError").show();
  } else if (parseInt(PCarparkcapacity) > parseInt(PFootprint)) {
     $("#PCarparkcapacity").val("");
     $("#pCar_Error").show();
  } else {
     $("#Total_PlotError").hide();
     $("#Car_Error").hide();
     $("#pTotal_PlotError").hide();
     $("#pCar_Error").hide();
  }
});
//# Existing Buildings Details & Proposed Buildings Details Total build up area #//

// $(document).ready(function() {
//   $(".haserror .form-control").css({'background-color': ''});
//   $(this).on('keyup', function(e) {
//     // console.log(e.target.value);
//     if (e.target.value.length > 0) {
//       $('#' + e.target.id).css({'background-color': '#fff'});
//     }
//   });
// });
/*******************************
* ACCORDION WITH TOGGLE ICONS
*******************************/
 function toggleIcon(e) {
       $(e.target)
           .prev('.panel-heading')
           .find(".more-less")
           .toggleClass('glyphicon glyphicon-chevron-down glyphicon glyphicon-chevron-right');
   }
   $('.accordion').on('hidden.bs.collapse', toggleIcon);
   $('.accordion').on('shown.bs.collapse', toggleIcon);
function submitpage() {
 window.location.href="successar.html";
}
//.................................. Date picker by balaram on 14/11/2017..................................//
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
 $(".date input").attr("required", "true");
 $("#srdate, #sdate").datepicker("setDate", new Date());
 /* Civil ID Expiry Date  */
 $("#applcntEpiryDate, #Bendate").datepicker({
   format: "dd/m/yyyy",
   startDate: '+0d',
   orientation: "auto bottom",
   forceParse: false,
   autoclose: true,
   todayHighlight: true,
   toggleActive: true,
   todayBtn: true,
 });
 /* Civil ID Expiry Date  */
 /* BPTS06 - StartDate and EndDate */
 $("#StartDate").datepicker({
   format: "dd/m/yyyy",
   orientation: "auto bottom",
   forceParse: false,
   autoclose: true,
   todayHighlight: true,
   toggleActive: true,
 }).on('changeDate', function(selected) {
   var startDate = new Date(selected.date.valueOf());
   $('#CompletionDate').datepicker('setStartDate', startDate);
   //alert(startDate);
 }).on('clearDate', function(selected) {
   $('#CompletionDate').datepicker('setStartDate', null);
 });
 $("#CompletionDate").datepicker({
   format: "dd/m/yyyy",
   orientation: "auto bottom",
   forceParse: false,
   autoclose: true,
   todayHighlight: true,
   toggleActive: true,
 }).on('changeDate', function(selected) {
   var endDate = new Date(selected.date.valueOf());
   $('#StartDate').datepicker('setEndDate', endDate);
   //alert(endDate);
 }).on('clearDate', function(selected) {
   $('#StartDate').datepicker('setEndDate', null);
 });
 /* BPTS06 - StartDate and EndDate */
 
 //BPTS07 - start Dig period from and Dig period to
 $("#DrillingPeriodFrom").datepicker({
   format: "dd/m/yyyy",
   orientation: "auto bottom",
   forceParse: false,
   autoclose: true,
   todayHighlight: true,
   toggleActive: true,
 }).on('changeDate', function(selected) {
   var DrillingPeriodFrom = new Date(selected.date.valueOf());
   $('#DrillingPeriodTo').datepicker('setStartDate', DrillingPeriodFrom);
   //alert(DrillingPeriodFrom);
 }).on('clearDate', function(selected) {
   $('#DrillingPeriodTo').datepicker('setStartDate', null);
 });
 $("#DrillingPeriodTo").datepicker({
   format: "dd/m/yyyy",
   orientation: "auto bottom",
   forceParse: false,
   autoclose: true,
   todayHighlight: true,
   toggleActive: true,
 }).on('changeDate', function(selected) {
   var DrillingPeriodTo = new Date(selected.date.valueOf());
   $('#DrillingPeriodFrom').datepicker('setEndDate', DrillingPeriodTo);
   //alert(DrillingPeriodTo);
 }).on('clearDate', function(selected) {
   $('#DrillingPeriodFrom').datepicker('setEndDate', null);
 });
 //BPTS07 -  end Dig period from and Dig period to
});
// .................................. Datepicker ..................................//
// .................................. footerHeight ..................................//
$(document).ready(function() {
 var docHeight = $(window).height();
 var footerHeight = $('#footer-main').height();
 var footerTop = $('#footer-main').position().top + footerHeight;
 //alert(docHeight);
 if (footerTop < docHeight) {
   $('#footer-main').css('margin-top', 10 + (docHeight - footerTop) + 'px');
 }

 function format(d) {
   // `d` is the original data object for the row
   //return '<table cellpadding="5" cellspacing="0" border="0" class="w-100">' + '<tr class="expanded-row">' + '<td colspan="8" class="row-bg"><div><div class="d-flex justify-content-between"><div class="cell-hilighted"><div class="d-flex mb-2"><div class="mr-2 min-width-cell"><p>Policy start date</p><h6>25/04/2020</h6></div><div class="min-width-cell"><p>Policy end date</p><h6>24/04/2021</h6></div></div><div class="d-flex"><div class="mr-2 min-width-cell"><p>Sum insured</p><h5>$26,000</h5></div><div class="min-width-cell"><p>Premium</p><h5>$1200</h5></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Quote no.</p><h6>Incs234</h6></div><div class="mr-2"><p>Vehicle Reg. No.</p><h6>KL-65-A-7004</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Policy number</p><h6>Incsq123456</h6></div><div class="mr-2"><p>Policy number</p><h6>Incsq123456</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-3 d-flex"><div class="highlighted-alpha"> A</div><div><p>Agent / Broker</p><h6>Abcd Enterprices</h6></div></div><div class="mr-2 d-flex"> <img src="img/avatars/male.png" alt="profile"/><div><p>Policy holder Name & ID Number</p><h6>Phillip Harris / 1234567</h6></div></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Branch</p><h6>Koramangala, Bangalore</h6></div></div><div class="expanded-table-normal-cell"><div class="mr-2 mb-4"><p>Channel</p><h6>Online</h6></div></div></div></div></td>'+
   //'</tr>' + '</table>';
   return '<div class="modal fade" id="staticBackdrop" data-backdrop="static" data-keyboard="false" tabindex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">' + 
   '<div class="modal-dialog modal-dialog-scrollable modal-xl" style="max-width: 89%">' +
     '<div class="modal-content">' +
       '<div class="modal-header">'+
         '<h5 class="modal-title" id="staticBackdropLabel">BNP_6227893</h5>'+
         '<button type="button" class="close" data-dismiss="modal" aria-label="Close">'+
            '<span aria-hidden="true">&times;</span>'+
          '</button>'+
       '</div>' +
       '<div class="modal-body overflow-hidden-x p-2">' +
         '<fieldset>' +
             '<legend>بيانات المبنى</legend>'+
             '<div class="row">'+
               '<div class="col-sm-6">'+
                 '<table class="table table-striped table-bordered">'+
                   '<tbody>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">رقم المبنى</label></th>'+
                       '<td>BNP_6227893</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">اسم المبنى</label></th>'+
                       '<td>Al Marafi</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">نوع الاستعمال</label></th>'+
                       '<td>Residential</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">حالة المبنى</label></th>'+
                       '<td>New</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">عدد الوحدات</label></th>'+
                       '<td>5</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">عدد الطوابق</label></th>'+
                       '<td>5</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">مساحة البناء بالمتر المربع</label></th>'+
                       '<td>1200</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">مساحة الأرض بالمتر المربع</label></th>'+
                       '<td>1020</td>'+
                     '</tr>'+
                   '</tbody>'+
                 '</table>'+
               '</div>'+
               '<div class="col-sm-6">'+
                 '<table class="table table-striped table-bordered">'+
                   '<tbody>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">سعة الطاقة بالكيلووات</label></th>'+
                       '<td>33kv</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">سعة مواقف السيارات</label></th>'+
                       '<td>12</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">نوعية الطلاء</label></th>'+
                       '<td>Building Color</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">لون المبنى</label></th>'+
                       '<td>White</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">اللون الخارجي</label></th>'+
                       '<td>White</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">الشارع</label></th>'+
                       '<td>5</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">السكة</label></th>'+
                       '<td>1519</td>'+
                     '</tr>'+
                     '<tr>'+
                       '<th class="col-6"><label for="">سيتم هدمها ؟</label></th>'+
                       '<td>No</td>'+
                     '</tr>'+
                   '</tbody>'+
                 '</table>'+
               '</div>'+
             '</div>'+

             '<div class="row">'+
               '<div class="col-xs-12 col-sm-12 col-md-12 col-lg-12">'+
                 '<div class="table-responsive">'+
                   '<table id="renew_building_table" class="table table-striped table-bordered w-100" aria-hidden="true">'+
                     '<thead class="ts-thead">'+
                       '<tr>'+
                         '<th>رقم المبنى</th>'+
                         '<th>اسم المبنى</th>'+
                         '<th>نوع الاستعمال</th>'+
                         '<th>حالة المبنى</th>'+
                         '<th>عدد الوحدات</th>'+
                         '<th>عدد الطوابق</th>'+
                         '<th>مساحة البناء بالمتر المربع</th>'+
                       '</tr>'+
                     '</thead>'+
                     '<tbody>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>Al Marafi</td>'+
                         '<td>Residential</td>'+
                         '<td>New</td>'+
                         '<td>1</td>'+
                         '<td>3</td>'+
                         '<td>2401.60</td>'+
                       '</tr>'+
                     '</tbody>'+
                   '</table>'+
                 '</div>'+
               '</div>'+
             '</div>'+

             '<div class="row">'+
               '<div class="col-md-6 col-xs-12">'+
                 '<div class="table-responsive">'+
                   '<table id="renew_storeysTable" class="table table-hover table-bordered w-100" aria-hidden="true">'+
                     '<thead class="ts-thead">'+
                       '<tr>'+
                         '<th>رقم المبنى</th>'+
                         '<th>رقم الطابق</th>'+
                         '<th>نوع الطابق</th>'+
                         '<th>مساحة الطابق بالمتر المربع</th>'+
                       '</tr>'+
                     '</thead>'+
                     '<tbody>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>1</td>'+
                         '<td>Basement</td>'+
                         '<td>1186.10</td>'+
                       '</tr>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>2</td>'+
                         '<td>1st Floor</td>'+
                         '<td>1163.30</td>'+
                       '</tr>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>3</td>'+
                         '<td>2nd Floor</td>'+
                         '<td>52.20</td>'+
                       '</tr>'+
                     '</tbody>'+
                   '</table>'+
                 '</div>'+
               '</div>'+

               '<div class="col-md-6 col-xs-12">'+
                 '<div class="table-responsive">'+
                   '<table id="renew_unitsTable" class="table table-hover table-bordered" aria-hidden="true">'+
                     '<thead class="ts-thead">'+
                       '<tr>'+
                         '<th>رقم المبنى</th>'+
                         '<th>رقم الطابق</th>'+
                         '<th>رقم الوحدة</th>'+
                         '<th>نوع الوحدة</th>'+
                         '<th>عدد الغرف</th>'+
                       '</tr>'+
                     '</thead>'+
                     '<tbody>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>1</td>'+
                         '<td>1</td>'+
                         '<td>villa</td>'+
                         '<td>31</td>'+
                       '</tr>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>2</td>'+
                         '<td>1</td>'+
                         '<td>villa</td>'+
                         '<td>12</td>'+
                       '</tr>'+
                       '<tr>'+
                         '<td>BNP_6227893</td>'+
                         '<td>3</td>'+
                         '<td>1</td>'+
                         '<td>villa</td>'+
                         '<td>1</td>'+
                       '</tr>'+
                     '</tbody>'+
                   '</table>'+
                 '</div>'+
               '</div>'+
             '</div>'+
           '</fieldset>'+
       '</div>'+
     '</div>'+
   '</div>'+
 '</div>'
 }
 var table = $('#renewBuildingDetails_table').DataTable({
   "ajax": "js/data.txt",
   "columns": [
     { "data": "Quote" }, 
     { "data": "Product" }, 
     { "data": "Business" }, 
     { "data": "Policy" }, 
     { "data": "Premium" }, 
     { "data": "Status" },
     { orderable: false,
       "render": function ( data, type, full) {               
       return "<a data-toggle='tooltip' data-placement='top' class='btn btn-ts details-control' 'title='Show Building Details' href='javascript:void(0)'><i class='fal fa-building fa-lg'></i></a>";;
     }}
   ],
   "order": [
     [1, 'asc']
   ],
   //"paging": false,
   "ordering": true,
   //"info": false,
   //"filter": false,
 });
 $('#renewBuildingDetails_table tbody').on('click', '.details-control', function() {
   var tr = $(this).closest('tr');
   var row = table.row(tr);
   if (row.child.isShown()) {
     // This row is already open - close it
     row.child.hide();
     //tr.removeClass('shown');
   } else {
     // Open this row
     row.child(format(row.data())).show();
     $('#staticBackdrop').modal('show');
     //tr.addClass('shown');
     
   }
 });
 $("#renew_building_table, #renew_storeysTable, #renew_unitsTable, #appTable, #BeneficiaryTable, #GISTable").DataTable({
   "filter": false,
 });
});
$($.fn.dataTable.tables(true)).DataTable().columns.adjust();
$("#staticBackdrop").on("shown.bs.modal", function() {
 $($.fn.dataTable.tables(true)).DataTable().columns.adjust().responsive.recalc();
});
// .................................. footerHeight ..................................//

// Request_Type - BPTS01 -select box for building details header change - Start
$("#Request_ser").change(function() {
 var Requestser = $("#Request_ser").val();
 if (Requestser == '164') {
     $('#buildheader').text('بيانات المبنى المراد إضافته');
   } else if(Requestser == "165") {
     $('#buildheader').text('بيانات المبنى المراد تعليته');
   } else {
     $('#buildheader').text('بيانات المبنى القائم حاليا');
   } 
});
// Request_Type - BPTS01 -select box for building details header change - End

// Building types - BPTS08 - Start
$("#licenseDiv").hide();
$("#buildingType").on('change', function() {
	//alert( this.value );
	if (this.value == '763' || this.value == '768' || this.value == '770') {
		$("#licenseDiv").show();
	} else {
		$("#licenseDiv").hide();
	}
});
// Building types - BPTS08 - End
//General Services - Request Type - BPTS13 - select box
$("#RequestType").change(function() {
  var legendTitle = $("#RequestType option:selected").text();
  //alert("legendTitle = "+legendTitle);
  //start if
  var reqTypeId = $("#RequestType option:selected").val();
  //alert('reqTypeId: '+reqTypeId);
  $('#legendlabel').text(legendTitle);
  if (reqTypeId == '180') {
    $("#others_hide").show();
    $("#Generalhide").hide();
  } else {
    $("#others_hide").hide();
    $("#Generalhide").show();
  }
  if (reqTypeId == '676') {
    //$('#legendlabel').text('Planting outside the Home');
    $('#Landid').show();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '655') {
    //$('#legendlabel').text('Demolition Permit');
    $('#Landid').hide();
    $('#Permitid').show();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '656') {
    //$('#legendlabel').text('Mount Cutting Permit');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').show();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '659') {
    //$('#legendlabel').text('Car Parking Shed Outside the Home');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').show();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '658') {
    //$('#legendlabel').text('Installation of interlocking tiles');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').show();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '674') {
    //$('#legendlabel').text('Building Breaking Speed');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').show();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '677') {
    //$('#legendlabel').text('Installation of a bulletin Board');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').show();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '649') {
    //$('#legendlabel').text('Land levelling');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').show();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '675') {
    //$('#legendlabel').text('Installation of Billboard / Billboard Beside The Road');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').show();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '651') {
    //$('#legendlabel').text('Paving of Internal Roads / Parkings');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').show();
    $('#Lightingid').hide();
  } else if (reqTypeId == '660') {
    //$('#legendlabel').text('Temporary Labor Accommodation');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').show();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  } else if (reqTypeId == '652') {
    //$('#legendlabel').text('Lighting of Internal Roads');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').show();
  } else {
    //$('#legendlabel').text('');
    $('#Landid').hide();
    $('#Permitid').hide();
    $('#mountid').hide();
    $('#signid').hide();
    $('#installationid').hide();
    $('#laborid').hide();
    $('#Carid').hide();
    $('#Advid').hide();
    $('#levellingid').hide();
    $('#Roadid').hide();
    $('#Pavingid').hide();
    $('#Lightingid').hide();
  }
});