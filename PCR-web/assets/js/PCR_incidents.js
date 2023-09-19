$(document).ready(function() {
    function format(data) {
        // `d` is the original data object for the row
        return '<div class="accordion custom-accordionwithicon accordion-fill-info" id="accordionFill">'+
        '<div class="accordion-item">'+
            '<h2 class="accordion-header" id="accordionFillExample2">'+
                '<button class="accordion-button fw-semibold collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#accor_fill1" aria-expanded="false" aria-controls="accor_fill2">'+
                    data.stationName +
                '</button>'+
            '</h2>'+
            '<div id="accor_fill1" class="accordion-collapse collapse" aria-labelledby="accordionFillExample2" data-bs-parent="#accordionFill">'+
                '<div class="accordion-body">'+
                '<table class="table align-middle table-nowrap mb-0 table-bordered table-striped expandable-table w-100" id="PCRIncidentsInsideTable">'+
                        '<thead class="table-light">'+
                            '<tr>'+
                                '<th>PCR</th>'+
                                '<th>Name</th>'+
                                '<th class="w-5"></th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr>'+
                                '<td>' + data.PCR + '</td>'+
                                '<td class="">' + data.PCRName + '</td>'+
                                '<td>'+
                                    '<ul class="list-inline hstack gap-2 mb-0">'+
                                        '<li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">'+
                                            '<a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-white btn btn-info"></i></a>'+
                                        '</li>'+
                                    '</ul>'+
                                '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>'+
            '</div>'+
        '</div>'+
        '<div class="accordion-item">'+
            '<h2 class="accordion-header" id="accordionFillExample2">'+
                '<button class="accordion-button fw-semibold collapsed text-primary" type="button" data-bs-toggle="collapse" data-bs-target="#accor_fill2" aria-expanded="false" aria-controls="accor_fill2">'+
                    'Al-Amirat / 1007' +
                '</button>'+
            '</h2>'+
            '<div id="accor_fill2" class="accordion-collapse collapse" aria-labelledby="accordionFillExample2" data-bs-parent="#accordionFill">'+
                '<div class="accordion-body">'+
                '<table class="table align-middle table-nowrap mb-0 table-bordered table-striped expandable-table w-100" id="PCRIncidentsInsideTable">'+
                        '<thead class="table-light">'+
                            '<tr>'+
                                '<th>PCR</th>'+
                                '<th>Name</th>'+
                                '<th class="w-5"></th>'+
                            '</tr>'+
                        '</thead>'+
                        '<tbody>'+
                            '<tr>'+
                                '<td>' + data.PCR + '</td>'+
                                '<td class="">' + data.PCRName + '</td>'+
                                '<td>'+
                                    '<ul class="list-inline hstack gap-2 mb-0">'+
                                        '<li class="list-inline-item" data-bs-toggle="tooltip" data-bs-trigger="hover" data-bs-placement="top" title="Edit">'+
                                            '<a class="edit-item-btn" href="#showModal" data-bs-toggle="modal"><i class="ri-pencil-fill align-bottom text-white btn btn-info"></i></a>'+
                                        '</li>'+
                                    '</ul>'+
                                '</td>'+
                            '</tr>'+
                        '</tbody>'+
                    '</table>'+
                '</div>'+
            '</div>'+
        '</div>'+
    '</div>';
    }
    $('#PCRIncidentsTable').DataTable({
        "ajax": "assets/js/json/data.json",
        "columns": [
            { "data": "Quote" },
            { "data": "incidentLocation" },
            { "data": "stationName" },
            { "data": "Date" },
            { "data": "callType" },
            { "data": "subCategory" },
            { "data": null, "className": 'details-control', "orderable": false, "defaultContent": '' }],
        "order": [[1, 'asc']],
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        //"paging": false,
        //"ordering": false,
        //"info": false,
        //"filter": false,
        columnDefs: [{
            orderable: false,
            className: 'select-checkbox',
            targets: 0
        }],
        select: {
            style: 'os',
            selector: 'td:first-child'
        }
    });
    $('#PCRIncidentsTable tbody').on('click', 'td.details-control', function() {
        var table = $('#PCRIncidentsTable').DataTable();
        var tr = $(this).parents('tr');
        var data = table.row($(this).parents('tr'));
        if (data.child.isShown()) {
            // This row is already open - close it
            data.child.hide();
            tr.removeClass('shown');
        }
        else {
            
            table.rows().every(function(){
            // If row has details expanded
            if(this.child.isShown()){
                // Collapse row details
                this.child.hide();
                $(this.node()).removeClass('shown');
            }
        });
        
            // Open this row
            data.child(format(data.data())).show();
            tr.addClass('shown');
        }
    });

    $('#unreadPCRTable').DataTable({
        processing: true,
        //serverSide: true,
        "destroy": true,
        "dom": '<"top"f>rt<"bottom"ilp>',
        "order": [[1, 'asc']],
    });
});