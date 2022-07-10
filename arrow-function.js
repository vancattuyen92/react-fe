// // Sự khác nhau giữa Function thông thường và Arrow Function
// // Function thông thường
// let regularObj = function() {
//   this.name = 'An Vu';
//   return {
//     name: 'John',
//     getName: function() {
//       // this sẽ bị ghi đè vì this lúc này thuộc về Obj được trả về
//       return this.name;
//     }
//   };
// }
// console.log('regularObj: ' + regularObj().getName());

// // Arrow Function
// let arrowObj = function() {
//   this.name = 'An Vu';
//   return {
//     name: 'John',
//     getName: () => {
//       // this này không bị ghi đè bởi Obj mà vẫn giữ được this của hàm cha
//       return this.name;
//     }
//   };
// }
// console.log('arrowObj: ' + arrowObj().getName());


// /* 
// Bai tap 1:
// Cho 1 array tu 0 => 10. Viet 1 arrow function de multiple cac element trong array do.

// Bai tap 2:
// - generate 1 new array like object:
// - const array = [ 3, 4, 5 ….]: co 10 phan tu
// - field name se~ dc generate random theo alphabet.
// - field price se~ dc la cac element trong array * 10

// ex:
// [
//    { name: dasesa, price: i * 10 },
//    …..
// ]
// in ra cac object nao` co price > 50 & < 100.
// */

// const num = [1,2,3,4,5,6,7,8,9,10]
// // const newNum = num.map((value, index, array) => {
// //     return value*value;
// // })

// const arrayabc = [2, 3, 5, 10].reduce((acc, curr) => acc * curr);
// console.log(arrayabc);


// const arr = [
//   {
//     name:"dfg",
//     price:5
//   },
//   {
//     name:"abc",
//     price:2
//   }
// ]

// function sortName (arr, prop) {
//   arr.sort (
//     function(a,b) {
//       if (a[prop] < b[prop]) {
//         return -1;
//       } else if (a[prop] > b[prop]) {
//         return 1;
//       } else {
//         return 0;
//       }
//     }
//   )
// }
// sortName(arr,"name");
// console.log(arr);

const array = [1,2,3,4,5,6,7,8,9,10]
const users = {
  gender: 'male'
}
 
let newArr = []
for (i=0; i<array.length; i++) {
  newArr.push({
    key: array[i],
    name: 'truong',
    gender: users
  })
}
console.log('arrowObj: ' + arrowObj().getName());


/* 
Bai tap 1:
Cho 1 array tu [1 -> 10]. Viet 1 arrow function de multiple cac element trong array do.

Bai tap 2:
- generate 1 new array like object:
- const array = [ 3, 4, 5 ….]: co 10 phan tu
- field name se~ dc generate random theo alphabet.
- field price se~ dc la cac element trong array * 10

ex:
[
   { name: dasesa, price: i * 10 },
   …..
]
in ra cac object nao` co price > 50 & < 100.
*/
