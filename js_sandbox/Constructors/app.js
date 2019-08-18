// function Person(firstName, lastName, dob) {
//   this.firstName = firstName;
//   this.lastName = lastName;
//   // this.age = age;
//   this.birthday = new Date(dob);
//   // this.calculateAge = function(){
//   //   const diff = Date.now() - this.birthday.getTime();
//   //   const ageDate = new Date(diff);
//   //   return Math.abs(ageDate.getUTCFullYear() - 1970);
//   // }
// }

// // const brad = new Person('Brad', 36);
// // const john = new Person('John', 30);

// // console.log(john);

// // const brad = new Person('Brad', '9-10-1981');
// // console.log(brad.calculateAge());

// // Calculate Age
// Person.prototype.calculateAge = function(){
//   const diff = Date.now() - this.birthday.getTime();
//   const ageDate = new Date(diff);
//   return Math.abs(ageDate.getUTCFullYear() - 1970);
// }

// // Get Full Name
// Person.prototype.getFullName = function() {
//   return `${this.firstName} ${this.lastName}`;
// }

// // Gets Married
// Person.prototype.getsMarried = function(newLastName) {
//   this.lastName = newLastName;
// }

// const john = new Person('Jon', 'Doe', '8-12-90');
// const mary = new Person('Mary', 'Johnson', 'March 20 1978');

// console.log(mary.getFullName());
// console.log(john.calculateAge());

// mary.getsMarried('Smith');
// console.log(mary.getFullName());

// console.log(mary.hasOwnProperty('firstName'));
// console.log(mary.hasOwnProperty('getFullName'));

// function Person(firstName, lastName) {
//   this.firstName = firstName;
//   this.lastName = lastName;
// }

// // Greeting
// Person.prototype.greeting = function() {
//   return `Hello there, ${this.firstName} ${this.lastName}.`;
// };

// const person1 = new Person("John", "Doe");
// console.log(person1.greeting());

// // Customer Constructor
// function Customer(firstName, lastName, phone, membership) {
//   Person.call(this, firstName, lastName);

//   this.phone = phone;
//   this.membership = membership;
// }

// // Inherit the Person protoype methods
// Customer.prototype = Object.create(Person.prototype);

// // Make customer.prototype return Customer();
// Customer.prototype.constructor = Customer;

// // Customer greeting
// Customer.prototype.greeting = function() {
//   return `Hello there, ${this.firstName} ${this.lastName}. Welcome to our company.`;
// }

// // Create Customer
// const customer1 = new Customer('Tom', 'Smith', '555-555-5555', 'Standard');
// console.log(customer1);
// console.log(customer1.greeting());

// const personPrototypes = {
//   greeting: function() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   },
//   getsMarried: function(newLastName) {
//     this.lastName = newLastName;
//   }
// }

// const mary = Object.create(personPrototypes);
// mary.firstName = 'Mary';
// mary.lastName = 'Williams';
// mary.age = 30;

// mary.getsMarried('Thompson');

// console.log(mary.greeting());

// const brad = Object.create(personPrototypes, {
//   firstName: {value: 'Brad'},
//   lastName: {value: 'Traversy'},
//   age: {value: 36}
// });

// console.log(brad);
// console.log(brad.greeting());

// class Person {
//   constructor(firstName, lastName, dob) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//     this.birthday = new Date(dob);
//   }

//   greeting() {
//     return `Hello there ${this.firstName} ${this.lastName}`;
//   }

//   calculateAge() {
//     const diff = Date.now() - this.birthday.getTime();
//     const ageDate = new Date(diff);
//     return Math.abs(ageDate.getUTCFullYear() - 1970);
//   }

//   getsMarried(newLastName) {
//     this.lastName = newLastName;
//   }

//   // Static Method
//   static addNumbers(x, y) {
//     return x + y;
//   }
// }

// const mary = new Person("Mary", "Williams", "11-13-1980");

// mary.getsMarried("Thompson");

// console.log(mary);

// console.log(Person.addNumbers(1 , 2));

// class Person {
//   constructor(firstName, lastName) {
//     this.firstName = firstName;
//     this.lastName = lastName;
//   }

//   greeting() {
//     return `Hello there ${this.firstName}`;
//   }
// }

// class Customer extends Person {
//   constructor(firstName, lastName, phone, membership) {
//     super(firstName, lastName);;

//     this.phone = phone;
//     this.membership = membership
//   }

//   static getMembershipCost() {
//     return 500;
//   }
// }

// const john = new Customer('John', 'Doe', '555-555-5555', 'Standard');

// console.log(john.greeting());

// console.log(Customer.getMembershipCost());

