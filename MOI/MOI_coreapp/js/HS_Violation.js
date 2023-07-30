// // HS_Violaton 
// //$("#createviolation").hide();
// $("#showviolation").hide();
// $('#btn_violation').hide();
// $('#Warningid').hide();
// $('#violationid').hide();
// $('#closeLic').hide();
// $('#Handling_report').hide();
// $('#Meetingid').hide();
// // HS_Violation
// // function creativeviolation() {
// //   $("#createviolation").show();
// //   $("#showviolation").hide();
// // }
// // function showviolation() {
// //   $("#createviolation").hide();
// //   $('#Violation_Type').val('1000');
// //   $("#showviolation").show();
// //   $("#Warningid").hide();
// // }
// $(function() {
//     $('#Violation_Type').on('change', function() {
//         $('#btn_violation').show();
//     });
//     $('#btn_violation').on('click', function() {
//         var select_value = $('#Violation_Type').val();
//         //use the value here
//         if (select_value == '101') {
//           $('#Warningid').show();
//           $('#Warning_id').show();
//           $('#violationid').hide();
//           $('#closeLic').hide();
//           $('#Handling_report').hide();
//           $('#Meetingid').hide();
//         } else if (select_value == '102') {
//           $('#Warningid').show();
//           $('#violationid').show();
//           $('#Warning_id').hide();
//           $('#closeLic').hide();
//           $('#Handling_report').hide();
//           $('#Meetingid').hide();
//         } else if (select_value == '103') {
//           $('#Warningid').show();
//           $('#closeLic').show();
//           $('#violationid').hide();
//           $('#Warning_id').hide();
//           $('#Handling_report').hide();
//           $('#Meetingid').hide();
//         } else if (select_value == '104') {
//           $('#Warningid').show();
//           $('#Handling_report').show();
//           $('#violationid').hide();
//           $('#Warning_id').hide();
//           $('#closeLic').hide();
//           $('#Meetingid').hide();
//         } else if (select_value == '105') {
//           $('#Warningid').show();
//           $('#Meetingid').show();
//           $('#violationid').hide();
//           $('#Warning_id').hide();
//           $('#closeLic').hide();
//           $('#Handling_report').hide();
//         } else {
//           $('#Warningid').hide();
//           $('#violationid').hide();
//           $('#Warning_id').hide();
//           $('#closeLic').hide();
//           $('#Handling_report').hide();
//           $('#Meetingid').hide();
//         }
//     });
// });
// HS_violations
$('#navtabhide').hide();
$('#Food1').hide();
$('#Water1').hide();
$('input[name=optradio_sample]').click(function() {
    if (this.value == "164") {
        $('#navtabhide').show();
        $('#Food1').hide();
        $('#Water1').show().trigger('click');
    } else if (this.value == "163") {
        $('#navtabhide').show();
        $('#Food1').show().trigger('click');
        $('#Water1').hide();
    }
});
//Violation Button
function Violation_fn() {
    if ($("#vioid").text() == "Update") {
        Vioedit.remove().draw();
        $("#vioid").text("Add");
    } else {}
    var Violation_object = {};
    var Vio_Type = $("#Vio_Type option:selected").text();
    var Vio_Type_val = $("#Vio_Type option:selected").val();
    var No_Emp = $("#noemp").val();
    var Fine_id = $("#Fineid").val();
    var Action_taken = $("#action_taken").val();
    Violation_object.VioType = Vio_Type;
    Violation_object.VioTypeval = Vio_Type_val;
    Violation_object.NoEmp = No_Emp;
    Violation_object.Fineid = Fine_id;
    Violation_object.ActionTaken = Action_taken;
    var Violation_table = $('#Violation_table').DataTable();
    Violation_table.row.add(Violation_object).draw();
    $("#Vio_Type").val('1000');
    $("#noemp").val('');
    $("#Fineid").val('');
    $("#action_taken").val('');
    
}
//edit Violation_fn details
function Vioeditfunction(data1) {
    var data = data1.data();
    $("#vioid").text("Update");
    $("#Vio_Type").val(data.VioTypeval);
    $("#noemp").val(data.NoEmp);
    $("#Fineid").val(data.Fineid);
    $("#action_taken").val(data.ActionTaken);
}
//add
$(document).ready(function() {
    $('#Violation_table tbody').on('click', '#editadvdetails', function() {
        var table = $('#Violation_table').DataTable();
        Vioedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Vioeditfunction(data);
    });
    $('#Violation_table tbody').on('click', '#removeadvdetails', function() {
        var table = $('#Violation_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Violation_cols = [
        { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent": "text" }, 
        { "mDataProp": "VioType", sTitle: "Advertisement Type", sType: "string" }, 
        { "mDataProp": "NoEmp", sTitle: "Display Type", sType: "string" }, 
        { "mDataProp": "Fineid", sTitle: "Village", sType: "string" }, 
        { "mDataProp": "ActionTaken", sTitle: "Description", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editadvdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeadvdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var Violation_table = $('#Violation_table').DataTable({
        "aoColumns": Violation_cols,
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": 0
        }],
        "order": [
            [0, 'asc']
        ]
    });
    Violation_table.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='Violation_page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".Violation_page").keyup(function() {
        Violation_table.page.len(eval($(".Violation_page").val())).draw();
    });
    /* auto increament */
    Violation_table.on('order.dt search.dt', function() {
        Violation_table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});
// Sample Handling Report - Table
function Report_fn() {
    if ($("#Reportid").text() == "Update") {
        Reportedit.remove().draw();
        $("#Reportid").text("Add");
    } else {}
    var Report_object = {};
    var Type_Mat = $("#Type_Mat").val();
    var Pack_Type = $("#Pack_Type").val();
    var qty = $("#qty").val();
    var Report_No = $("#Report_No").val();
    var Report_Weight = $("#Report_Weight").val();
    var Report_Reason = $("#Report_Reason").val();
    var Report_Notes = $("#Report_Notes").val();
    Report_object.TypeMat = Type_Mat;
    Report_object.PackType = Pack_Type;
    Report_object.Rep_qty = qty;
    Report_object.ReportNo = Report_No;
    Report_object.ReportWeight = Report_Weight;
    Report_object.ReportReason = Report_Reason;
    Report_object.ReportNotes = Report_Notes;
    var Report_table = $('#Report_table').DataTable();
    Report_table.row.add(Report_object).draw();
    $("#Type_Mat").val('');
    $("#Pack_Type").val('');
    $("#qty").val('');
    $("#Report_No").val('');
    $("#Report_Weight").val('');
    $("#Report_Reason").val('');
    $("#Report_Notes").val('');
}
//edit Report_fn details
function Reporteditfunction(data1) {
    var data = data1.data();
    $("#Reportid").text("Update");
    $("#Type_Mat").val(data.TypeMat);
    $("#Pack_Type").val(data.PackType);
    $("#qty").val(data.Rep_qty);
    $("#Report_No").val(data.ReportNo);
    $("#Report_Weight").val(data.ReportWeight);
    $("#Report_Reason").val(data.ReportReason);
    $("#Report_Notes").val(data.ReportNotes);
}
//Add Report
$(document).ready(function() {
    $('#Report_table tbody').on('click', '#editreportdetails', function() {
        var table = $('#Report_table').DataTable();
        Reportedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Reporteditfunction(data);
    });
    $('#Report_table tbody').on('click', '#removereportdetails', function() {
        var table = $('#Report_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Report_cols = [
        { "mDataProp": "Select", sTitle: "Select", sType: "checkbox", "defaultContent": "" },
        { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent": "text" },
        { "mDataProp": "msno", sTitle: "First Sample No", sType: "string", "defaultContent": "" },
        { "mDataProp": "msno", sTitle: "Second Sample No", sType: "string", "defaultContent": "" }, 
        { "mDataProp": "TypeMat", sTitle: "Product Name", sType: "string" }, 
        { "mDataProp": "PackType", sTitle: "Package Type", sType: "string" }, 
        { "mDataProp": "Rep_qty", sTitle: "Quantity", sType: "number" }, 
        //{ "mDataProp": "ReportNo", sTitle: "Number", sType: "number" }, 
        { "mDataProp": "ReportWeight", sTitle: "Weight", sType: "number" }, 
        { "mDataProp": "ReportReason", sTitle: "Reason", sType: "string" }, 
        { "mDataProp": "ReportNotes", sTitle: "Notes", sType: "string" }, 
        { "mDataProp": "msno", sTitle: "First Sample Result", sType: "string", "defaultContent": "" },
        { "mDataProp": "msno", sTitle: "Second Sample Result", sType: "string", "defaultContent": "" }, 
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editreportdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removereportdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"}
    ];
    var reportable = $('#Report_table').DataTable({
        "aoColumns": Report_cols,
        'columnDefs': [{
            'targets': 0,
            'searchable': false,
            'orderable': false,
            'className': 'dt-body-center',
            'render': function(data, type, full, meta) {
                console.log(full);
                return '<input type="checkbox" id="' + $('#Report_table').DataTable().data().count() + '" value="' + $('#Report_table').DataTable().data().count() + '">';
            }
        }],
        "order": [
            [1, 'asc']
        ]
    });
    reportable.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='report_page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".report_page").keyup(function() {
        reportable.page.len(eval($(".report_page").val())).draw();
    });
    /* auto increament */
    reportable.on('order.dt search.dt', function() {
        reportable.column(1, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});