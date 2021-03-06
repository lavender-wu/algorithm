/**
 * 题目： 合并两个有序链表
 *      将两个升序链表合并为一个新的 升序 链表并返回。新链表是通过拼接给定的两个链表的所有节点组成的。
 *      输入：1->2->4, 1->3->4
 *      输出：1->1->2->3->4->4
 */

/**
 * 思路: 1.注意审题，入参两个都是升序列表，这就简单多了
 *        遍历第一个列表，将第二个列表第一个参数跟其比较
 *      2.链表的值是val (不要错写成value!!!)
 *      3. [1,([2,4], [1,2,3])] => [1, 1, ([2, 4],[3, 4])] =>[1, 1, 2, ([4], [3, 4])]
 *        =>[1, 1, 2, 3, ([4], [4])] => [1, 1, 2, 3, 4, ([4])] => [1, 1, 2, 3, 4, 4]
 */

var mergeTwoLists = (l1, l2) => {
  // 终止条件
  if (l2 === null) {
    return l1;
  }
  if (l1 === null) {
    return l2;
  }

  // 改变next 指针的指向之后，一定要返回结果链表，返回的链表是一个
  // 这里的分支只能是 if else 必须走一个分支
  if (l1.val < l2.val) {
    l1.next = mergeTwoLists(l1.next, l2);
    return l1;
  } else {
    l2.next = mergeTwoLists(l2.next, l1);
    return l2;
  }
};

// 合并两个有序数组
var mergeTwoArray = function (l1, l2) {
  var i = 0;
  var j = 0;
  var k = 0; // 标记存入res的个数
  var res = [];
  while (i <= l1.length - 1 && j <= l2.length - 1) {
    res[k++] = l1[i] < l2[j] ? l1[i++] : l2[j++];
  }
  // 到这里说明了l1, l2中有一个已经全部取完
  while (i < l1.length) {
    res[k++] = l1[i++];
  }

  while (j < l2.length) {
    res[k++] = l2[j++];
  }
  return res;
};
