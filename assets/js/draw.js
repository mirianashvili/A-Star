var data = {};
var colors = {
  "goal": '#28a745',
  "start": "#17a2b8",
  "wall": "#444",
  "path": "#ababab"
}

function init() {
  data = {}
  drawCells(20, 20)
  //markTarget(8,0,false)
  //markTarget(8,10,true)
  //markWall(3,4)
  //markWall(4,4)
  //markWall(5,4)
  //markWall(6,4)
  //markWall(7,4)
  //markWall(12,12)
}

function clearBoard(col, row) {
  //var object = document.getElementById('board');
  //object.innerHTML = "";
  //redraw cells again
  //init()
  data = {}
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      const cell = document.getElementById('cell_' + i + "_" + j)
      cell.setAttribute('style', 'background-color:#fff;');
      //object.appendChild(cell);
    }
  }
  data['col'] = col;
  data['row'] = row;
}

function drawCells(col, row) {
  var object = document.getElementById('board');
  for (var i = 0; i < col; i++) {
    for (var j = 0; j < row; j++) {
      var cell = document.createElement('div');
      cell.setAttribute('class', 'cell');
      cell.setAttribute('id', "cell_" + i + "_" + j);
      cell.setAttribute('style', 'background-color:#fff;');
      object.appendChild(cell);
    }
  }

  data['col'] = col;
  data['row'] = row;
}

function markTarget(col, row, isGoal) {
  var colorKey = 'start';
  var id = 'cell_' + col + "_" + row;

  if (isGoal === true) {
    colorKey = 'goal';
  }

  var object = document.getElementById(id);
  object.style.backgroundColor = colors[colorKey];
  saveTarget(col, row, isGoal);
}

function saveTarget(col, row, isGoal) {
  if (isGoal === true) {
    data['Goal'] = { x: col, y: row };
  } else {
    data['Start'] = { x: col, y: row };
  }
}

function markWall(col, row) {
  var color = colors['wall'];
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
  saveWall(col, row);
}

function saveWall(col, row) {
  if (data['walls'] == undefined) {
    data['walls'] = [];
  }
  data['walls'].push({ x: col, y: row })
}

function drawPath(col, row) {
  var color = 'yellow';
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
}

function drawChild(col, row) {
  if (col == data.Goal.x && row == data.Goal.y) return;
  var color = colors["path"];
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
}

function removeColor(col, row) {
  var color = 'transparent';
  var id = 'cell_' + col + "_" + row;
  var object = document.getElementById(id);
  object.style.backgroundColor = color;
}

function removeValue(col, row) {
  if (data.Start != undefined) {
    if (data.Start.x == col && data.Start.y == row) {
      delete data.Start;
      console.log(data);
      return;
    }
  }
  if (data.Goal != undefined) {
    if (data.Goal.x == col && data.Goal.y == row) {
      delete data.Goal;
      return;
    }
  }

  let walls = data.walls;
  let new_walls = [];

  for (let i = 0; i < walls.length; i++) {
    if (walls[i].x == col && walls[i].y == row) {
      continue;
    }
    new_walls.push(walls[i]);
  }

  data.walls = new_walls;

}

function UsedBoard(col, row) {
  let name = "#cell_" + col + "_" + row;
  console.log(name)
  console.log('color' + $(name).css('background-color'))
  return $(name).css('background-color') === '#fff';
}
