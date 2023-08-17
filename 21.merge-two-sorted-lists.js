/*
 * @lc app=leetcode.cn id=21 lang=javascript
 * @lcpr version=21913
 *
 * [21] 合并两个有序链表
 */

// @lc code=start
/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
var mergeTwoLists = function(list1, list2) {
    // 链表转数组
    var arr1 = listToArray(list1)
    var arr2 = listToArray(list2)

    // 合并两个数组
    var arr = arr1.concat(arr2)
    // 排序
    arr.sort((a, b) => a - b)

    // 数组转链表
    return arrayToList(arr)
};

// 链表转数组
function listToArray(head) {
    const arr = []
    while(head) {
        arr.push(head.val)
        head = head.next
    }
    return arr
}

// 数组转链表
function arrayToList(arr) {
    if(arr.length === 0) {
        return null
    }
    
    const head = new ListNode(arr[0])
    let p = head
    for(let i=1; i<arr.length; i++) {
        p = p.next = new ListNode(arr[i])
    }
    return head
}
// @lc code=end



/*
// @lcpr case=start
// [1,2,4]\n[1,3,4]\n
// @lcpr case=end

// @lcpr case=start
// []\n[]\n
// @lcpr case=end

// @lcpr case=start
// []\n[0]\n
// @lcpr case=end

 */

