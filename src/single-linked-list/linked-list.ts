import ListNode from "./list-node";

//Length of linked-list
export function listLength(head: ListNode | null): number {
    let current = head;
    let count = 0;

    while (current != null) {
        count++;
        current = current.next;
    }
    return count;
}

//Inserting a Node in Singly Linked List at the Beginning



