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
  //make new board
    //adds n rooks to the board
    //if board !false add it to a list of boards
    // change starting position of first rook, clear board, and repeat
  //---------------------------------------------------------------------
  //recurse(rowI,board)
    //add rook to column 'i' in row 
    //recurse with board having added rook and rook's landmines
    // recurse(rowI+1,newBoard)
    //baseCase: add sol'n to solnBoards.

  //solnBoards.length = # of solutionsv 


  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  return solution;
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


//make a board with 0s ()
  //returns empty board


//addrook (board, row)
  //search for the first empty space
  //add to that space
  //call addLandmines 
  //return new board || false if cannot add it


//addLandmines
  //adds -1 to the horz and vert 


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
