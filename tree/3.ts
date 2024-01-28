/**
 * 给定一个非空二叉树的根节点 root , 以数组的形式返回每一层节点的平均值。与实际答案相差 10-5 以内的答案可以被接受。
    输入：root = [3,9,20,null,null,15,7]
    输出：[3.00000,14.50000,11.00000]
    解释：第 0 层的平均值为 3,第 1 层的平均值为 14.5,第 2 层的平均值为 11 。
    因此返回 [3, 14.5, 11] 。

    输入：root = [3,9,20,15,7]
    输出：[3.00000,14.50000,11.00000]
 */

import { TreeNode, arrayToTree } from '../utils';

const averageOfLevels = (root: TreeNode | null): number[] => {
    if (root === null) return [];
    const queue = [root]; // 队列
    const result = [];

    while (queue.length !== 0) {
        let size = queue.length;
        let sum = 0; // 同一层级value之和
        let num = 0; // 同一层级value个数
        while (size-- > 0) {
            const node: TreeNode = queue.shift() as TreeNode;
            sum += node?.value || 0;
            num++;
            if (node?.left) queue.push(node.left);
            if (node?.right) queue.push(node.right);
        }
        result.push(Number((sum / num).toFixed(5)));
    }
    return result;
}

const array = [3,9,20,null,null,15,7];
const tree = arrayToTree(array, 0);

const result = averageOfLevels(tree);
console.log(result);