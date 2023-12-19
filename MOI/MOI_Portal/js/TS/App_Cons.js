//Consultant Details - BPTS01 - Request license for Major Construction Button
function App_Cons() {
    if ($("#AppConsid").text() == "Update") {
        appConsedit.remove().draw();
        $("#AppConsid").text("Add");
    } else {}
    var AppCons_object = {};
    var aid = $('#aid').val();
    var applcntEpiryDate = $('#applcntEpiryDate').val();
    var aname = $('#aname').val();
    var address_app = $('#address_app').val();
    var Phnumber_app = $('#Phnumber_app').val();
    var eMail = $('#eMail').val();
    AppCons_object.Cons_aid = aid;
    AppCons_object.Cons_date = applcntEpiryDate;
    AppCons_object.Cons_aname = aname;
    AppCons_object.Cons_address = address_app;
    AppCons_object.Cons_Phnumber = Phnumber_app;
    AppCons_object.Cons_eMail = eMail;
    var AppConsu_table = $('#AppConsu_table').DataTable();
    AppConsu_table.row.add(AppCons_object).draw();
    $("#aid").val('');
    $("#applcntEpiryDate").val('');
    $("#aname").val('');
    $("#address_app").val('');
    $("#Phnumber_app").val('');
    $("#eMail").val('');
}
//Edit App_Cons Details
function appconseditfunction(data1) {
    var data = data1.data();
    $("#AppConsid").text("Update");
    $("#aid").val(data.Cons_aid);
    $("#applcntEpiryDate").val(data.Cons_date);
    $("#aname").val(data.Cons_aname);
    $("#address_app").val(data.Cons_address);
    $("#Phnumber_app").val(data.Cons_Phnumber);
    $("#eMail").val(data.Cons_eMail);
}
$(document).ready(function() {
    $('#AppConsu_table tbody').on('click', '#editappconsdetails', function() {
        var table = $('#AppConsu_table').DataTable();
        appConsedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        appconseditfunction(data);
    });
    $('#AppConsu_table tbody').on('click', '#removeappconsdetails', function() {
        var table = $('#AppConsu_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var App_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" }, 
    { "mDataProp": "Cons_aid", sTitle: "Engineer ID", sType: "string" }, 
    { "mDataProp": "Cons_date", sTitle: "Expiry Date", sType: "string" },
    { "mDataProp": "Cons_aname", sTitle: "Engineer Name", sType: "string" }, 
    { "mDataProp": "Cons_address", sTitle: "Address", sType: "string" }, 
    { "mDataProp": "Cons_Phnumber", sTitle: "Mobile Number", sType: "string" }, 
    { "mDataProp": "Cons_eMail", sTitle: "Email", sType: "string" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": 
        "<a id = 'editappconsdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a>"+
        "<a id = 'removeappconsdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash'></i></a>"
    }];
    var table = $('#AppConsu_table').DataTable({
        "aoColumns": App_cols,
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

//Consultant Details - Button
function Cons_fn() {
    if ($("#Consid").text() == "Update") {
        Consedit.remove().draw();
        $("#Consid").text("Add");
    } else {}
    var Cons_object = {};
    var Engg_object = {};
    var ConsType_Value = $('input[name=optradio4]:checked').val();
    var Cons_Value = $('#Address_cons').val();
    var applcntEpiryDate = $('#applcntEpiryDate').val();
    var CommericalRegistrationID = $('#CommericalRegistrationID').val();
    var ComName = $('#ComName').val();
    var CivilIDNumber = $('#CivilIDNumber').val();
    var NameofApprovedEngineer = $('#NameofApprovedEngineer').val();
    var Consuldate = $("#Consuldate").val();
    if (ConsType_Value == '180') {
        Cons_object.Comm_ID = CommericalRegistrationID;
        Cons_object.Comm_Name = ComName;
        Cons_object.comm_value = Cons_Value;
        var Consu_table = $('#Consu_table').DataTable();
        Consu_table.row.add(Cons_object).draw();
        $("#CommericalRegistrationID").val('');
        $("#ComName").val('');
    } else {
        Engg_object.Comm_ID = CivilIDNumber;
        Engg_object.Comm_Name = NameofApprovedEngineer;
        Engg_object.comm_value = Cons_Value;
        Engg_object.Consul_date= Consuldate
        var Consutable = $('#Consu_table').DataTable();
        Consutable.row.add(Engg_object).draw();
        $("#CivilIDNumber").val('');
        $("#NameofApprovedEngineer").val('');
        $("#Consuldate").val('');
    }
}
//Edit Cons Details
function conseditfunction(data1) {
    var data = data1.data();
    $("#Consid").text("Update");
    if (data.comm_value == 'Other') {
        $("#CommericalRegistrationID").val(data.Comm_ID);
        $("#ComName").val(data.Comm_Name);
        $('input[name=optradio4]').attr("checked", true).trigger("click");
    } else {
        $("#CivilIDNumber").val(data.Comm_ID);
        $("#NameofApprovedEngineer").val(data.Comm_Name);
        $("#Consuldate").val(data.Consul_date);
        $('input[name=optradio4]').attr("checked", true).trigger("click");
    }
}
$(document).ready(function() {
    $('#Consu_table tbody').on('click', '#editconsdetails', function() {
        var table = $('#Consu_table').DataTable();
        Consedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        conseditfunction(data);
    });
    $('#Consu_table tbody').on('click', '#removeconsdetails', function() {
        var table = $('#Consu_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Consu_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" }, 
    { "mDataProp": "comm_value", sTitle: "Consultant Type", sType: "string" }, 
    { "mDataProp": "Comm_ID", sTitle: "Commercial ID / Civil ID", sType: "string" }, 
    { "mDataProp": "Consul_date", sTitle: "Expiry Date", sType: "string" }, 
    { "mDataProp": "Comm_Name", sTitle: "Commercial Name / Name of Authorized Engineer", sType: "string" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editconsdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeconsdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Consu_table').DataTable({
        "aoColumns": Consu_cols,
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

//Contractor Data - BPTS04 - Permit to Initiate the Contratruction Button
function Cont() {
    if ($("#Contid").text() == "Update") {
        Contraedit.remove().draw();
        $("#Contid").text("Add");
    } else {}
    var Contra_object = {};
    var CommericalID = $('#CommericalID').val();
    var ContCommercialName = $('#ContCommercialName').val();
    var ContEmailAddress = $('#ContEmailAddress').val();
    var ContFax = $('#ContFax').val();
    var ContDegree = $('#ContDegree').val();
    Contra_object.Contra_CommericalID = CommericalID;
    Contra_object.Contra_CommercialName = ContCommercialName;
    Contra_object.Contra_Email = ContEmailAddress;
    Contra_object.Contra_Fax = ContFax;
    Contra_object.Contra_ContDegree = ContDegree;
    var Cont_table = $('#Cont_table').DataTable();
    Cont_table.row.add(Contra_object).draw();
    $("#CommericalID").val('');
    $("#ContCommercialName").val('');
    $("#ContEmailAddress").val('');
    $("#ContFax").val('');
    $("#ContDegree").val('');
}
//Edit Contrator Details
function contraeditfunction(data1) {
    var data = data1.data();
    $("#Contid").text("Update");
    $("#CommericalID").val(data.Contra_CommericalID);
    $("#ContCommercialName").val(data.Contra_CommercialName);
    $("#ContEmailAddress").val(data.Contra_Email);
    $("#ContFax").val(data.Contra_Fax);
    $("#ContDegree").val(data.Contra_ContDegree);
}
$(document).ready(function() {
    $('#Cont_table tbody').on('click', '#editcontradetails', function() {
        var table = $('#Cont_table').DataTable();
        Contraedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        contraeditfunction(data);
    });
    $('#Cont_table tbody').on('click', '#removecontradetails', function() {
        var table = $('#Cont_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Cont_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Contra_CommericalID", sTitle: "Commercial ID", sType: "string" }, 
    { "mDataProp": "Contra_CommercialName", sTitle: "Commercial Name", sType: "string" }, 
    { "mDataProp": "Contra_Email", sTitle: "Email Address", sType: "string" }, 
    { "mDataProp": "Contra_Fax", sTitle: "Fax", sType: "string" }, 
    { "mDataProp": "Contra_ContDegree", sTitle: "Degree", sType: "string" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editcontradetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removecontradetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Cont_table').DataTable({
        "aoColumns": Cont_cols,
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
function Consul() {
    if ($("#Consulid").text() == "Update") {
        Consuledit.remove().draw();
        $("#Consulid").text("Add");
    } else {}
    var Consul_object = {};
    var ConsCommericalID = $('#ConsCommericalID').val();
    var ConsCommercialName = $('#ConsCommercialName').val();
    var ConsEmailAddress = $('#ConsEmailAddress').val();
    var ConsFax = $('#ConsFax').val();
    var ConsDegree = $('#ConsDegree').val();
    Consul_object.Consul_CommericalID = ConsCommericalID;
    Consul_object.Consul_CommercialName = ConsCommercialName;
    Consul_object.Consul_Email = ConsEmailAddress;
    Consul_object.Consul_Fax = ConsFax;
    Consul_object.Consul_Degree = ConsDegree;
    var Consul_table = $('#Consul_table').DataTable();
    Consul_table.row.add(Consul_object).draw();
    $("#ConsCommericalID").val('');
    $("#ConsCommercialName").val('');
    $("#ConsEmailAddress").val('');
    $("#ConsFax").val('');
    $("#ConsDegree").val('');
}
//Edit Consultor Details
function Consuleditfunction(data1) {
    var data = data1.data();
    $("#Consulid").text("Update");
    $("#ConsCommericalID").val(data.Consul_CommericalID);
    $("#ConsCommercialName").val(data.Consul_CommercialName);
    $("#ConsEmailAddress").val(data.Consul_Email);
    $("#ConsFax").val(data.Consul_Fax);
    $("#ConsDegree").val(data.Consul_Degree);
}
$(document).ready(function() {
    $('#Consul_table tbody').on('click', '#editConsuldetails', function() {
        var table = $('#Consul_table').DataTable();
        Consuledit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Consuleditfunction(data);
    });
    $('#Consul_table tbody').on('click', '#removeConsuldetails', function() {
        var table = $('#Consul_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Consul_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Consul_CommericalID", sTitle: "Commercial ID", sType: "string" },
    { "mDataProp": "Consul_CommercialName", sTitle: "Commercial Name", sType: "string" }, 
    { "mDataProp": "Consul_Email", sTitle: "Email Address", sType: "string" }, 
    { "mDataProp": "Consul_Fax", sTitle: "Fax", sType: "string" }, 
    { "mDataProp": "Consul_Degree", sTitle: "Degree", sType: "string" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editConsuldetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeConsuldetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Consul_table').DataTable({
        "aoColumns": Consul_cols,
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

//Consulting Data - BPTS07 - Dig Permit
function Contractor() {
    if ($("#Contractorid").text() == "Update") {
        Contractoredit.remove().draw();
        $("#Contractorid").text("Add");
    } else {}
    var Contractor_object = {};
    var CommRegID_cont = $('#CommRegID_cont').val();
    var CommName_cont = $('#CommName_cont').val();
    var Address_cont = $('#Address_cont').val();
    var Phone_cont = $('#Phone_cont').val();
    Contractor_object.Contractor_CommericalID = CommRegID_cont;
    Contractor_object.Contractor_CommercialName = CommName_cont;
    Contractor_object.Contractor_Address = Address_cont;
    Contractor_object.Contractor_Phone = Phone_cont;
    var Contractor_table = $('#Contractor_table').DataTable();
    Contractor_table.row.add(Contractor_object).draw();
    $("#CommRegID_cont").val('');
    $("#CommName_cont").val('');
    $("#Address_cont").val('');
    $("#Phone_cont").val('');
}
//Edit Contractor Details
function Contractoreditfunction(data1) {
    var data = data1.data();
    $("#Contractorid").text("Update");
    $("#CommRegID_cont").val(data.Contractor_CommericalID);
    $("#CommName_cont").val(data.Contractor_CommercialName);
    $("#Address_cont").val(data.Contractor_Address);
    $("#Phone_cont").val(data.Contractor_Phone);
}
$(document).ready(function() {
    $('#Contractor_table tbody').on('click', '#editContractordetails', function() {
        var table = $('#Contractor_table').DataTable();
        Contractoredit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Contractoreditfunction(data);
    });
    $('#Contractor_table tbody').on('click', '#removeContractordetails', function() {
        var table = $('#Contractor_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Contractor_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Contractor_CommericalID", sTitle: "Commercial ID", sType: "string" },
    { "mDataProp": "Contractor_CommercialName", sTitle: "Commercial Name", sType: "string" }, 
    { "mDataProp": "Contractor_Address", sTitle: "Address", sType: "string" }, 
    { "mDataProp": "Contractor_Phone", sTitle: "Mobile Number ", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editContractordetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeContractordetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Contractor_table').DataTable({
        "aoColumns": Contractor_cols,
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


//Consulting Data (Supervisor) - BPTS13 - Request for General Services outside the Segment Limit
function superv() {
    if ($("#supervid").text() == "Update") {
        ConSupvedit.remove().draw();
        $("#supervid").text("Add");
    } else {}
    var superv_object = {};
    var ConSupvCommericalID = $('#ConSupvCommericalID').val();
    var ConSupvCommercialName = $('#ConSupvCommercialName').val();
    var ConSupvEmailAddress = $('#ConSupvEmailAddress').val();
    var ConSupvFax = $('#ConSupvFax').val();
    var ConSupvDegree = $('#ConSupvDegree').val();
    superv_object.superv_CommericalID = ConSupvCommericalID;
    superv_object.superv_CommercialName = ConSupvCommercialName;
    superv_object.superv_Email = ConSupvEmailAddress;
    superv_object.superv_Fax = ConSupvFax;
    superv_object.superv_Degree = ConSupvDegree;
    var superv_table = $('#superv_table').DataTable();
    superv_table.row.add(superv_object).draw();
    $("#ConSupvCommericalID").val('');
    $("#ConSupvCommercialName").val('');
    $("#ConSupvEmailAddress").val('');
    $("#ConSupvFax").val('');
    $("#ConSupvDegree").val('');
}
//Edit Consultor Details
function ConSupveditfunction(data1) {
    var data = data1.data();
    $("#supervid").text("Update");
    $("#ConSupvCommericalID").val(data.superv_CommericalID);
    $("#ConSupvCommercialName").val(data.superv_CommercialName);
    $("#ConSupvEmailAddress").val(data.superv_Email);
    $("#ConSupvFax").val(data.superv_Fax);
    $("#ConSupvDegree").val(data.superv_Degree);
}
$(document).ready(function() {
    $('#superv_table tbody').on('click', '#editConSupvdetails', function() {
        var table = $('#superv_table').DataTable();
        ConSupvedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        ConSupveditfunction(data);
    });
    $('#superv_table tbody').on('click', '#removeConSupvdetails', function() {
        var table = $('#superv_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Supv_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "superv_CommericalID", sTitle: "Commercial ID", sType: "string" },
    { "mDataProp": "superv_CommercialName", sTitle: "Commercial Name", sType: "string" }, 
    { "mDataProp": "superv_Email", sTitle: "Email Address", sType: "string" }, 
    { "mDataProp": "superv_Fax", sTitle: "Fax", sType: "string" }, 
    { "mDataProp": "superv_Degree", sTitle: "Degree", sType: "string" }, 
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editConSupvdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeConSupvdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#superv_table').DataTable({
        "aoColumns": Supv_cols,
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

//Register Consultant / Contractor - Dashboard
function Office_fn() {
    if ($("#Officeid").text() == "Update") {
        Officedit.remove().draw();
        $("#Officeid").text("Add");
    } else {}
    var Office_object = {};
    var CivilID = $('#CivilID').val();
    var coname = $('#coname').val();
    var Authpro = $('#Authpro').val();
    var EduQua = $('#EduQua').val();
    var Phnumber_con = $('#Phnumber_con').val();
    var eMail_con = $('#eMail_con').val();

    Office_object.Office_CivilID = CivilID;
    Office_object.Office_coname = coname;
    Office_object.Office_Authpro = Authpro;
    Office_object.Office_EduQua = EduQua;
    Office_object.Office_Phnumber = Phnumber_con;
    Office_object.Office_eMail = eMail_con;

    var Office_table = $('#Office_table').DataTable();
    Office_table.row.add(Office_object).draw();
    $("#CivilID").val('');
    $("#coname").val('');
    $("#Authpro").val('');
    $("#EduQua").val('');
    $("#Phnumber_con").val('');
    $("#eMail_con").val('');
}
//Edit Consultor Details
function Officeditfunction(data1) {
    var data = data1.data();
    $("#Officeid").text("Update");
    $("#CivilID").val(data.Office_CivilID);
    $("#coname").val(data.Office_coname);
    $("#Authpro").val(data.Office_Authpro);
    $("#EduQua").val(data.Office_EduQua);
    $("#Phnumber_con").val(data.Office_Phnumber);
    $("#eMail_con").val(data.Office_eMail);
}
$(document).ready(function() {
    $('#Office_table tbody').on('click', '#editOfficedetails', function() {
        var table = $('#Office_table').DataTable();
        Officedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Officeditfunction(data);
    });
    $('#Office_table tbody').on('click', '#removeOfficedetails', function() {
        var table = $('#Office_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Office_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Office_CivilID", sTitle: "Civil ID", sType: "string" },
    { "mDataProp": "Office_coname", sTitle: "Name", sType: "string" }, 
    { "mDataProp": "Office_Authpro", sTitle: "Authorized Profession", sType: "string" }, 
    { "mDataProp": "Office_EduQua", sTitle: "Educational Qualification", sType: "string" },
    { "mDataProp": "Office_Phnumber", sTitle: "Mobile Number", sType: "string" },
    { "mDataProp": "Office_eMail", sTitle: "Email", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editOfficedetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeOfficedetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Office_table').DataTable({
        "aoColumns": Office_cols,
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
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text class='Office_page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".Office_page").keyup(function() {
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

//Municipal License & Commercial License - Dashboard
function Municipal_fn() {
    if ($("#Municid").text() == "Update") {
        Municiedit.remove().draw();
        $("#Municid").text("Add");
    } else {}
    var Munici_object = {};
    var Munino = $('#Munino').val();
    var Muniname = $('#Muniname').val();
    var Muniadr = $('#Muniadr').val();
    //var Muniact = $('#Muniact').val();
    var Munistart = $('#Munistart').val();
    var Muniend = $('#Muniend').val();
    var Munissue = $('#Munissue').val();

    Munici_object.Munici_Munino = Munino;
    Munici_object.Munici_Muniname = Muniname;
    Munici_object.Munici_Muniadr = Muniadr;
    //Munici_object.Munici_Muniact = Muniact;
    Munici_object.Munici_Munistart = Munistart;
    Munici_object.Munici_Muniend = Muniend;
    Munici_object.Munici_Munissue = Munissue;

    var Munci_table = $('#Munci_table').DataTable();
    Munci_table.row.add(Munici_object).draw();
    $("#Munino").val('');
    $("#Muniname").val('');
    $("#Muniadr").val('');
    //$("#Muniact").val('');
    $('#Munistart').val('');
    $('#Muniend').val('');
    $('#Munissue').val('');
}
//Edit Consultor Details
function Municieditfunction(data1) {
    var data = data1.data();
    $("#Municid").text("Update");
    $("#Munino").val(data.Munici_Munino);
    $("#Muniname").val(data.Munici_Muniname);
    $("#Muniadr").val(data.Munici_Muniadr);
    //$("#Muniact").val(data.Munici_Muniact);
    $('#Munistart').val(data.Munici_Munistart);
    $('#Muniend').val(data.Munici_Muniend);
    $('#Munissue').val(data.Munici_Munissue);
}
$(document).ready(function() {
    $('#Munci_table tbody').on('click', '#editMunicidetails', function() {
        var table = $('#Munci_table').DataTable();
        Municiedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Municieditfunction(data);
    });
    $('#Munci_table tbody').on('click', '#removeMunicidetails', function() {
        var table = $('#Munci_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Munici_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "Munici_Munino", sTitle: "Municipal License Number", sType: "string" },
    { "mDataProp": "Munici_Muniname", sTitle: "Name of license Holder", sType: "string" }, 
    { "mDataProp": "Munici_Muniadr", sTitle: "Address", sType: "string" }, 
    //{ "mDataProp": "Munici_Muniact", sTitle: "Type of Activity", sType: "string" },
    { "mDataProp": "Munici_Munistart", sTitle: "Start Date", sType: "string" },
    { "mDataProp": "Munici_Muniend", sTitle: "Expiry Date", sType: "string" },
    { "mDataProp": "Munici_Munissue", sTitle: "Date of issue", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editMunicidetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeMunicidetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Munci_table').DataTable({
        "aoColumns": Munici_cols,
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


//partner/Board Members/Authorized - Dashboard
// function partner_fn() {
//     if ($("#partnerid").text() == "Update") {
//         partneredit.remove().draw();
//         $("#partnerid").text("Add");
//     } else {}
//     var partner_object = {};
//     var idno = $('#idno').val();
//     var idname = $('#idname').val();
//     var idtype = $('#idtype').val();
//     var natid = $('#natid').val();
//     var desid = $('#desid').val();
//     var perid = $('#perid').val();
//     var regidate = $('#regidate').val();

//     partner_object.partner_idno = idno;
//     partner_object.partner_idname = idname;
//     partner_object.partner_idtype = idtype;
//     partner_object.partner_natid = natid;
//     partner_object.partner_desid = desid;
//     partner_object.partner_perid = perid;
//     partner_object.partner_regidate = regidate;

//     var partner_table = $('#partner_table').DataTable();
//     partner_table.row.add(partner_object).draw();
//     $("#idno").val('');
//     $("#idname").val('');
//     $("#idtype").val('');
//     $("#natid").val('');
//     $('#desid').val('');
//     $('#perid').val('');
//     $('#regidate').val('');
// }
//Edit partner Details
function partnereditfunction(data1) {
    var data = data1.data();
    $("#partnerid").text("Update");
    $("#idno").val(data.partner_idno);
    $("#idname").val(data.partner_idname);
    $("#idtype").val(data.partner_idtype);
    $("#natid").val(data.partner_natid);
    $('#desid').val(data.partner_desid);
    $('#perid').val(data.partner_perid);
    $('#regidate').val(data.partner_regidate);
}
$(document).ready(function() {
    $('#partner_table tbody').on('click', '#editpartnerdetails', function() {
        var table = $('#partner_table').DataTable();
        partneredit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        partnereditfunction(data);
    });
    var partner_cols = [
    { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
    { "mDataProp": "partner_idno", sTitle: "ID Number", sType: "string" },
    { "mDataProp": "partner_idname", sTitle: "ID Name", sType: "string" }, 
    { "mDataProp": "partner_idtype", sTitle: "ID Type", sType: "string" }, 
    { "mDataProp": "partner_natid", sTitle: "Nationality", sType: "string" },
    { "mDataProp": "partner_desid", sTitle: "Designation", sType: "string" },
    { "mDataProp": "partner_perid", sTitle: "Num.& Percentage Shares", sType: "string" },
    { "mDataProp": "partner_regidate", sTitle: "Registration Date", sType: "string" },
    { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editpartnerdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-eye'></i></a>"
    }];
    var table = $('#partner_table').DataTable({
        "aoColumns": partner_cols,
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "visible": false,
            "targets": [6],
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
