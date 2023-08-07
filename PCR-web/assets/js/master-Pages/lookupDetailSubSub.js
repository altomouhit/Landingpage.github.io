//FAQ Button
$(".smart-Wizard-subCategory").hide();
$("#lookupDetailSubSNew").click(function() {
	$(".smart-Wizard-subCategory").show();
});
function lookupDetailSubSubFn() {
    if ($.trim($("#lookupDetailSubSub_btn").text()) == "Update") {
        SubSubEdit.remove().draw();
        $("#lookupDetailSubSub_btn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var lookupDetailSubSub_object = {};

    var lookUpSelSub = $("#lookUpSelSub option:selected").text();
	var lookUpSelSub_Val = $("#lookUpSelSub option:selected").val();

    var lookupDetailSub_Sel = $("#lookupDetailSub_Sel option:selected").text();
	var lookupDetailSub_Sel_val = $("#lookupDetailSub_Sel option:selected").val();

    var lookupDetailSubsel = $("#lookupDetailSubsel option:selected").text();
	var lookupDetailSubsel_val = $("#lookupDetailSubsel option:selected").val();

    var lookupDetailSubStxt = $("#lookupDetailSubStxt").val();

    var lookupDetailSubSubStatus = $("#lookupDetailSubSubStatus option:selected").text();
	var lookupDetailSubSubStatus_val = $("#lookupDetailSubSubStatus option:selected").val();

    lookupDetailSubSub_object.DlookUpSelSub = lookUpSelSub;
    lookupDetailSubSub_object.DlookUpSelSub_Val = lookUpSelSub_Val;

    lookupDetailSubSub_object.DlookupDetailSub_Sel = lookupDetailSub_Sel;
    lookupDetailSubSub_object.DlookupDetailSub_Sel_val = lookupDetailSub_Sel_val;

    lookupDetailSubSub_object.DlookupDetailSubsel = lookupDetailSubsel;
    lookupDetailSubSub_object.DlookupDetailSubsel_val = lookupDetailSubsel_val;

    lookupDetailSubSub_object.lookupDetailSubStxt_En = lookupDetailSubStxt;

    lookupDetailSubSub_object.Cstatus = lookupDetailSubSubStatus;
    lookupDetailSubSub_object.Cstatus_val = lookupDetailSubSubStatus_val;

    var lookupDetailSubSubTable = $('#lookupDetailSubSubTable').DataTable();
    lookupDetailSubSubTable.row.add(lookupDetailSubSub_object).draw();

    $("#lookUpSelSub").val('');
    $("#lookupDetailSub_Sel").val('');
    $("#lookupDetailSubsel").val('');
    $("#lookupDetailSubStxt").val('');
    $("#lookupDetailSubSubStatus").val('');
}
//edit lookupDetailSubSubFn details
function SubSubEditFunction(data1) {
    $(".smart-Wizard-subCategory").show();
    var data = data1.data();
    $("#lookupDetailSubSub_btn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#lookUpSelSub").val(data.DlookUpSelSub_Val);
    $("#lookUpSelSub").trigger('change');
    $("#lookupDetailSub_Sel").val(data.DlookupDetailSub_Sel_val);
    $("#lookupDetailSub_Sel").trigger('change');
    $("#lookupDetailSubsel").val(data.DlookupDetailSubsel_val);
    $("#lookupDetailSubStxt").val(data.lookupDetailSubStxt_En);
    $("#lookupDetailSubSubStatus").val(data.Cstatus_val);
}
//View lookupDetailSubSubFn details
function SubSubViewFunction(data1) {
    $(".smart-Wizard-subCategory").show();
    var data = data1.data();
    $("#lookUpSelSub").val(data.DlookUpSelSub_Val);
    $("#lookUpSelSub").trigger('change');
    $("#lookupDetailSub_Sel").val(data.DlookupDetailSub_Sel_val);
    $("#lookupDetailSub_Sel").trigger('change');
    $("#lookupDetailSubsel").val(data.DlookupDetailSubsel_val);
    $("#lookupDetailSubStxt").val(data.lookupDetailSubStxt_En);
    $("#lookupDetailSubSubStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#lookupDetailSubSubTable tbody').on('click', '#SubSubViewBtn', function() {
        var lookupDetailSubSubTable = $('#lookupDetailSubSubTable').DataTable();
        var data = lookupDetailSubSubTable.row($(this).parents('tr'));
        $("#lookupDetailSubSub_btn").hide();
        $("#FAQClear").show();
        $('#lookupDetailSubStxt').attr('readonly', true);
        $("#lookUpSelSub, #lookupDetailSub_Sel, #lookupDetailSubsel, #lookupDetailSubSubStatus").prop('disabled', true);
        SubSubViewFunction(data);
    });
    $('#lookupDetailSubSubTable tbody').on('click', '#SubSubEditBtn', function() {
        var table = $('#lookupDetailSubSubTable').DataTable();
        SubSubEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        SubSubEditFunction(data);
    });
    $('#lookupDetailSubSubTable tbody').on('click', '#SubSubDelBtn', function() {
        var table = $('#lookupDetailSubSubTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var SubSub_cols = [
        { "mDataProp": "DlookUpSelSub", sTitle: "Lookup", sType: "string" }, 
        { "mDataProp": "DlookupDetailSub_Sel", sTitle: "Lookup Detail", sType: "string" }, 
        { "mDataProp": "DlookupDetailSubsel", sTitle: "Lookup Detail category", sType: "string" }, 
        { "mDataProp": "lookupDetailSubStxt_En", sTitle: "Detail Subcategory Description", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'SubSubViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'SubSubEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" 
            //+"<button type='button' id = 'SubSubDelBtn' class='delete-icon'><i class='fal fa-trash'></i></button>" 
        }
    ];
    var lookupDetailSubSubTable = $('#lookupDetailSubSubTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": SubSub_cols,
        "ajax": "assets/js/json/lookupDetailSubSub.json",
        "columns": [
            { "data": "DlookUpSelSub" },
            { "data": "DlookUpSelSub_Val" },
            { "data": "DlookupDetailSub_Sel" },
            { "data": "DlookupDetailSub_Sel_val" },
            { "data": "DlookupDetailSubsel"},
            { "data": "DlookupDetailSubsel_val"},
            { "data": "lookupDetailSubStxt_En"},
            { "data": "Cstatus" },
            { "data": "Cstatus_val" },
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'SubSubViewBtn' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'SubSubEditBtn' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" }],
		"destroy": true,
		"dom": '<"top"f>rt<"bottom"ilp>',
		"columnDefs": [{
			"searchable": false,
			//"orderable": false,
            "visible": false,
			"targets": [1, 3, 5, 8]
		}],
		"order": [[0, 'asc']]
	});
	$('#lookupDetailSubsSearch').keyup(function() {
		lookupDetailSubSubTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	lookupDetailSubSubTable.columns().iterator('column', function(ctx, idx) {
		$(lookupDetailSubSubTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="lookupDetailSubSubTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	lookupDetailSubSubTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#lookupDetailSubCancelId").click(function() {
    $("#lookupDetailSubSub_btn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#lookupDetailSubStxt").val('');
    $('#lookupDetailSubStxt').removeAttr('readonly');
    $("#lookUpSelSub, #lookupDetailSub_Sel, #lookupDetailSubsel, #lookupDetailSubSubStatus").prop('disabled', false);
    $(".smart-Wizard-subCategory").hide();
});
$(document).ready(function() {
	$('#lookUpSelSub').on('change', function() {
        //alert($(this).find(":selected").val());
        $('#lookupDetailSub_Sel').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
        //$('#lookupDetailSub_Sel').trigger("chosen:updated");
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
                $('#lookupDetailSub_Sel').append($('<option>', {
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
                $('#lookupDetailSub_Sel').append($('<option>', {
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
                $('#lookupDetailSub_Sel').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } 
    });

    $('#lookupDetailSub_Sel').on('change', function() {
        //alert($(this).find(":selected").val());
        $('#lookupDetailSubsel').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
        //$('#lookupDetailSub_Sel').trigger("chosen:updated");
        var storedata;
        if ($(this).find(":selected").val() == "1") {
            //alert("1");
            storedata = [{
                value: '1',
                text: 'Assault'
            }, {
                value: '2',
                text: 'MVC'
            }, {
                value: '3',
                text: 'Drowning'
            }, {
                value: '4',
                text: 'Falls'
            }, {
                value: '5',
                text: 'Others injury'
            }, {
                value: '6',
                text: 'Other Transport Injury'
            }, {
                value: '7',
                text: 'Burn'
            }];
            $.each(storedata, function(index, value) {
                $('#lookupDetailSubsel').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "2") {
            //alert("2");
            storedata = [{
                value: '8',
                text: 'Respiratory'
            }, {
                value: '9',
                text: 'Cardiac / Chest Pain'
            }, {
                value: '10',
                text: 'Neurologic'
            }, {
                value: '11',
                text: 'Environmental'
            }, {
                value: '12',
                text: 'Other Medical'
            }, {
                value: '13',
                text: 'Poisoning / Drugs'
            }, {
                value: '14',
                text: 'Obstetrics / Gynecology'
            }];
            $.each(storedata, function(index, value) {
                $('#lookupDetailSubsel').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        }
    });
});