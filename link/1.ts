import { TwoWayLinkNode, twoWayLinkPrint } from '../utils';

/**
 * 双向链表节点结构
 * @class LRUCache
 * @constructor
 * @param capacity 容量
 * @param dummy 头节点
 * @param keyToNode 散列表
 */
class LRUCache {
    capacity: number;
    dummy: TwoWayLinkNode;
    keyToNode: Map<any, any>;
    constructor(capacity: number) {
        this.capacity = capacity;
        this.dummy = new TwoWayLinkNode();
        this.dummy.prev = this.dummy;
        this.dummy.next = this.dummy;
        this.keyToNode = new Map();
    }

    /**
     * 得到缓存
     * @param key 键名
     * @returns 键值
     */
    get(key: number): number {
        const node = this.getNode(key);
        return node ? node.value : -1;
    }
    
    /**
     * 设置缓存
     * @param key 键名
     * @param value 键值
     */
    put(key: number, value: number): void {
        let node = this.getNode(key);
        if (node) {
            node.value = value;
            return;
        }
        node = new TwoWayLinkNode(key, value);
        this.keyToNode.set(key, node);
        this.pushFront(node);
        if (this.keyToNode.size > this.capacity) {
            const backNode = this.dummy.prev as TwoWayLinkNode;
            this.keyToNode.delete(backNode?.key);
            this.remove(backNode);
        }
    }
    
    /**
     * 获取缓存节点
     * @param key 键名
     * @returns 缓存节点
     */
    private getNode(key: number): TwoWayLinkNode | null {
        if (!this.keyToNode.has(key)) return null;
        const node = this.keyToNode.get(key);
        this.remove(node);
        this.pushFront(node);
        return node;
    }

    /**
     * 删除节点
     * @param x 被删除节点
     */
    private remove(x: TwoWayLinkNode): void {
        const { prev, next } = x;
        if(prev?.next && next?.prev){
            (prev as TwoWayLinkNode).next = next;
            (next as TwoWayLinkNode).prev = prev;
        }
    }
    
    /**
     * 添加一个节点
     * @param x 被添加节点
     */
    private pushFront(x: TwoWayLinkNode): void {
        x.prev = this.dummy;
        x.next = this.dummy.next;
        x.prev.next = x;
        (x?.next as TwoWayLinkNode).prev = x;
    }
}

const lRUCache = new LRUCache(3);

lRUCache.put(1, 1);
lRUCache.put(2, 2);
lRUCache.put(3, 3);
lRUCache.get(1);
// lRUCache.put(2, 100);
console.log(twoWayLinkPrint(lRUCache.dummy));

lRUCache.put(0, 0);
console.log(twoWayLinkPrint(lRUCache.dummy));
