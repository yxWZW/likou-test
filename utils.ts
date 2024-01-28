
/**
 * 二叉树节点结构
 */
export class TreeNode {
    value: number | null;
    left: TreeNode | null;
    right: TreeNode | null;
    constructor(value: number | null) {
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

/**
 * 将数组转化为二叉树
 * @param nums 数组
 * @param index 起始索引值
 * @returns 二叉树根节点
 */
export const arrayToTree = (nums: Array<number | null>, index: number): TreeNode | null => {
    if (index >= nums.length || nums[index] === null) return null;
    const node = new TreeNode(nums[index]);
    node.left = arrayToTree(nums, 2 * index + 1);
    node.right = arrayToTree(nums, 2 * index + 2);
    return node;
}

/**
 * 双向链表节点结构
 */

/**
 * 双向链表节点结构
 * @class TwoWayLinkNode
 * @constructor
 * @param key 键名
 * @param value 键值
 * @param prev 上节点
 * @param next 下节点
 */
export class TwoWayLinkNode {
    key: number;
    value: number;
    prev: TwoWayLinkNode | null;
    next: TwoWayLinkNode | null;
    constructor(key = Infinity, value = Infinity) {
        this.key = key;
        this.value = value;
        this.prev = null;
        this.next = null;
    }
}

/**
 * 打印双向链表
 * @param hear 双向链表节点
 */
export const twoWayLinkPrint = (hear: TwoWayLinkNode) => {
    let left: TwoWayLinkNode = hear.next as TwoWayLinkNode;
    let right: TwoWayLinkNode = hear.next as TwoWayLinkNode;
    const result = [];

    while(true){
        result.push(`${left.key}->${left.value}`);
        left = left.next as TwoWayLinkNode;
        right = right.next?.next as TwoWayLinkNode;
        if(left === right) break;
    }
    return result;
}