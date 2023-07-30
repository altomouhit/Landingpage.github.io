$(".smart-Wizard").hide();
$("#deviceMasterBtn").click(function() {
    $(".smart-Wizard").show();
});
$(document).ready(function() {
    var deviceStatusTable = $('#deviceStatusTable').DataTable({
        processing: true,
    //serverSide: true,
    "destroy": true,
    "dom": '<"top"f>rt<"bottom"ilp>',
    "columnDefs": [{
        "searchable": false,
        "orderable": false,
        "targets": [2]
    }],
    "order": [[0, 'asc']]
    });
    $('#deviceMasterSearch').keyup(function() {
		deviceStatusTable.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
	});
	deviceStatusTable.columns().iterator('column', function(ctx, idx) {
		$(deviceStatusTable.column(idx).header()).append('<span class="sort-icon"/>')
	});
	if (sessionStorage.getItem("selectedLength") < 20) {
		sessionStorage.setItem("selectedLength", 10);
	}
	$('select[name="deviceStatusTable_length"]').change(function() {
		sessionStorage.setItem("selectedLength", $(this).val());
	});
	deviceStatusTable.page.len(sessionStorage.getItem("selectedLength")).draw();

    $('.multiSelect').multiselect({
		enableFiltering: true,
		includeSelectAllOption: true,
		maxHeight: 400,
		dropUp: true,
		nonSelectedText: 'Please select',
	});

    $('#governorateID').on('change', function() {
        //alert($(this).find(":selected").val());
        $('#stationID').find('option').remove().end().append('<option value="">Please select</option>').val('').trigger('change');
        //$('#lookupDetailSub_Sel').trigger("chosen:updated");
        var storedata;
        if ($(this).find(":selected").val() == "1") {
            //alert("1");
            storedata = [{
                value: '1',
                text: 'Al-Amirat'
            }, {
                value: '2',
                text: 'AL-Athaiba'
            }, {
                value: '3',
                text: 'Al-Khudh1'
            }, {
                value: '4',
                text: 'Al-Khudh2'
            }, {
                value: '5',
                text: 'Al-Watayah'
            }, {
                value: '6',
                text: 'Boshar-1'
            }, {
                value: '7',
                text: 'Boshar-2'
            }, {
                value: '8',
                text: 'Darsate'
            }, {
                value: '9',
                text: 'Qurayyat'
            }, {
                value: '10',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        } else if ($(this).find(":selected").val() == "2") {
            //alert("2");
            storedata = [{
                value: '11',
                text: 'AL-Musina'
            }, {
                value: '12',
                text: 'Barka'
            }, {
                value: '13',
                text: 'Nakhal'
            }, {
                value: '14',
                text: 'Rustaq'
            }, {
                value: '15',
                text: 'Standby'
            }];
            $.each(storedata, function(index, value) {
                $('#stationID').append($('<option>', {
                    value: value.value,
                    text: value.text
                })).trigger('change');
            });
        }
    });
});
$("#deviceCancelid").click(function() {
    $("#form1Submit").html("<i class='fal fa-check fa-fw'></i>&nbsp; Save").show();
    $("#deviceNametxt, #deviceIMEItxt, #governorateID, #stationID").val('');
    $('#deviceNametxt, #deviceIMEItxt').removeAttr('readonly');
    $("#governorateID, #stationID").prop('disabled', false);
    $(".smart-Wizard").hide();
});