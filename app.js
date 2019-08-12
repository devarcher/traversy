// Log to console: 

/*
multi
line
comments
*/

// // Init var
// var greeting;
// console.log(greeting);
// greeting = 'Hello';
// console.log(greeting);

// variables can use letters, numbers, _, $
// Can not start with number

// Primitive Data Types
/*
String
Number
Boolean
Null
Undefined
Symbols
*/

// References Data Types
/*
Arrays
Object Literals
Functions
Dates
Else
*/

// const hobbies = ['movies', 'music'];
// console.log(hobbies);


// const address = {
//   city: 'Boston',
//   state: 'MA',
// }
// console.log(address);

// const today = new Date();
// console.log(today);

// Data Type Coversion

// let val;

// // Number to String
// val = '5';
// val = String(5+5);
// val = 'true';
// val = String(new Date());
// val = String([1, 2, 3, 4]);

// // toString() Method
// val = (5).toString();
// val = (true).toString();

// // String to Numbers
// val = Number('5');
// val = Number(true);
// val = Number(false);
// val = Number(null);
// val = Number('hello');

// val = parseInt('100.30');
// val = parseFloat('100.30');

// // Type Coersion Javascript changes data type

// const val1 = '5';
// const val2 = 6;
// const sum = parseInt(val1) + val2;

// console.log(sum);
// console.log(Object.prototype.toString.call(sum));


// // Output
// console.log(val);
// console.log(typeof val);
// console.log(Object.prototype.toString.call(val));
// // console.log(val.length);
// console.log(val.toFixed(2));

// const num1 = 100;
// const num2 = 50;
// let val;

// // simple math with numbers
// val = num1 + num2;

// // Math Object
// val = Math.PI;
// val = Math.round(2.8);
// valCeil = Math.ceil(2.2);
// val = Math.floor(2.8);
// val = Math.sqrt(64);
// val = Math.abs(-3);
// val = Math.pow(8, 2);
// val = Math.max(2,33,4,1,55,8);

// val = Math.random();

// val = Math.floor(Math.random() * 20 + 1);

// console.log(val);

//  Strings and Concatenation

// const firstName = 'William';
// const lastName = 'Johnson';
// const age = 36;
// const str = "Hello there my name is Brad";

// let val;

// // Appending
// val = firstName + ' ' + lastName;
// val = 'Hello, my name is ' + firstName + ' and I am ' + age;


// // Escaping 
// val =  'That\'s awesome, I can\'t wait';
// console.log(val);

// // Length
// val = firstName.length;
// console.log(val);


// Template Literals is way better.
// val = firstName + lastName;
// val = `${firstName} ${lastName}`;


// val = firstName.indexOf('l');
// val = firstName.lastIndexOf('l');

// // Char(At)
// val = firstName.charAt('2');

// // substrings
// val =firstName.substring(0, 4);

// val = firstName.slice(0, 4);

// val = str.split(' ');

// val = str.replace('Brad', 'Jack');

// val = str.includes('Brad');

// console.log(val);


// Template Literals!

// const name = 'John';
// const age = 33;
// const job = 'Web Developer';
// const city = 'Miami';

// let html;

// function hello() {
//   return 'hello';
// }


// html = `
//   <ul>
//     <li>Name: ${name}</li>
//     <li>Age: ${age}</li>
//     <li>Job: ${job}</li>
//     <li>City: ${city}</li>
//     <li>${2 + 2}</li>
//     <li>${hello()}</li>
//     <li>${age > 30 ? 'Over 30' : 'Under 30'}</li>
// `;

// document.body.innerHTML = html;

// Arrays

// const numbers = [43, 56, 33, 23, 44, 36, 5];
// const fruit = ['Apple', 'Banana', 'Orange', 'Pear'];
// const mixed = [22, 'Hello', true, undefined, null, {a: 1, b: 1}, new Date()];

// // console.log(numbers);
// // console.log(fruit);
// // console.log(mixed);

// let val;

// // Get array length
// val = numbers.length;

// // Check if is array
// val = Array.isArray(numbers);
// val = Object.prototype.toString.call(numbers);

// // Get single value
// val = numbers [3];

// // Insert something into array
// numbers[2] = 100;

// // Find index of value
// val = numbers.indexOf(36);

// // Mutating Arrays 
// // Add on to end / front
// numbers.push(250);
// numbers.unshift(120);

// // Remove from the end
// numbers.pop();

// // Remove from Front
// numbers.shift();

// // Splice Values
// numbers.splice(1,3);

// // Reverse Array
// numbers.reverse();

// // Concatenate array
// val = numbers.concat(fruit);

// // sorting - Alphabetical 
// val = fruit.sort();

// val = numbers.sort();

// // Use compare function to sort numbers

// val = numbers.sort(function(x, y){
//   return x - y;
// });

// // Reverse
// val = numbers.sort(function(x, y) {
//   return y - x;
// });

// // Find
// function under50(num) {
//   return num < 50;
// }

// val = numbers.find(under50);


// console.log(val);
// console.log(numbers);


// Object Literals

// const person = {
//   firstName: 'Steve',
//   lastName: 'Smith',
//   age: 30,
//   email: 'steve@aol.com',
//   hobbies: ['music', 'sports'],
//   address: {
//     city: 'Miami',
//     state: 'FL',
//   },
//   getBirthYear: function(){
//     return 2019 - this.age;
//   }
// }

// let val;

// val = person;

// // val = person.firstName;
// // val = person['firstName'];

// val = person.age;
// val = person.hobbies[1];
// val = person.address;
// val = person.getBirthYear();

// // console.log(val);
// // console.log(Object.prototype.toString.call(person));

// const people = [
//   {name: 'John', age: 30},
//   {name: 'Mike', age: 23},
//   {name: 'Nancy', age: 43}
// ];

// for(let i = 0; i < people.length; i++){
//   console.log(people[i].name);
// }

// console.log(people);
// console.log(Object.prototype.toString.call(people));

//  --------------------------------------------------------
// Dates

// let val;

// const today = new Date();
// // let birthday = new Date('9-10-1981 11:25:00');

// let birthday = new Date('September 10 1981');
// val = today.getMonth();
// val = today.getDate();
// val = today.getDay();
// val = today.getFullYear();
// val = today.getHours();
// val = today.getMinutes();
// val = today.getSeconds();
// val = today.getMilliseconds();
// val = today.getTime();

// birthday.setMonth(3);
// birthday.setDate(12);
// birthday.setFullYear(1980);

// console.log(birthday);


// ------------------------------------------------------------
// If Statements and Comparison Operators
// if (something) {
//   do something
// } else {
//   dosomething else
// }

// const id = 100;

// // Equal To
// if(id == 101) {
//   console.log('CORRECT');
// } else {
//   console.log('Incorrect');
// }

// //  Not Equal To
// if(id != 101) {
//   console.log('Correct');
// } else {
//   console.log('Incorrect');
// }

// // Test if undefined!!!!
// if(typeof id !== 'undefined') {
//   console.log(`The ID is ${id}`);
// } else {
//   console.log('NO ID');
// }

// const id = 101;

// // Greater Or Less Than
// if(id > 200) {
//   console.log('Big');
// } else {
//   console.log('Small');
// }

// If Else
// const color = 'yellow';

// if(color === 'red'){
//   console.log('color is red');
// } else if (color === 'blue') {
//   console.log('Color is blue');
// } else {
//   console.log('Color is not red or blue');
// }

// // Logical Operators
// const name = 'Steve';
// const age = 40;

// And &&
// if (age > 0 && age < 12) {
//   console.log(`${name} is a child`);
// } else if(age >= 13 && age <= 19){
// } else {
//   console.log(`${name} is an adult`);
// }

// // OR ||
// if (age < 16 || age > 65) {
//   console.log(`${name} can not run in race`);
// } else {
//   console.log(`${name} is registered for the race`);
// }

 
// const id = 100;
// //  Ternary Operatory
// console.log(id === 100 ? 'Correct' : "incorrect");


// -----------------------------------------------
// Switches 
// const color = 'red';
// switch(color) {
//   case 'red':
//     console.log('Color is red');
//     break;
//   case 'blue': 
//     console.log('color is blue');
//     break;
//   default:
//     console.log('Color is not red or blue');
//     break;
// }

// switch(new Date().getDay()) {
//   case 0:
//   day = 'Sunday';
//   break;
//   case 1:
//   day = 'Monday';
//   break;
//   case 2:
//   day = 'Tuesday';
//   break;
//   case 3:
//   day = 'Wednesday';
//   break;
//   case 4:
//   day = 'Thursday';
//   break;
//   case 5:
//   day = 'Friday';
//   break;
//   case 6:
//   day = 'Saturday';
//   break;
// }

// console.log(`Today is ${day}`);

// ----------------------------------------------

// Function Declarations

// function greet(firstName = 'Steve', lastName ='Miller'){
// //  console.log('Hello');
//   return `Hello ${firstName} ${lastName}`;
// }

// console.log(greet());

// Function Expressions

// const square = function(x) {
//   return x*x;
// };

// console.log(square(8));

// Immediately Invokable Functin Expressions --IIFEs

// (function(name){
//   console.log(`Hello ${name}`);
// })('Chris');

// Property Methods 
// ----------------------------------------------------------------
// const todo = {
//   add: function(thing){
//     console.log(`Add todo: ${thing}`);
//   },
//   edit: function(id){
//     console.log(`Edit todo ${id}`);
//   }
// };
// todo.delete = function(delItem){
//   console.log(`Delete Item: ${delItem}`)
// };


// todo.add('Walk Tony');
// todo.edit(22);
// todo.delete('Walk TOny');
// console.log(Object.prototype.toString.call(todo));
// console.log(Object.prototype.toString.call(todo.add));

// General Loops

// for(let i = 0; i < 10; i++){
//   // console.log(i);
//   if(i === 2) {
//     console.log(`2 is my favorite number`);
//     continue
//   }
//   if(i === 5){
//     console.log('Stop the loop');
//     break;
//   }
  
//   console.log(`Number: ${i}`);  
// }

// While Loop
// let i = 0;

// while(i < 10){
//   console.log('Number ' + i);
//   i++;
// }

// DO While Loop
// let i = 100;

// do {
//   console.log('Number ' + i);
//   i++;
// }

// while(i < 10);

// Loops through ARRAYS
// const cars = ['Ford', 'Chevy', 'Honda', 'Toyota'];

// // for(let i = 0; i < cars.length; i++ ){
// //   console.log(cars[i]);
// // }

// // forEach(function) Better with ARRAYS
// cars.forEach(function(car, index) {
//   console.log(`${index} : ${car}`);
//   console.log(Array);
// });

// MAP
// const users = [
//   {id: 1, name: 'john'},
//   {id: 2, name: 'sarah'},
//   {id: 3, name: 'devin'}
// ];

// const ids = users.map(function(user){
//   return user.id;
// });

// console.log(ids);


// For In
// const user = {
//   firstName: 'John',
//   lastName: 'Doe',
//   age: 40,
// }

// for(let x in user){
//   console.log(`${x} : ${user[x]}`);
// }

// Windows Methods / Objects / Properties

// Alert
// window.alert('hello world');

// const input = prompt();
// alert(input);

// Confirm
// if(confirm('Are you sure')){
//   console.log('YES');
// } else {
//   console.log('NO');
// }

// Height and Width

let val;

// val = window.outerHeight;
// val = window.innerHeight;
// val = window.outerWidth;
// val = window.innerWidth;

// val = window.scrollY;

// Location Object
// val = window.location;
// val = window.location.hostname;
// val = window.location.port;
// val = window.location.href;
// val = window.location.search;

// Redirect
// window.location.href = 'http://archershot.com';

// Reload
// window.location.reload();

// History Object


// val = window.history.length;
// val = window.history.go(-1);

// Navigator Object
// val = window.navigator;
// val = window.navigator.platform;
// val = window.navigator.appVersion;
// val = window.navigator.userAgent;
// val = window.navigator.vendor;
// val = window.navigator.language;

// 

console.log(val);