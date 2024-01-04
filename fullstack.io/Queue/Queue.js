const LinkedList = require("../linkedList/LinkedList");

// const queueTest = new LinkedList();

class Queue {
    constructor() {
        this.queue = new LinkedList();
    }

    enqueue(value) {
        this.queue.append(value);
    }

    removeHead() {
        const removeHead = this.queue.deleteHead();
        return removeHead ? removeHead.value : null;
    }

    peek() {
        if (!this.queue.head) {
            return null;
        }
        return this.queue.head;
    }

    /**
     * @return {boolean}
     */
    isEmpty() {
        return !this.queue.head;
    }

}


module.exports = Queue;
