$("#FloorID").hide();
$("#flatID").hide();
// * ---------------------------------- Building Details ------------------------------------------------- * //
$(document).ready(function() {
  var table = $('#building_details_auto').DataTable({
    'ajax': 'arrays.txt',
    'columnDefs': [{
      'targets': 0,
      'searchable': false,
      'orderable': false,
      'className': 'dt-body-center',
      'render': function(data, type, full, meta) {
        return '<input type="radio" name="id[]" value="' + $('<div/>').text(data).html() + '"> <label>&nbsp;</label>';
      }
    }],
    'order': [1, 'asc']
  });
  $('#building_details_auto tbody').on('click', 'tr', function() {
    var data = table.row(this).data();
    //alert( 'You clicked on '+data[1]+'\'s row' );
    //$(this).toggleClass('selected');
    $("#FloorID").show();
    $("#flatID").hide();
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'></label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
  // Handle click on checkbox to set state of "Select all" control
  $('#building_details_auto tbody').on('change', 'input[type="checkbox"]', function() {
    // If checkbox is not checked
    if (!this.checked) {
      var el = $('#building_details_auto-select-all').get(0);
      // If "Select all" control is checked and has 'indeterminate' property
      if (el && el.checked && ('indeterminate' in el)) {
        // Set visual state of "Select all" control 
        // as 'indeterminate'
        el.indeterminate = true;
      }
    }
  });
});
// * ---------------------------------- Units Details ------------------------------------------------- * //
$(document).ready(function() {
  var table = $('#units_detailsauto').DataTable({
    'ajax': 'units.txt',
    'columnDefs': [{
      'targets': 0,
      'searchable': false,
      'orderable': false,
      'className': 'dt-body-center',
      'render': function(data, type, full, meta) {
        return '<input type="checkbox" name="id[]" value="' + $('<div/>').text(data).html() + '">';
      }
    }],
    'order': [1, 'asc']
  });
  $('#units_detailsauto tbody').on('click', 'tr', function() {
    var data = table.row(this).data();
    //alert( 'You clicked on '+data[1]+'\'s row' );
    $("#flatID").show();
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'></label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
  // Handle click on "Select all" control
  $('#units_detailsauto-select-all').on('click', function() {
    // Check/uncheck all checkboxes in the table
    var rows = table.rows({
      'search': 'applied'
    }).nodes();
    $('input[type="checkbox"]', rows).prop('checked', this.checked);
  });
  // Handle click on checkbox to set state of "Select all" control
  $('#units_detailsauto tbody').on('change', 'input[type="checkbox"]', function() {
    // If checkbox is not checked
    if (!this.checked) {
      var el = $('#units_detailsauto-select-all').get(0);
      // If "Select all" control is checked and has 'indeterminate' property
      if (el && el.checked && ('indeterminate' in el)) {
        // Set visual state of "Select all" control 
        // as 'indeterminate'
        el.indeterminate = true;
      }
    }
  });
});
// * ---------------------------------- Storey Details ------------------------------------------------- * //
$(document).ready(function() {
  var table = $('#storeys_auto').DataTable({
    'ajax': 'Storey.txt',
    'columnDefs': [{
      'targets': 0,
      'searchable': false,
      'orderable': false,
      'className': 'dt-body-center',
      'render': function(data, type, full, meta) {
        return '<input type="radio" name="id[]" value="' + $('<div/>').text(data).html() + '"> <label>&nbsp;</label>';
      }
    }],
    'order': [1, 'asc']
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'></label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
  // Handle click on "Select all" control
  $('#storeys_auto-select-all').on('click', function() {
    // Check/uncheck all checkboxes in the table
    var rows = table.rows({
      'search': 'applied'
    }).nodes();
    $('input[type="radio"]', rows).prop('checked', this.checked);
  });
  // Handle click on checkbox to set state of "Select all" control
  $('#storeys_auto tbody').on('change', 'input[type="radio"]', function() {
    // If checkbox is not checked
    if (!this.checked) {
      var el = $('#storeys_auto-select-all').get(0);
      // If "Select all" control is checked and has 'indeterminate' property
      if (el && el.checked && ('indeterminate' in el)) {
        // Set visual state of "Select all" control 
        // as 'indeterminate'
        el.indeterminate = true;
      }
    }
  });
});