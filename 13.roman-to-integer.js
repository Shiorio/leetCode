/*
 * @lc app=leetcode.cn id=13 lang=javascript
 * @lcpr version=21913
 *
 * [13] 罗马数字转整数
 */

// @lc code=start
/**
 * @param {string} s
 * @return {number}
 */
var romanToInt = function(s) {
    const symbolValues = new Map([
        ['I', 1], ['V', 5], ['X', 10], ['L', 50], ['C', 100], ['D', 500], ['M', 1000]
    ])
    var sum = 0;
    for (var i = 0; i < s.length; i++) {
        if (symbolValues.has(s[i])) {
            var current = symbolValues.get(s[i])
            if (i < s.length - 1 && current < symbolValues.get(s[i + 1])) {
                sum -= current
            }
            else {
                sum += current
            }
        }
        
    }
    return sum
};
// @lc code=end



/*
// @lcpr case=start
// "III"\n
// @lcpr case=end

// @lcpr case=start
// "IV"\n
// @lcpr case=end

// @lcpr case=start
// "IX"\n
// @lcpr case=end

// @lcpr case=start
// "LVIII"\n
// @lcpr case=end

// @lcpr case=start
// "MCMXCIV"\n
// @lcpr case=end

 */

