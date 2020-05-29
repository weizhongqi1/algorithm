
/**
 * 创建链表节点
 * @param {*} value  链表节点的值
 */

function Node(value) {
    this.value = value;
    this.next = null;
}

var a = new Node('a');
var b = new Node('b');
var c = new Node('c');
var d = new Node('d');

// console.log(a);
a.next = b;
b.next = c;
c.next = d;

/**
 * 遍历链表
 * @param {*} root  传入链表根节点
 */
function print(root){
    if(!root) return;
    console.log(root.value);
    print(root.next);
}

/**
 * 获取链表的长度
 * @param {*} root  传入链表根节点
 */
function getLength(root){
    if(!root) return 0;
    return 1 + getLength(root.next);
}

/**
 * 根据index获取链表在index位置上的值
 * @param {*} root 链表根节点
 * @param {*} index 获取链表的某个位置
 */
function getValue(root, index){
    function _getValue(node, i){
        if(!node) return null;
        if(i === index) return node
        return _getValue(node.next, i + 1)
    }
    return _getValue(root, 0);
}
/**
 * 通过下标设置链表中的值
 * @param {*} root 链表根节点
 * @param {*} index 下标
 * @param {*} value 值
 */
function setValue(root, index, value){
    function _setValue(node, i){
        if(!node) return null;
        if(i === index)  node.value = value;
        return _setValue(node.next, i + 1);
    }
    return _setValue(root, 0);
}

/**
 * 在链表某个节点后新增节点
 * @param {*} root 链表根节点
 * @param {*} index 某个节点
 * @param {*} value 新增节点的value
 */
function addNode(root, index, value){

    function _addNode(node, i){
        if(!node) return null;
        if(i === index){
            var newNode = new Node(value);
            newNode.next = node.next;
            node.next = newNode;
        }
        return _addNode(node.next, i + 1);
    }
    return _addNode(root, 0);
}

/**
 * 在链表的末尾添加一个节点
 * @param {*} root  链表根节点
 * @param {*} value 添加的节点
 */
function pushNode(root, value){
    if(!root) return null;
    if(!root.next){
        var newNode = new Node(value);
        root.next = newNode;
        return ;
    }
    return pushNode(root.next, value);
}

/**
 * 删除一个链表节点
 * @param {*} root 链表根节点
 * @param {*} value 要删除节点的value
 */
function deleteNode(root, value){
    if( !root || !root.next ) return null;
    if(root.next.value === value){
        root.next = root.next.next;
        return root.next;
    }
    return deleteNode(root.next, value);
}

/**
 * 链表的倒序
 * @param {*} root 链表的根节点
 */
function reverseLink (root){
    if(!root || !root.next) return root;
    if(!root.next.next){
        var temp = root.next;
        root.next.next = root;
        root.next = null;
        return temp;
    }else{
        var temp = reverseLink(root.next);
        root.next.next = root;
        root.next = null;
        return temp;
    }
}
var temp = reverseLink(a)
// deleteNode(a, 'c');
// addNode(a, 2, 'abc');
// pushNode(d, 'abc');
print(temp);