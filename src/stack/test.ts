import ListNode from "../single-linked-list/list-node";
import { push, pop } from "./operations/push";
import { printList } from "../single-linked-list/linked-list";

let node4 = new ListNode(70);
let node3 = new ListNode(15, node4);
let node2 = new ListNode(36, node3);
let head = new ListNode(12, node2);

//push test
printList(push(head, 126))

//pop test
const stackPop = pop(head);
console.log("popped :")
console.log(stackPop.poppedElement)
console.log("Nouvelle Stack :")
console.log(printList(stackPop.newStack));
