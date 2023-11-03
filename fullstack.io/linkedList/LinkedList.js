const LinkedListNode = require('./LinkedListNode');

class LinkedList {

    constructor() {
        /**@var LinkedListNode */
        this.head = null;
        /**@var LinkedListNode  */
        this.tail = null;
    }

    checkLinkedListSize() {
        let current = this.head;
        let size = 0;
        while (current) {
            size++;
            current = current.next;
        }
        return size;
    }

    prepend(value) {
        const newNode = new LinkedListNode(value, this.head);
        this.head = newNode;

    }

    append(value) {
        const newNode = new LinkedListNode(value);
        let current = this.head;
        if (!this.head) {
            this.head = newNode;
        } else {
            while (current.next) {
                current = current.next;
            }
            current.next = newNode;
        }
    }

    insertAtSpecificIndex(index, value) {
        let newNode = new LinkedListNode(value);
        let currentElt = this.head;
        let count = 0;
        if (index < 0 || index > this.checkLinkedListSize()) {
            console.log("y're trying to insert at wrong position");
            console.log("Bye!");
            return;
        } else if (index === 0) {
            this.prepend(value);
        } else {
            while (count < index) {
                if (count === index - 1) {
                    break;
                }
                currentElt = currentElt.next;
                count++;
            }
        }
        newNode.next = currentElt.next;
        currentElt.next = newNode;
    }

    printDatasList() {
        let current = this.head;
        while (current) {
            console.log(current.value);
            current = current.next;
        }
    }

}

const ourTest = new LinkedList();
ourTest.append(60);
ourTest.append(170);
ourTest.append(36);
ourTest.append(129);
ourTest.prepend(39);
// console.log(ourTest.checkLinkedListSize());
ourTest.insertAtSpecificIndex(3, 504);

ourTest.printDatasList();