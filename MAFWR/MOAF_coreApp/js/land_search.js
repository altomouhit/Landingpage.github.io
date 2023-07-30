function search_fn() {
    if ($("#searchid").text() == "Update Record") {
        searchedit.remove().draw();
        $("#searchid").text("Add New Record");
    } else {}
    var search_object = {};

    var region_ser = $("#region_ser option:selected").text();
    var region_ser_val = $("#region_ser option:selected").val();

    var Willayat_ser = $("#Willayat_ser option:selected").text();
    var Willayat_ser_val = $("#Willayat_ser option:selected").val();

    var Municiplity_ser = $("#Municiplity_ser option:selected").text();
    var Municiplity_ser_val = $("#Municiplity_ser option:selected").val();

    var Village_ser = $("#Village_ser option:selected").text();
    var Village_ser_val = $("#Village_ser option:selected").val();

    var plot_no = $("#plot_no").val();

    var Status_ser = $("#Status_ser option:selected").text();
    var Status_ser_val = $("#Status_ser option:selected").val();

    search_object.regionser = region_ser;
    search_object.region_val = region_ser_val;

    search_object.Willayatser = Willayat_ser;
    search_object.Willayat_val = Willayat_ser_val;

    search_object.Municiplityser = Municiplity_ser;
    search_object.Municiplity_val = Municiplity_ser_val;

    search_object.Villageser = Village_ser;
    search_object.Village_val = Village_ser_val;

    search_object.plotno= plot_no;

    search_object.Statusser = Status_ser;
    search_object.Status_val = Status_ser_val;

    var search_req = $('#search_req').DataTable();
    search_req.row.add(search_object).draw();
    $("#region_ser").val('1000');
    $("#Willayat_ser").val('1000');
    $("#Municiplity_ser").val('1000');
    $("#Village_ser").val('1000');
    $("#plot_no").val('');
    $("#Status_ser").val('1000');
}
//Edit land search Details
function searcheditfunction(data1) {
    var data = data1.data();
    $("#searchid").text("Update Record");
    $("#region_ser").val(data.region_val);
    $("#Willayat_ser").val(data.Willayat_val);
    $("#Municiplity_ser").val(data.Municiplity_val);
    $("#Village_ser").val(data.Village_val);
    $("#plot_no").val(data.plotno);
    $("#Status_ser").val(data.Status_val);
}
$(document).ready(function() {
    $('#search_req tbody').on('click', '#editsearchdetails', function() {
        var table = $('#search_req').DataTable();
        searchedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        searcheditfunction(data);
    });
    $('#search_req tbody').on('click', '#removesearchdetails', function() {
        var table = $('#search_req').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var search_cols = [
        { "mDataProp": "msno", sTitle: "Serial No", sType: "string", "defaultContent": "text" },
        { "mDataProp": "regionser", sTitle: "Governorate", sType: "string" }, 
        { "mDataProp": "Willayatser", sTitle: "Willayat", sType: "string" }, 
        { "mDataProp": "Municiplityser", sTitle: "Municipality", sType: "string" }, 
        { "mDataProp": "Villageser", sTitle: "Village", sType: "string" },
        { "mDataProp": "plotno", sTitle: "Plot Serial Number", sType: "string" }, 
        { "mDataProp": "Statusser", sTitle: "Status", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editsearchdetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removesearchdetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>"
    }];
    var search_table = $('#search_req').DataTable({
        "aoColumns": search_cols,
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": 0
        }],
        "order": [
            [0, 'asc']
        ]
    });
    search_table.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text class='search_page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".search_page").keyup(function() {
        search_table.page.len($(".search_page").val()).draw();
    });
    /* auto increment */
    search_table.on('order.dt search.dt', function() {
        search_table.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
});