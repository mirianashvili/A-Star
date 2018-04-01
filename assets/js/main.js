$(document).ready(function(){
  drawCells(20,20)
  markTarget(8,0,false)
  markTarget(8,10,true)
  markWall(3,4)
  markWall(4,4)
  markWall(5,4)
  markWall(6,4)
  markWall(7,4)
  markWall(12,12)
  function buttonClick(){
    AStar(data)
  }

  $('#GoalButton').click(function(){

  });

  $('.cell').click(function(){
    $('#' + $(this).attr('id')).css('background-color',colors['goal']);
  })
})
