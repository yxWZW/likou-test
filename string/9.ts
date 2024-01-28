/*
    给你一个非负整数数组 nums ，你最初位于数组的 第一个下标 。数组中的每个元素代表你在该位置可以跳跃的最大长度。
    判断你是否能够到达最后一个下标，如果可以，返回 true ；否则，返回 false 。

    示例 1：
        输入：nums = [2,3,1,1,4]
        输出：true
        解释：可以先跳 1 步，从下标 0 到达下标 1, 然后再从下标 1 跳 3 步到达最后一个下标。

    示例 2：
        输入：nums = [3,2,1,0,4]
        输出：false
        解释：无论怎样，总会到达下标为 3 的位置。但该下标的最大跳跃长度是 0 ， 所以永远不可能到达最后一个下标。
 */
// 跳跃游戏1
// const canJump = (nums: number[]): boolean => {
//     let k: number = 0;
//     for (let i = 0; i < nums.length; i++) {
//         if (i > k) return false;
//         k = Math.max(k, i + nums[i]);
//     }
//     return true;
// }


// const result = canJump([8,2,4,4,4,9]);
// console.log(result);







/**
    给定一个长度为 n 的 0 索引整数数组 nums。初始位置为 nums[0]。
    每个元素 nums[i] 表示从索引 i 向前跳转的最大长度。换句话说，如果你在 nums[i] 处，你可以跳转到任意 nums[i + j] 处:
        0 <= j <= nums[i] 
        i + j < n
    返回到达 nums[n - 1] 的最小跳跃次数。生成的测试用例可以到达 nums[n - 1]。

    示例 1:
        输入: nums = [2,3,1,1,4]
        输出: 2
        解释: 跳到最后一个位置的最小跳跃数是 2。
            从下标为 0 跳到下标为 1 的位置，跳 1 步，然后跳 3 步到达数组的最后一个位置。

    示例 2:
        输入: nums = [2,3,0,1,4]
        输出: 2
 */

// 跳跃游戏2
function jump(nums: number[]): number {
    const len: number = nums.length;
    let ans: number = 0;
    for (let i = 0; i < len - 1;) {
        // 当前位置能跳跃的最远位置
        const curMax: number = i + nums[i];
        // 如果已经覆盖了最后一个位置，则跳到最后一个位置，退出遍历
        if (curMax >= len - 1) {
            ans++;
            break;
        }
        // 否则，寻找应该跳到哪个位置，下一次能跳的更远
        let nextMax = 0;
        let nextMaxIndex = -1;
        for (let j = i + 1; j <= curMax; j++) {
            const next = j + nums[j];
            if (next > nextMax) {
                // 找到下一次哪个能跳的更远
                nextMax = next;
                nextMaxIndex = j;
            }
        }
        // 跳到下一次能跳的更远的位置
        i = nextMaxIndex;
        ans++;
    }
    return ans;
};

// const result = jump([2,3,0,1,4]);
// console.log(result);
