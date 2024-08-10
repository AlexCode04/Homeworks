class Node {
    constructor(title, description, points, next = null) {
        this.title = title;
        this.description = description;
        this.points = points;
        this.next = next;
        this.prev = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    append(title, description, points) {
        const newNode = new Node(title, description, points);

        if (!this.head) {
            this.head = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
        }

        this.tail = newNode;
    }

    print() {
        let node = this.head;
        while (node != null) {
            console.log(`Title: ${node.title} | Description: ${node.description} | Points to Next: ${node.points}`);
            node = node.next;
        }
    }
}


const todoList = new LinkedList();

todoList.append("JavaScript", "Aprender JavaScript", 5);
todoList.append("Download Node", "Descargar Nodejs para empezar a desarrollar", 3);
todoList.append("Aprender React", "Aprender a manejar la sintaxis de react y conceptos", 2);

todoList.print();
