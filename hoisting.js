// var nama = undifined;
// console.log(nama);

// var nama = 'faqih';

// creation phase pada Global context
// var nama = undifined;
// nama function = fn()
// windows = global object
// this = windows

//  executions phase

// var nama = 'faqih'
// var usia = 20;

// function sayHai() {
//     return `hai nama saya ${nama}, saya ${usia} tahun`;
// }

// console.log(sayHai());

// function membuat local execution context
// yg didalamnya membuat creation phase dan execution phase
// windows
// arguments
// hoisting


// var nama = 'faqih';
// var username = '@faqihakih'

// function cetakURL(username) {
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL+username
// }

// console.log(cetakURL(username));


// function a() {
//     console.log('ini a');

//     function b() {
//         console.log('ini b');

//         function c() {
//             console.log('ini c');
//         }
//         c()
//     }
//     b()
// }
// a()

// var nama = 'faqih';
// var username = '@faqihakih'

// function cetakURL() {
//     console.log(arguments[0]);
//     var instagramURL = 'https://instagram.com/';
//     return instagramURL+username
// }

// console.log(cetakURL('yayang'));

// function problem(x) {
//     if (typeof (x) == 'string') {
//         return "Error"
//     } else {
//         return x * 50 + 6
//     }
// }

// problem("hello")
// problem(1)
// problem(5)

// function peopleWithAgeDrink(old) {
//     if (old < 14) {
//         return 'drink toddy'
//     } else if (old >= 14 && old < 18) {
//         return 'drink coke'
//     } else if (old >= 18 && old < 21) {
//         return 'drink beer'
//     } else {
//         return 'drink whisky';
//     }
// };

// peopleWithAgeDrink(22) //'drink whisky';

// function makeNegative(num) {
//     return -Math.abs(num);
// }

// function booleanToString(b) {
//     return b.toString();
// }

// function count(a, b) {
//     return a + b;
// }
// function arrayPlusArray(arr1, arr2) {
//     let newarr1 = arr1.reduce(count)
//     let newarr2 = arr2.reduce(count)
//     return total = newarr1 + newarr2
//     // console.log(total)
//     return newarr1 + newarr2; //something went wrong
// }

// arrayPlusArray([1, 2, 3], [4, 5, 6])

// function solution(str) {
//     str.split();
//     let newWord = []
//     for (let i = 0; i < str.length; i++) {
//         newWord.push(str[i])
//     }

//     newWord.reverse();
//     return newWord.toString().replace(/,/g, '')
// }

// solution('world') //'dlrow'
// solution('hello') // 'olleh'
// solution('') //''
// solution('h') // 'h'