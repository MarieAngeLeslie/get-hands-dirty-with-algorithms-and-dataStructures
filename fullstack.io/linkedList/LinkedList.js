const LinkedListNode = require('./LinkedListNode');

class LinkedList {

    constructor() {
        /**@var LinkedListNode */
        this.head = null;
        /**@var LinkedListNode  */
        this.tail = null;
        this.size = 0
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
ourTest.prepend(39);

ourTest.printDatasList();