//FAQ Button
function branchFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var channel_object = {};
    var branchCode = $("#branchCode").val();
    var branchEn = $("#branchEn").val();
    var branchAr = $("#branchAr").val();

    channel_object.branch_Code = branchCode;
    channel_object.branch_En = branchEn;
    channel_object.branch_Ar = branchAr;

    var branchTable = $('#branchTable').DataTable();
    branchTable.row.add(channel_object).draw();

    $("#branchCode").val('');
    $("#branchEn").val('');
    $("#branchAr").val('');
}
//edit branchFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#branchCode").val(data.branch_Code);
    $("#branchEn").val(data.branch_En);
    $("#branchAr").val(data.branch_Ar);
}
//View branchFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#branchCode").val(data.branch_Code);
    $("#branchEn").val(data.branch_En);
    $("#branchAr").val(data.branch_Ar);
}
//Add FAQ
$(document).ready(function() {
    $('#branchTable tbody').on('click', '#viewDetails', function() {
        var branchTable = $('#branchTable').DataTable();
        var data = branchTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#branchCode").attr('readonly', true);
        $('#branchEn').attr('readonly', true);
        $('#branchAr').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#branchTable tbody').on('click', '#editDetails', function() {
        var table = $('#branchTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#branchTable tbody').on('click', '#removeDetails', function() {
        var table = $('#branchTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "", sTitle: "Region", sType: "string" },
        { "mDataProp": "branch_Code", sTitle: "Branch Code", sType: "string" },
        { "mDataProp": "branch_En", sTitle: "Branch(En)", sType: "string" }, 
        { "mDataProp": "branch_Ar", sTitle: "Branch(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var branchTable = $('#branchTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [4]
		}],
		"order": [[0, 'asc']]
	});
	$('#ticketSearchBox').keyup(function() {
		branchTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	branchTable.columns().iterator('column', function(ctx, idx) {
		$(branchTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="branchTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	branchTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#branchCode").val('');
    $("#branchEn").val('');
    $("#branchAr").val('');
    $("#branchCode").removeAttr('readonly');
    $('#branchEn').removeAttr('readonly');
    $('#branchAr').removeAttr('readonly');
});