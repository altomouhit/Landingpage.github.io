//FAQ Button
function prioritySLAFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var prioritySLA_object = {};
    var group = $("#group option:selected").text();
	var group_val = $("#group option:selected").val();
    var slaTime = $("#slaTime").val();

    prioritySLA_object.dgroup = group;
    prioritySLA_object.dgroup_val = group_val;
    prioritySLA_object.dslaTime = slaTime;

    var prioritySLATable = $('#prioritySLATable').DataTable();
    prioritySLATable.row.add(prioritySLA_object).draw();

    $("#group").val('');
    $("#slaTime").val('');
}
//edit prioritySLAFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#group").val(data.dgroup_val);
    $("#slaTime").val(data.dslaTime);
}
//View prioritySLAFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#group").val(data.dgroup_val);
    $("#slaTime").val(data.dslaTime);
}
//Add FAQ
$(document).ready(function() {
    $('#prioritySLATable tbody').on('click', '#viewDetails', function() {
        var prioritySLATable = $('#prioritySLATable').DataTable();
        var data = prioritySLATable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#group').attr('readonly', true);
        $('#slaTime').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#prioritySLATable tbody').on('click', '#editDetails', function() {
        var table = $('#prioritySLATable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#prioritySLATable tbody').on('click', '#removeDetails', function() {
        var table = $('#prioritySLATable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var productMaster_cols = [
        { "mDataProp": "dgroup", sTitle: "Group", sType: "string" }, 
        { "mDataProp": "dslaTime", sTitle: "SLA TIME (HOURS)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var prioritySLATable = $('#prioritySLATable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": productMaster_cols,
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
		prioritySLATable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	prioritySLATable.columns().iterator('column', function(ctx, idx) {
		$(prioritySLATable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="prioritySLATable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	prioritySLATable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#FAQClear").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#group").val('');
    $("#slaTime").val('');
    $('#group').removeAttr('readonly');
    $('#slaTime').removeAttr('readonly');
});