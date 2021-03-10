// 1.迭代法
var reverse = function (head) {
  // 定义上一个指针和当前指针
  let [prev, cur] = [null, head];
  // 遍历直到当前指针不存在则结束
  while (cur) {
    let temp = cur.next; // 中间遍历缓存当前指针的下一个指针
    cur.next = prev; // 改变当前指针指向
    prev = cur; // 更新prev和cur
    cur = temp;
    // 用es 可表达为 [cur.next, prev, cur] = [prev, cur, cur.next]
  }

  // 遍历结束后 prev则为头指针
  return prev;
};

// 2.自递归法 假设除首指针以外，其他已经反转好了
// 使反转好的链表尾指针指向当前指针，当前指针指向null，以此类推
var reverseList = function (head) {
  // 终止条件
  if (!head || !head.next) {
    return head;
  }

  const next = head.next; // next节点 反转后是最后一个节点
  const reversedHead = reverseList(next); // 反转除头指针以外的链表的头指针
  next.next = head; // next.next即反转后链表的尾指针，使其指向头指针
  // head.next = null，使最右边每次翻转的结束，尾指针都指向null
  head.next = null; 
  return reversedHead;  // 返回翻转后的链表（即链表的头指针）
};
