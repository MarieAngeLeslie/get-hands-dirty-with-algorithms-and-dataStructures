import ListNode from "./list-node";
import { listLength, insertInLinkedList, printList, deleteNodeFromLinkedList } from "./linked-list";
import { findNthNodeFromEnd } from "./problems";

let node4 = new ListNode(70);
let node3 = new ListNode(15, node4);
let node2 = new ListNode(36, node3);
let head = new ListNode(12, node2);

//TEST SIZE OF LINKED-LIST
//console.log("TEST SIZE OF LINKED-LIST")
//console.log(listLength(head));


//TEST ADD ELEMENT IN LINKED-LIST AT SPECIFIC POSITION
//console.log("TEST ADD ELEMENT IN LINKED-LIST AT SPECIFIC POSITION");
// let newdata = new ListNode(69);
// console.log(printList(insertInLinkedList(head, newdata, 3)));


//TEST DELETE ELEMENT IN LINKED-LIST AT SPECIFIC POSITION
// console.log("TEST DELETE ELEMENT IN LINKED-LIST AT SPECIFIC POSITION")
// printList(head);
// printList(deleteNodeFromLinkedList(head, 3));

console.log(findNthNodeFromEnd(head, 2));
