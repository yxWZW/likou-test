/**
 * 
  给你两棵二叉树的根节点 p 和 q ，编写一个函数来检验这两棵树是否相同。
  如果两个树在结构上相同，并且节点具有相同的值，则认为它们是相同的。
  
  输入：p = [1,2,3], q = [1,2,3]
  输出：true

  输入：p = [1,2], q = [1,null,2]
  输出：false

  输入：p = [1,2,1], q = [1,1,2]
  输出：false
 */

import { TreeNode, arrayToTree } from '../utils';

function isSameTree(p: TreeNode | null, q: TreeNode | null): boolean {
    // 如果两个节点都为空，说明当前子树相等
    if (p === null && q === null) return true;

    // 如果一个节点为空，另一个节点不为空，说明当前子树不相等
    if (p === null || q === null) return false;

    // 如果节点值不相等，说明当前子树不相等
    if (p.value !== q.value) return false;

    // 递归判断左右子树是否相等
    return isSameTree(p.left, q.left) && isSameTree(p.right, q.right);
};

const arrayP = [1, 2, 3];
const arrayQ = [1, null, 3];
const treeP = arrayToTree(arrayP, 0);
const treeQ = arrayToTree(arrayQ, 0);
console.log(treeP, treeQ);

// const result = isSameTree(treeP, treeQ);
// console.log(result);
