/* Leetcode problem : https://leetcode.com/problems/add-two-numbers/description/ 

You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse order, and each of their nodes contains a single digit. Add the two numbers and return the sum as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Example 1:
Input: l1 = [2,4,3], l2 = [5,6,4]
Output: [7,0,8]
Explanation: 342 + 465 = 807.

Example 2:
Input: l1 = [0], l2 = [0]
Output: [0]

Example 3:
Input: l1 = [9,9,9,9,9,9,9], l2 = [9,9,9,9]
Output: [8,9,9,9,0,0,0,1]

*/
/********************************* ANSWER ***********************************/
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let l3 = new ListNode(0);
    let l4 = l3;
    let rem = 0;
    while(true)
    {
        let val = 0;
        let nl = {};
        if(l1 != null && l2 != null)
        {
            val =  Math.round((l1.val + l2.val + rem) % 10);
            rem =  Math.floor((l1.val + l2.val + rem) / 10);
        }
        else if(l1 != null)
        {
            val =  Math.round((l1.val + rem) % 10);
            rem =  Math.floor((l1.val + rem) / 10);
        }
        else if(l2 != null)
        {
            val =  Math.round((l2.val + rem) % 10);
            rem =  Math.floor((l2.val + rem) / 10);
        }
        else if(rem > 0)
        {
           val = rem;
           rem = 0;
        }
        else
        {
            break;
        }

        if(l1 != null)
         l1 = l1.next;

         if(l2 != null)
         l2 = l2.next;

        l4.next = new ListNode(val);
        l4 = l4.next;

    }
    return l3.next;
};
