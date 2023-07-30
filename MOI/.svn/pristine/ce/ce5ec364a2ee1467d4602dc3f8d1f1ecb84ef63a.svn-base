/*******************************
 * ACCORDION WITH TOGGLE ICONS
 *******************************/
function toggleIcon(e) {
  $(e.target).prev('.panel-heading').find(".more-less").toggleClass('glyphicon glyphicon-chevron-down glyphicon glyphicon-chevron-right');
}
$('.panel-group').on('hidden.bs.collapse', toggleIcon);
$('.panel-group').on('shown.bs.collapse', toggleIcon);

$(document).ready(function() {
  var table = $('#GIS').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#Existing').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#Proposed').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#BUnits').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#BStoreys').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#Commentstable').DataTable();  
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#Paymentstable').DataTable();  
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#SiteInspectiontable').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#VDetails').DataTable();
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
});
$(document).ready(function() {
  var table = $('#InspectionList').DataTable();  
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
  $('#InspectionList').parent().addClass('table-responsive');
});

$(document).ready(function() {
  var table = $('#BStoreys2, #BUnits2').DataTable();  
  table.page.len(5).draw();
  $(".dataTables_length").replaceWith("<div style='display:none;'> <label>Show</label>  <input type=text  class='page form-control' value='5'>  <label>entries</label> </div>");
  $(".page").keyup(function() {
    table.page.len(eval($(".page").val())).draw();
  });
  $('#BStoreys2, #BUnits2').parent().addClass('table-responsive');
});

function TitleDeed() {
  var iframe = document.getElementById('');
  iframe.setAttribute("src", "docs/Portal Enhancements v1.1.pdf");
}

function SurveySketch() {
  var iframe = document.getElementById('iframe');
  iframe.setAttribute("src", "docs/Portal Enhancements v1.1.pdf");
}

/* Avilable Dates Script */
$('.days li span.active').click(function(){	
	$(this).addClass('selected-date');
	$(this).parent('li').siblings().find('span.active').removeClass('selected-date');
})