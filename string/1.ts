/*
  给定一个大小为 n 的数组 nums ，返回其中的多数元素。多数元素是指在数组中出现次数 大于 ⌊ n/2 ⌋ 的元素。
  你可以假设数组是非空的，并且给定的数组总是存在多数元素。
  示例 1：
    输入：nums = [3,2,3]
    输出：3
  示例 2：
    输入：nums = [2,2,1,1,1,2,2]
    输出：2
*/

// 1. 暴力解法
type ressultObjInfo = {
    [key: string]: number;
}

const majorityElement = (nums: number[]): number => {
    const ressultObj: ressultObjInfo = {};
    nums.forEach(item => {
        if(ressultObj[item] === undefined) {
            ressultObj[item] = 1;
        } else {
            ressultObj[item]++;
        }
    });
    let max = -1;
    let maxNum = null;
    for(let k in ressultObj){
        console.log(ressultObj[k], max);
        if(ressultObj[k] > max){
            max = ressultObj[k];
            maxNum = k;
        }
    }
    return Number(maxNum);
};

// 2. 概率分布
// const majorityElement = (nums: number[]): number => {
//     nums.sort((a, b) => a - b);    
//     return nums[Math.floor(nums.length / 2)];
// }


// 输出结果
// const result = majorityElement([1,9,9,10,1,8,9,8,21,6,9,1,9,10,9]);
// console.log(result);
