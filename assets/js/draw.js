var data = {};

function drawCells(col,row){
  var object = document.getElementById('board');
  for(var i = 0 ; i < col ; i++){
    for(var j = 0 ; j < row ; j++){
      var cell = document.createElement('div');
      cell.setAttribute('class','cell');
      cell.setAttribute('id',"cell_" + i + "_" + j);
      object.appendChild(cell);
    }
  }

  data['col'] = col;
  data['row'] = row;
}

function markTarget(col,row,isGoal){
  var color = 'blue';
  var id = 'cell_' + col + "_" + row;

  if(isGoal === true){
    color = 'red';
  }

  var object = document.getElementById(id);
  object.style.backgroundColor = color;
  saveTarget(col,row,isGoal);
}

function saveTarget(col,row,isGoal){
  if(isGoal === true){
    data['Goal'] = {x : col , y : row};
  }else{
    data['Start'] = {x : col , y : row};
  }
}

function markWall(col,row){
  var color = '#000';
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
  saveWall(col,row);
}

function saveWall(col,row){
  if(!data['walls']){
    data['walls'] = [];
  }
  data['walls'].push({x:col,y:row})
}

function drawPath(col,row){
  var color = 'yellow';
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
}

function drawChild(col,row){
  if(col == data.Goal.x && row == data.Goal.y) return;
  var color = 'gray';
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
}
