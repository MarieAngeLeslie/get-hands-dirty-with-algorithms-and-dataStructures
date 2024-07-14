import ListNode from "./list-node";
import { listLength } from "./linked-list";

let node4 = new ListNode(50);
let node3 = new ListNode(15, node4);
let node2 = new ListNode(15, node3);
let head = new ListNode(12, node2);

console.log(listLength(head));