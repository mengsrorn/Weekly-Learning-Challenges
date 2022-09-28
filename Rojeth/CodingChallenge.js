// # 1 

// function hello () {
//     return "Hello World";
// }
// console.log(hello);


// # 2 

// function sum (a,b) {
//     return a + b;
// }
// let calcSum = sum(3, 2);
// console.log(calSum);

// #3

// function lessThan0rEqualToZero (num) {
//     if ( num <= 0) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(lessThan0rEqualToZero(5));
// console.log(lessThan0rEqualToZero(0));
// console.log(lessThan0rEqualToZero(-2));

// #4

// function isSameNum (num1, num2) {
//     if (num1 === num2) {
//         return true;
//     } else {
//         return false;
//     }
// }
// console.log(isSameNum(4, 8));
// console.log(isSameNum(2, 2));
// console.log(isSameNum(2, "2"));

// #5

// function addUp (num) {
//     return num === 1 ? 1: num + addUp(num -1);
// }
// console.log(addUp(4));

// #6

// function lessThan100 (num1, num2){
//     let lessThan100 = num1 + num2
//      if ( lessThan100 < 100 ) {
//     return true;
//     } else {
//     return false;
//     }
// }    
// console.log(lessThan100(22, 15));
// console.log(lessThan100(83, 34));
// console.log(lessThan100(3, 77));

// #7

// function minMax (arr) {
//     let min = arr[0];
//     let max = arr[0];
    
//     for (let curr of arr) {
//         if (curr > max ) {
//             max = curr
//         }
//         if (curr < min ) {
//             min = curr;
//         }
//     }
//     return {
//         min,
//         max
//     };
// }
// console.log(minMax([1, 2, 3, 4, 5]));

// #8

// function timeForMilkAndCookies (dateToTest) {
//     return (dateToTest.getFullYear()) &&
//            (dateToTest.getMonth()=== 11) &&
//            (dateToTest.getDate()== 24);
// }
// console.log(timeForMilkAndCookies(new Date(2013, 11, 24)));
// console.log(timeForMilkAndCookies(new Date(2013, 0, 24)));
// console.log(timeForMilkAndCookies(new Date(3000, 11, 24)));

// #9

// function canNest (arr1, arr2) {
//     return (
//         Math.min(...arr1) > Math.min(...arr2) &&
//         Math.max(...arr1) < Math.max(...arr2)
//     );
// }
// console.log(canNest([1,2,3,4], [0,6]));
// console.log(canNest([3,1], [4,0]));
// console.log(canNest([9,9,8], [8, 9]));
// console.log(canNest([1,2,3,4], [2,3]));

// #9

// let calc = (a, operation, b) => {
//     if (operation === '+') return a + b;
//     if (operation === '-') return a - b;
//     if (operation === '*') return a * b;
//     if (operation === '/') return a / b;
// }
// console.log(calc(2, "+", 2));
// console.log(calc(2, "*", 2));
// console.log(calc(4, "/", 2));

// #10

// async function fetchData () {
//     await fetch ('https://jsonplaceholder.typicode.com/todos/1') 
//         .then ((response) => response.json ())
//         .then ((data) => console.log(data))
//         .catch(err => {
//             console.log('err', err)
//         })
// }
// fetchData();

// #11

// function calc (N) {
//     return N*N;
// }
// console.log(calc(2));

// #12

// let drink = [
//     {name: "lemonade", price: 50},
//     {name: "lime", price: 10},
//     {name: "Starbuck", price: 4},
//     {name: "Sting", price: 2}
// ]

// console.log(drink);

// #13

// function largestSwap(num) {
//     num= num.toString();

//     if(num < 0) {
//         return num[2] >= num[1];
//     }
//     return num[0] >= num [1];
// }
// console.log(largestSwap(27));
// console.log(largestSwap(43));