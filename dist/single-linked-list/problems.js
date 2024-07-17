"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.findNthNodeFromEnd = findNthNodeFromEnd;
//Find nth node from the end of a Linked List
function findNthNodeFromEnd(linkedList, nth_element) {
    let pNthNode = linkedList;
    let pTemp = linkedList;
    let nMoveCount = 0;
    while (nMoveCount != nth_element && pTemp != null) {
        nMoveCount++;
        pTemp = pTemp.next;
    }
    while (pTemp != null && pNthNode != null) {
        pTemp = pTemp.next;
        pNthNode = pNthNode.next;
    }
    if (pNthNode)
        return pNthNode;
    return null;
}
