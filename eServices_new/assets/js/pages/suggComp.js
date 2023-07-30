//FAQ Button
//$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function suggCompFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var comp_object = {};

    var fromDate = $("#fromDate").val();
    var toDate = $("#toDate").val();

    var feedbackType = $("#feedbackType option:selected").text();
	var feedbackType_val = $("#feedbackType option:selected").val();

    comp_object.dfromDate = fromDate;
    comp_object.dtoDate = toDate;

    comp_object.dfeedbackType = feedbackType;
    comp_object.dfeedbackType_val = feedbackType_val;

    var suggCompTable = $('#suggCompTable').DataTable();
    suggCompTable.row.add(comp_object).draw();
    $("#fromDate").val('');
    $("#toDate").val('');
    $("#feedbackType").val('');
}
//edit suggCompFn details
function adveditfunction(data1) {
    $(".smart-Wizard").show();
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#fromDate").val(data.dfromDate);
    $("#toDate").val(data.dtoDate);
    $("#feedbackType").val(data.dfeedbackType_val);
}
//View suggCompFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#fromDate").val(data.dfromDate);
    $("#toDate").val(data.dtoDate);
    $("#feedbackType").val(data.dfeedbackType_val);
}
//Add FAQ
$(document).ready(function() {
    $('#suggCompTable tbody').on('click', '#viewDetails', function() {
        var suggCompTable = $('#suggCompTable').DataTable();
        var data = suggCompTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#fromDate").attr('readonly', true);
        $("#toDate").attr('readonly', true);
        $("#feedbackType").attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#suggCompTable tbody').on('click', '#editDetails', function() {
        var table = $('#suggCompTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#suggCompTable tbody').on('click', '#removeDetails', function() {
        var table = $('#suggCompTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dfromDate", sTitle: "From Date", sType: "string" }, 
        { "mDataProp": "dtoDate", sTitle: "To Date", sType: "string" }, 
        { "mDataProp": "dfeedbackType", sTitle: "Type", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var suggCompTable = $('#suggCompTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": comp_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [3]
		}],
		"order": [[0, 'asc']]
	});
	$('#compTypeSearch').keyup(function() {
		suggCompTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	suggCompTable.columns().iterator('column', function(ctx, idx) {
		$(suggCompTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="suggCompTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	suggCompTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#fromDate").val('');
    $("#toDate").val('');
    $("#feedbackType").val('');
    $("#fromDate").removeAttr('readonly');
    $("#toDate").removeAttr('readonly');
    $("#feedbackType").removeAttr('readonly');
    $(".smart-Wizard").hide();
});