class Person {
    constructor(fullName, birthdate) {
        this.fullName = fullName;
        this.birthdate = new Date(birthdate);   
        this.left = null;    
        this.right = null;   
    }
}
class BinaryFamilyTree {
    constructor(rootPerson) {
        this.root = rootPerson;
    }

    addChild(parent, child) {
        if (!parent) return;

        
        if (child.birthdate < parent.birthdate) {  
            if (!parent.left) {
                parent.left = child;
            } else {
                this.addChild(parent.left, child);
            }
        } else {  
            if (!parent.right) {
                parent.right = child;
            } else {
                this.addChild(parent.right, child);
            }
        }
    }

    // Recorrido en preorden (Raíz, Izquierda, Derecha)
    printPreOrder(node = this.root) {
        if (!node) return;
        console.log(`${node.fullName} (${node.birthdate.toDateString()})`);
        this.printPreOrder(node.left);
        this.printPreOrder(node.right);
    }

    // Recorrido en postorden (Izquierda, Derecha, Raíz)
    printPostOrder(node = this.root) {
        if (!node) return;
        this.printPostOrder(node.left);
        this.printPostOrder(node.right);
        console.log(`${node.fullName} (${node.birthdate.toDateString()})`);
    }

    // Recorrido en inorden (Izquierda, Raíz, Derecha)
    printInOrder(node = this.root) {
        if (!node) return;
        this.printInOrder(node.left);
        console.log(`${node.fullName} (${node.birthdate.toDateString()})`);
        this.printInOrder(node.right);
    }
}
 
const grandparent = new Person('Amanda Vente', '1950-01-01'); 
const parent1 = new Person('Alexis Del castillo', '1984-04-10');     
const parent2 = new Person('Paola Vente', '1987-06-20');     
const child1 = new Person('Roger Del castillo', '2005-11-05');      
const child2 = new Person('Danna Del castillo', '2013-03-15');
const child3 = new Person('Angela Vente', '2001-08-09');      
const child4 = new Person('Mateo Vente', '2004-12-12');  
 
const familyTree = new BinaryFamilyTree(grandparent);


familyTree.addChild(grandparent, parent1);
familyTree.addChild(grandparent, parent2);
familyTree.addChild(parent1, child1);
familyTree.addChild(parent1, child2);
familyTree.addChild(parent2, child3);
familyTree.addChild(parent2, child4);

 
console.log("Pre-order:");
familyTree.printPreOrder();

console.log("\nPost-order:");
familyTree.printPostOrder();

console.log("\nIn-order:");
familyTree.printInOrder();
