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
    //the ith day is the lastDay 
    //create matrix of 0s and 1s to indicate land and water units
    //create possible path to be first column down

    //findPossiblePath(matrix) function
        //iterate through first row in matrix
            //if 0 (land)
                //check second row (left, right, and down for paths)
                //when hit end, return true

        //return false; (no more possible paths)



    //iterate through cells
        //mark matrix with water
        //check if possible path is good, if so continue
        //else
            //find new possible path
            //if cannot find possible path, return ith day 
}; 
// @lc code=end

