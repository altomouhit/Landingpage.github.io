$(document).ready(function() {
  $("#FloorID").hide();
  $("#flatID").hide();
  var table = $('#building_details_auto').DataTable({
    //"aoColumns": cols,
    "ajax": 'arrays.txt',
    select: {
      style: 'single'
    }
  });
  $('#building_details_auto tbody').on('click', 'tr', function() {
    var data = table.row(this).data();
    //alert( 'You clicked on '+data[1]+'\'s row' );
    $("#FloorID").hide();
    $("#flatID").show();
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='display:none'>Show</label>  <input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#units_detailsauto').DataTable({
    //"aoColumns": cols,
    "ajax": 'units.txt',
    select: {
      style: 'single'
    }
  });
  $('#units_detailsauto tbody').on('click', 'tr', function() {
    var data = table.row(this).data();
    //alert( 'You clicked on '+data[1]+'\'s row' );
    $("#flatID").hide();
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'></label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});

$(document).ready(function() {
  var table = $('#storeys_auto').DataTable({
    //"aoColumns": cols,
    "ajax": 'Storey.txt',
  });
  $('#storeys_auto tbody').on('click', 'tr', function() {
    $(this).toggleClass('selected');
  });
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<label style='font-size: 14px;font-weight: bold;'></label><input type=text  class='page form-control' value='5' style='display:none'>  <label style='display:none'>entries</label>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
