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
  //var solution = undefined; //fixme

  //---------------------------------------------------------------------
  //recurse(rowI,board)
    //add rook to column 'i' in row //for loop 
    //recurse with board having added rook and rook's landmines
      //recurse(rowI+1,newBoard)
    //baseCase: add sol'n to solnBoards.

  //solnBoards.length = # of solutions

 //  debugging tells me that  something is wrong with closure scope.
  var solnBoards = [];
  var recur = function(rowI, bz) {
    var brd = bz.slice(); 
    debugger;
    if(rowI === n){
      solnBoards.push(brd.slice());
      return;
    }
    _(brd[rowI]).each(function(colVal, colI){
      debugger;
      if(colVal === 0){
        recur(rowI+1,addRook(brd, rowI, colI));
      }
    });
    //if the end of the each loop is reached
    return;

  };

  // var recur = function(rowI, board){
  //   if (rowI === n){
  //     solnBoards.push(board);
  //   } else {
  //     for(var i = 0; i < board[rowI].length; i++){
  //       if(board[rowI][i] === 0){
  //         recur(rowI+1, addRook(board,rowI, i));
  //       }
  //     }
  //   }
  // };

  var nb = makeBoard(n);
  recur(0,nb);
  return solnBoards;
  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return solution;
};

window.makeBoard = function(n){
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
  //var newBoard = board.slice(); //needed ???
  board[row][col] = 1; //this is a rook!
  return window.addLandmines(board, row, col);
};

window.addLandmines = function(board, row, col) {
  _(board).each(function(row) {
    if (!row[col]){ row[col] = -1; }
  });
  return board;
};


// return the number of nxn chessboards that exist, with n rooks placed such that none of them can attack each other
window.countNRooksSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' rooks:', solutionCount);
  return solutionCount;
};



// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var solution = undefined; //fixme

  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};


// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = undefined; //fixme

  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};
