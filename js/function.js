$(document).ready(function () {
  $("#table01").DataTable({
    columnDefs: [{ type: "datetime", targets: [2] }],
    order: [[2, "desc"]],
  });
});
