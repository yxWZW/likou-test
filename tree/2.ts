/**
 * 给你一棵 完全二叉树 的根节点 root ，求出该树的节点个数。
    输入：root = [1,2,3,4,5,6]
    输出：6

    输入：root = []
    输出：0

    输入：root = [1]
    输出：1
 */
import { TreeNode, arrayToTree } from '../utils';

function countNodes(root: TreeNode | null): number {
    const dfs = (root: TreeNode | null, step: number): number => {
        if (!root) return 0;
        const left = dfs(root.left, step + 1);
        const right = dfs(root.right, step + 1);
        return left + right + 1;
    }
    return dfs(root, 0);
};



const array = [1,2,3,4,5,null, 6];
const tree = arrayToTree(array, 0);
const result = countNodes(tree);
console.log(result);
