

/// #(Console.log)
// console.log( 'Hello World! ');


/// #(Method)
// Math.random();
// console.log( Math.random()); /// Random Number


/// #(Numbers)
// let amount = 6;
// let price = 4.88;


/// #(String.length)
// let message = ' Hello World! ';
// console.log(message.length);
// console.log('Goodbye'.length)


/// #(Booleans) True or False
// let lateToWork = true;


/// #(Math.random())
// console.log(Math.random());


/// #(Math.floor())
// console.log(Math.floor(19.06)); // Prints 19


/// #(Strings( '', "" ))
// let single = "Wheres my bandit hat?";
// let double = "Where's my bandit hat?";


/// #( Arithmetic Operators)
// // Addition
// 5 + 5
// // Subtraction
// 10 - 5
// // Multiplication
// 5 * 10
// // Division 
// 10 / 5
// // Modulo
// 10 % 5


/// #( Multi-line Comments) /*....*/
// let baseUrl = 'Localhost/ taxwebapp/ country';


/// #( Remainder/ Modulo Operator )
// const weeksInYear = Math.floor(365 / 7);
// const daysLeftOver = 365 % 7;
// console.log("A year has " + weeksInYear + " Weeks and " + daysLeftOver + "days");


/// #( Assignment Operators )
// let number = 100;
// number = number + 10;
// number += 10;
// console.log(number); // Print 120


/// #( String Interpolation )
// let age = 7;
// // String Concatenation
// console.log( 'Tommy is ' + age + ' years old.');
// // String Interpolation
// console.log( `Tommy is ${age} years old.`);

/// #( Variable )
// const currency = '$';
// const userIncome = 850000;
// console.log( currency + userIncome + ' is more than the average income.');


/// #( Undefined )
// let a;
// console.log(a);


/// #( Leaning Javascript: Variables )
// let name = "Rozet";
// const found = false;
// let age = 18;
// console.log( name, found, age);


/// #( Declaring Variables )
// var age;
// let weight;
// const numberOfFingers = 20;


/// #( Template Literals )
// let name = "Rozet";
// let age = 18;
// console.log( `Hello, ${name}`);
// console.log( `Rozet is ${age}`);


/// #( String Concatenation )
// let service = 'credit card';
// let month = 'May 30th';
// let displayText = 'Your ' + service + ' bill is due on ' + month + '.';
// console.log(displayText);


// #( Logical Operator || )
// ture || fasle;
// 10 > 5 || 10 > 20;
// false || false;
// 10 > 100 || 10 > 20;


/// # ( Ternary Operator )
// let price = 10.5;
// let day = "Monday";

// console.log (day === "Monday" ? price -= 1.5 : price += 1.5);


/// #( else statment )
// const isTaskCompleted = false;
// if (isTaskCompleted) {
//     console.log( 'Task Completed' );
// } else { 
//     console.log( 'Task Incompleted' );
// }


/// #( Logical Operatro && )
// true && true; // true  
// 1 > 2 && 2 > 1; // false 
// true && false; // false 
// 4 === 4 && 3 > 1; // true


/// #( Switch Statment )
// const food = 'salad';

// switch (food) {
//     case 'oyster':
//         console.log('the taste of the sea');
//         break;
//     case 'pizza':
//         console.log('A delicious pie');
//         break;
//     case 'Sach Ang':
//         console.log('Gogi is the best!!');
//     default:
//         console.log( 'Enjoy your meal ');
// }


/// #( if Statement )
// const isMailSent = true;
// if ( isMailSent ) {
//     console.log( 'Mail send to recipient');
// }


/// #( Logical Operator ! )
// let lateToWork = true;
// let oppositeValue = !lateToWork;
// console.log(oppositeValue);


/// #( Comparison Operators )
// > greater than
// 1 > 3 
// // < less than
// 3 < 20
// // >= greater than or equal 
// 3 >= 3
// // < = less than or equal 
// 2 <= 2
// // !== strict not equal
// ....
// // === Strict equal
// 1 === 1 // true
// 1 === 2 // false
// 1 === '1' // false


/// #(else if Clasue )
// const size = 10;
// if (size > 100) {
//     console.log('Big');
// } else if ( size > 20) {
//     console.log( 'Mediun');
// } else if (size > 4) {
//     console.log('Small');
// } else {
//     console.log( 'Tiny');
// }


/// #( Annonymous Functions)

// const rocketToMars = function() {
//     return 'BOOM';
// }
// console.log(rocketToMars());


///# ( Function Expressions)

// const dog = function() {
//     return 'Woof!';
// }
// console.log(dog());


/// #( Function Parameters )

// function sayHello(name) {
//     return `Hello, ${name}!`;
// }
// console.log(sayHello());


/// # ( return keyword )

// function sum(num1, num2) {
//     return num1 + num2;
// }
// console.log(sum(3, 20));


/// # ( Block Scoped Variables )

// const isLoggedIn = true;

// if (isLoggedIn == true ) {
//     const statusMessage = 'User is logged in.';

// }

// console.log(statusMessage);  // Uncaught RerferenceError : statusMessage is not defined


/// # ( Global Variables )

// const color = 'blue';

// function printColor() {
//     console.log(color);
// }

// printColor();


/// # ( Array Property.length )

// const number = [1, 2, 3, 4];
// console.log(number.length);


/// #( Index )

// const myArray = [100, 200, 300];

// console.log(myArray[0]);
// console.log(myArray[1]);
// console.log(myArray[2]);


/// # ( Method .push )

// const cart = ['Apple', 'Orange'];
// cart.push('pear');

// console.log(cart);

// const numbers = [1, 2];
// numbers.push (3, 4, 5);

// console.log(numbers)


///# ( Method.pop)

// const ingredients = ['egg', 'flour', 'chocolate'];

// const poppedIngredient = ingredients.pop();
// console.log(ingredients);


/// # ( Mutable )

// const name = ['Alice', 'Bob'];
// name.push('Carl');

// console.log(name);]


/// # ( Array )

// const mixedArray = [1, 'apple', 'game', 43];
// mixedArray.unshift(33);
// console.log(mixedArray);


/// # ( While Loop ) 

// let i = 1;

// while (i < 5) {
//     console.log(i);
//     i++;
// }


/// # ( Reverse loop )

// const items = ['apricot', 'banana', 'cherry'];

// for (let i = items.length -1 ; i >=0; i -= 1) {
//     console.log(`${i}. ${items[i]}`);
// }


///# ( Do While Statement )

// x = 0
// i = 0

// do {
//     x = x + i;
//     console.log(x);
//     i++;
// } while (i < 5);


/// # ( For Loop )

// for (let i = 0; i < 4; i +=1) {
//     console.log(i);
// };


/// # ( Looping Through Arrays )

// const array = [1, 2, 4, ,5];
// for (let i = 0 ; i < Array.length; i++) {
//     console.log(array[i]);
// }


/// # ( Break Keyword )

// for (let i = 0; i < 100; i += 1) {
//     if (i > 10) {
//         break;
//     }
//     console.log(i);
// }


/// # ( Nested For loop )

// for ( let outer = 0; outer < 2; outer += 1 ) {
//     for ( let inner = 0; inner < 3; inner += 1) {
//         console.log(( `{outer}-${inner}`));
//     }
// }


// /// ( Function Assign to Variables )

// let plusFive = (numbr) => {
//     return numbr + 5;
// };

// let f = plusFive;

// console.log(plusFive(3));
// console.log(f(9));


/// # ( CallBack Function )

// const isEven = (n) => {
//     return n % 2 == 0
// }

// let printMsg = (evenFunc, num) => {
//     const isNumEven = evenFunc(num);
//     console.log(`The number ${num} is an even number : ${isNumEven}.`)
// }

// printMsg(isEven, 4);


/// # ( JavaScript Functions : First-Class Objects )

// // Assign a function to a variable originalFunc
// const orginalFunc = (num) => { return num + 2 };
// // Re-assign the function to a new variable newFunc
// const newFunc = originalfunc;
// // Access the function's name property
// newFunc.name;
// // Return the function's body as a string
// newFunc.toString();
// // Add our own isMathFunction property to the function
// newFunc.isMathFunction = true;
// // Pass the function as an argument
// const functionNameLength = (func) => { return func.name.func.name.,length};
// functionNameLength(originalFunc); //12
// // Return the Function
// const retunFunc = () => { return newFunc };
// retunFunc();


/// # (The .reduce() Method)

// const arrayOfNumbers = [1, 2, 3, 4];

// const sum = arrayOfNumbers.reduce((accumulator, currentValue) => {
//     return accumulator + currentValue;
// });

// console.log(sum);


/// # (The .forEach() Method )

// const numbers = [28, 77, 45, 99, 27];

// numbers.forEach(number => {
//     console.log(number);
// });


/// # ( The .filter () Method )

// const randomNumbers = [ 4, 11, 42, 14, 39];
// const filteredArray = randomNumbers.filter(n => {
//     return n > 5;
// });
// console.log(filteredArray);


/// # ( The .map () Method )

// const finalParticipants = ['Taylor', 'Donald', 'Don', 'Natasha', 'Bobby'];

// const announcements = finalParticipants.map(member => {
//     return member +' joined to contest.';
// }) 
// console.log(announcements);


/// # ( Restrictions in Naming Properties )

// const trainSchedule = {
//     platform num: 10,
//     40 - 10 + 2: 30,
//     +compartment: 'C'
// }


/// #( Dot Notation for Accessing Object Properties )

// const apple = {
//     color: 'Green',
//     price: {
//         bulk: '$3/kg',
//         smallQty: '$4/kg'
//     }
// };
// console.log(apple.color);
// console.log(apple.price);
// console.log(apple.price.bulk);
// console.log(`These apples are ${apple.color} and The price is ${apple.price.bulk}.`);


/// # ( Accessing non-existent JavaScript properties )

// const classElection = {
//     date: 'January 12'
// };

// console.log(classElection.place);


/// # ( JavaScript Objects are Mutable)

// const student = {
//     name: 'Sheldon',
//     score: 100,
//     grade: 'A',
// }

// console.log(student);

// delete student.score
// student.grade = 'F'
// console.log(student);

// student= {}


/// # ( Javascript for In loop )

// let mobile = {
//     brand: 'Samsung',
//     model: 'Galaxy Note 9'
// };

// for (let brand in mobile) {
//     console.log(`${brand}: ${mobile[brand]}`);
// }


/// # ( Properties and values of a Javascript object )

// const classOf2018 = {
//     school: 'Santhormok HighSchool',
//     students: 38,
//     year: 2018
// }
// console.log(classOf2018);


///# ( Delete Operator )

// const person = {
//     firstName: "Matilda",
//     age: 27,
//     hobby: "knitting",
//     goal: "learning JavaScript"
// };

// delete person.hobby;

// console.log(person);


/// # ( Javascript passing objects as arguments )

// const origNum = 8;
// const origObj = {color: 'Blue'};

// const changeItUp = (num, obj) => {
//     num = 7;
//     obj.color = 'Red'
// };

// changeItUp(origNum, origObj);

// console.log(origNum);

// console.log(origObj.color);


/// # ( JavaScript Object Methods )

// const engine = {

//     start(adverb) {
//         console.log(`The engine starts up ${adverb}...`);
//     },

//     sputter: () => {
//         console.log('The engine sputters...');
//     },
// };

// console.log(engine.start('noisily'));
// console.log(engine.sputter());


/// # ( JavaScript destructuring assignment shorthand syntax)

// const rubiksCubeFacts =  {
//     possiblePermutations: '43,252,003,274,489,856,000',
//     invented: '1974',
//     largestCube: '17x17x17'
// };
// const {possiblePermutations, invented, largestCube} = rubiksCubeFacts;
// console.log(possiblePermutations);
// console.log(invented);
// console.log(largestCube);


/// # ( Shorthand property name syntax for object creation )

// const activity = 'Surfing';
// const beach = { activity };
// console.log(beach);


/// # ( this Keyword )
// const cat = {
//     name: 'Pipey',
//     age: 8,
//     whatName() {
//         return this.name
//     }
// };

// console.log(cat.whatName());


/// # (JavaScript Function this )

// const restaurant = {
//     numCustomers: 45,
//     seatCapacity: 100,
//     availableSeats() {

//         return this.seatCapacity - this.numCustomers;
//     }
// } 

// console.log(restaurant.availableSeats());


/// # ( JavaScript Arrow Function This Scope )

// const myObj = {
//     data: 'abc',
//     loggerA: () => { console.log(this.data); },
//     loggerB() { console.log(this.data);},
// };

// console.log(myObj.loggerA());
// console.log(myObj.loggerB());


/// # ( getters and setters intercept property access )

// const myCat = {
//     _name: 'Snickers',
//     get name () {
//         return this.name
//     },
//     set name (newName) {
//         if (typeof newName === 'string' && newName.length > 0) {
        
//         } else {
//             console.log("ERROR: name must be a non-empty string");
//         }
//     }
// }

// console.log(myCat);


/// # ( JavaScript factory Function )

// const dogFactory = (name, age, breed) => {
//     return {
//         name: name,
//         age: age,
//         breed: breed,
//         bark() {
//             console.log('Woof!');
//         }
//     };
// };

// console.log(dogFactory);


/// # ( JavaScript getters and setters restricted )

// const myCat = {
//     _name: 'Dottie',
//     get name () {
//         return this._name;
//     },
//     set name(newName) {
//         this._name = newName;
//     }
// };

// console.log(myCat.name);
// myCat.name = 'Yankee';