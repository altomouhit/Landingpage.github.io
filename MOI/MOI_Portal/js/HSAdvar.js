//GIS Button
 function GIS() {
    if ($("#GISid").text() == "Update") {
        gisedit.remove().draw();
        $("#GISid").text("Add");
    } else {}
    var GIS_object = {};
    //var GIS_Point = $("#Point").val();
    var GIS_Description_advt = $("#Description_advt option:selected").text();
    var GIS_Description_advt_val = $("#Description_advt option:selected").val();

    var GIS_Type_advt = $("#Type_advt option:selected").text();
    var GIS_Type_advt_val = $("#Type_advt option:selected").val();

    var GIS_AdvertisementText_advt = $("#AdvertisementText_advt").val();
    var GIS_Price_advt = $("#Price_advt").val();

    //GIS_object.GISPoint = GIS_Point;
    GIS_object.GISDescription_advte = GIS_Description_advt;
    GIS_object.GISType_advt = GIS_Type_advt;
    GIS_object.GISAdvertisementText_advt = GIS_AdvertisementText_advt;
    GIS_object.GISPrice_advt = GIS_Price_advt;

    var Adv_table = $('#Adv_table').DataTable();
    Adv_table.row.add(GIS_object).draw();
    $("#Description_advt").val('1000');
    $("#Type_advt").val('0');
    $("#AdvertisementText_advt").val('');
    $("#Price_advt").val('');
 }
 //edit GIS details
 function giseditfunction(data1) {
    var data = data1.data();
    $("#GISid").text("Update");
    //$("#Point").val(data.GISPoint);
    $("#Description_advt").val(data.GISDescription_advte);
    $("#Type_advt").val(data.GISType_advt);
    $("#AdvertisementText_advt").val(data.GISAdvertisementText_advt);
    $("#Price_advt").val(data.GISPrice_advt);
 }
 //add storeys
 $(document).ready(function() {
    $('#Adv_table tbody').on('click', '#editgisdetails', function() {
        var table = $('#Adv_table').DataTable();
        gisedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        giseditfunction(data);
    });
    $('#Adv_table tbody').on('click', '#removegisdetails', function() {
        var table = $('#Adv_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var cols = [{
        "mDataProp": "msno",
        sTitle: "الرقم المتسلسل",
        sType: "string",
        "defaultContent" : "text"
    }, {
        "mDataProp": "GISDescription_advte",
        sTitle: "نوع الإعلان",
        sType: "string"
    }, {
        "mDataProp": "GISType_advt",
        sTitle: "نوع المنتج",
        sType: "string"
    }, {
        "mDataProp": "GISAdvertisementText_advt",
        sTitle: "الوصف",
        sType: "string"
    }, {
        "mDataProp": "GISPrice_advt",
        sTitle: "المبلغ (ريال عماني)",
        sType: "numeric"
    }, {
        "mDataProp": "Actions",
        sTitle: "الإجراء",
        sType: "string",
        "defaultContent": "<a id = 'editgisdetails' href='javascript::;' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removegisdetails' href='javascript::;' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var table = $('#Adv_table').DataTable({
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