class Queue {
  constructor() {
      this.queue = [];
  }

  enqueue(element) {
      this.queue.push(element);
      return this.queue;
  }

  dequeue() {
      return this.queue.shift();
  }

  peek() {
      return this.queue[0];
  }

  size() {
      return this.queue.length;
  }

  isEmpty() {
      return this.queue.length === 0;
  }

  parseTime(time) {
    let [timePart, period] = time.split(' ');
    let [hours, minutes] = timePart.split(':').map(Number); 

    if (period === 'PM' && hours !== 12) {
        hours += 12;
    } else if (period === 'AM' && hours === 12) {
        hours = 0;
    }

    return hours * 60 + minutes;
  }

  sortQueue() {
    this.queue.sort((a, b) => this.parseTime(a.arriveTime) - this.parseTime(b.arriveTime));
  }

  print() {
      return this.queue;
  }
}

class UserATM{
  constructor(nombre,arriveTime){
    this.nombre = nombre
    this.arriveTime = arriveTime
  }

}

const queue = new Queue()

queue.enqueue(new UserATM('Juan','10:30 AM'))
queue.enqueue(new UserATM('Pedro','10:00 AM'))
queue.enqueue(new UserATM('Andres','8:00 AM'))
queue.enqueue(new UserATM('Carlos','2:00 PM'))
queue.enqueue(new UserATM('Alberto','11:30 AM'))
queue.enqueue(new UserATM('Luis','1:00 PM'))

queue.sortQueue()

console.log(queue.print())
