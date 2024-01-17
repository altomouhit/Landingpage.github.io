//Equipment Button
function Equi_fn() {
    if ($('#Equibtn').text() == 'Update') {
        Equiedit.remove().draw();
        $('#Equibtn').text('Add');
    }
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
$(document).ready(function () {
    $('#Equi_table tbody').on('click', '#editEquidetails', function () {
        var table = $('#Equi_table').DataTable();
        Equiedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Equieditfunction(data);
    });
    $('#Equi_table tbody').on('click', '#removeEquidetails', function () {
        var table = $('#Equi_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Equi_cols = [
        { 'mDataProp': 'msno', sTitle: 'Serial.No', sType: 'string', 'defaultContent': 'text' },
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
        { 'mDataProp': 'Actions', sTitle: 'Actions', sType: 'string', 'defaultContent': 
            "<a id = 'editEquidetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a>" +
            "<a id = 'removeEquidetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
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
    $('.page').keyup(function () {
        table.page.len(this.value).draw();
    });
    /* auto increment */
    table.on('order.dt search.dt', function () {
        table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function (cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});