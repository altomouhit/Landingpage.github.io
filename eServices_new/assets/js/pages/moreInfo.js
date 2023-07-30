//FAQ Button
function fieldFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var field_object = {};

    var compType = $("#compType option:selected").text();
	var compType_val = $("#compType option:selected").val();

    var fieldType = $("#fieldType option:selected").text();
	var fieldType_val = $("#fieldType option:selected").val();

    var mandatory = $("#mandatory option:selected").text();
	var mandatory_val = $("#mandatory option:selected").val();
    
    var fieldEn = $("#fieldEn").val();
    var fieldAr = $("#fieldAr").val();
    var fieldName = $("#fieldName").val();


    field_object.dcompType = compType;
    field_object.dcompType_val = compType_val;

    field_object.dfieldType = fieldType;
    field_object.dfieldType_val = fieldType_val;

    field_object.dmandatory = mandatory;
    field_object.dmandatory_val = mandatory_val;

    field_object.dfieldEn = fieldEn;
    field_object.dfieldAr = fieldAr;
    field_object.dfieldName = fieldName;


    var fieldTable = $('#fieldTable').DataTable();
    fieldTable.row.add(field_object).draw();

    $("#fieldEn").val('');
    $("#fieldAr").val('');
    $("#fieldName").val('');
    $("#compType").val('');
    $("#fieldType").val('');
    $("#mandatory").val('');
}
//edit fieldFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#fieldEn").val(data.dfieldEn);
    $("#fieldAr").val(data.dfieldAr);
    $("#fieldName").val(data.dfieldName);
    $("#compType").val(data.dcompType_val);
    $("#fieldType").val(data.dfieldType_val);
    $("#mandatory").val(data.dmandatory_val);
}
//View fieldFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#fieldEn").val(data.dfieldEn);
    $("#fieldAr").val(data.dfieldAr);
    $("#fieldName").val(data.dfieldName);
    $("#compType").val(data.dcompType_val);
    $("#fieldType").val(data.dfieldType_val);
    $("#mandatory").val(data.dmandatory_val);
}
//Add FAQ
$(document).ready(function() {
    $('#fieldTable tbody').on('click', '#viewDetails', function() {
        var fieldTable = $('#fieldTable').DataTable();
        var data = fieldTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $("#fieldEn").attr('readonly', true);
        $("#fieldAr").attr('readonly', true);
        $("#fieldName").attr('readonly', true);
        $("#fieldType").attr('readonly', true);
        $('#mandatory').attr('readonly', true);
        $('#compType').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#fieldTable tbody').on('click', '#editDetails', function() {
        var table = $('#fieldTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#fieldTable tbody').on('click', '#removeDetails', function() {
        var table = $('#fieldTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "dcompType", sTitle: "Complaint Type", sType: "string" },
        { "mDataProp": "dfieldType", sTitle: "Field Type", sType: "string" }, 
        { "mDataProp": "dfieldName", sTitle: "Field Name", sType: "string" }, 
        { "mDataProp": "dfieldEn", sTitle: "Field Label(En)", sType: "string" }, 
        { "mDataProp": "dfieldAr", sTitle: "Field Label(Ar)", sType: "string" }, 
        { "mDataProp": "dmandatory", sTitle: "Mandatory", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var fieldTable = $('#fieldTable').DataTable({
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
		fieldTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	fieldTable.columns().iterator('column', function(ctx, idx) {
		$(fieldTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="fieldTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	fieldTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#fieldEn").val('');
    $("#fieldAr").val('');
    $("#fieldName").val('');
    $("#fieldType").val('');
    $("#mandatory").val('');
    $("#compType").val('');
    $("#fieldEn").removeAttr('readonly');
    $("#fieldAr").removeAttr('readonly');
    $("#fieldName").removeAttr('readonly');
    $("#fieldType").removeAttr('readonly');
    $('#mandatory').removeAttr('readonly');
    $('#compType').removeAttr('readonly');
});