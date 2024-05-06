/* LeetCode URL: https://leetcode.com/problems/group-anagrams/description/
Given an array of strings strs, group the anagrams together. You can return the answer in any order.

An Anagram is a word or phrase formed by rearranging the letters of a different word or phrase, typically using all the original letters exactly once.

 

Example 1:

Input: strs = ["eat","tea","tan","ate","nat","bat"]
Output: [["bat"],["nat","tan"],["ate","eat","tea"]]
Example 2:

Input: strs = [""]
Output: [[""]]
Example 3:

Input: strs = ["a"]
Output: [["a"]]
 

Constraints:

1 <= strs.length <= 104
0 <= strs[i].length <= 100
strs[i] consists of lowercase English letters.

*/

/********************************* ANSWER ***********************************/
/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {

    let sstrs = [];
    let ans = {};
    let final = [];

    for(let i=0; i<strs.length; i++)
     sstrs.push(strs[i].split('').sort());

    for(let i=0; i<strs.length; i++)
    {
        if(!ans[sstrs[i]])
        ans[sstrs[i]] = [];

     var value = ans[sstrs[i]];
     value.push(strs[i]);
    }

     for(var key in ans)
      final.push(ans[key]);

      return final;
};