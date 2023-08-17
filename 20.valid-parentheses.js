/*
 * @lc app=leetcode.cn id=20 lang=javascript
 * @lcpr version=21913
 *
 * [20] 有效的括号
 */

// @lc code=start
/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    // 字符串长度为奇数
    if (s.length % 2 != 0) {
        return false
    }
    else {
        const pairs = new Map([
            [')', '('], ['}', '{'], [']', '[']
        ])  // map 键值对
        var temp = []
        for (let ch of s) {
            if (pairs.has(ch)) {
                // 取出栈顶元素进行匹配
                if (!temp.length || temp[temp.length - 1] != pairs.get(ch)) {
                    return false
                }
                temp.pop();
            }
            else {
                temp.push(ch);  // 放入栈中预备匹配
            }
        }
    }
    // 栈中没有剩余未匹配的括号 返回true
    return temp.length == 0 ? true : false
};
// @lc code=end



/*
// @lcpr case=start
// "()"\n
// @lcpr case=end

// @lcpr case=start
// "()[]{}"\n
// @lcpr case=end

// @lcpr case=start
// "(]"\n
// @lcpr case=end

 */

