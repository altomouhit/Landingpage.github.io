//FAQ Button
$(".smart-Wizard-Gov").hide();
$("#createNew").click(function() {
	$(".smart-Wizard-Gov").show();
});
function governorateFn() {
    if ($.trim($("#form1Submit").text()) == "Update") {
        governorateEdit.remove().draw();
        $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var governorate_object = {};
    var governoratetxt = $("#governoratetxt").val();

    var slaStatus = $("#slaStatus option:selected").text();
	var slaStatus_val = $("#slaStatus option:selected").val();

    governorate_object.governoratetxt_En = governoratetxt;

    governorate_object.Cstatus = slaStatus;
    governorate_object.Cstatus_val = slaStatus_val;

    var governorateTable = $('#governorateTable').DataTable();
    governorateTable.row.add(governorate_object).draw();

    $("#governoratetxt").val('');
    $("#slaStatus").val('');
}
//edit governorateFn details
function governorateEditFunction(data1) {
    $(".smart-Wizard-Gov").show();
    var data = data1.data();
    $("#form1Submit").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#governoratetxt").val(data.governoratetxt_En);
    $("#slaStatus").val(data.Cstatus_val);
}
//View governorateFn details
function governorateViewFunction(data1) {
    $(".smart-Wizard-Gov").show();
    var data = data1.data();
    $("#governoratetxt").val(data.governoratetxt_En);
    $("#slaStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#governorateTable tbody').on('click', '#governorateViewBtn', function() {
        var governorateTable = $('#governorateTable').DataTable();
        var data = governorateTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#governoratetxt').attr('readonly', true);
        $("#slaStatus").prop('disabled', true);
        governorateViewFunction(data);
    });
    $('#governorateTable tbody').on('click', '#governorateEditBtn', function() {
        var table = $('#governorateTable').DataTable();
        governorateEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        governorateEditFunction(data);
    });
    $('#governorateTable tbody').on('click', '#governorateDelBtn', function() {
        var table = $('#governorateTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var governorate_cols = [
        { "mDataProp": "governoratetxt_En", sTitle: "Governorate", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'governorateViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'governorateEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" } 
            //+ "<button type='button' id = 'governorateDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var governorateTable = $('#governorateTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": governorate_cols,
        "ajax": "assets/js/governorate.txt",
        "columns": [
            { "data": "governoratetxt_En" },
            { "data": "Cstatus" },
            { "data": "Cstatus_val"},
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'governorateViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'governorateEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;"  }],
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			//"orderable": false,
            "visible": false,
			"targets": [2]
		}],
		"order": [[0, 'asc']]
	});
	$('#governorateSearch').keyup(function() {
		governorateTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	governorateTable.columns().iterator('column', function(ctx, idx) {
		$(governorateTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="governorateTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	governorateTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#governoratetxt").val('');
    $('#governoratetxt').removeAttr('readonly');
    $("#slaStatus").prop('disabled', false);
    $(".smart-Wizard-Gov").hide();
});