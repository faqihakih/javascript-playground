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


// function positiveSum(arr) {
//     // console.log(arr);
//     let newArr = [];

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] < 0) {
//             arr[i] = 0
//         }
//         newArr.push(arr[i])
//     }

//     let result = 0;
//     for (let i = 0; i < newArr.length; i++) {
//         // result = result + newArr[i]
//         result += newArr[i]
//     }
//     return result;
// }

// positiveSum([1,2,3,4,5])//,15);
// positiveSum([1,-2,3,4,5])//,13);
// positiveSum([])//,0);
// positiveSum([-1,-2,-3,-4,-5])//,0);
// positiveSum([-1,2,3,4,-5]) //,9)

// function sumStr(a, b) {

//     if ( b == "" && a == "") {
//         a = 0;
//         b = 0;
//         // console.log(a, b);
//     }else if (a == "") {
//         a = 0
//     }else if (b == "") {
//         b = 0;
//     }
//     let result = parseInt(a) + parseInt(b)
//     // console.log(a+"+"+ b);
//     console.log(result.toString());
//     // return result.toString()
// }

// sumStr("", "")//, "9");
// sumStr("34", "5")//, "39");


// function sumOfDifferences(arr) {
//     let sortDes = arr.sort( (a, b) => b-a)
//     let temp = [];

//     for (let i = 0; i < sortDes.length-1; i++) {
//         let sum = sortDes[i]
//         temp.push(sum)
//     }
//     let tempscnd = [];
//     for (let j = 1; j < sortDes.length; j++) {
//         let sum = sortDes[j]
//         tempscnd.push(sum)
//     }

//     value1 = temp.reduce((a, b) => a+b)
//     value2 = tempscnd.reduce((a, b) => a+b)

//     let result = value1 - value2

//     console.log(result);
// return resultl

// result.reduce((a, b) => a + b)

// console.log(result.reduce((a, b) => a - b));


// }

// const sumOfDifferences = arr => arr
//     .sort((a, b) => b - a)
//     .map((a, i) => a - arr[i + 1] || 0)
//     .reduce((a, b) => a + b, 0);

// sumOfDifferences([1, 2, 10])//, 9);

// sumOfDifferences([-3, -2, -1])//, 2);


// let myPromise = new Promise(function (myResolve, myReject) {
//     // "Producing Code" (May take some time)
//     let misal = false;

//     misal ? myResolve("hai kaka") : myReject("error su")
// })

// // "Consuming Code" (Must wait for a fulfilled Promise)
// myPromise.then(
//     function (value) {
//         console.log(value);
//     }
// ).catch(
//     function (params) {
//         console.log(params);
//     }
// )

// const promise = new Promise(function (resolve, reject) {
//     // do a thing, possibly async, then…
//     let error = false;
//     if (error) {
//         resolve(
//             11 + 12
//         );
//     }
//     else {
//         reject(
//             12 * 20
//         );
//     }
// });

// promise.then(
//     (res) => console.log(res)
// ).catch(
//     (err) => console.log(err)
// )

// function invert(array) {

//     // console.log(array);
//     let data = [];
//     for (let i = 0; i < array.length; i++) {
//         // console.log(array[i]);
//         if (array[i] > 0) {
//             data.push(-Math.abs(array[i]))
//         } else {
//             data.push(Math.abs(array[i]))
//         }
//     }
//     console.log(data);
//     return data;
// }

// invert([1,2,3,4,5])//, [-1,-2,-3,-4,-5]);
// invert([1,-2,3,-4,5])//, [-1,2,-3,4,-5]);
// invert([])//, []);
// invert([0])//, [0]);

// Sum Numbers
// function sum (numbers) {
//     "use strict";

// console.log(numbers.length == 0 ? 0 : numbers.reduce( (a, b) => a+b)); 
// return numbers.length == 0 ? 0 : numbers.reduce( (a, b) => a+b)
// };

// sum([])//, 0);
// sum([1, 5.2, 4, 0, -1])//, 9.2);

// function multiTable(number) {
//     // good luck
//     for (let i = 1; i <= 10; i++) {
//         // let a = i * number
//         // console.log(i +" * "+ number +" = "+ i*number)
//         i +" * "+ number +" = "+a
//         // return i +" * "+ number +" = "+a
//     }

// }

// multiTable(5)//, '1 * 5 = 5\n2 * 5 = 10\n3 * 5 = 15\n4 * 5 = 20\n5 * 5 = 25\n6 * 5 = 30\n7 * 5 = 35\n8 * 5 = 40\n9 * 5 = 45\n10 * 5 = 50');
// multiTable(1)//, '1 * 1 = 1\n2 * 1 = 2\n3 * 1 = 3\n4 * 1 = 4\n5 * 1 = 5\n6 * 1 = 6\n7 * 1 = 7\n8 * 1 = 8\n9 * 1 = 9\n10 * 1 = 10');

// function hello(name) {
//     console.log(
//         name == undefined || name == '' ? "Hello, World!" : "Hello, "+name.charAt(0).toUpperCase()+name.slice(1).toLowerCase()+'!'
    // );
    // return name == undefined || name == '' ? "Hello, World!" : "Hello, "+name.toLowerCase().charAt(0).toUpperCase()
    // console.log(typeof(name));
// }

// hello('johN')//, 'Hello, John!', "returns 'Hello, John!' when given 'johN'")
// hello('alice')//, 'Hello, Alice!', "returns 'Hello, Alice!' when given 'alice'")
// hello()//, 'Hello, World!', "returns 'Hello, World!' when name is not given")
// hello('')//, 'Hello, World!', "returns 'Hello, World!' when name is an empty String" )