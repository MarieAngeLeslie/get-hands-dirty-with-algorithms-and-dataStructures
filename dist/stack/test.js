"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_node_1 = require("../single-linked-list/list-node");
const push_1 = require("./operations/push");
const linked_list_1 = require("../single-linked-list/linked-list");
let node4 = new list_node_1.default(70);
let node3 = new list_node_1.default(15, node4);
let node2 = new list_node_1.default(36, node3);
let head = new list_node_1.default(12, node2);
//push test
(0, linked_list_1.printList)((0, push_1.push)(head, 126));
//pop test
const stackPop = (0, push_1.pop)(head);
console.log("popped :");
console.log(stackPop.poppedElement);
console.log("Nouvelle Stack");
console.log((0, linked_list_1.printList)(stackPop.newStack));
