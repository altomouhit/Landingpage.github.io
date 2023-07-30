//FAQ Button
// $(".smart-Wizard").hide();
// $("#createNew").click(function() {
// 	$(".smart-Wizard").show();
// });
function lookUpFn() {
    if ($.trim($("#form1Submit").text()) == "Update") {
        lookUpEdit.remove().draw();
        $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var lookUp_object = {};
    var Lookuptxt = $("#Lookuptxt").val();

    var slaStatus = $("#slaStatus option:selected").text();
	var slaStatus_val = $("#slaStatus option:selected").val();

    lookUp_object.Lookuptxt_En = Lookuptxt;

    lookUp_object.Cstatus = slaStatus;
    lookUp_object.Cstatus_val = slaStatus_val;

    var lookUpTable = $('#lookUpTable').DataTable();
    lookUpTable.row.add(lookUp_object).draw();

    $("#Lookuptxt").val('');
    $("#slaStatus").val('');
}
//edit lookUpFn details
function lookUpEditFunction(data1) {
    //$(".smart-Wizard").show();
    var data = data1.data();
    $("#form1Submit").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#Lookuptxt").val(data.Lookuptxt_En);
    $("#slaStatus").val(data.Cstatus_val);
}
//View lookUpFn details
function lookUpViewFunction(data1) {
    var data = data1.data();
    $("#Lookuptxt").val(data.Lookuptxt_En);
    $("#slaStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#lookUpTable tbody').on('click', '#viewDetails', function() {
        var lookUpTable = $('#lookUpTable').DataTable();
        var data = lookUpTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#Lookuptxt').attr('readonly', true);
        $("#slaStatus").prop('disabled', true);
        lookUpViewFunction(data);
    });
    $('#lookUpTable tbody').on('click', '#editDetails', function() {
        var table = $('#lookUpTable').DataTable();
        lookUpEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        lookUpEditFunction(data);
    });
    $('#lookUpTable tbody').on('click', '#removeDetails', function() {
        var table = $('#lookUpTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "Lookuptxt_En", sTitle: "Lookup", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" 
          //  + "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" 
        }
    ];
    var lookUpTable = $('#lookUpTable').DataTable({
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
	$('#lookUp').keyup(function() {
		lookUpTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	lookUpTable.columns().iterator('column', function(ctx, idx) {
		$(lookUpTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="lookUpTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	lookUpTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#Lookuptxt").val('');
    $('#Lookuptxt').removeAttr('readonly');
    $("#slaStatus").prop('disabled', false);
    //$(".smart-Wizard").hide();
});