/*           _
   ___  ___ | |_   _____ _ __ ___
  / __|/ _ \| \ \ / / _ \ '__/ __|
  \__ \ (_) | |\ V /  __/ |  \__ \
  |___/\___/|_| \_/ \___|_|  |___/

*/

// hint: you'll need to do a full-search of all possible arrangements of pieces!
// (There are also optimizations that will allow you to skip a lot of the dead search space)
// take a look at solversSpec.js to see what the tests are expecting

// return a matrix (an array of arrays) representing a single nxn chessboard, with n rooks placed such that none of them can attack each other
window.findNRooksSolution = function(n){
  solution = findAllRookBoards(n)[0];
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
};

window.findAllRookBoards = function(n){
  var solnBoards = [];
  var recur = function(rowI, b) {
    var brd = copyBoard(b); 
    if(rowI === n){
      solnBoards.push(copyBoard(brd));
      return;
    }
    _(brd[rowI]).each(function(colVal, colI){
      if(colVal === 0){
        recur(rowI+1,addRook(copyBoard(b), rowI, colI));
      }
    });
    //if the end of the each loop is reached
    return;

  };

  recur(0, makeBoard(n));
  return solnBoards;
};

window.copyBoard = function(b){
  var brd = [];
  _(b).each(function(row){
    brd.push(row.slice());
  });
  return brd;
};

window.makeBoard = function(n){
  if(n === 1){
    return [[0]];
  }
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push([]);
    for (var j = 0; j < n; j++) {
      board[i].push(0);
    }
  }
  return board;
};

window.addRook = function(board, row, col){
  board[row][col] = 1; //this is a rook!
  //adds landmines:
  _(board).each(function(row) {
    if (!row[col]){ row[col] = -1; }
  });
  return board;
};

window.countNRooksSolutions = function(n){
  var solutionCount = findAllRookBoards(n).length;
  console.log('Number of solutions for ' + n +' rooks:', solutionCount);
  return solutionCount;
};

window.findAllQueenBoards = function(n){
  var solnBoards = [];
  var recur = function(rowI, b) {
    var brd = copyBoard(b); 
    if(rowI === n){
      solnBoards.push(copyBoard(brd));
      return;
    }
    _(brd[rowI]).each(function(colVal, colI){
      if(colVal === 0){
        recur(rowI+1,addQueen(copyBoard(b), rowI, colI));
      }
    });
    return; //if the end of the each loop is reached
  };
  recur(0, makeBoard(n));
  return solnBoards;
};




window.addQueen = function(board, row, col){
  board[row][col] = 1; //this is a queen!
  var nRow = row + 1;
  var majCol = col + 1;
  var minCol = col - 1;
  //adds landmines:
  _(board).each(function(r) {
    if (!r[col]){ //adds vertical landmines
      r[col] = -1;
    }
    if(board[nRow] !== undefined){
      if(board[nRow][majCol] !== undefined){
        board[nRow][majCol] = -1;
      }
      if(board[nRow][minCol] !== undefined){
        board[nRow][minCol] = -1;
      }
    }
    nRow++;
    majCol++;
    minCol--;
  });
  return board;
};


// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = findAllQueenBoards(n)[0] || makeBoard(n);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = findAllQueenBoards(n).length; //fixme
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
