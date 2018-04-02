$(document).ready(function(){
  let buttonClickId = -1;

  drawCells(20,20)
  markTarget(8,0,false)
  markTarget(8,10,true)
  markWall(3,4)
  markWall(4,4)
  markWall(5,4)
  markWall(6,4)
  markWall(7,4)
  markWall(12,12)

  $('#GoalButton').click(function(){

  });

  $('#GoButton').click(function(){
    AStar(data);
  });

  $('#AddStartButton').click(function(){
    buttonClickId = 1;
  })

  $("#AddGoalButton").click(function(){
    buttonClickId = 2;
  });

  $('.cell').click(function(){
    //add start point
    if(buttonClickId === 1){
      var id = $(this).attr('id').substring(5);
      var col = Number(id.split('_')[0]);
      var row = Number(id.split('_')[1])
      console.log(data);
      removeColor(data.Start.x,data.Start.y)
      data.Start.x = col;
      data.Start.y = row;
      $('#' + $(this).attr('id')).css('background-color',colors['start']);
      buttonClickId = -1;
    }
    //add goal point
    if(buttonClickId == 2){
      var id = $(this).attr('id').substring(5);
      var col = Number(id.split('_')[0]);
      var row = Number(id.split('_')[1])
      removeColor(data.Goal.x,data.Goal.y)
      data.Goal.x = col;
      data.Goal.y = row;
      $('#' + $(this).attr('id')).css('background-color',colors['goal']);
      buttonClickId = -1;
    }
  })
})
