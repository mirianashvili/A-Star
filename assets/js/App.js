$(document).ready(function(){
  let buttonClickId = -1;

  init();

  $('#GoButton').click(function(){
    if(data['Goal'] === undefined || data['Start'] === undefined){
      alert('hey')
    }else{
      AStar(data);
    }
  });

  $('#AddStartButton').click(function(){
    buttonClickId = 1;
  })

  $("#AddGoalButton").click(function(){
    buttonClickId = 2;
  });

  $("#AddWallButton").click(function(){
    buttonClickId = 3;
  });

  $("#ClearButton").click(function(){
    clearBoard();
  });

  $("#RemoveCellButton").click(function(){
    buttonClickId = 4;
  });

  $('.cell').click(function(){
    //get cordinates
    var id = $(this).attr('id').substring(5);
    var col = Number(id.split('_')[0]);
    var row = Number(id.split('_')[1]);

    //add start point
    if(buttonClickId === 1 && !UsedBoard(col,row)){
      if(data.Start != undefined){
        removeColor(data.Start.x,data.Start.y)
      }
      saveTarget(col,row,false)
      $('#' + $(this).attr('id')).css('background-color',colors['start']);
      buttonClickId = -1;
    }

    //add goal point
    if(buttonClickId == 2 && !UsedBoard(col,row)){
      if(data.Goal != undefined){
        removeColor(data.Goal.x,data.Goal.y)
      }
      saveTarget(col,row,true)
      $('#' + $(this).attr('id')).css('background-color',colors['goal']);
      buttonClickId = -1;
    }

    //add wall at the point
    if(buttonClickId == 3 && !UsedBoard(col,row)){
      data.walls.push({x:col,y:row});
      $('#' + $(this).attr('id')).css('background-color',colors['wall']);
      buttonClickId = -1;
    }

    //remove color
    if(buttonClickId == 4){
      removeColor(col,row);
      removeValue(col,row);
      buttonClickId = -1;
    }
  })
});
