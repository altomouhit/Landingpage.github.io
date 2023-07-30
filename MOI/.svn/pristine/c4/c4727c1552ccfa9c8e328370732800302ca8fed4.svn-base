$("#first_success").hide();
//Beneficiary
function Beneficiary1() {
    if ($("#form1Submit").text() == "Update") {
        benedit.remove().draw();
        $("#form1Submit").text("Add Beneficiary");
    } else {}
    var Beneficiary_object = {};
    var Beneficiary_select = $("#Beneficiary_select option:selected").text();
    var Beneficiary_select_val = $("#Beneficiary_select option:selected").val();
    var optradio = $("#optradio2").val();
    var BeneficiaryID = $("#BeneficiaryID").val();
    var Bendate = $("#Bendate").val();
    var Bname = $("#Bname").val();
    var Baddress = $("#Baddress").val();
    var Bph = $("#Bph").val();
    var Bemail = $("#Bemail").val();
    var Investor_No = $('#Investor_No').val();
    var CommericalRegID = $("#crid").val();
    var CommericalName = $("#cname").val();
    var CommercialPhn = $("#Commph").val() || $('#Phnumber').val();
    var CommercialEmail = $("#E-mail").val();
    var CommericalAddr = "";
    //alert(Beneficiary_select_val)
    //alert(optradio);
    if (Beneficiary_select_val == "Organization" || optradio == "Organization") {
        var BeneficiaryCommerical_object = {};
        BeneficiaryCommerical_object.CBeneficiary_select = Beneficiary_select;
        BeneficiaryCommerical_object.CBeneficiary_selectval = Beneficiary_select_val;
        BeneficiaryCommerical_object.Coptradio = optradio;
        BeneficiaryCommerical_object.CInvestor_No = Investor_No;
        BeneficiaryCommerical_object.CBeneficiaryID = CommericalRegID;
        BeneficiaryCommerical_object.CBph = CommercialPhn;
        BeneficiaryCommerical_object.CBemail = CommercialEmail;
        BeneficiaryCommerical_object.CBname = CommericalName;
        BeneficiaryCommerical_object.CBaddress = CommericalAddr;
        var Beneficiary1 = $('#Beneficiary1').DataTable();
        Beneficiary1.row.add(BeneficiaryCommerical_object).draw();
        $("#Beneficiary_select").val('1000');
        $("#Btype").val('');
        $("#crid").val('');
        $("#cname").val('');
        $("#Commph").val('');
        $('#Phnumber').val('');
        $("#E-mail").val('');
        $("#Investor_No").val('');
        skipvalidation('remove');
    } else {
        Beneficiary_object.CBeneficiary_select = Beneficiary_select;
        Beneficiary_object.CBeneficiary_selectval = Beneficiary_select_val;
        Beneficiary_object.Coptradio = optradio;
        Beneficiary_object.CInvestor_No = Investor_No;
        Beneficiary_object.CBeneficiaryID = BeneficiaryID;
        Beneficiary_object.CBendate = Bendate;
        Beneficiary_object.CBph = Bph;
        Beneficiary_object.CBemail = Bemail;
        Beneficiary_object.CBname = Bname;
        Beneficiary_object.CBaddress = Baddress;
        var Beneficiary1 = $('#Beneficiary1').DataTable();
        Beneficiary1.row.add(Beneficiary_object).draw();
        $("#Beneficiary_select").val('1000');
        $("#optradio2").val('');
        $("#BeneficiaryID").val('');
        $("#Bendate").val('').datepicker('update');
        $("#Bname").val('');
        $("#Baddress").val('');
        $("#Bph").val('');
        $("#Bemail").val('');
        $("#Investor_No").val('');
        skipvalidation('remove');
    }
}
//edit Beneficiary details
function beneditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#Beneficiary_select").val(data.CBeneficiary_selectval);
    $("#optradio2").val(data.Coptradio);
    $("#BeneficiaryID").val(data.CBeneficiaryID);
    $("#Bendate").val(data.CBendate);
    $("#Bname").val(data.CBname);
    $("#Baddress").val(data.CBaddress);
    $("#Bph").val(data.CBph);
    $("#Bemail").val(data.CBemail);
}
//add Beneficiary
$(document).ready(function() {
    $('#Beneficiary_first').click(function() {
        var Beneficiary_object = {};
        var table = $('#Beneficiary1').DataTable();
        var firstParty_Table = $('#firstParty_Table').DataTable();
        firstParty_Table.clear();
        $("input:checkbox[class=bencheck]").each(function() {
            var data = table.data()[this.id - 1];
            //console.log(this);
            Beneficiary_object = {};
            if (data.CBeneficiary_select == 'Owner') {
                console.log(data);
                Beneficiary_object.FBeneficiaryID = data.CBeneficiaryID;
                Beneficiary_object.FBname = data.CBname;
                Beneficiary_object.FBaddress = data.CBaddress;
                // var firstParty_Table = $('#firstParty_Table').DataTable();
                firstParty_Table.row.add(Beneficiary_object).draw();
            } else {
                //alert("Only details can be added.");
            }
            if (firstParty_Table.data().count() > 0) {
                //console.log(firstParty_Table.data());
                $("#first_success").fadeTo(2000, 2000).slideUp(2000, function(){
                    $("#success-alert").alert('close');
                });
            }
        });
    });
    $('#Beneficiary1 tbody').on('click', '#editgisdetails', function() {
        var table = $('#Beneficiary1').DataTable();
        benedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        beneditfunction(data);
    });
    $('#Beneficiary1 tbody').on('click', '#removegisdetails', function() {
        var table = $('#Beneficiary1').DataTable();
        table.row($(this).parents('tr')).remove().draw();
        alert(table.data().count());
        if (table.data().count() === 0) {
            skipvalidation('add');
        }
    });
    var cols = [
        { "mDataProp": "Select", sTitle: "Select", sType: "checkbox", "defaultContent": "" }, 
        { "mDataProp": "msno", sTitle: "الرقم المتسلسل", sType: "string", "defaultContent": "text" }, 
        { "mDataProp": "CBeneficiary_select", sTitle: "المستفيد", sType: "string" }, 
        { "mDataProp": "Coptradio", sTitle: "نوع المستفيد", sType: "string" }, 
        { "mDataProp": "CBeneficiaryID", sTitle: "\u0627\u0644\u0631\u0642\u0645 \u0627\u0644\u0645\u062F\u0646\u064A \u0644\u0644\u0645\u0633\u062A\u0641\u064A\u062F/\u0631\u0642\u0645 \u0627\u0644\u0633\u062C\u0644 \u0627\u0644\u062A\u062C\u0627\u0631\u064A", sType: "string" }, 
        { "mDataProp": "CBendate", sTitle: "تاريخ الانتهاء", sType: "string" }, 
        { "mDataProp": "CBname", sTitle: "أسم المستفيد/الإسم التجاري", sType: "string" }, 
        { "mDataProp": "CBaddress", sTitle: "عنوان المستفيد", sType: "string" }, 
        { "mDataProp": "CBph", sTitle: "رقم الهاتف", sType: "string" }, 
        { "mDataProp": "CBemail", sTitle: "\u0627\u0644\u0628\u0631\u064A\u062F \u0627\u0644\u0627\u0644\u0643\u062A\u0631\u0648\u0646\u064A", sType: "string" }, 
        //{ "mDataProp": "CInvestor_No", sTitle: "رقم عقد الاستثمار", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "الاجراء", sType: "string", "defaultContent": "<a id = 'editgisdetails' href='javascript:void(0)' data-toggle='tooltip' data-placement='bottom' title='Edit' class='text-green'><i class='fa fa-edit'></i></a> <a id = 'removegisdetails' href='javascript:void(0)' data-toggle='tooltip' data-placement='bottom' title='Delete' class='text-red'><i class='fa fa-times'></i></a>" }
    ];
    var coldef_firstParty_Table = [
        { "mDataProp": "FBeneficiaryID", sTitle: "Civil ID", sType: "string" }, 
        { "mDataProp": "FBname", sTitle: "Beneficiary Name", sType: "string" }, 
        { "mDataProp": "FBaddress", sTitle: "Address", sType: "string" }
    ];
    var table = $('#firstParty_Table').DataTable({
        'aoColumns': coldef_firstParty_Table,
        'columnDefs': [{
            'targets': 0,
            'searchable': false,
            'orderable': false,
            'className': 'dt-body-center'
        }],
        'order': [1, 'asc']
    });
    var table = $('#Beneficiary1').DataTable({
        'aoColumns': cols,
        'columnDefs': [{
            'targets': 0,
            'searchable': false,
            'orderable': false,
            'className': 'dt-body-center',
            'render': function(data, type, full, meta) {
                console.log(full);
                return '<input type="checkbox" id="' + $('#Beneficiary1').DataTable().data().count() + '" value="' + $('#Beneficiary1').DataTable().data().count() + '">';
            }
        }],
        'order': [1, 'asc']
    });
    table.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text class='page form-control' value='5' style='display:none'><label style='display:none'>entries</label>");
    $(".page").keyup(function() {
        //table.page.len(eval($(".page").val())).draw();
    });
    /* auto increament */
    table.on('order.dt search.dt', function() {
        table.column(1, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
    // Handle click on "Select all" control
    $('#Beneficiary1-select-all').on('click', function() {
        // Check/uncheck all checkboxes in the table
        var rows = table.rows({
            'search': 'applied'
        }).nodes();
        $('input[type="checkbox"]', rows).prop('checked', this.checked);
    });
    // Handle click on checkbox to set state of "Select all" control
    $('#Beneficiary1 tbody').on('change', 'input[type="checkbox"]', function() {
        // If checkbox is not checked
        console.log(this);
        if (!this.checked) {
            var el = $('#Beneficiary1-select-all').get(0);
            // If "Select all" control is checked and has 'indeterminate' property
            if (el && el.checked && ('indeterminate' in el)) {
                // Set visual state of "Select all" control 
                // as 'indeterminate'
                el.indeterminate = true;
            }
            $("#" + this.id).removeClass('bencheck');
            $("#" + this.id).addClass('benuncheck');
        } else {
            $("#" + this.id).addClass('bencheck');
            $("#" + this.id).removeClass('benuncheck');
        }
    });
});

function skipvalidation(type) {
    if (type == 'add') {
        //Individual Add the required attr 
        $("#BeneficiaryID").attr("required", "true");
        $("#Bname").attr("required", "true");
        $("#Baddress").attr("required", "true");
        $("#Bph").attr("required", "true");
        //Organization Add the required attr
        $("#crid").attr("required", "true");
    } else {
        //Individual remove the required attr 
        $("#BeneficiaryID").removeAttr('required');
        $("#Bname").removeAttr('required');
        $("#Baddress").removeAttr('required');
        $("#Bph").removeAttr('required');
        //Organization remove the required attr 
        $("#crid").removeAttr('required');
    }
}
$("select#Beneficiary_select > option[value='1000']").prop( "selected", true);
