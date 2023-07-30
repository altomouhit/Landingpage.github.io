//FAQ Button
function fetchFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var fetch_object = {};

    var supportLine = $("#supportLine option:selected").text();
	var supportLine_val = $("#supportLine option:selected").val();

	var noTickets = $("#noTickets").val();

    fetch_object.dsupportLine = supportLine;
    fetch_object.dsupportLine_val = supportLine_val;

    fetch_object.dnoTickets = noTickets;


    var fetchTable = $('#fetchTable').DataTable();
    fetchTable.row.add(fetch_object).draw();

    $("#supportLine").val('');
    $("#noTickets").val('');
}
//edit fetchFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#supportLine").val(data.dsupportLine_val);
    $("#noTickets").val(data.dnoTickets);
}
//View fetchFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#supportLine").val(data.dsupportLine_val);
    $("#noTickets").val(data.dnoTickets);
}
//Add FAQ
$(document).ready(function() {
    $('#fetchTable tbody').on('click', '#viewDetails', function() {
        var fetchTable = $('#fetchTable').DataTable();
        var data = fetchTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#supportLine").attr('readonly', true);
        $("#noTickets").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#fetchTable tbody').on('click', '#editDetails', function() {
        var table = $('#fetchTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#fetchTable tbody').on('click', '#removeDetails', function() {
        var table = $('#fetchTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dsupportLine", sTitle: "Support Line", sType: "string" }, 
        { "mDataProp": "dnoTickets", sTitle: "No. Of Tickets", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var fetchTable = $('#fetchTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		fetchTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	fetchTable.columns().iterator('column', function(ctx, idx) {
		$(fetchTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="fetchTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	fetchTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();

    $("#supportLine").val('');
    $("#noTickets").val('');

    $("#supportLine").removeAttr('readonly');
    $("#noTickets").removeAttr('readonly');
});