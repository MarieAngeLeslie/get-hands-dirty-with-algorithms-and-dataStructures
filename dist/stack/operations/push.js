"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.push = push;
const list_node_1 = require("../../single-linked-list/list-node");
function push(linkedListHead, newStackElement) {
    if (!linkedListHead)
        return null;
    let temp = new list_node_1.default(newStackElement);
    temp.next = linkedListHead;
    return temp;
}
