//FAQ Button
$(".smart-Wizard").hide();
$("#createNew").click(function() {
	$(".smart-Wizard").show();
});
function compFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var comp_object = {};
    var complaintTypeEn = $("#complaintTypeEn").val();
    var complaintTypeAr = $("#complaintTypeAr").val();

    comp_object.complaintType_En = complaintTypeEn;
    comp_object.complaintType_Ar = complaintTypeAr;

    var complaintTable = $('#complaintTable').DataTable();
    complaintTable.row.add(comp_object).draw();

    $("#complaintTypeEn").val('');
    $("#complaintTypeAr").val('');
}
//edit compFn details
function adveditfunction(data1) {
    $(".smart-Wizard").show();
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#complaintTypeEn").val(data.complaintType_En);
    $("#complaintType_Ar").val(data.complaintType_Ar);
}
//View compFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#complaintTypeEn").val(data.complaintType_En);
    $("#complaintType_Ar").val(data.complaintType_Ar);
}
//Add FAQ
$(document).ready(function() {
    $('#complaintTable tbody').on('click', '#viewDetails', function() {
        var complaintTable = $('#complaintTable').DataTable();
        var data = complaintTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#complaintTypeEn').attr('readonly', true);
        $('#complaintType_Ar').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#complaintTable tbody').on('click', '#editDetails', function() {
        var table = $('#complaintTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#complaintTable tbody').on('click', '#removeDetails', function() {
        var table = $('#complaintTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "complaintType_En", sTitle: "Complaint Type(En)", sType: "string" }, 
        { "mDataProp": "complaintType_Ar", sTitle: "Complaint Type (Ar)", sType: "string" }, 
        { "mDataProp": "", sTitle: "Complaint Category", sType: "string" }, 
        { "mDataProp": "", sTitle: "Status", sType: "string" }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var complaintTable = $('#complaintTable').DataTable({
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
	$('#compTypeSearch').keyup(function() {
		complaintTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	complaintTable.columns().iterator('column', function(ctx, idx) {
		$(complaintTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="complaintTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	complaintTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#complaintTypeEn").val('');
    $("#complaintType_Ar").val('');
    $('#complaintTypeEn').removeAttr('readonly');
    $('#complaintType_Ar').removeAttr('readonly');
    $(".smart-Wizard").hide();
});