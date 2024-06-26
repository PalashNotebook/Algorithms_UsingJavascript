/* Leetcode URL: https://leetcode.com/problems/repeated-dna-sequences/description/

The DNA sequence is composed of a series of nucleotides abbreviated as 'A', 'C', 'G', and 'T'.

For example, "ACGAATTCCG" is a DNA sequence.
When studying DNA, it is useful to identify repeated sequences within the DNA.

Given a string s that represents a DNA sequence, return all the 10-letter-long sequences (substrings) that occur more than once in a DNA molecule. You may return the answer in any order.

 

Example 1:

Input: s = "AAAAACCCCCAAAAACCCCCCAAAAAGGGTTT"
Output: ["AAAAACCCCC","CCCCCAAAAA"]
Example 2:

Input: s = "AAAAAAAAAAAAA"
Output: ["AAAAAAAAAA"]
 

Constraints:

1 <= s.length <= 105
s[i] is either 'A', 'C', 'G', or 'T'.
*/

/********************************* ANSWER ***********************************/
/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function(s) {
    let visited = new Set();
    let ans = new Set();
    let i=0;

    while(i+10 <= s.length)
    {
        let ns = s.slice(i, i+10);
        if(visited.has(ns))
        ans.add(ns);
        else
        visited.add(ns);

        i++;
    }

    return [...ans];
};