/* @name array some
- Nó sẽ kiểm tra 1 trong các phần tử của mảng
thoải điều kiện của expression.
- Nó sẽ trả về boolean (true, false);

*/
const arraySome = [1, 3,  5];
// checks whether an element is even
const even = (element) => element % 2 === 0;
console.log('array some: ', arraySome.some(even));


/* @name array every
- Nó sẽ kiểm tra toàn bộ phần tử của mảng
thoải điều kiện của expression.
- Nó sẽ trả về boolean (true, false);
*/

const isBelowThreshold = (currentValue) => currentValue < 40;
const arrayEvery = [1, 30, 39, 29, 10, 13, 50];
console.log('array every: ', arrayEvery.every(isBelowThreshold));
// expected output: true


const fruits = ['Banana','Orange','Apple']
const x = fruits.pop('Mango')
console.log(x)