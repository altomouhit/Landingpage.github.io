//Catchment Button
 function Catchment_fn() {
    if ($("#Catchmentid").text() == "Update") {
        Catchmentedit.remove().draw();
        $("#Catchmentid").text("Add");
    } else {}
    var Catchment_object = {};

    var region_Cat = $("#region_Cat option:selected").text();
    var region_Cat_val = $("#region_Cat option:selected").val();

    var Willayat_Cat = $("#Willayat_Cat option:selected").text();
    var Willayat_Cat_val = $("#Willayat_Cat option:selected").val();

    var Catchment_Cat = $("#Catchment_Cat option:selected").text();
    var Catchment_Cat_val = $("#Catchment_Cat option:selected").val();

    //var Eastings_Cat = $('#Eastings_Cat').val();
    var Eastings_Cat = $("#Eastings_Cat option:selected").text();
    var Eastings_Cat_val = $("#Eastings_Cat option:selected").val();

    //var Northings_Cat = $('#Northings_Cat').val();
    var Northings_Cat = $("#Northings_Cat option:selected").text();
    var Northings_Cat_val = $("#Northings_Cat option:selected").val();

    Catchment_object.regionCat = region_Cat;
    Catchment_object.region_Catval = region_Cat_val;

    Catchment_object.WillayatCat = Willayat_Cat;
    Catchment_object.Willayat_Catval = Willayat_Cat_val;

    Catchment_object.CatchmentCat = Catchment_Cat;
    Catchment_object.Catchment_Catval = Catchment_Cat_val;

    Catchment_object.EastingsCat = Eastings_Cat;
    Catchment_object.Eastings_Catval = Eastings_Cat_val;

    Catchment_object.NorthingsCat = Northings_Cat;
    Catchment_object.Northings_Catval = Northings_Cat_val;

    var Catchment_table = $('#Catchment_table').DataTable();
    Catchment_table.row.add(Catchment_object).draw();
    $("#region_Cat").val('1000');
    $("#Willayat_Cat").val('1000');
    $("#Catchment_Cat").val('1000');
    $('#Eastings_Cat').val('1000');
    $('#Northings_Cat').val('1000');
 }
 //edit Catchment Details
 function Catcheditfunction(data1) {
    var data = data1.data();
    $("#Catchmentid").text("Update");
    $("#region_Cat").val(data.region_Catval);
    $("#Willayat_Cat").val(data.Willayat_Catval);
    $("#Catchment_Cat").val(data.Catchment_Catval);
    $('#Eastings_Cat').val(data.Eastings_Catval);
    $('#Northings_Cat').val(data.Northings_Catval);
 }
 //add Catchment
 $(document).ready(function() {
    $('#Catchment_table tbody').on('click', '#editCatchdetails', function() {
        var table = $('#Catchment_table').DataTable();
        Catchmentedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Catcheditfunction(data);
    });
    $('#Catchment_table tbody').on('click', '#removeCatchdetails', function() {
        var table = $('#Catchment_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Catch_cols = [
        { "mDataProp": "msno", sTitle: "Serial.No", sType: "string", "defaultContent" : "text" }, 
        { "mDataProp": "regionCat", sTitle: "Governorate", sType: "string" }, 
        { "mDataProp": "WillayatCat", sTitle: "Willayat", sType: "string" }, 
        { "mDataProp": "CatchmentCat", sTitle: "Catchment", sType: "string" }, 
        { "mDataProp": "EastingsCat", sTitle: "Eastings", sType: "string" }, 
        { "mDataProp": "NorthingsCat", sTitle: "Northings", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editCatchdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeCatchdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var Catchment_table = $('#Catchment_table').DataTable({
        "aoColumns": Catch_cols,
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": 0
        }],
        "order": [
            [0, 'asc']
        ]
    });
    Catchment_table.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show<input type=text class='Catchment_page form-control' value='5'>entries</label>");
    $(".Catchment_page").keyup(function() {
        Catchment_table.page.len($(".Catchment_page").val()).draw();
    });
    /* auto increment */
    Catchment_table.on('order.dt search.dt', function() {
        Catchment_table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
 });

//labor Button
 function labor_fn() {
    if ($('#laborbtn').text() == 'Update') {
        laboredit.remove().draw();
        $('#laborbtn').text('Add');
    } else {}
    var labor_object = {};

    var Labor_Prof = $('#Labor_Prof option:selected').text();
    var Labor_Prof_val = $('#Labor_Prof option:selected').val();

    var laborNo = $('#laborNo').val();
    
    labor_object.LaborProf = Labor_Prof;
    labor_object.Labor_Profval = Labor_Prof_val;

    labor_object.labor_No = laborNo;

    var labor_table = $('#labor_table').DataTable();
    labor_table.row.add(labor_object).draw();

    $('#Labor_Prof').val('1000');
    $('#laborNo').val('');
 }
 //edit labor Details
 function laboreditfunction(data1) {
    var data = data1.data();
    $('#laborbtn').text('Update');
    $('#Labor_Prof').val(data.Labor_Profval);
    $('#laborNo').val(data.labor_No);
 }
 //add labor Details
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

 //Equipment Button
 function Equi_fn() {
    if ($('#Equibtn').text() == 'Update') {
        Equiedit.remove().draw();
        $('#Equibtn').text('Add');
    } else {}
    var Equi_object = {};

    var Type_Equipment = $('#Type_Equipment option:selected').text();
    var Type_Equipment_val = $('#Type_Equipment option:selected').val();

    var Name_Equipment = $('#Name_Equipment').val();
    var CRNO = $('#CRNO').val();
    var Equi_Color = $('#Equi_Color').val();

    var Equi_Manuf = $('#Equi_Manuf option:selected').text();
    var Equi_Manuf_val = $('#Equi_Manuf option:selected').val();

    var Equi_Engine = $('#Equi_Engine').val();
    var Equi_Country = $('#Equi_Country').val();
    var Equisrno = $('#Equisrno').val();
    var Issuing_Date = $('#Issuing_Date').val();
    var Expiry_Date = $('#Expiry_Date').val();
    
    Equi_object.TypeEqu = Type_Equipment;
    Equi_object.Type_Equipmentval = Type_Equipment_val;

    Equi_object.NameEquipment = Name_Equipment;
    Equi_object.CR_NO = CRNO;
    Equi_object.EquiColor = Equi_Color;

    Equi_object.EquiManuf = Equi_Manuf;
    Equi_object.EquiManuf_val = Equi_Manuf_val;

    Equi_object.EquiEngine = Equi_Engine;
    Equi_object.EquiCountry = Equi_Country;
    Equi_object.Equisr_no = Equisrno;
    Equi_object.IssuingDate = Issuing_Date;
    Equi_object.ExpiryDate = Expiry_Date

    var Equi_table = $('#Equi_table').DataTable();
    Equi_table.row.add(Equi_object).draw();

    $('#Type_Equipment').val('1000');
    $('#Name_Equipment').val('');
    $('#CRNO').val('');
    $('#Equi_Color').val('');
    $('#Equi_Manuf').val('1000');
    $('#Equi_Engine').val('');
    $('#Equi_Country').val('');
    $('#Equisrno').val('');
    $('#Issuing_Date').val('');
    $('#Expiry_Date').val('');
 }
 //edit Equipment Details
 function Equieditfunction(data1) {
    var data = data1.data();
    $('#Equibtn').text('Update');
    $('#Type_Equipment').val(data.Type_Equipmentval);
    $('#Name_Equipment').val(data.NameEquipment);
    $('#CRNO').val(data.CR_NO);
    $('#Equi_Color').val(data.EquiColor);
    $('#Equi_Manuf').val(data.EquiManuf_val);
    $('#Equi_Engine').val(data.EquiEngine);
    $('#Equi_Country').val(data.EquiCountry);
    $('#Equisrno').val(data.Equisr_no);
    $('#Issuing_Date').val(data.IssuingDate);
    $('#Expiry_Date').val(data.ExpiryDate);
 }
 //add Equipment Details
 $(document).ready(function() {
    $('#Equi_table tbody').on('click', '#editEquidetails', function() {
        var table = $('#Equi_table').DataTable();
        Equiedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Equieditfunction(data);
    });
    $('#Equi_table tbody').on('click', '#removeEquidetails', function() {
        var table = $('#Equi_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Equi_cols = [
    { 'mDataProp': 'msno', sTitle: 'Serial.No', sType: 'string', 'defaultContent' : 'text' }, 
    { 'mDataProp': 'TypeEqu', sTitle: 'Type of Equipment', sType: 'string' }, 
    { 'mDataProp': 'NameEquipment', sTitle: 'Equipment Name', sType: 'string' },
    { 'mDataProp': 'CR_NO', sTitle: 'Commercial Registration Name', sType: 'string' },
    { 'mDataProp': 'EquiEngine', sTitle: 'Engine No', sType: 'string' },
    { 'mDataProp': 'EquiManuf', sTitle: 'Manufacture Year', sType: 'string' },
    { 'mDataProp': 'EquiCountry', sTitle: 'Manufacture Country', sType: 'string' },
    { 'mDataProp': 'Equisr_no', sTitle: 'Serial Number', sType: 'string' },
    { 'mDataProp': 'IssuingDate', sTitle: 'Issuing Date', sType: 'string' }, 
    { 'mDataProp': 'ExpiryDate', sTitle: 'Expiration Date', sType: 'string' },
    { 'mDataProp': 'EquiColor', sTitle: 'Color', sType: 'string' },
    { 'mDataProp': 'Actions', sTitle: 'Actions', sType: 'string', 'defaultContent': "<a id = 'editEquidetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeEquidetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var table = $('#Equi_table').DataTable({
        'aoColumns': Equi_cols,
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
 //add Equipment Details
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
    { 'mDataProp': 'Psquare_Ld', sTitle: 'Block', sType: 'string' },
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
 
 