//FAQ Button
function routingFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var routing_object = {};

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var compDesc = $("#compDesc option:selected").text();
	var compDesc_val = $("#compDesc option:selected").val();

    var productCategory = $("#productCategory option:selected").text();
	var productCategory_val = $("#productCategory option:selected").val();

    var branch = $("#branch option:selected").text();
	var branch_val = $("#branch option:selected").val();
    
    var group = $("#group option:selected").text();
	var group_val = $("#group option:selected").val();

    var serviceProvider = $("#serviceProvider option:selected").text();
	var serviceProvider_val = $("#serviceProvider option:selected").val();

    var SLATime = $("#SLATime").val();
    var channel = $("#channel option:selected").text();
	var channel_val = $("#channel option:selected").val();


    routing_object.dcompType = compType;
    routing_object.dcompType_val = compType_val;

    routing_object.dcompDesc = compDesc;
    routing_object.dcompDesc_val = compDesc_val;

    routing_object.dproductCategory = productCategory;
    routing_object.dproductCategory_val = productCategory_val;

    routing_object.dbranch = branch;
    routing_object.dbranch_val = branch_val;

    routing_object.dgroup = group;
    routing_object.dgroup_val = group_val;

    routing_object.dserviceProvider = serviceProvider;
    routing_object.dserviceProvider_val = serviceProvider_val;

    routing_object.dSLATime = SLATime;
    routing_object.dchannel = channel;
    routing_object.dchannel_val = channel_val;


    var routingTable = $('#routingTable').DataTable();
    routingTable.row.add(routing_object).draw();

    $("#group").val('');
    $("#SLATime").val('');
    $("#channel").val('');
    $("#compType").val('');
    $("#compDesc").val('');
    $("#branch").val('');
    $("#productCategory").val('');
    $("#serviceProvider").val('');
}
//edit routingFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#group").val(data.dgroup);
    $("#group").val(data.dbranch_val);
    $("#SLATime").val(data.dSLATime);
    $("#channel").val(data.dchannel);
    $("#channel").val(data.dchannel_val);
    $("#compType").val(data.dcompType_val);
    $("#compDesc").val(data.dcompDesc_val);
    $("#branch").val(data.dbranch_val);
    $("#productCategory").val(data.dproductCategory_val);
    $("#serviceProvider").val(data.dserviceProvider_val);
}
//View routingFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#group").val(data.dgroup);
    $("#group").val(data.dbranch_val);
    $("#SLATime").val(data.dSLATime);
    $("#channel").val(data.dchannel);
    $("#channel").val(data.dchannel_val);
    $("#compType").val(data.dcompType_val);
    $("#compDesc").val(data.dcompDesc_val);
    $("#branch").val(data.dbranch_val);
    $("#productCategory").val(data.dproductCategory_val);
    $("#serviceProvider").val(data.dserviceProvider_val);
}
//Add FAQ
$(document).ready(function() {
    $('#routingTable tbody').on('click', '#viewDetails', function() {
        var routingTable = $('#routingTable').DataTable();
        var data = routingTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#group").attr('readonly', true);
        $("#SLATime").attr('readonly', true);
        $("#channel").attr('readonly', true);
        $("#compDesc").attr('readonly', true);
        $('#branch').attr('readonly', true);
        $('#compType').attr('readonly', true);
        $("#productCategory").attr('readonly', true);
        $("#serviceProvider").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#routingTable tbody').on('click', '#editDetails', function() {
        var table = $('#routingTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#routingTable tbody').on('click', '#removeDetails', function() {
        var table = $('#routingTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dcompType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dcompDesc", sTitle: "Complaint Description", sType: "string" }, 
        { "mDataProp": "dproductCategory", sTitle: "Product Category", sType: "string" }, 
        { "mDataProp": "dchannel", sTitle: "Channel", sType: "string" },
        { "mDataProp": "dserviceProvider", sTitle: "Service Provider", sType: "string" },
        { "mDataProp": "dgroup", sTitle: "Group", sType: "string" }, 
        { "mDataProp": "dSLATime", sTitle: "SLA Time", sType: "string" }, 
        { "mDataProp": "dbranch", sTitle: "Branch", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var routingTable = $('#routingTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [6]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		routingTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	routingTable.columns().iterator('column', function(ctx, idx) {
		$(routingTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="routingTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	routingTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#group").val('');
    $("#SLATime").val('');
    $("#channel").val('');
    $("#compDesc").val('');
    $("#branch").val('');
    $("#compType").val('');
    $("#group").removeAttr('readonly');
    $("#SLATime").removeAttr('readonly');
    $("#channel").removeAttr('readonly');
    $("#compDesc").removeAttr('readonly');
    $('#branch').removeAttr('readonly');
    $('#compType').removeAttr('readonly');
});