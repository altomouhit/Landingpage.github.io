//Second Party Data (Lessee) - Organization
 function SecondParty() {
    if ($("#SecondPartyID").text() == "Update") {
        secondedit.remove().draw();
        $("#SecondPartyID").text("Add");
    }
    var SecondParty_object = {};

    var SecondParty_Muni = $("#SecondParty_Muni option:selected").text();
    var SecondParty_Muni_val = $("#SecondParty_Muni option:selected").val();

    var ActivityType = $("#ActivityType option:selected").text();
    var ActivityType_val = $("#ActivityType option:selected").val();

    SecondParty_object.SecondPartyMuni = SecondParty_Muni;
    SecondParty_object.SecondPartyMuni_val = SecondParty_Muni_val;

    SecondParty_object.ActivityTypeRT = ActivityType;
    SecondParty_object.ActivityTypeRT_val = ActivityType_val;

    var SecondParty_table = $('#SecondParty_table').DataTable();
    SecondParty_table.row.add(SecondParty_object).draw();

    $("#SecondParty_Muni").val('1000');
    $("#ActivityType").val('1000');
 }
 //edit SecondParty details
 function adveditfunction(data1) {
    var data = data1.data();
    $("#SecondPartyID").text("Update");
    $("#SecondParty_Muni").val(data.SecondPartyMuni_val);
    $("#ActivityType").val(data.ActivityTypeRT_val);
 }
 //add storeys
 $(document).ready(function() {
    $('#SecondParty_table tbody').on('click', '#editsecondetails', function() {
        var table = $('#SecondParty_table').DataTable();
        secondedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#SecondParty_table tbody').on('click', '#removesecondetails', function() {
        var table = $('#SecondParty_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var SecondParty_cols = [
        { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent" : "text" }, 
        { "mDataProp": "SecondPartyMuni_val", sTitle: "Municipal License", sType: "string" }, 
        { "mDataProp": "ActivityTypeRT_val", sTitle: "Activity", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent": "<a id = 'editsecondetails' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removesecondetails' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var Secondtable = $('#SecondParty_table').DataTable({
        "aoColumns": SecondParty_cols,
        "columnDefs": [{
            "searchable": false,
            "orderable": false,
            "targets": 0
        }],
        "order": [
            [0, 'asc']
        ]
    });
    Secondtable.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='Secondpage form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
    $(".Secondpage").keyup(function() {
        Secondtable.page.len(eval($(".page").val())).draw();
    });
    /* auto increament */
    Secondtable.on('order.dt search.dt', function() {
        Secondtable.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
 });