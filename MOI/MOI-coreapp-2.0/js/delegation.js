//Delegation Button
 function delegationType() {
    if ($("#form1Submit").text() == "Update") {
        delegationedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var delegation_object = {};

    var delID = $("#delID").val();
    var delName = $("#delName").val();
    var ActiveYnFrom = $("#ActiveYnFrom").val();
    var ActiveYnTo = $("#ActiveYnTo").val();
    var empNo = $("#empNo").val();
    var empName = $("#empName").val();
    var delRole = $("#delRole option:selected").text();
    var delRole_val = $("#delRole option:selected").val();

    var ActiveYn = $("#ActiveYn option:selected").text();
    var ActiveYn_val = $("#ActiveYn option:selected").val();

    delegation_object.CdelID = delID;
    delegation_object.CdelName = delName;
    delegation_object.CActiveYnFrom = ActiveYnFrom;
    delegation_object.CActiveYnTo = ActiveYnTo;
    delegation_object.CempNo = empNo;
    delegation_object.CempName = empName;
    delegation_object.CdelRole = delRole;
    delegation_object.CdelRole_val = delRole_val;
    delegation_object.CActiveYn = ActiveYn;
    delegation_object.CActiveYn_val = ActiveYn_val;

    var delegationTable = $('#delegationTable').DataTable();
    delegationTable.row.add(delegation_object).draw();
    $("#delID").val('');
    $("#delName").val('');
    $("#ActiveYnFrom").val('');
    $("#ActiveYnTo").val('');
    $("#empNo").val('');
    $("#empName").val('');
    $("#delRole").val('1000');
    $("#ActiveYn").val('1000');
 }
 //edit Delegation details
 function delegationeditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#delID").val(data.CdelID);
    $("#delName").val(data.CdelName);
    $("#ActiveYnFrom").val(data.CActiveYnFrom);
    $("#ActiveYnTo").val(data.CActiveYnTo);
    $("#empNo").val(data.CempNo);
    $("#empName").val(data.CempName);
    $("#delRole").val(data.CdelRole_val);
    $("#ActiveYn").val(data.CActiveYn_val);
 }
 //add Delegation
 $(document).ready(function() {
    $('#delegationTable tbody').on('click', '#editdelegationdetails', function() {
        var table = $('#delegationTable').DataTable();
        delegationedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        delegationeditfunction(data);
    });
    $('#delegationTable tbody').on('click', '#removedelegationdetails', function() {
        var table = $('#delegationTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var delegation_cols = [
      { "mDataProp": "msno", sTitle: "S.No", sType: "string", "defaultContent" : "text" },
      { "mDataProp": "CdelID", sTitle: "Delegator ID", sType: "string" },
      { "mDataProp": "CdelName", sTitle: "Delegator Name", sType: "numeric" },
      { "mDataProp": "CActiveYnFrom", sTitle: "From Date", sType: "string" },
      { "mDataProp": "CActiveYnTo", sTitle: "To Date", sType: "numeric" },
      { "mDataProp": "CempNo", sTitle: "Delegate ID", sType: "string" },
      { "mDataProp": "CempName", sTitle: "Delegate Name", sType: "string" },
      { "mDataProp": "CdelRole", sTitle: "Role", sType: "string" },
      { "mDataProp": "CActiveYn", sTitle: "Status", sType: "string" },
      { "mDataProp": "Actions", sTitle: "Actions", sType: "string", "defaultContent":
          "<button type='button' rel='tooltip' title='Edit Profile' id = 'editdelegationdetails' class='btn btn-success btn-simple btn-xs'><i class='fa fa-edit'></i></button>" }
          /*+ "<button type='button' rel='tooltip' title='Remove' id = 'removedelegationdetails' class='btn btn-danger btn-simple btn-xs'><i class='fa fa-times'></i></button>" } */
    ];
    var tableDelegation = $('#delegationTable').DataTable({
        "aoColumns": delegation_cols,
        "columnDefs": [{
            "targets": [],
            "visible": false,
            "searchable": false
        }],
        "order": [
            [0, 'asc']
        ]
    });
    tableDelegation.page.len(5).draw();
    $(".dataTables_length").replaceWith("<label style='display:none'>Show <input type=text class='delPage form-control' value='5'>entries</label>");
    $(".delPage").keyup(function() {
        tableDelegation.page.len(this.value).draw();
    });
    /* auto increment */
    tableDelegation.on('order.dt search.dt', function() {
        tableDelegation.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
 });
