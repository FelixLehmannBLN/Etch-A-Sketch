(function ($) {


  function createGrid() {
    var grid = '<div class="Row"></div>',
    i,
    gridSize = 16;

    for (i = 0; i < gridSize; i++) {
      var newRow = '<div class="Row">';
      for (var j = 0; j < gridSize; j++) {
        var newDiv = '<div class="box"></div>';
        newRow += newDiv;
      }
      newRow += '</div>'
      grid += newRow;
  }
    $('.container').html(grid);
  }

  function paintIt() {
    var $this = $(this);
    $this.css( "background", "red" );
}

  function bindings(){
    $('.box').on('mouseover', paintIt);
  }

$( document ).ready(function(){
 createGrid();
 bindings();
});

})(jQuery);