$(document).ready(function() {
    document.getElementById("fullYear").innerHTML = new Date().getFullYear();
    var allTasks = $('#example').DataTable({
        "dom": '<"top"f>rt<"bottom"ilp>',
    });
    $('#allTaskSearch').keyup(function() {
        allTasks.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    });
    var myTasks = $('#myTasks').DataTable({
        "dom": '<"top"f>rt<"bottom"ilp>',
    });
    $('#myTaskSearch').keyup(function() {
        myTasks.search($(this).val()).draw(); // this  is for customized searchbox with datatable search feature.
    });
});
