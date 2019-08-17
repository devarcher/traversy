function Person(firstName, lastName, dob) {
  this.firstName = firstName;
  this.lastName = lastName;
  // this.age = age;
  this.birthday = new Date(dob);
  // this.calculateAge = function(){
  //   const diff = Date.now() - this.birthday.getTime();
  //   const ageDate = new Date(diff);
  //   return Math.abs(ageDate.getUTCFullYear() - 1970);
  // }
}

// const brad = new Person('Brad', 36);
// const john = new Person('John', 30);

// console.log(john);

// const brad = new Person('Brad', '9-10-1981');
// console.log(brad.calculateAge());

// Calculate Age
Person.prototype.calculateAge = function(){
  const diff = Date.now() - this.birthday.getTime();
  const ageDate = new Date(diff);
  return Math.abs(ageDate.getUTCFullYear() - 1970);
}

// Get Full Name
Person.prototype.getFullName = function() {
  return `${this.firstName} ${this.lastName}`;
}

// Gets Married
Person.prototype.getsMarried = function(newLastName) {
  this.lastName = newLastName;
}

const john = new Person('Jon', 'Doe', '8-12-90');
const mary = new Person('Mary', 'Johnson', 'March 20 1978');

console.log(mary.getFullName());
console.log(john.calculateAge());

mary.getsMarried('Smith');
console.log(mary.getFullName());

console.log(mary.hasOwnProperty('firstName'));
console.log(mary.hasOwnProperty('getFullName'));





