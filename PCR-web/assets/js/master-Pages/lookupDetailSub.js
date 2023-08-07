//FAQ Button
$(".smart-Wizard-Category").hide();
$("#lookupDetailSubNew").click(function() {
	$(".smart-Wizard-Category").show();
});
function lookupDetailSubFn() {
    if ($.trim($("#lookupDetailSub_Btn").text()) == "Update") {
        lookupDetailSubEdit.remove().draw();
        $("#lookupDetailSub_Btn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var lookupDetailSub_object = {};

    var lookUpSel = $("#lookUpSel option:selected").text();
	var lookUpSel_Val = $("#lookUpSel option:selected").val();

    var lookupDetailSel = $("#lookupDetailSel option:selected").text();
	var lookupDetailSel_val = $("#lookupDetailSel option:selected").val();

    var lookupDetailSubtxt = $("#lookupDetailSubtxt").val();

    var lookupDetailSubStatus = $("#lookupDetailSubStatus option:selected").text();
	var lookupDetailSubStatus_val = $("#lookupDetailSubStatus option:selected").val();

    lookupDetailSub_object.DlookUpSel = lookUpSel;
    lookupDetailSub_object.DlookUpSel_Val = lookUpSel_Val;

    lookupDetailSub_object.DlookupDetailSel = lookupDetailSel;
    lookupDetailSub_object.DlookupDetailSel_val = lookupDetailSel_val;

    lookupDetailSub_object.lookupDetailSubtxt_En = lookupDetailSubtxt;

    lookupDetailSub_object.Cstatus = lookupDetailSubStatus;
    lookupDetailSub_object.Cstatus_val = lookupDetailSubStatus_val;

    var lookupDetailSubTable = $('#lookupDetailSubTable').DataTable();
    lookupDetailSubTable.row.add(lookupDetailSub_object).draw();

    $("#lookUpSel option:selected").prop("selected", false);
    $('#lookUpSel').multiselect('refresh');
    // $("#lookupDetailSel option:selected").prop("selected", false);
    // $('#lookupDetailSel').multiselect('refresh');
    $('#lookupDetailSel').val('');
    $("#lookupDetailSubtxt").val('');
    $("#lookupDetailSubStatus").val('');
}
//edit lookupDetailSubFn details
function lookupDetailSubEditFunction(data1) {
    $(".smart-Wizard-Category").show();
    var data = data1.data();
    $("#lookupDetailSub_Btn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#lookUpSel").val(data.DlookUpSel_Val).multiselect('refresh');
    $("#lookUpSel").trigger('change');
    $("#lookupDetailSel").val(data.DlookupDetailSel_val);
    $("#lookupDetailSubtxt").val(data.lookupDetailSubtxt_En);
    $("#lookupDetailSubStatus").val(data.Cstatus_val);
}
//View lookupDetailSubFn details
function lookupDetailSubViewFunction(data1) {
    $(".smart-Wizard-Category").show();
    var data = data1.data();
    $("#lookUpSel").val(data.DlookUpSel_Val).multiselect('refresh');
    $("#lookUpSel").trigger('change');
    $("#lookupDetailSel").val(data.DlookupDetailSel_val);
    $("#lookupDetailSubtxt").val(data.lookupDetailSubtxt_En);
    $("#lookupDetailSubStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#lookupDetailSubTable tbody').on('click', '#lookupDetailSubViewBtn', function() {
        var lookupDetailSubTable = $('#lookupDetailSubTable').DataTable();
        var data = lookupDetailSubTable.row($(this).parents('tr'));
        $("#lookupDetailSub_Btn").hide();
        $("#FAQClear").show();
        $('#lookupDetailSubtxt').attr('readonly', true);
        $("#lookupDetailSubStatus, #lookUpSel, #lookupDetailSel").prop('disabled', true);
        lookupDetailSubViewFunction(data);
    });
    $('#lookupDetailSubTable tbody').on('click', '#lookupDetailSubEditBtn', function() {
        var table = $('#lookupDetailSubTable').DataTable();
        lookupDetailSubEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        lookupDetailSubEditFunction(data);
    });
    $('#lookupDetailSubTable tbody').on('click', '#lookupDetailSubDelBtn', function() {
        var table = $('#lookupDetailSubTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var lookupDetailSub_cols = [
        { "mDataProp": "DlookUpSel", sTitle: "Lookup", sType: "string" }, 
        { "mDataProp": "DlookupDetailSel", sTitle: "Lookup Detail", sType: "string" }, 
        { "mDataProp": "lookupDetailSubtxt_En", sTitle: "Lookup Detail category", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'lookupDetailSubViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'lookupDetailSubEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" 
            //+ "<button type='button' id = 'lookupDetailSubDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" 
        }
    ];
    var lookupDetailSubTable = $('#lookupDetailSubTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": lookupDetailSub_cols,
        "ajax": "assets/js/json/lookupDetailSub.json",
        "columns": [
            { "data": "DlookUpSel" },
            { "data": "DlookUpSel_Val" },
            { "data": "DlookupDetailSel" },
            { "data": "DlookupDetailSel_val" },
            { "data": "lookupDetailSubtxt_En"},
            { "data": "Cstatus" },
            { "data": "Cstatus_val" },
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'lookupDetailSubViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'lookupDetailSubEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }],
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			//"orderable": false,
            "visible": false,
			"targets": [1, 3, 6]
		}],
		"order": [[0, 'asc']]
	});
	$('#lookupDetailSubSearch').keyup(function() {
		lookupDetailSubTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	lookupDetailSubTable.columns().iterator('column', function(ctx, idx) {
		$(lookupDetailSubTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="lookupDetailSubTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	lookupDetailSubTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#lookupDetailSubid").click(function() {
    $("#lookupDetailSub_Btn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#lookupDetailSubtxt").val('');
    $('#lookupDetailSubtxt').removeAttr('readonly');
    $("#lookupDetailSubStatus, #lookUpSel, #lookupDetailSel").prop('disabled', false);
    $(".smart-Wizard-Category").hide();
});
$(document).ready(function() {
	$('#lookUpSel').on('change', function() {
        //alert($(this).find(":selected").val());
        $('#lookupDetailSel').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
        //$('#lookupDetailSel').multiselect('refresh');
        var storedata;
        if ($(this).find(":selected").val() == "1") {
            //alert("1");
            storedata = [{
                value: '1',
                text: 'Trauma'
            }, {
                value: '2',
                text: 'Medical'
            }];
            $.each(storedata, function(index, value) {
                $('#lookupDetailSel').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
                
            });
        } else if ($(this).find(":selected").val() == "2") {
            //alert("2");
            storedata = [{
                value: '3',
                text: 'Adverse Roud Condition'
            }, {
                value: '4',
                text: 'Adverse Weather'
            }, {
                value: '5',
                text: 'Crowd Control'
            }, {
                value: '6',
                text: 'Hazardous Material'
            }, {
                value: '7',
                text: 'Language Barrier'
            }, {
                value: '8',
                text: 'Obstetrics / Gynecology'
            }, {
                value: '9',
                text: 'Prolonged Extrication'
            }, {
                value: '10',
                text: 'Unsafe Scene'
            }, {
                value: '11',
                text: 'Vehicle Problems'
            }, {
                value: '12',
                text: 'Not Applicable'
            }, {
                value: '13',
                text: 'Directions'
            }, {
                value: '14',
                text: 'Ambulance Crash'
            }, {
                value: '15',
                text: 'Ambulance Failure'
            }, {
                value: '16',
                text: 'Distance'
            }, {
                value: '17',
                text: 'Diversion'
            }, {
                value: '18',
                text: 'Others'
            }, {
                value: '19',
                text: 'None'
            }];
            $.each(storedata, function(index, value) {
                $('#lookupDetailSel').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "3") {
            //alert("1");
            storedata = [{
                value: '20',
                text: 'Male'
            }, {
                value: '21',
                text: 'Female'
            }];
            $.each(storedata, function(index, value) {
                $('#lookupDetailSel').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } 
    });
});