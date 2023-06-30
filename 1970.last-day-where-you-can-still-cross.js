/*
 * @lc app=leetcode id=1970 lang=javascript
 *
 * [1970] Last Day Where You Can Still Cross
 */

// @lc code=start
/**
 * @param {number} row
 * @param {number} col
 * @param {number[][]} cells
 * @return {number}
 */
/*
i - number of rows, number of columns, array of array coordinates
o - number of last day
c - number of row,columns is 2 - 2*10^4
    //cells length is row * column
    //ri is 1 to row, ci is 1 to col
e -
*/
var latestDayToCross = function(row, col, cells) {
  //create matrix of 0s and 1s to indicate land and water units
  let matrix = [];
  let possiblePath = {};

  for (let i = 0; i < row; i++) {
      matrix.push(new Array(col).fill(0));
      possiblePath[i] = 0;
  }
  let lastDay = 0;
  //iterate through cells
  for (let j = 0; j < cells.length; j++) {
      let cell = cells[j];
      //mark matrix with water
      let currRow = cell[0] - 1;
      let currCol = cell[1] - 1;
      matrix[currRow][currCol] = 1;
      //if water unit is in the possiblePath, find new possiblePath
      if (possiblePath[currRow] === currCol) {
          let newPath = findPossiblePath(matrix);
          //if cannot find possible path, return ith day as lastDay
          if (!newPath) {
              lastDay = j;
              return lastDay;
          } 
      }
  }
  return lastDay;
};  

//helper
//findPossiblePath(matrix) function
function findPossiblePath(matrix) {

  function getAll0s(arr) {
      let result = 0;
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === 0) {
              result.push(i);
          }
      }
      return result;
  }

  let firstRow = matrix[0];
  //iterate through first row in matrix
  for (let k = 0; k < firstRow.length; k++) {
      let unit = matrix[k];
      //if 0 (land)
      while (unit === 0) {
      //check second row (left, right, and down contendors for paths)
      let left = check(left);
      let right = check(right);
      let down = check(down);
      //when hit end, update path, return true;
      //when hit blocked paths (before the last row), continue; 
      }
  }
  //return false; (no more possible paths)
}

// @lc code=end

