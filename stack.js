class Stack {
  constructor() {
    this.books = []
  }

  push(element) {
    this.books.push(element)
  }

  pop() {
    this.books.pop()
  }

  peek() {
    return this.books[this.books.length - 1]
  }

  isEmpty() {
    // return this.books.length > 0 ? true : false
    return this.books.length === 0
  }

  clear() {
    this.books = []
  }

  size() {
    return this.books.length
  }

  print() {
    return this.books
  }
}

const books = new Stack();
books.push(1);
books.push(2);
books.push(3);
books.push(4);
books.push(5);
console.log('push: ', books.print())
// [1,2,3,4,5]
books.pop();
books.pop();
// [1,2,3]

console.log('pop: ', books.print())
console.log('peek: ', books.peek())
console.log('isEmpty: ', books.isEmpty())
console.log('size: ', books.size())