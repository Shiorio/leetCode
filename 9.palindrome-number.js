/*
 * @lc app=leetcode.cn id=9 lang=javascript
 * @lcpr version=21913
 *
 * [9] 回文数
 */

// @lc code=start
/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function(x) {
    if (x < 0) {
        return false
    }
    else {
        let str = x.toString()
        let newStr = str.split('').reverse().join('')
        if (str == newStr) {
            return true
        }
        else {
            return false
        }
    }
};
// @lc code=end


/*
// @lcpr case=start
// 121\n
// @lcpr case=end

// @lcpr case=start
// -121\n
// @lcpr case=end

// @lcpr case=start
// 10\n
// @lcpr case=end

 */


// @lcpr-after-debug-begin
module.exports = isPalindrome;
// @lcpr-after-debug-end