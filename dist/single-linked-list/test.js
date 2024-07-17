"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const list_node_1 = require("./list-node");
const problems_1 = require("./problems");
let node4 = new list_node_1.default(70);
let node3 = new list_node_1.default(15, node4);
let node2 = new list_node_1.default(36, node3);
let head = new list_node_1.default(12, node2);
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
console.log((0, problems_1.findNthNodeFromEnd)(head, 2));
