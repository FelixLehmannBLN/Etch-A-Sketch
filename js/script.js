(function ($) {

  var color = "red";

  function createGrid(gridSize) {
    var grid = '<div class="Row"></div>',
    i,
    gridSize = gridSize || 16;

    for (i = 0; i < gridSize; i++) {
      var newRow = '<div class="Row">';
      for (var j = 0; j < gridSize; j++) {
        var newDiv = '<div class="box border"></div>';
        newRow += newDiv;
      }
      newRow += '</div>'
      grid += newRow;
  }
    $('.container').html(grid);
  }

  function paintIt() {
    var $this = $(this);
    $this.css( "background", color );
  }

  function toggleBorder() {
    $('.box').toggleClass('border');
  }

  function changeColor(){
    $( "#change_colors_form option:selected").each(function(){
      color = $( this ).val() + "";
    });
  } 
   
  function changeGridSize(){
    $( "#change_grid_size option:selected").each(function(){
      var size = $( this ).val() + "";
      createGrid(size);
    });
  }

  function bindings(){
    $('.container').on('mouseover', '.box', paintIt);
    $('#borderCheckBox').on('change', toggleBorder);
    $('#change_colors_form').on('change', changeColor);
    $('#change_grid_size').on('change', changeGridSize);
  }

$( document ).ready(function(){
 createGrid();
 bindings();
});

})(jQuery);