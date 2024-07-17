import ListNode from "./list-node";


//Find nth node from the end of a Linked List
export function findNthNodeFromEnd(linkedList: ListNode | null, nth_element: number): ListNode | null {
    let pNthNode = linkedList;
    let pTemp = linkedList;
    let nMoveCount = 0;

    while (nMoveCount != nth_element && pTemp != null) {
        nMoveCount++;
        pTemp = pTemp.next;
    }

    while (pTemp != null && pNthNode != null) {
        pTemp = pTemp.next;
        pNthNode = pNthNode.next
    }

    if (pNthNode)
        return pNthNode;
    return null
}


