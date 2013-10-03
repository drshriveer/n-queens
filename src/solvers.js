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
  //make a matrix 
  var board;
  var boards = [];
  var numOfSoltuionsToCheck = 1;//n^2;

  while(numOfSoltuionsToCheck){
    board = window.makeBoard(n);
    for (var i = 0; i < n; i++) {
      
    };


    numOfSoltuionsToCheck--;
  }


  //var solution = undefined; //fixme

  //console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  //return solution;
};

window.makeBoard = function(n){
  var board = [];
  var row = [];
  for (var i = 0; i < n; i++) {
    for(var j = 0; j < n; i++){
      row.push(0);
    }
    board.push(row);
  };
  return board;
};

window.addRook = function(board){
  for (var y = 0; y < board.length; y++) {
    for (var x = 0; x < Things.length; x++) {
      if(board[y][x] === 0){
        board[y][x] = 1;
        window.rookDefends(board, y, x);
        return board;
      }
    };
  };
  return false;
};

window.rookDefends = function(board, yRook, xRook){
  for (var i = 0; i < board.length; i++) {
    if(i !== xRook){//push defended Xs
      board[yRook][i] = -1;
    }
    if(i !== yRook){//push defended Ys
      board[i][xRook] = -1;
    }
  };
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
