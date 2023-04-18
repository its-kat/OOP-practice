'use strict';

//Constructor functions

//only function declarations and function expressions work (this keyword)

const Person = function (firstName, birthYear) {
  //Instance properties
  this.firstName = firstName;
  this.birthYear = birthYear;

  // never create method inside a constructor function
  // this.calcAge = function () {
  //   console.log(2037 - this.birthYear);
  // };
};

const jonas = new Person('Jonas', 1991);
console.log(jonas);

//behind the scenes
// 1. new () is created
// 2. function is called, this = ()
// 3. () linked to prototype
// 4. function automaticallly return ()

const matilda = new Person('Matilda', 2017);
const jack = new Person('Jack', 1975);

console.log(matilda, jack);

// const jay = 'jay';

console.log(jonas instanceof Person);
// console.log(jay instanceof Person);
