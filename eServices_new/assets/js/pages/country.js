//FAQ Button
function countryNameFn() {
    if ($("#form1Submit").text() == "Update") {
        FAQedit.remove().draw();
        $("#form1Submit").text("Save");
    }
    var country_object = {};
    var countryNameEn = $("#countryNameEn").val();
    var countryNameAr = $("#countryNameAr").val();

    country_object.dcountryNameEn = countryNameEn;
    country_object.dcountryNameAr = countryNameAr;

    var countryNameTable = $('#countryNameTable').DataTable();
    countryNameTable.row.add(country_object).draw();

    $("#countryNameEn").val('');
    $("#countryNameAr").val('');
}
//edit countryNameFn details
function adveditfunction(data) {
    var data = data.data();
    $("#form1Submit").text("Update");
    $("#countryNameEn").val(data.dcountryNameEn);
    $("#countryNameAr").val(data.dcountryNameAr);
}
//View countryNameFn details
function Faqviewfunction(data1) {
    var data = data1.data();
    $("#countryNameEn").val(data.dcountryNameEn);
    $("#countryNameAr").val(data.dcountryNameAr);
}
//Add FAQ
$(document).ready(function() {
    $('#countryNameTable tbody').on('click', '#viewDetails', function() {
        var countryNameTable = $('#countryNameTable').DataTable();
        var data = countryNameTable.row($(this).parents('tr'));
        $("#form1Submit").hide();
        $("#FAQClear").show();
        $('#countryNameEn').attr('readonly', true);
        $('#countryNameAr').attr('readonly', true);
        Faqviewfunction(data);
    });
    $('#countryNameTable tbody').on('click', '#editDetails', function() {
        var table = $('#countryNameTable').DataTable();
        FAQedit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        adveditfunction(data);
    });
    $('#countryNameTable tbody').on('click', '#removeDetails', function() {
        var table = $('#countryNameTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var country_cols = [
        { "mDataProp": "dcountryNameEn", sTitle: "Country Name(En)", sType: "string" }, 
        { "mDataProp": "dcountryNameAr", sTitle: "Country Name(Ar)", sType: "string" },
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "11%", 
            sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var countryNameTable = $('#countryNameTable').DataTable({
		processing: true,
		//serverSide: true,
		"aoColumns": country_cols,
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
		countryNameTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	countryNameTable.columns().iterator('column', function(ctx, idx) {
		$(countryNameTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="countryNameTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	countryNameTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#FAQClear").click(function() {
    $("#form1Submit").show();
    $("#FAQClear").hide();
    $("#countryNameEn").val('');
    $("#countryNameAr").val('');
    $('#countryNameEn').removeAttr('readonly');
    $('#countryNameAr').removeAttr('readonly');
});