// +=
let x;

x += 1 // x = x + 1 // x++

// comparsion operators
const comA = 1;
const comB = 2;

console.log(5 % 3)


// bitwise
// 0000000

console.log('bitwise: ', 000001^000001)

// logical
const objectA = { name: 'truong'}
const stringA = 'str';
console.log('&&: ', !stringA, Object.keys(objectA).length > 0)

// euqality
// 0 == false, 1 == true
const ObjectB = {}
const ObjectC = ObjectB
const ObjectD = {}
console.log('euqality: ', null === undefined)

// conditional
console.log('conditional: ', false ? "abc" : 'xyz')



// delete
const Objectdelete = {
  name: 'truong',
  age: 18
}
delete Objectdelete.age
console.log("delete: ", Objectdelete)
// output: { name: 'truong' }


// instance of
const dayIns = new Date();
console.log('instanceof: ', dayIns instanceof Date)

// in
const arrays = ['truong', 'tuyen', 'minh', 'tri'];
console.log('in: ', arrays.includes('truong'))

