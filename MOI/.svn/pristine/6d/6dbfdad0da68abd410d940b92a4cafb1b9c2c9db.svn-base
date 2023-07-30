//Catchment Button
 function addBoard() {
    if ($("#Boardid").text() == "Update") {
        Boardedit.remove().draw();
        $("#Boardid").text("Add");
    } else {}
    var Board_object = {};

    var Board_Type = $("#Board_Type option:selected").text();
    var Board_Type_val = $("#Board_Type option:selected").val();
    var BoardEN = $('#BoardEN').val();
    var BoardAR = $('#BoardAR').val();
    var BoardDesc = $('#BoardDesc').val();
    var BoardHei = $('#BoardHei').val();
    var BoardWid = $('#BoardWid').val();
    var BoardGround = $('#BoardGround').val();

    Board_object.BoardType = Board_Type;
    Board_object.Board_Typeval = Board_Type_val;

    Board_object.Board_EN = BoardEN;
    Board_object.Board_AR = BoardAR;
    Board_object.Board_Desc = BoardDesc;
    Board_object.Board_Hei = BoardHei;
    Board_object.Board_Wid = BoardWid;
    Board_object.Board_Ground = BoardGround;

    var Board_table = $('#Board_table').DataTable();
    Board_table.row.add(Board_object).draw();
    $("#Board_Type").val('1000');
    $('#BoardEN').val('');
    $('#BoardAR').val('');
    $("#BoardDesc").val('');
    $("#BoardHei").val('');
    $("#BoardWid").val('');
    $("#BoardGround").val('');
 }
 //edit Catchment Details
 function Boardeditfunction(data1) {
    var data = data1.data();
    $("#Boardid").text("Update");
    $("#Board_Type").val(data.Board_Typeval);
    $('#BoardEN').val(data.Board_EN);
    $('#BoardAR').val(data.Board_AR);
    $('#BoardDesc').val(data.Board_Desc);
    $("#BoardHei").val(data.Board_Hei);
    $("#BoardWid").val(data.Board_Wid);
    $('#BoardGround').val(data.Board_Ground)
 }
 //add Catchment
 $(document).ready(function() {
    $('#Board_table tbody').on('click', '#editBoarddetails', function() {
        var table = $('#Board_table').DataTable();
        Boardedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Boardeditfunction(data);
    });
    $('#Board_table tbody').on('click', '#removeBoarddetails', function() {
        var table = $('#Board_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Board_cols = [
    { "mDataProp": "msno", sTitle: "الرقم المتسلسل", sType: "string", "defaultContent" : "text" }, 
    { "mDataProp": "BoardType", sTitle: "نوع اللوحه", sType: "string" }, 
    { "mDataProp": "Board_EN", sTitle: "عنوان اللوحة باللغة الأنجليزية", sType: "string" }, 
    { "mDataProp": "Board_AR", sTitle: "عنوان اللوحه باللغة العربية", sType: "string" }, 
    { "mDataProp": "Board_Hei", sTitle: "ارتفاع اللوحه", sType: "string" },
    { "mDataProp": "Board_Wid", sTitle: "عرض اللوحه", sType: "string" },
    { "mDataProp": "Board_Ground", sTitle: "Ground Clearance Area", sType: "string" },
    { "mDataProp": "Board_Desc", sTitle: "وصف اللوحه", sType: "string" },
    { "mDataProp": "Actions", sTitle: "الإجراء", sType: "string", "defaultContent": "<a id = 'editBoarddetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeBoarddetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var table = $('#Board_table').DataTable({
        "aoColumns": Board_cols,
        "columnDefs": [{
            "searchable": false,
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



 //labor & Equipment Button
 function labor_fn() {
    if ($('#laborbtn').text() == 'Update') {
        laboredit.remove().draw();
        $('#laborbtn').text('Add');
    } else {}
    var labor_object = {};

    var Type_Equipment = $('#Type_Equipment option:selected').text();
    var Type_Equipment_val = $('#Type_Equipment option:selected').val();

    var Name_Equipment = $('#Name_Equipment').val();
    var Equisrno = $('#Equisrno').val();
    var Issuing_Date = $('#Issuing_Date').val();
    var Expiry_Date = $('#Expiry_Date').val();

    var Labor_Prof = $('#Labor_Prof option:selected').text();
    var Labor_Prof_val = $('#Labor_Prof option:selected').val();

    var laborNo = $('#laborNo').val();
    
    labor_object.TypeEqu = Type_Equipment;
    labor_object.Type_Equipmentval = Type_Equipment_val;

    labor_object.NameEquipment = Name_Equipment;
    labor_object.Equisr_no = Equisrno;
    labor_object.IssuingDate = Issuing_Date;
    labor_object.ExpiryDate = Expiry_Date
    
    labor_object.LaborProf = Labor_Prof;
    labor_object.Labor_Profval = Labor_Prof_val;

    labor_object.labor_No = laborNo;

    var labor_table = $('#labor_table').DataTable();
    labor_table.row.add(labor_object).draw();

    $('#Type_Equipment').val('1000');
    $('#Name_Equipment').val('');
    $('#Equisrno').val('');
    $('#Issuing_Date').val('');
    $('#Expiry_Date').val('');
    $('#Labor_Prof').val('1000');
    $('#laborNo').val('');
 }
 //edit labor & Equipment Details
 function laboreditfunction(data1) {
    var data = data1.data();
    $('#laborbtn').text('Update');
    $('#Type_Equipment').val(data.Type_Equipmentval);
    $('#Name_Equipment').val(data.NameEquipment);
    $('#Equisrno').val(data.Equisr_no);
    $('#Issuing_Date').val(data.IssuingDate);
    $('#Expiry_Date').val(data.ExpiryDate);
    $('#Labor_Prof').val(data.Labor_Profval);
    $('#laborNo').val(data.labor_No);
 }
 //add labor & Equipment Details
 $(document).ready(function() {
    $('#labor_table tbody').on('click', '#editlabordetails', function() {
        var table = $('#labor_table').DataTable();
        laboredit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        laboreditfunction(data);
    });
    $('#labor_table tbody').on('click', '#removelabordetails', function() {
        var table = $('#labor_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var labor_cols = [
    { 'mDataProp': 'msno', sTitle: 'Serial.No', sType: 'string', 'defaultContent' : 'text' }, 
    { 'mDataProp': 'TypeEqu', sTitle: 'Type of Equipment', sType: 'string' }, 
    { 'mDataProp': 'NameEquipment', sTitle: 'Equipment Name', sType: 'string' },
    { 'mDataProp': 'Equisr_no', sTitle: 'Serial Number', sType: 'string' },
    { 'mDataProp': 'IssuingDate', sTitle: 'Issuing Date', sType: 'string' }, 
    { 'mDataProp': 'ExpiryDate', sTitle: 'Expiration Date', sType: 'string' }, 
    { 'mDataProp': 'LaborProf', sTitle: 'Labor Profession', sType: 'string' },
    { 'mDataProp': 'labor_No', sTitle: 'Required Labor Number', sType: 'string' },
    { 'mDataProp': 'Actions', sTitle: 'Actions', sType: 'string', 'defaultContent': "<a id = 'editlabordetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removelabordetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var table = $('#labor_table').DataTable({
        'aoColumns': labor_cols,
        'columnDefs': [{
            'searchable': false,
            'orderable': false,
            'targets': 0
        }],
        'order': [
            [0, 'asc']
        ]
    });
    table.page.len(5).draw();
    $('.dataTables_length').replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $('.page').keyup(function() {
        table.page.len(eval($('.page').val())).draw();
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
 //Request for Aflaj Water - Plot Data Button - BPWS06
 function Plot_fn() {
    if ($('#Plotbtn').text() == 'Update') {
        Plotedit.remove().draw();
        $('#Plotbtn').text('Add');
    } else {}
    var Plot_object = {};

    var PSN_Plot = $('#PSN_Plot').val();
    var PSN = $('#PSN').val();
    var region_Ld = $('#region_Ld option:selected').text();
    var region_Ld_val = $('#region_Ld option:selected').val();

    var Willayat_Ld = $('#Willayat_Ld option:selected').text();
    var Willayat_Ld_val = $('#Willayat_Ld option:selected').val();

    var village_Ld = $('#village_Ld option:selected').text();
    var village_Ld_val = $('#village_Ld option:selected').val();

    var square_Ld = $('#square_Ld').val();
    var Plotsurface_Ld = $('#Plotsurface_Ld').val();
    var StreetNumber_Ld = $('#StreetNumber_Ld').val();

    var typeUse_Ld = $('#typeUse_Ld option:selected').text();
    var typeUse_Ld_val = $('#typeUse_Ld option:selected').val();
    
    Plot_object.PSNPlot = PSN_Plot;
    Plot_object.PSNo = PSN;

    Plot_object.regionLd = region_Ld;
    Plot_object.region_Ldval = region_Ld_val;

    Plot_object.WillayatLd = Willayat_Ld;
    Plot_object.Willayat_Ldval = Willayat_Ld_val;

    Plot_object.villageLd = village_Ld;
    Plot_object.village_Ldval = village_Ld_val;

    Plot_object.Psquare_Ld = square_Ld;
    Plot_object.PlotsurfaceLd = Plotsurface_Ld;
    Plot_object.StreetNumberLd = StreetNumber_Ld;

    Plot_object.typeUseLd = typeUse_Ld;
    Plot_object.typeUse_Ldval = typeUse_Ld_val;

    var Plot_table = $('#Plot_table').DataTable();
    Plot_table.row.add(Plot_object).draw();

    $('#PSN_Plot').val('');
    $('#PSN').val('');
    $('#region_Ld').val('1000');
    $('#Willayat_Ld').val('1000');
    $('#village_Ld').val('1000');
    $('#square_Ld').val('');
    $('#Plotsurface_Ld').val('');
    $('#StreetNumber_Ld').val('');
    $('#typeUse_Ld').val('1000');
 }
 //edit Plot Datat Details
 function Ploteditfunction(data1) {
    var data = data1.data();
    $('#Plotbtn').text('Update');
    $('#PSN_Plot').val(data.PSNPlot);
    $('#PSN').val(data.PSNo);
    $('#region_Ld').val(data.region_Ldval);
    $('#Willayat_Ld').val(data.Willayat_Ldval);
    $('#village_Ld').val(data.village_Ldval);
    $('#square_Ld').val(data.Psquare_Ld);
    $('#Plotsurface_Ld').val(data.PlotsurfaceLd);
    $('#StreetNumber_Ld').val(data.StreetNumberLd);
    $('#typeUse_Ld').val(data.typeUse_Ldval);
 }
 //add labor & Equipment Details
 $(document).ready(function() {
    $('#Plot_table tbody').on('click', '#editPlotdetails', function() {
        var table = $('#Plot_table').DataTable();
        Plotedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Ploteditfunction(data);
    });
    $('#Plot_table tbody').on('click', '#removePlotdetails', function() {
        var table = $('#Plot_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Plot_cols = [
    { 'mDataProp': 'msno', sTitle: 'Serial.No', sType: 'string', 'defaultContent' : 'text' },
    { 'mDataProp': 'PSNPlot', sTitle: 'Plot Serial Numbert', sType: 'string' },
    { 'mDataProp': 'PSNo', sTitle: 'Plot Number', sType: 'string' },
    { 'mDataProp': 'regionLd', sTitle: 'Governorate', sType: 'string' }, 
    { 'mDataProp': 'WillayatLd', sTitle: 'Willayat', sType: 'string' },
    { 'mDataProp': 'villageLd', sTitle: 'Village', sType: 'string' },
    { 'mDataProp': 'Psquare_Ld', sTitle: 'square_Ld', sType: 'string' },
    { 'mDataProp': 'PlotsurfaceLd', sTitle: 'Plot Area', sType: 'string' },
    { 'mDataProp': 'StreetNumberLd', sTitle: 'Street Name', sType: 'string' }, 
    { 'mDataProp': 'typeUseLd', sTitle: 'Type of Use', sType: 'string' },
    { 'mDataProp': 'Actions', sTitle: 'Actions', sType: 'string', 'defaultContent': "<a id = 'editPlotdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removePlotdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var table = $('#Plot_table').DataTable({
        'aoColumns': Plot_cols,
        'columnDefs': [{
            'searchable': false,
            'orderable': false,
            'targets': 0
        }],
        'order': [
            [0, 'asc']
        ]
    });
    table.page.len(5).draw();
    $('.dataTables_length').replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $('.page').keyup(function() {
        table.page.len(eval($('.page').val())).draw();
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
 
 