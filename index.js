class Stack {
    constructor() {
      this.stack = {};
      this.count = 0;
    }
  
    push(element) {
      this.stack[this.count] = element;
      this.count++;
      return this.stack;
    }
  
    pop() {
      this.count--;
      const element = this.stack[this.count];
      delete this.stack[this.count];
      return element;
    }
  
    peek() {
      return this.stack[this.count - 1];
    }
  
    size() {
      return this.count;
    }
  
    print() {
      console.log(this.stack);
    }
  }
  
class Book{
    constructor(name,isbn,author,editorial){
        this.name = name
        this.isbn = isbn
        this.author = author
        this.editorial = editorial
    }
}

  const stack = new Stack();

  const libro1 = new Book('Libro 1','1000','Pedro','Casacuentos')
  
  const libro2 = new Book('Libro 2','1001','Juan','Casa de la noche')
  
  const libro3 = new Book('Libro 3','1002','Perez','Recoheros')
  
  const libro4 = new Book('Libro 4','1003','Andres','Parchate')

  stack.push(libro1);
  stack.push(libro2);
  stack.push(libro3);
  stack.push(libro4);

  stack.print()