//FAQ Button
// $(".smart-Wizard").hide();
// $("#createNew").click(function() {
// 	$(".smart-Wizard").show();
// });
function factorsAffectingEMSFn() {
    if ($.trim($("#form1Submit").text()) == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var factorsAffectingEMS_object = {};
    var factorsAffectingEMStxt = $("#factorsAffectingEMStxt").val();

    var slaStatus = $("#slaStatus option:selected").text();
	var slaStatus_val = $("#slaStatus option:selected").val();

    factorsAffectingEMS_object.factorsAffectingEMStxt_En = factorsAffectingEMStxt;

    factorsAffectingEMS_object.Cstatus = slaStatus;
    factorsAffectingEMS_object.Cstatus_val = slaStatus_val;

    var factorsAffectingEMSTable = $('#factorsAffectingEMSTable').DataTable();
    factorsAffectingEMSTable.row.add(factorsAffectingEMS_object).draw();

    $("#factorsAffectingEMStxt").val('');
    $("#slaStatus").val('');
}
//edit factorsAffectingEMSFn details
function adveditfunction(data1) {
    //$(".smart-Wizard").show();
    var data = data1.data();
    $("#form1Submit").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#factorsAffectingEMStxt").val(data.factorsAffectingEMStxt_En);
    $("#slaStatus").val(data.Cstatus_val);
}
//View factorsAffectingEMSFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#factorsAffectingEMStxt").val(data.factorsAffectingEMStxt_En);
    $("#slaStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#factorsAffectingEMSTable tbody').on('click', '#viewDetails', function() {
        var factorsAffectingEMSTable = $('#factorsAffectingEMSTable').DataTable();
        var data = factorsAffectingEMSTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#factorsAffectingEMStxt').attr('readonly', true);
        $("#slaStatus").prop('disabled', true);
        Faqviewfunction(data);
    });
    $('#factorsAffectingEMSTable tbody').on('click', '#editDetails', function() {
        var table = $('#factorsAffectingEMSTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#factorsAffectingEMSTable tbody').on('click', '#removeDetails', function() {
        var table = $('#factorsAffectingEMSTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var factorsAffectingEMS_cols = [
        { "mDataProp": "factorsAffectingEMStxt_En", sTitle: "Factors Affecting EMS", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var factorsAffectingEMSTable = $('#factorsAffectingEMSTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": factorsAffectingEMS_cols,
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			"orderable": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#factorsAffectingEMSSearch').keyup(function() {
		factorsAffectingEMSTable.search($(this).val()).draw(); // this  is for customized search box with Datatable search feature.
	});
	factorsAffectingEMSTable.columns().iterator('column', function(ctx, idx) {
		$(factorsAffectingEMSTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="factorsAffectingEMSTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	factorsAffectingEMSTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#factorsAffectingEMStxt").val('');
    $('#factorsAffectingEMStxt').removeAttr('readonly');
    $("#slaStatus").prop('disabled', false);
    //$(".smart-Wizard").hide();
});