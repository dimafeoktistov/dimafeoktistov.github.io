function makeGrid() {
  // Select size input
  const rows = $("#input_height").val();
  const cols = $("#input_width").val();
  //Create table
  const tableCanvas = $("#pixel_canvas");
  //Remove table if it's a second time
  tableCanvas.children().remove();
  for (let i = 0; i < rows; i++) {
    tableCanvas.append("<tr></tr>");
    for (let j = 0; j < cols; j++) {
      tableCanvas.children().last().append("<td></td>");
    }
  }
   //No context menu when pressing right mouse button
   $("td").contextmenu(function() {
    return false;
    });
  //Listener for mouse clicks, and making a function for them
   $('td').mousedown(function(clicks){
    switch (clicks.which) {
      case 1:
        $(this).css( "background-color", document.getElementById("colorPicker").value);
            break;
      case 3:
        $(this).css("background-color", "");
            break;

            }

    });

};


$("input[type='submit']").click(function(e) {
  //Prevents page from default submit action
  e.preventDefault();
  makeGrid();

  });
