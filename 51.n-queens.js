/*
 * @lc app=leetcode id=51 lang=javascript
 *
 * [51] N-Queens
 */

// @lc code=start
/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
  let emptyBoard = Array.from({ length: n }, () => Array(n).fill(0));
  let solutions = [];

  // search(emptyBoard,0, 0, 1);

  for (let i = 0; i < n; i++) {
    let temporaryEmptyBoard = createNewRefArray(emptyBoard);
    search(temporaryEmptyBoard, 0, 0, i);
  }

  //recursively search until there are no more validIndexes
  //if queenCount hits n length, push it to solutions
  function search(board, queenCount, rI = 0, sI = 0) {
    let [validIndexes, stateBoard, currentQueenCount] = placeQueenAndMarkOut(
      board,
      rI,
      sI,
      queenCount
    );
    if (currentQueenCount === board.length) {
      let copyOfBoard = createNewRefArray(board);
      solutions.push(copyOfBoard);
      return;
    }
    if (validIndexes.length) {
      //go thru valid Queen spots with Search
      for (let [rIndex, sIndex] of validIndexes) {
        let currentStateBoard = createNewRefArray(stateBoard);
        search(currentStateBoard, currentQueenCount, rIndex, sIndex);
      }
    }
  }

  return convertToQueenStringFormat(solutions);

  function placeQueenAndMarkOut(stateBoard, rowIndex, squareIndex, count) {
    let qC = count;
    //marked out column
    for (let i = 0; i < stateBoard.length; i++) {
      stateBoard[i][squareIndex] = 2;
    }

    //marked out row and the Queen
    let markedOutRow = stateBoard[rowIndex].map((_, index) => {
      if (index === squareIndex) {
        qC++;
        return 1;
      }
      return 2;
    });
    stateBoard[rowIndex] = markedOutRow;

    //mark out bottomRightDiagonal
    let brRowIndex1 = rowIndex - 1;
    let brSquareIndex1 = squareIndex - 1;

    let brRowIndex2 = rowIndex + 1;
    let brSquareIndex2 = squareIndex + 1;

    while (stateBoard[brRowIndex1]?.[brSquareIndex1] !== undefined) {
      stateBoard[brRowIndex1][brSquareIndex1] = 2;
      brRowIndex1--;
      brSquareIndex1--;
    }

    while (stateBoard[brRowIndex2]?.[brSquareIndex2] !== undefined) {
      stateBoard[brRowIndex2][brSquareIndex2] = 2;
      brRowIndex2++;
      brSquareIndex2++;
    }

    //mark out upperRightDiagonal
    let urRowIndex1 = rowIndex + 1;
    let urSquareIndex1 = squareIndex - 1;

    let urRowIndex2 = rowIndex - 1;
    let urSquareIndex2 = squareIndex + 1;

    while (stateBoard[urRowIndex1]?.[urSquareIndex1] !== undefined) {
      stateBoard[urRowIndex1][urSquareIndex1] = 2;
      urRowIndex1++;
      urSquareIndex1--;
    }

    while (stateBoard[urRowIndex2]?.[urSquareIndex2] !== undefined) {
      stateBoard[urRowIndex2][urSquareIndex2] = 2;
      urRowIndex2--;
      urSquareIndex2++;
    }

    let allValidIndexes = [];
    for (
      let currRowIndex = rowIndex + 1;
      currRowIndex < stateBoard.length;
      currRowIndex++
    ) {
      let currRow = stateBoard[currRowIndex];
      currRow.forEach((square, squareIndex) => {
        if (!square) allValidIndexes.push([currRowIndex, squareIndex]);
      });
    }
    return [allValidIndexes, stateBoard, qC];
  }
};

function createNewRefArray(arr) {
  let newArr = [];
  arr.forEach((row) => {
    let tempRowArray = [];
    row.forEach((el) => {
      tempRowArray.push(el);
    });
    newArr.push(tempRowArray);
  });
  return newArr;
}

function convertToQueenStringFormat(arr) {
  return arr.map((solution) => {
    return solution.map((row) => {
      let formattedString = "";
      row.forEach((num) => {
        if (num === 1) {
          formattedString += "Q";
        } else {
          formattedString += ".";
        }
      });
      return formattedString;
    });
  });
}
// @lc code=end
