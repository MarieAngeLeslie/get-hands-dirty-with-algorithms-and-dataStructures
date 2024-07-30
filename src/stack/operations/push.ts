import ListNode from "../../single-linked-list/list-node";


export function push(linkedListHead: ListNode | null, newStackElement: number) {
    if (!linkedListHead)
        return null

    let temp: ListNode = new ListNode(newStackElement)
    temp.next = linkedListHead;
    return temp
}