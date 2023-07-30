//FAQ Button
$(".smart-Wizard-stn").hide();
$("#stnNew").click(function() {
	$(".smart-Wizard-stn").show();
});
function stNameFn() {
    if ($.trim($("#stnbtn").text()) == "Update") {
        stnEdit.remove().draw();
        $("#stnbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save");
    }
    var stn_object = {};

    var regionIDStn = $("#regionIDStn option:selected").text();
	var regionIDStn_Val = $("#regionIDStn option:selected").val();

    var incidentLocation = $("#incidentLocation option:selected").text();
	var incidentLocation_val = $("#incidentLocation option:selected").val();

    var stationNametxt = $("#stationNametxt").val();

    var stnStatus = $("#stnStatus option:selected").text();
	var stnStatus_val = $("#stnStatus option:selected").val();

    stn_object.DregionIDStn = regionIDStn;
    stn_object.DregionIDStn_Val = regionIDStn_Val;

    stn_object.DincidentLocation = incidentLocation;
    stn_object.DincidentLocation_val = incidentLocation_val;

    stn_object.stationNametxt_En = stationNametxt;

    stn_object.Cstatus = stnStatus;
    stn_object.Cstatus_val = stnStatus_val;

    var stNameTable = $('#stNameTable').DataTable();
    stNameTable.row.add(stn_object).draw();

    $("#regionIDStn").val('');
    $("#incidentLocation").val('');
    $("#stationNametxt").val('');
    $("#stnStatus").val('');
}
//edit stNameFn details
function stnEditFunction(data1) {
    $(".smart-Wizard-stn").show();
    var data = data1.data();
    $("#stnbtn").html("<i class='fal fa-check'></i>&nbsp; Update");
    $("#regionIDStn").val(data.DregionIDStn_Val).trigger('change');;
    $("#incidentLocation").val(data.DincidentLocation_val);
    $("#stationNametxt").val(data.stationNametxt_En);
    $("#stnStatus").val(data.Cstatus_val);
}
//View stNameFn details
function stnViewFunction(data1) {
    var data = data1.data();
    $("#regionIDStn").val(data.DregionIDStn_Val);
    $("#incidentLocation").val(data.DincidentLocation_val);
    $("#stationNametxt").val(data.stationNametxt_En);
    $("#stnStatus").val(data.Cstatus_val);
}
//Add FAQ
$(document).ready(function() {
    $('#stNameTable tbody').on('click', '#viewDetails', function() {
        var stNameTable = $('#stNameTable').DataTable();
        var data = stNameTable.row($(this).parents('tr'));
        $("#stnbtn").hide();
        $("#FAQClear").show();
        $('#stationNametxt').attr('readonly', true);
        $("#stnStatus, #regionIDStn, #incidentLocation").prop('disabled', true);
        stnViewFunction(data);
    });
    $('#stNameTable tbody').on('click', '#editDetails', function() {
        var table = $('#stNameTable').DataTable();
        stnEdit = table.row($(this).parents('tr'));
        var data = table.row($(this).parents('tr'));
        stnEditFunction(data);
    });
    $('#stNameTable tbody').on('click', '#removeDetails', function() {
        var table = $('#stNameTable').DataTable();
        table.row($(this).parents('tr')).remove().draw();
    });
    var stn_cols = [
        { "mDataProp": "DregionIDStn", sTitle: "Governorate", sType: "string" }, 
        { "mDataProp": "DincidentLocation", sTitle: "Call Sub Category", sType: "string" }, 
        { "mDataProp": "stationNametxt_En", sTitle: "Station Name", sType: "string" }, 
        { "mDataProp": "Cstatus", sTitle: "Status", sType: "string", sWidth: "10%", }, 
        { "mDataProp": "Actions", sTitle: "Action", sWidth: "10%", sType: "string", "defaultContent": 
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;" + 
            "<button type='button' id = 'removeDetails' class='delete-icon'><i class='fal fa-trash'></i></button>" }
    ];
    var stNameTable = $('#stNameTable').DataTable({
		processing: true,
		//serverSide: true,
		//"aoColumns": stn_cols,
		"ajax": "assets/js/stationName.txt",
        "columns": [
            { "data": "DregionIDStn" },
            { "data": "DregionIDStn_Val" },
            { "data": "DincidentLocation"},
            { "data": "DincidentLocation_val"},
            { "data": "stationNametxt_En" },
            { "data": "Cstatus" },
            { "data": "Cstatus_val"},
            { "data": "Actions", "orderable": false, "defaultContent":
            "<button type='button' id = 'viewDetails' class='edit-icon'><i class='fal fa-eye'></i></button>&nbsp;&nbsp;" +
            "<button type='button' id = 'editDetails' class='edit-icon'><i class='fal fa-edit'></i></button>&nbsp;&nbsp;"  }],
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
	$('#stnSearch').keyup(function() {
		stNameTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	stNameTable.columns().iterator('column', function(ctx, idx) {
		$(stNameTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="stNameTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	stNameTable.page.len(sessionStorage.getItem("selectedLength")).draw();
});
$("#stnCancelid").click(function() {
    $("#stnbtn").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#stationNametxt").val('');
    $('#stationNametxt').removeAttr('readonly');
    $("#stnStatus, #regionIDStn, #incidentLocation").prop('disabled', false);
    $(".smart-Wizard-stn").hide();
});
$(document).ready(function() {
	$('#regionIDStn').on('change', function() {
        //alert($(this).find(":selected").val());
        $('#incidentLocation').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
        //$('#incidentLocation').multiselect('refresh');
        var storedata;
        if ($(this).find(":selected").val() == "1") {
            //alert("1");
            storedata = [{
                value: '1',
                text: 'Muscat'
            }, {
                value: '2',
                text: 'Bosher'

            }, {
                value: '3',
                text: 'Qurayyat'
            }, {
                value: '4',
                text: 'Seeb'

            }, {
                value: '5',
                text: 'Al-Amirat'

            }, {
                value: '6',
                text: 'Muttarah'

            }];
            $.each(storedata, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "2") {
            //alert("2");
            storedata = [{
                value: '7',
                text: 'Al-Rustaq'
            }, {
                value: '8',
                text: 'Al-Awabi'
            }, {
                value: '9',
                text: 'AL-Mansna'
            }, {
                value: '10',
                text: 'Barka'
            }, {
                value: '11',
                text: 'Nakahl'
            }, {
                value: '12',
                text: 'Wadi Al-Muwawal'
            }];
            $.each(storedata, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "3") {
            //alert("3");
            storedata = [{
                value: '13',
                text: 'Al-Khaboura'
            }, {
                value: '14',
                text: 'Al-Suwaiq'
            }, {
                value: '15',
                text: 'Lewa'
            }, {
                value: '16',
                text: 'Saham'
            }, {
                value: '17',
                text: 'Shinas'
            }, {
                value: '18',
                text: 'Sohar'
            }];
            $.each(storedata, function(index, value) {
                $('#incidentLocation').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } 
    });
});