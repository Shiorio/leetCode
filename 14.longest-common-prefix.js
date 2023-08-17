/*
 * @lc app=leetcode.cn id=14 lang=javascript
 * @lcpr version=21913
 *
 * [14] 最长公共前缀
 */

// @lc code=start
/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {
    if (strs.length == 0) {
        return ''
    }
    var prefixStr = strs[0]  // 公共前缀 初始化
    for (var i = 1; i < strs.length; i++) {
        var currentStr = strs[i]
        // 两两寻找公共前缀
        for (var j = 0; j < prefixStr.length && j < currentStr.length; j++) {
            if (prefixStr[j] != currentStr[j]) {
                break;
            }
        }
        prefixStr = prefixStr.substring(0, j);  // 截取到公共部分
        if (prefixStr == '') {
            break
        }
    }
    return prefixStr
};
// @lc code=end



/*
// @lcpr case=start
// ["flower","flow","flight"]\n
// @lcpr case=end

// @lcpr case=start
// ["dog","racecar","car"]\n
// @lcpr case=end

 */

