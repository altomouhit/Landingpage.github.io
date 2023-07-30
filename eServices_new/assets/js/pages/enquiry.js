$(document).ready(function() {
    bsCustomFileInput.init()
});
//FAQ Button
function enquiryFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var enquiry_object = {};
    var enquiryName = $("#enquiryName").val();

    enquiry_object.enquiry_Name = enquiryName;

    var enquiryTable = $('#enquiryTable').DataTable();
    enquiryTable.row.add(enquiry_object).draw();


    $("#enquiryName").val('');
}
//edit enquiryFn details
function adveditfunction(data1) {
    var data = data1.data();
    $("#form1Submit").text("Update");
    $("#enquiryName").val(data.enquiry_Name);
}
//View enquiryFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#enquiryName").val(data.enquiry_Name);
}
//Add FAQ
$(document).ready(function() {
    $('#enquiryTable tbody').on('click', '#viewDetails', function() {
        var enquiryTable = $('#enquiryTable').DataTable();
        var data = enquiryTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#enquiryName').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#enquiryTable tbody').on('click', '#editDetails', function() {
        var table = $('#enquiryTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#enquiryTable tbody').on('click', '#removeDetails', function() {
        var table = $('#enquiryTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var comp_cols = [
        { "mDataProp": "enquiry_Name", sTitle: "Enquiry Name", sType: "string" },
        { "mDataProp": "", sTitle: "Enquiry Files", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var enquiryTable = $('#enquiryTable').DataTable({
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
	$('#ticketSearchBox').keyup(function() {
		enquiryTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	enquiryTable.columns().iterator('column', function(ctx, idx) {
		$(enquiryTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="enquiryTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	enquiryTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#cancelid").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#enquiryName").val('');
    $('#enquiryName').removeAttr('readonly');
});