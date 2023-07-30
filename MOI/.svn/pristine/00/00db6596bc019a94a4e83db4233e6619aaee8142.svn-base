//GIS Button
function Building_click() {
    if ($("#Building_ID").text() == "Update") {
        Building_edit.remove().draw();
        $("#Building_ID").text("+");
    } else {}
    var Building_object = {};
    var Build_No = $("#Build_No").val();
    var Build_name = $("#Build_name").val();
    var Build_Units = $("#Build_Units").val();
    var Build_Floors = $("#Build_Floors").val();
    var Build_Item = $("#Build_Item option:selected").text();
    var Build_Item_val = $("#Build_Item option:selected").val();
    Building_object.CBuild_No = Build_No;
    Building_object.CBuild_name = Build_name;
    Building_object.CBuild_Units = Build_Units;
    Building_object.CBuild_Floors = Build_Floors;
    Building_object.CBuild_Item = Build_Item;
    var Building_ID_table = $('#Building_ID_table').DataTable();
    Building_ID_table.row.add(Building_object).draw();
    $("#Build_No").val('');
    $("#Build_name").val('');
    $("#Build_Units").val('');
    $("#Build_Floors").val('');
    $("#Build_Item").val('0');
}
//edit GIS details
function Building_editfunction(data1) {
    var data = data1.data();
    $("#Building_ID").text("Update");
    $("#Build_No").val(data.CBuild_No);
    $("#Build_name").val(data.CBuild_name);
    $("#Build_Units").val(data.CBuild_Units);
    $("#Build_Floors").val(data.CBuild_Floors);
    $("#Build_Item").val(data.CBuild_Item);
}
//add storeys
$(document).ready(function() {
    $('#Building_ID_table tbody').on('click', '#editgisdetails', function() {
        var table = $('#Building_ID_table').DataTable();
        Building_edit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Building_editfunction(data);
    });
    $('#Building_ID_table tbody').on('click', '#removegisdetails', function() {
        var table = $('#Building_ID_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var cols = [{
        "mDataProp": "msno",
        sTitle: "الرقم المتسلسل",
        sType: "string",
        "defaultContent": "text"
    }, {
        "mDataProp": "CBuild_No",
        sTitle: "رقم المبنى",
        sType: "string"
    }, {
        "mDataProp": "CBuild_name",
        sTitle: "اسم المبنى",
        sType: "string"
    }, {
        "mDataProp": "CBuild_Units",
        sTitle: "رقم الطابق",
        sType: "string"
    }, {
        "mDataProp": "CBuild_Floors",
        sTitle: "رقم الوحدة",
        sType: "numeric"
    }, {
        "mDataProp": "CBuild_Item",
        sTitle: "نوع الوحدة",
        sType: "string"
    }, {
        "mDataProp": "Actions",
        sTitle: "الاجراء",
        sType: "string",
        "defaultContent": "<a id = 'editgisdetails' href='javascript::;' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removegisdetails' href='javascript::;' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Building_ID_table').DataTable({
        "aoColumns": cols,
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