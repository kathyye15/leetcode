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
function possiblePath(matrix) {
    let landIndexes = [];
    function getAll0s(arr) {
        let result = [];
        for (let i = 0; i < arr.length; i++) {
            if (arr[i] === 0) {
                result.push(i);
            }
        }
        return result;
    }
    let firstRow = matrix[0];
    landIndexes = getAll0s(firstRow);
    //iterate through matrix starting from second row
    for (let k = 1; k < matrix.length; k++) {
        let currRow = matrix[k];
        let currRowIndexes = getAll0s(currRow);
        let toBeContinued = false;
        for (idx of landIndexes) {
            let downPath = currRowIndexes.includes(idx);
            if (k === matrix.length - 1 && downPath) {
                return true;
            }
            if (downPath) {
                landIndexes = currRowIndexes;
                toBeContinued = true;
                break;
            } 
        }
        if (toBeContinued) continue;
    }
    return false;
}

var latestDayToCross = function(row, col, cells) {
    //create matrix of 0s and 1s to indicate land and water units
    let matrix = [];

    for (let i = 0; i < row; i++) {
        matrix.push(new Array(col).fill(0));
    }
    let lastDay = 0;
    //iterate through cells
    for (let j = 0; j < cells.length; j++) {
        let cell = cells[j];
        //mark matrix with water
        let currRow = cell[0] - 1;
        let currCol = cell[1] - 1;
        matrix[currRow][currCol] = 1;
        let path = possiblePath(matrix);
        //if cannot find possible path, return ith day as lastDay
        if (!path) {
            lastDay = j;
            return lastDay;
        } 
    }
    return lastDay;
};  

// @lc code=end

