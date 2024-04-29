
/*
Qs Link:- https://www.algoexpert.io/questions/find-closest-value-in-bst
Image Ref: ClosestValueBST_AE.png
*/

/********************************* ANSWER ***********************************/
function findClosestValueInBst(tree, target) {
  
    var closest;
    var closestVal;
      
    while(true)
      {
      // Write your code here.
      if(tree.value == target)
        return tree.value;
      
      var diff = Math.abs(tree.value-target);
      if(closest != null)
      {
        
        if(diff < closestVal)
        {
          closestVal = diff;
          closest = tree;
        }
      }
      else
      {
         closestVal = diff;
          closest = tree;
      }
    
      if(target < tree.value && tree.left != null)
      {
        tree = tree.left;
      }
      else if(target > tree.value && tree.right != null)
      {
        tree = tree.right;
      }
      else 
        return closest.value;
      }
    }
    
    
    // This is the class of the input tree. Do not edit.
    class BST {
      constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
      }
    }
    
    // Do not edit the line below.
    exports.findClosestValueInBst = findClosestValueInBst;
    