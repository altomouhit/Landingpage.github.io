function periodic_fn() {
    if ($("#periodicAdd").text() == "Update") {
        periodicedit.remove().draw();
        $("#periodicAdd").html("<i class='fa fa-plus' aria-hidden='true'></i> Add Visit");
    }
    var periodic_object = {};
    var visitNo = $('#visitNo').val();
    var damInvNo = $('#damInvNo').val();
    var dName = $('#dName').val();
    var vName = $('#vName').val();
    var vEntity = $("#vEntity").val();
    var dbVisit = $("#dbVisit").val();

    periodic_object.CvisitNo = visitNo;
    periodic_object.CdamInvNo = damInvNo;
    periodic_object.CdName = dName;
    periodic_object.CvName = vName;
    periodic_object.CvEntity = vEntity;
    periodic_object.CdbVisit = dbVisit;
    

    var Periodic_Visit = $('#Periodic_Visit').DataTable();
    Periodic_Visit.row.add(periodic_object).draw();
    $('#visitNo').val('');
    $('#damInvNo').val('');
    $('#dName').val('');
    $('#vName').val('');
    $("#vEntity").val('');
    $("#dbVisit").val('');
}
//Edit Periodic Visit Details
function periodiceditfunction(data1) {
    var data = data1.data();
    $("#periodicAdd").text("Update");
    $('#visitNo').val(data.CvisitNo);
    $('#damInvNo').val(data.CdamInvNo);
    $('#dName').val(data.CdName);
    $('#vName').val(data.CvName);
    $("#vEntity").val(data.CvEntity);
    $("#dbVisit").val(data.CdbVisit);
}
$(document).ready(function() {
    $('#Periodic_Visit tbody').on('click', '#editperiodicdetails', function() {
        var table = $('#Periodic_Visit').DataTable();
        periodicedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        periodiceditfunction(data);
    });
    $('#Periodic_Visit tbody').on('click', '#removeperiodicdetails', function() {
        var table = $('#Periodic_Visit').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    $('#Periodic_Visit tbody').on('click', '#viewperiodicdetails', function() {
        debugger;
        $("#PeriodicVisitHide").show("slow");
    });
    var Periodic_cols = [
        { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
        { "mDataProp": "CvisitNo", sTitle: "Visit Number", sType: "string" },
        { "mDataProp": "CdamInvNo", sTitle: "Dam Inventory Number", sType: "string" }, 
        { "mDataProp": "CdName", sTitle: "Dam Name", sType: "string" },
        { "mDataProp": "CvName", sTitle: "Visitor Name", sType: "string" },
        { "mDataProp": "CvEntity", sTitle: "Entity", sType: "string" }, 
        { "mDataProp": "CdbVisit", sTitle: "Date of Visit", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": 
            "<a id = 'editperiodicdetails' href='javascript:void(0)' class='btn btn-success' style='margin-right: 5px;'><i class='fa fa-edit'></i></a>"+
            "<a id = 'removeperiodicdetails' href='javascript:void(0)' class='btn btn-danger' style='margin-right: 5px;'><i class='fa fa-trash-o'></i></a>" +
            "<a id = 'viewperiodicdetails' href='javascript:void(0)' class='btn btn-info'><i class='fa fa-eye'></i></a>" }
    ];
    var table = $('#Periodic_Visit').DataTable({
        "aoColumns": Periodic_cols,
        "columnDefs": [{
            "searchable": false,
            "autoFill": true,
            "orderable": false
        }],
        "order": [
            [0, 'asc']
        ]
    });
    table.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".page").keyup(function() {
        table.page.len(this.value).draw();
    });
    /* auto increment */
    table.on('order.dt search.dt', function() {
        table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});



function periodicMain_fn() {
    if ($("#periodicMainAdd").text() == "Update") {
        PeriodicMainedit.remove().draw();
        $("#periodicMainAdd").html("<i class='fa fa-plus' aria-hidden='true'></i> Add Maintenance");
    }
    var periodicMain_object = {};
    var reqNo = $('#reqNo').val();
    var damInvNoMain = $('#damInvNoMain').val();
    var dNameMain = $('#dNameMain').val();
    var contractorName = $('#contractorName').val();
    var vEntityMain = $("#vEntityMain").val();
    var maintenanceDate = $("#maintenanceDate").val();

    periodicMain_object.CreqNo = reqNo;
    periodicMain_object.CdamInvNoMain = damInvNoMain;
    periodicMain_object.CdNameMain = dNameMain;
    periodicMain_object.CcontractorName = contractorName;
    periodicMain_object.CvEntityMain = vEntityMain;
    periodicMain_object.CmaintenanceDate = maintenanceDate;
    

    var Periodic_maintenance = $('#Periodic_maintenance').DataTable();
    Periodic_maintenance.row.add(periodicMain_object).draw();
    $('#reqNo').val('');
    $('#damInvNoMain').val('');
    $('#dNameMain').val('');
    $('#contractorName').val('');
    $("#vEntityMain").val('');
    $("#maintenanceDate").val('');
}
//Edit Periodic Visit Details
function PeriodicMaineditfunction(data1) {
    var data = data1.data();
    $("#periodicMainAdd").text("Update");
    $('#reqNo').val(data.CreqNo);
    $('#damInvNoMain').val(data.CdamInvNoMain);
    $('#dNameMain').val(data.CdNameMain);
    $('#contractorName').val(data.CcontractorName);
    $("#vEntityMain").val(data.CvEntityMain);
    $("#maintenanceDate").val(data.CmaintenanceDate);
}
$(document).ready(function() {
    $('#Periodic_maintenance tbody').on('click', '#editperiodicMaindetails', function() {
        var table = $('#Periodic_maintenance').DataTable();
        PeriodicMainedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        PeriodicMaineditfunction(data);
    });
    $('#Periodic_maintenance tbody').on('click', '#removeperiodicMaindetails', function() {
        var table = $('#Periodic_maintenance').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var PeriodicMain_cols = [
        { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
        { "mDataProp": "CreqNo", sTitle: "Request Number", sType: "string" },
        { "mDataProp": "CdamInvNoMain", sTitle: "Dam Inventory Number", sType: "string" }, 
        { "mDataProp": "CdNameMain", sTitle: "Dam Name", sType: "string" },
        { "mDataProp": "CcontractorName", sTitle: "Contractor Name", sType: "string" },
        { "mDataProp": "CvEntityMain", sTitle: "Entity", sType: "string" }, 
        { "mDataProp": "CmaintenanceDate", sTitle: "Maintenance Date", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": 
            "<a id = 'editperiodicMaindetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a>"+
            "<a id = 'removeperiodicMaindetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var table = $('#Periodic_maintenance').DataTable({
        "aoColumns": PeriodicMain_cols,
        "columnDefs": [{
            "searchable": false,
            "autoFill": true,
            "orderable": false
        }],
        "order": [
            [0, 'asc']
        ]
    });
    table.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".page").keyup(function() {
        table.page.len(this.value).draw();
    });
    /* auto increment */
    table.on('order.dt search.dt', function() {
        table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});

$("#PeriodicVisitHide").hide();
