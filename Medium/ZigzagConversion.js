/* LeetCode URL: https://leetcode.com/problems/zigzag-conversion/description/
The string "PAYPALISHIRING" is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

P   A   H   N
A P L S I I G
Y   I   R
And then read line by line: "PAHNAPLSIIGYIR"

Write the code that will take a string and make this conversion given a number of rows:

string convert(string s, int numRows);
 

Example 1:

Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
Example 2:

Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
Example 3:

Input: s = "A", numRows = 1
Output: "A"
*/

/********************************* ANSWER ***********************************/
/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function(s, numRows) {
    let ans = [];
    let ansS = "";
    let charIndex = 0;
    let box = 0;
    let zig = true;
    
    for(let i=0; i<numRows; i++)
    {
        let array = [];
        ans.push(array);
    }
    while(true)
    {
        if(charIndex == s.length)
        break;
        if(zig)
        {
            for(let box =0; box<numRows; box++)
            {
                ans[box].push(s[charIndex]);
                charIndex++;

                 if(charIndex == s.length)
                    break;
            }
        }
        else
        {

            for(box = numRows-2; box > 0; box--)
            {
                ans[box].push(s[charIndex]);
                charIndex++;

                 if(charIndex == s.length)
                    break;
            }
        }

        zig = !zig;
    }
    for(let i=0; i<numRows; i++)
    {
        for(let j=0; j<ans[i].length; j++)
        ansS += ans[i][j];
    }
    return ansS;
};

