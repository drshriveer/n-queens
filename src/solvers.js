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
  var allRSoln = solutionSearch(n, 'rook');
  console.log('Single solution for ' + n + ' rooks:', JSON.stringify(solution));
  var solution = makeSolBoard(allRSoln[0],n);
  return solution;
};

window.countNRooksSolutions = function(n){
  var solutionCount = solutionSearch(n, 'rook').length;
  console.log('Number of solutions for ' + n +' rooks:', solutionCount);
  return solutionCount;
};

// return a matrix (an array of arrays) representing a single nxn chessboard, with n queens placed such that none of them can attack each other
window.findNQueensSolution = function(n){
  var allQSoln = solutionSearch(n, 'queen');
  var solution = makeSolBoard(allQSoln[0],n);
  console.log('Single solution for ' + n + ' queens:', JSON.stringify(solution));
  return solution;
};

// return the number of nxn chessboards that exist, with n queens placed such that none of them can attack each other
window.countNQueensSolutions = function(n){
  var solutionCount = solutionSearch(n, 'queen').length; //fixme
  console.log('Number of solutions for ' + n + ' queens:', solutionCount);
  return solutionCount;
};

// ========  RECURSION SEARCHER  ==================
window.solutionSearch = function(n, pieceType){
  var solns = [];
  var recur = function(pieceLocations, currentRow){
    if(currentRow === n){
      solns.push(pieceLocations.slice());
      return;
    }
    var rowMines = detectMines(pieceLocations, currentRow, n, pieceType);
    _(rowMines).each(function(mined,colI){
      if(mined === 0){
        var rl = pieceLocations.concat([colI]);
        recur(rl, currentRow + 1);
      }
    });
  };
  recur([],0);
  return solns;
};

// ========= FINDS BAD LOCATIONS ================
window.detectMines = function(pieceLocations, currentRow, n, pieceType){
    var mineLocation = makeEmptyRow(n);
    _(pieceLocations).each(function(col, row){
      mineLocation[col] = -1;
      if(pieceType === 'queen'){
        sideMineA = col + (currentRow - row);
        sideMineB = col - (currentRow - row);
        if(sideMineA < n){mineLocation[sideMineA] = -1;}
        if(sideMineB >= 0){mineLocation[sideMineB] = -1;}
      }
    });
    return mineLocation;
};

// ===== BELOW BE HELPERS! TRUST IN THEM! ======
window.makeEmptyBoard = function(n){
  var board = [];
  for (var i = 0; i < n; i++) {
    board.push(makeEmptyRow(n));
  }
  return board;
};


window.makeEmptyRow = function(n) {
  var row = [];
  for (var i = 0; i < n; i++) {
    row[i] = 0;
  }
  return row;
};

window.makeSolBoard = function(queenSolution, n){
  var solnBoard = [];
  if(queenSolution === undefined){
    return makeEmptyBoard(n);
  }
  for (var i = 0; i < n; i++) {
    var row = makeEmptyRow(n);
    row[queenSolution[i]] = 1;
    solnBoard.push(row);
  }
  return solnBoard;
};


window.findExecutionTime = function(fn, args){
  var startTime = new Date();
  fn(args);
  var endTime = new Date();
  var time = endTime - startTime;
  console.log("Time Elapsed: ", time, "ms");
};
