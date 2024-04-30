/*
Given a string s, return the longest 
palindromic substring in s.

Example 1:

Input: s = "babad"
Output: "bab"
Explanation: "aba" is also a valid answer.
Example 2:

Input: s = "cbbd"
Output: "bb"
 
Constraints:

1 <= s.length <= 1000
s consist of only digits and English letters.

*/

/********************************* ANSWER ***********************************/
function longestPalindromicSubstring(string) {
    // Write your code here.
    let s = string;
    let list = [];
    let max = 0;
    let ans = "";
    let ansIndexes = [];
  
      if(s.length == 1)
      return s;
      else
      ans = s[0];
  
      for(let i=1; i<s.length;)
      {
        for(let c=0; c<=1; c++)
        {
          let left = -1;
          let right = i;
          
          if(c==0 && s[i] == s[i-1])
          left = i-1;
  
         if(c==1 && i-2 >=0 && s[i] == s[i-2])
          left = i-2;
          
         if(left != -1)
         {
          while(true)
          {
              if(left < 0 || right >= s.length)
              {
                  break;
              }
  
              if(s[left] == s[right])
              {
                  if(right-left > max)
                  {
                      max = right-left;
                      ansIndexes = [left, right];
                      ans = "";
                  }
              }
              else
              {
                 break;
              }
              left--;
              right++;
          }
         }
        }
        i++;
      }
      for(let i=ansIndexes[0]; i<=ansIndexes[1]; i++)
      {
          ans += s[i];
      }
      return ans;
  }
  
  // Do not edit the line below.
  exports.longestPalindromicSubstring = longestPalindromicSubstring;
  