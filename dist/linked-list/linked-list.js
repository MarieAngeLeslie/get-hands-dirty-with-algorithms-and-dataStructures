"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLength = listLength;
//length of linked-list
function listLength(head) {
    let current = head;
    let count = 0;
    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}
