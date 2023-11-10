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

    //Get at index
    getValueAtIndex(index) {
        let currentElt = this.head;
        let count = 0;
        if (!this.head) {
            console.log("your linked list is empty");
        } else if (index === 0 && this.head != null) {
            console.log(this.head.value);
        } else {
            while (count < index) {
                currentElt = currentElt.next;
                count++;
            }
            console.log(`Your value at index ${index} is : ${currentElt.value}`);
        }
    }

    //Delete specific element with it's index
    deleteElmentAtIndex(index) {

        /**v
         * Verifier si le linked list est vide
         * si pas vide, et que : 
         * 1- index == 0  sauvegarder l'ancienne valeur et lié le head au next
         * 2- si non, vérifier si la taille de la chaine est supérieure ou égale à l'index+1
         *  si oui, lié le précédent au prochain là bas
         */
        if (index < 0 || index >= this.checkLinkedListSize()) {
            console.log("l'élément que vous recherchez est impossible à trouver");
            return null;
        }

        if (this.head) {
            let deletedNode = null;
            if (index === 0) {
                deletedNode = this.head;
                this.head = this.head.next;
            } else {
                let currentElt = this.head;
                let previousElt = null;
                let count = 0;

                //find previous Elt
                while (currentElt && count != index - 1) {
                    currentElt = currentElt.next;
                    count++;
                }
                deletedNode = currentElt.next;
                console.log(`L'élément supprimé est : ${deletedNode.value}`);
                previousElt = currentElt;
                previousElt.next = currentElt.next.next;
            }
        } else {
            return null;
        }
    }

    //CLear List

    //deleteTail

    //deleteHead
    deleteHead() {
        if (this.head) {
            if (this.checkLinkedListSize() === 1) {
                console.log(`Warning vous allez supprimer le seul noeud votre liste chaînée`);
            } else {
                this.head = this.head.next;
            }
        } else {
            return null;
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
ourTest.append(36);
ourTest.append(129);
// ourTest.prepend(39);
// console.log(ourTest.checkLinkedListSize());
// ourTest.insertAtSpecificIndex(3, 504);

// ourTest.getValueAtIndex(2);
// ourTest.printDatasList();
// console.log(ourTest.checkLinkedListSize());
// ourTest.deleteElmentAtIndex(2);
// console.log("Après suppression");
ourTest.printDatasList();
ourTest.deleteHead();
ourTest.printDatasList();
