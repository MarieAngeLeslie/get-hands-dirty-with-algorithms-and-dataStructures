"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.listLength = listLength;
exports.printList = printList;
exports.insertInLinkedList = insertInLinkedList;
exports.deleteNodeFromLinkedList = deleteNodeFromLinkedList;
//Length of linked-list
function listLength(head) {
    let current = head;
    let count = 0;
    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}
//print linked list : 
function printList(head) {
    let current = head;
    let output = "";
    while (current != null) {
        output += current.data + " -> ";
        current = current.next;
    }
    console.log(output);
}
//Inserting a Node in Singly Linked List at any position
//we assume that 1 is first position in list
function insertInLinkedList(linkedListHead, data, position) {
    if (linkedListHead == null) {
        console.log("you have empty linked list");
        return null;
    }
    if (position <= 0 || position > listLength(linkedListHead) + 1) {
        console.log("you can't add element at this postion");
        return linkedListHead;
    }
    //add at beginning
    if (position === 1) {
        data.next = linkedListHead;
        linkedListHead = data;
        return linkedListHead;
    }
    //add to any postion
    let current = linkedListHead;
    let iterator = 1;
    let previousNode;
    while (current.next !== null && iterator < position) {
        iterator++;
        previousNode = current;
        current = current.next;
    }
    if (previousNode != null) {
        data.next = previousNode.next;
        previousNode.next = data;
    }
    return linkedListHead;
}
function deleteNodeFromLinkedList(linkedListHead, position) {
    if (linkedListHead == null) {
        console.log("you have empty linked list");
        return null;
    }
    if (position <= 0 || position > listLength(linkedListHead)) {
        console.log("you can't delete element at this postion");
        return linkedListHead;
    }
    //delete first node
    if (position === 1) {
        let newLinkedListHead = linkedListHead.next;
        return newLinkedListHead;
    }
    //delete node at any position
    let current = linkedListHead;
    let iterator = 1;
    let previousNode = null;
    while (current !== null && iterator < position) {
        iterator++;
        previousNode = current;
        current = current.next;
    }
    if (previousNode && current) {
        previousNode.next = current.next;
    }
    return linkedListHead;
}
