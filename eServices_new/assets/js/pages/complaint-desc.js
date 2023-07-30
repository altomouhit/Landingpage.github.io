//FAQ Button
function descFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var desc_object = {};

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var compCategory = $("#compCategory option:selected").text();
	var compCategory_val = $("#compCategory option:selected").val();
    
    var compDescEn = $("#compDescEn").val();
    var compDescAr = $("#compDescAr").val();


    desc_object.dcompType = compType;
    desc_object.dcompType_val = compType_val;

    desc_object.dcompCategory = compCategory;
    desc_object.dcompCategory_val = compCategory_val;

    desc_object.compDesc_En = compDescEn;
    desc_object.compDesc_Ar = compDescAr;


    var descTable = $('#descTable').DataTable();
    descTable.row.add(desc_object).draw();

    $("#compDescEn").val('');
    $("#compDescAr").val('');
    $("#compType").val('');
    $("#compCategory").val('');
}
//edit descFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#compDescEn").val(data.compDesc_En);
    $("#compDescAr").val(data.compDesc_Ar);
    $("#compType").val(data.dcompType_val);
    $("#compCategory").val(data.dcompCategory_val);
}
//View descFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#compDescEn").val(data.compDesc_En);
    $("#compDescAr").val(data.compDesc_Ar);
    $("#compType").val(data.dcompType_val);
    $("#compCategory").val(data.dcompCategory_val);
}
//Add FAQ
$(document).ready(function() {
    $('#descTable tbody').on('click', '#viewDetails', function() {
        var descTable = $('#descTable').DataTable();
        var data = descTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#compDescEn").attr('readonly', true);
        $('#compDescAr').attr('readonly', true);
        $('#compType').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#descTable tbody').on('click', '#editDetails', function() {
        var table = $('#descTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#descTable tbody').on('click', '#removeDetails', function() {
        var table = $('#descTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dcompType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dcompCategory", sTitle: "Complaint Category", sType: "string" }, 
        { "mDataProp": "compDesc_En", sTitle: "Complaint Description(En)", sType: "string" },
        { "mDataProp": "compDesc_Ar", sTitle: "Complaint Description(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var descTable = $('#descTable').DataTable({
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
		descTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	descTable.columns().iterator('column', function(ctx, idx) {
		$(descTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="descTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	descTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#compDescEn").val('');
    $("#compDescAr").val('');
    $("#compType").val('');
    $("#compDescEn").removeAttr('readonly');
    $('#compDescAr').removeAttr('readonly');
    $('#compType').removeAttr('readonly');
});