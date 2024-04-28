
/*
Qs Link:- https://www.algoexpert.io/questions/largest-range
Image Ref: LargestRange.png
*/
/********************************* ANSWER ***********************************/
function largestRange(array) {
    // Write your code here.
    let dict = {};
    let left = 0, right = 0, cur = -1, max = -1;
    let ans = [];
  
    //Adding all elements into a dictionary
    for(let i=0; i<array.length; i++)
    {
      dict[array[i]] = false;
    }
  
    for(let i=0; i<array.length; i++){
      if(dict[array[i]] == false){
        dict[array[i]] = true;
        left = array[i];
  
        while(true){
          left--;
          if(dict[left] == false){
            dict[left] = true;
            continue;
          }
          else{
            left++;
            break;
          }
        }
        
        right = array[i];
  
        while(true)
        {
          right++;
          if(dict[right] == false){
            dict[right] = true;
            continue;
          }
          else{
            right--;
            break;
          }
        }
  
        cur = right-left;
        if(cur > max){
          ans = [left, right];
          max = cur;
        }
      }
    }
  
    return ans;
  }
  
  // Do not edit the line below.
  exports.largestRange = largestRange;
  