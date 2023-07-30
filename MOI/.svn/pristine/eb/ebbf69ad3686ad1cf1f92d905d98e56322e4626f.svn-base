//Request for Aflaj Water Requests - WS1700006
function Previous_fn() {
    if ($("#Previousid").text() == "Update") {
        Previousedit.remove().draw();
        $("#Previousid").text("Add");
    } else {}
    var Previous_object = {};
    var regtype = $('#regtype').val();
    var stno = $('#stno').val();
    var stlen = $('#stlen').val();
    var reqloc = $('#reqloc').val();
    var reqamt = $('#reqamt').val();
    var expirydate = $('#expiry_date').val();
    var StartEastings = $('#StartEastings').val();
    var StartNorthings = $('#StartNorthings').val();
    var EndingEastings = $('#EndingEastings').val();
    var EndingNorthings = $('#EndingNorthings').val();

    Previous_object.Previous_regtype = regtype;
    Previous_object.Previous_stno = stno;
    Previous_object.Previous_stlen = stlen;
    Previous_object.Previous_reqloc = reqloc;
    Previous_object.Previous_reqamt = reqamt;
    Previous_object.Pervious_expirydate = expirydate;
    Previous_object.Previous_StartEastings = StartEastings;
    Previous_object.Previous_StartNorthings = StartNorthings;
    Previous_object.Previous_EndingEastings = EndingEastings;
    Previous_object.Previous_EndingNorthings = EndingNorthings;

    var Previous_table = $('#Previous_table').DataTable();
    Previous_table.row.add(Previous_object).draw();
    $("#regtype").val('');
    $("#stno").val('');
    $("#stlen").val('');
    $("#reqloc").val('');
    $("#reqamt").val('');  
    $("#expiry_date").val(''); 
    $('#StartEastings').val('');
    $('#StartNorthings').val('');
    $('#EndingEastings').val('');
    $('#EndingNorthings').val('');
}
//Edit Consultor Details
function Previouseditfunction(data1) {
    var data = data1.data();
    $("#Previousid").text("Update");
    $("#regtype").val(data.Previous_regtype);
    $("#stno").val(data.Previous_stno);
    $("#stlen").val(data.Previous_stlen);
    $("#reqloc").val(data.Previous_reqloc);
    $("#reqamt").val(data.Previous_reqamt);
    $("#expiry_date").val(data.Pervious_expirydate);
    $('#StartEastings').val(data.Previous_StartEastings);
    $('#StartNorthings').val(data.Previous_StartNorthings);
    $('#EndingEastings').val(data.Previous_EndingEastings);
    $('#EndingNorthings').val(data.Previous_EndingNorthings);
}
$(document).ready(function() {
    $('#Previous_table tbody').on('click', '#editPrvdetails', function() {
        var table = $('#Previous_table').DataTable();
        Previousedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Previouseditfunction(data);
    });
    $('#Previous_table tbody').on('click', '#removePrvdetails', function() {
        var table = $('#Previous_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Previous_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Previous_regtype", sTitle: "Request Type", sType: "string" },
    { "mDataProp": "Previous_stno", sTitle: "Stage No", sType: "string" }, 
    { "mDataProp": "Previous_stlen", sTitle: "Stage Lenght(M)", sType: "string" }, 
    { "mDataProp": "Previous_reqloc", sTitle: "Location", sType: "string" },
    { "mDataProp": "Previous_reqamt", sTitle: "Amount", sType: "string" },
    { "mDataProp": "Pervious_expirydate", sTitle: "Expiry Date", sType: "string" },
    { "mDataProp": "Previous_StartEastings", sTitle: "Beginning Eastings", sType: "string" },
    { "mDataProp": "Previous_StartNorthings", sTitle: "Beginning Northings", sType: "string" },
    { "mDataProp": "Previous_EndingEastings", sTitle: "Ending Eastings", sType: "string" },
    { "mDataProp": "Previous_EndingNorthings", sTitle: "Ending Northings", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editPrvdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removePrvdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Previous_table').DataTable({
        "aoColumns": Previous_cols,
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

//Consultant Details - BPTS01 - Request license for Major Construction Button
function Falaj_fn() {
    if ($("#Falajid").text() == "Update") {
        Falajedit.remove().draw();
        $("#Falajid").text("Add");
    } else {}
    var Falaj_object = {};
    var Chname = $('#Chname').val();
    var Chlen = $('#Chlen').val();
    var Chdep = $('#Chdep').val();
    var Eastings = $('#Eastings').val();
    var Northings = $('#Northings').val();
    Falaj_object.Falaj_Chname = Chname;
    Falaj_object.Falaj_Chlen = Chlen;
    Falaj_object.Falaj_address = Chdep;
    Falaj_object.Falaj_Phnumber = Eastings;
    Falaj_object.Falaj_Northings = Northings;
    var Falaj_table = $('#Falaj_table').DataTable();
    Falaj_table.row.add(Falaj_object).draw();
    $("#Chname").val('');
    $("#Chlen").val('');
    $("#Chdep").val('');
    $("#Eastings").val('');
    $("#Northings").val('');
}
//Edit App_Cons Details
function Falajeditfunction(data1) {
    var data = data1.data();
    $("#Falajid").text("Update");
    $("#Chname").val(data.Falaj_Chname);
    $("#Chlen").val(data.Falaj_Chlen);
    $("#Chdep").val(data.Falaj_address);
    $("#Eastings").val(data.Falaj_Phnumber);
    $("#Northings").val(data.Falaj_Northings);
}
$(document).ready(function() {
    $('#Falaj_table tbody').on('click', '#editFalajdetails', function() {
        var table = $('#Falaj_table').DataTable();
        Falajedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Falajeditfunction(data);
    });
    $('#Falaj_table tbody').on('click', '#removeFalajdetails', function() {
        var table = $('#Falaj_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Falaj_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" }, 
    { "mDataProp": "Falaj_Chname", sTitle: "Channel Name", sType: "string" }, 
    { "mDataProp": "Falaj_Chlen", sTitle: "Channel Length(M)", sType: "string" }, 
    { "mDataProp": "Falaj_address", sTitle: "Channel Depth(M)", sType: "string" }, 
    { "mDataProp": "Falaj_Phnumber", sTitle: "Eastings", sType: "string" }, 
    { "mDataProp": "Falaj_Northings", sTitle: "Northings", sType: "string" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editFalajdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeFalajdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Falaj_table').DataTable({
        "aoColumns": Falaj_cols,
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


//Water Data - BPTS04 - Permit to Initiate the Watertruction Button
function Water_fn() {
    if ($("#Waterid").text() == "Update") {
        Wateredit.remove().draw();
        $("#Waterid").text("Add");
    } else {}
    var Water_object = {};

    var Typeuse = $("#Typeuse option:selected").text();
    var Typeuse_val = $("#Typeuse option:selected").val();
    var Coun = $('#Coun').val();
    var Area2 = $('#Area2').val();
    var Need3 = $('#Need3').val();
    Water_object.Water_Typeuse = Typeuse;
    Water_object.Water_Typeuseval = Typeuse_val;
    Water_object.Water_Coun = Coun;
    Water_object.Water_Area2 = Area2;
    Water_object.Water_Need3 = Need3;
    var Water_table = $('#Water_table').DataTable();
    Water_table.row.add(Water_object).draw();
    $("#Typeuse").val('1000');
    $("#Coun").val('');
    $("#Area2").val('');
    $("#Need3").val('');
}
//Edit Water Details
function Watereditfunction(data1) {
    var data = data1.data();
    $("#Waterid").text("Update");
    $("#Typeuse").val(data.Water_Typeuseval);
    $("#Coun").val(data.Water_Coun);
    $("#Area2").val(data.Water_Area2);
    $("#Need3").val(data.Water_Need3);
}
$(document).ready(function() {
    $('#Water_table tbody').on('click', '#editWaterdetails', function() {
        var table = $('#Water_table').DataTable();
        Wateredit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Watereditfunction(data);
    });
    $('#Water_table tbody').on('click', '#removeWaterdetails', function() {
        var table = $('#Water_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Water_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Water_Typeuse", sTitle: "Type of Use", sType: "string" }, 
    { "mDataProp": "Water_Coun", sTitle: "Count", sType: "string" }, 
    { "mDataProp": "Water_Area2", sTitle: "Area(m2)", sType: "string" }, 
    { "mDataProp": "Water_Need3", sTitle: "Daily Needs (m3/day)", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editWaterdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeWaterdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Water_table').DataTable({
        "aoColumns": Water_cols,
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

//Consulting Office Data - BPTS04 - Permit to Initiate the Consultruction Button
function Water_Assi() {
    if ($("#Assid").text() == "Update") {
        Assedit.remove().draw();
        $("#Assid").text("Add");
    } else {}
    var Ass_object = {};
    var wellinven = $('#wellinven').val();
    var depfalaj = $('#depfalaj').val();
    var waterlevel = $('#waterlevel').val();
    var condmic = $('#condmic').val();
    var Pumpingtube = $('#Pumpingtube').val();
    var Pumpingcap = $('#Pumpingcap').val();
    var dailyprod = $('#dailyprod').val();
    var falajcomm = $('#falajcomm').val();
    Ass_object.Ass_wellinven = wellinven;
    Ass_object.Ass_depfalaj = depfalaj;
    Ass_object.Ass_waterlevel = waterlevel;
    Ass_object.Ass_condmic = condmic;
    Ass_object.Ass_Pumpingtube = Pumpingtube;
    Ass_object.Ass_Pumpingcap = Pumpingcap;
    Ass_object.Ass_dailyprod = dailyprod;
    Ass_object.Ass_falajcomm = falajcomm;
    var Ass_table = $('#Ass_table').DataTable();
    Ass_table.row.add(Ass_object).draw();
    $("#wellinven").val('');
    $("#depfalaj").val('');
    $("#waterlevel").val('');
    $("#condmic").val('');
    $("#Pumpingtube").val('');
    $('#Pumpingcap').val('');
    $('#dailyprod').val('');
    $('#falajcomm').val('');
}
//Edit Consultor Details
function Asseditfunction(data1) {
    var data = data1.data();
    $("#Assid").text("Update");
    $("#wellinven").val(data.Ass_wellinven);
    $("#depfalaj").val(data.Ass_depfalaj);
    $("#waterlevel").val(data.Ass_waterlevel);
    $("#condmic").val(data.Ass_condmic);
    $("#Pumpingtube").val(data.Ass_Pumpingtube);
    $('#Pumpingcap').val(data.Ass_Pumpingcap);
    $('#dailyprod').val(data.Ass_dailyprod);
    $('#falajcomm').val(data.Ass_falajcomm);
}
$(document).ready(function() {
    $('#Ass_table tbody').on('click', '#editAssdetails', function() {
        var table = $('#Ass_table').DataTable();
        Assedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Asseditfunction(data);
    });
    $('#Ass_table tbody').on('click', '#removeAssdetails', function() {
        var table = $('#Ass_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Ass_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Ass_wellinven", sTitle: "Well Inventory Number", sType: "string" },
    { "mDataProp": "Ass_depfalaj", sTitle: "Depth(m)", sType: "string" }, 
    { "mDataProp": "Ass_waterlevel", sTitle: "Water Level", sType: "string" }, 
    { "mDataProp": "Ass_condmic", sTitle: "Conductivity Micromorus(cm)", sType: "string" }, 
    { "mDataProp": "Ass_Pumpingtube", sTitle: "Diameter of The Pumping Tube(inch)", sType: "string" },
    { "mDataProp": "Ass_Pumpingcap", sTitle: "Pumping Capacity(Horse Power)", sType: "string" },
    { "mDataProp": "Ass_dailyprod", sTitle: "Daily Production(3m/Day)", sType: "string" },
    { "mDataProp": "Ass_falajcomm", sTitle: "Commets", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editAssdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeAssdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Ass_table').DataTable({
        "aoColumns": Ass_cols,
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

//- BPWS08 -> Request for Dams Requests  ->Technical Report -> Hydrological Data
function Aflaj_Data() {
    if ($("#AflajDataid").text() == "Update") {
        Faljedit.remove().draw();
        $("#AflajDataid").text("Add");
    } else {}
    var Falj_object = {};
    var Aflaj_No = $('#Aflaj_No').val();
    var Falj_Name = $('#Falj_Name').val();
    var Falj_Resource = $('#Falj_Resource').val();
    var Falj_Rate = $("#Falj_Rate").val();
    var Dis_vill = $("#Dis_vill").val();
    var Conduc_Falaj = $("#Conduc_Falaj").val();
    var Acidity = $("#Acidity").val();

    Falj_object.CAflaj_No = Aflaj_No;
    Falj_object.CFalj_Name = Falj_Name;
    Falj_object.CFalj_Resource = Falj_Resource;
    Falj_object.CFalj_Rate = Falj_Rate;
    Falj_object.CDis_vill = Dis_vill;
    Falj_object.CConduc_Falaj = Conduc_Falaj;
    Falj_object.CAcidity = Acidity;

    var Aflaj_table = $('#Aflaj_table').DataTable();
    Aflaj_table.row.add(Falj_object).draw();
    $("#Aflaj_No").val('');
    $("#Falj_Name").val('');
    $("#Falj_Resource").val('');
    $("#Falj_Rate").val('');
    $("#Dis_vill").val('');
    $("#Conduc_Falaj").val('');
    $("#Acidity").val('');
}
//Edit Aflaj_Data Details
function Faljeditfunction(data1) {
    var data = data1.data();
    $("#AflajDataid").text("Update");
    $("#Aflaj_No").val(data.CAflaj_No);
    $("#Falj_Name").val(data.CFalj_Name);
    $("#Falj_Resource").val(data.CFalj_Resource);
    $("#Falj_Rate").val(data.CFalj_Rate);
    $("#Dis_vill").val(data.CDis_vill);
    $("#Conduc_Falaj").val(data.CConduc_Falaj);
    $("#Acidity").val(data.CAcidity);
}
$(document).ready(function() {
    $('#Aflaj_table tbody').on('click', '#editFaljdetails', function() {
        var table = $('#Aflaj_table').DataTable();
        Faljedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Faljeditfunction(data);
    });
    $('#Aflaj_table tbody').on('click', '#removeFaljdetails', function() {
        var table = $('#Aflaj_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Falj_cols = [
    { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "CAflaj_No", sTitle: "Inventory Number", sType: "string" },
    { "mDataProp": "CFalj_Name", sTitle: "Falj Name", sType: "string" }, 
    { "mDataProp": "CFalj_Resource", sTitle: "Falaj Resource", sType: "string" },
    { "mDataProp": "CFalj_Rate", sTitle: "Flow rate for w / w", sType: "string" },
    { "mDataProp": "CDis_vill", sTitle: "Distance b/w Umm Al-Falaj &amp; village", sType: "string" },
    { "mDataProp": "CConduc_Falaj", sTitle: "Conductivity", sType: "string" },
    { "mDataProp": "CAcidity", sTitle: "Acidity", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editFaljdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeFaljdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var Aflajtable = $('#Aflaj_table').DataTable({
        "aoColumns": Falj_cols,
        "columnDefs": [{
            "searchable": false,
            "autoFill": true,
            "orderable": false,
            "targets": 0
        }],
        "order": [
            [1, 'asc']
        ]
    });
    Aflajtable.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label class='dataTables_length hiddden'>Show <input type=text class='Aflaj_page form-control' value='5'>entries</label>");
    $(".Aflaj_page").keyup(function() {
        Aflajtable.page.len(this.value).draw();
    });
    /* auto increment */
    Aflajtable.on('order.dt search.dt', function() {
        Aflajtable.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});

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

