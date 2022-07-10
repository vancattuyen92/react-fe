// function hw1(gender, age) {
//     if (gender === 'nam' && age === 20) {
//         return 'dan ong';
//     } else if (gender === 'nam' && age === 18 ) {
//         return 'con nit';
//     } else if (gender === 'nu' && age === 30) {
//         return 'dan ba';
//     } else if (gender === 'nu' && age < 18) {
//         return 'con gai';
//     } 
//     return 'not found';
// }
// console.log(hw1('abc',30))

// function question1 () {
//     let num = prompt("Nhap vao con so");

//     // tuyen code
//     // if (num%3===0 && num%7===0){
//     //     return 'so chia het cho 3 va 7';
//     // } else return 'so khong chia het cho 3 va 7';

//     // tony code
//     if (num%3===0 && num%7===0) {
//         return 'so chia het cho 3 va 7';
//     };
//     return 'so khong chia het cho 3 va 7';
// }
// console.log(question1())



// function question2 () {
//     let num2 = prompt("Nhap vao diem so")
//     switch (num2) {
//         case 3:
//             console.log('E')
//             break;
//         case 5:
//             console.log('D')
//             break;
//         case 7:
//             console.log('C')
//             break;
//         case 9:
//             console.log('B')
//             break;
//         case 10:
//             console.log('A')
//             break;
//         default:
//             return;
//         }
// }
// console.log(question2())



// function question3() {
//     let arr = [1,2,3,4,5,6,7,8,9,10];
//     console.log('array: '+ arr)
//     console.log('length: ' + arr.length);
//     console.log('first element: ' + arr[0]);
//     console.log('last element: ' + arr[arr.length - 1])
// }
// console.log(question3())



// function question4() {
//     let arr = ['one','two','three','four','five','six','seven','eight','nine','ten']
//     console.log('array: '+ arr)
//     console.log('length: ' + arr.length);
//     console.log('first element: ' + arr[0]);
//     console.log('last element: ' + arr[arr.length - 1])
// }
// console.log(question4())



// function question5() {
//     const arr = [];
//     for (let i=0; i<51; i++ ) {
//         arr.push(i);
//     }
//     for (let i=0; i<51; i++) {
//         if (arr[i]%3===0 && arr[i]%7===0) {
//             console.log('element %3 & 7: ' + arr[i]);
//         }
//     }
//     for (let i=51; i>5; i--) {
//         arr[i]=arr[i-1];
//     }
//     arr[5] = 45;
//     console.log(arr);
//     for (let i=0; i<51; i++) {
//         if (arr[i]!==7) {
//             process.stdout.write(arr[i]);
//         }
//     }
// }
// console.log(question5())

const input = [{
    firstName: 'Bobo',
    lastName: 'Flakes'
}, {
    firstName: 'Lawrence',
    lastName: 'Shilling'
}, {
    firstName: 'Anon',
    lastName: 'User'
}];

// Output: ['OBOB','ECNERWAL','NONA']

// const array1 = [];
// for (let i = 0; i < input.length; i++) {
//     array1.push(input[i].firstName)
// }
// const array2 = [];
// array1.forEach((value, index, array) => {
//     let c = value.split("").reverse().join("").toUpperCase();
//     array2.push(c)
// })
// console.log(array2)


const array = [];
for (let i = 0; i < input.length; i++) {
    let c = input[i].firstName.split("").reverse().join("").toUpperCase();
    array.push(c)
}
console.log(array)