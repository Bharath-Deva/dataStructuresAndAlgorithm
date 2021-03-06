// get to know about the condition in insert and delete functions

class linkedList {
    constructor(value) {
        this.head = {
            value: value,
            next: null
        }
        this.tail = this.head;
        this.length = 0;
    }

    append(value) {
        let newNode = {
            value: value,
            next: null
        }
        this.tail.next = newNode;
        this.tail = newNode
        this.length++;
    }

    prepend(value) {
        let newNode = {
            value: value,
            next: this.head
        }
        this.head = newNode
        this.length++
    }

    print() {
        let arr = [];
        let currentNode = this.head
        while (currentNode != null) {
            arr.push(currentNode.value)
            currentNode = currentNode.next
        }
        console.log(arr);
    }

    insert(index, value) {
        const newNode = {
            value: value,
            next: null
        }
        if (index == 0) {
            newNode.next = this.head
            this.head = newNode
        }
        else if (index >= this.length) {
            this.tail.next = newNode
            this.tail = newNode
        }
        else {
            let i = 0
            currentNode = this.head
            while (i < (index + 1)) {
                currentNode = currentNode.next
                i++
            }
            newNode.next = currentNode.next
            currentNode.next = newNode
        }
        this.length++
        this.print()
    }

    delete(index) {
        if (index == 0) {
            this.head = this.head.next;
        }
        else {
            let i = 0
            let currentNode = this.head
            while (i < (index - 1)) {
                currentNode = currentNode.next
                i++
            }
            let indexNode = currentNode.next
            currentNode.next = indexNode.next
        }
        this.print()
        this.length--;

    }

    traverse(index) {
        let i = 0
        let currentNode = this.head
        while (i !== index) {
            currentNode = currentNode.next
        }
    }
}



const car = new linkedList(6);
car.append(34);
car.prepend(99)
car.print()
car.insert(3, 9)
console.log(car.length);
car.insert(0, 5)
console.log(car.length);
car.delete(2)
console.log(car.length);
// car.print()
// console.log(car);
