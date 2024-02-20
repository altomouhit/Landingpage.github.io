$("#Archivebtn").prop("disabled",true); //after fetching details button should be enabled
//Request for Well Permit - Archive Requests for Well - BPWS01
 function Archive() {
    if ($('#Archivebtn').text() == 'Update') {
        Archivedit.remove().draw();
        $('#Archivebtn').text('Add');
    } else {}
    var Archive_object = {};

    var Inventory_no = $("#Inventory_no").val();
    var Req_no = $("#Req_no").val();
    var permit_type = $("#permit_type").val();
    var permitno = $("#permitno").val();
    var Status_arch = $("#Status_arch").val();
    var IssueDate_req = $("#IssueDate_req").val();
    var date_expire = $("#date_expire").val();
    
    Archive_object.CInventory_no = Inventory_no;
    Archive_object.CReq_no = Req_no;
    Archive_object.Cpermit_type = permit_type;
    Archive_object.Cpermitno = permitno;
    Archive_object.CStatus_arch = Status_arch;
    Archive_object.CIssueDate_req = IssueDate_req;
    Archive_object.Cdate_expire = date_expire;

    var Archive_table = $('#Archive_table').DataTable();
    Archive_table.row.add(Archive_object).draw();

    $('#Inventory_no').val('');
    $('#Req_no').val('');
    $('#permit_type').val('');
    $('#permitno').val('');
    $('#Status_arch').val('');
    $('#IssueDate_req').val('');
    $('#date_expire').val('');
 }
 //edit Archive Requests for Well
 function Archiveditfunction(data1) {
    var data = data1.data();
    $('#Inventory_no').val(data.CInventory_no);
    $('#Req_no').val(data.CReq_no);
    $('#permit_type').val(data.Cpermit_type);
    $('#permitno').val(data.Cpermitno);
    $('#Status_arch').val(data.CStatus_arch);
    $('#IssueDate_req').val(data.CIssueDate_req);
    $('#date_expire').val(data.Cdate_expire);
 }
 //add Archive Requests for Well
 $(document).ready(function() {
    $('#Archive_table tbody').on('click', '#editArchive', function() {
        var table = $('#Archive_table').DataTable();
        Archivedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        Archiveditfunction(data);
    });
    $('#Archive_table tbody').on('click', '#removeArchive', function() {
        var table = $('#Archive_table').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var Archive_cols = [
    { 'mDataProp': 'msno', sTitle: 'Serial.No', sType: 'string', 'defaultContent' : 'text' },
    { 'mDataProp': 'CInventory_no', sTitle: 'Inventory Number', sType: 'string' },
    { 'mDataProp': 'CReq_no', sTitle: 'Request Number', sType: 'string' },
    { 'mDataProp': 'Cpermit_type', sTitle: 'Permit Type', sType: 'string' }, 
    { 'mDataProp': 'Cpermitno', sTitle: 'Permit Number', sType: 'string' },
    { 'mDataProp': 'CStatus_arch', sTitle: 'Request Result', sType: 'string' },
    { 'mDataProp': 'CIssueDate_req', sTitle: 'Issue Date', sType: 'string' },
    { 'mDataProp': 'Cdate_expire', sTitle: 'Expire Date', sType: 'string' },
    { 'mDataProp': 'Actions', sTitle: 'Actions', sType: 'string', 'defaultContent': "<a id = 'editArchive' href='javascript:void(0)' class='text-green'><i class='fa fa-edit'></i></a><a id = 'removeArchive' href='javascript:void(0)' class='text-red'><i class='fa fa-trash-o'></i></a>" }
    ];
    var table_Archive = $('#Archive_table').DataTable({
        'aoColumns': Archive_cols,
        'columnDefs': [{
            'searchable': false,
            'orderable': false,
            'targets': 0
        }],
        'order': [
            [0, 'asc']
        ]
    });
    table_Archive.page.len(5).draw();
    $('.dataTables_length').replaceWith("<label class='dataTables_length hidden'>Show <input type=text class='Archive_page form-control' value='5'>entries</label>");
    $('.Archive_page').keyup(function() {
        table_Archive.page.len(this.value).draw();
    });
    /* auto increment */
    table_Archive.on('order.dt search.dt', function() {
        table_Archive.column(0, {
            search: 'applied',
            order: 'applied'
        }).nodes().each(function(cell, i) {
            cell.innerHTML = i + 1;
        });
    }).draw();
 });