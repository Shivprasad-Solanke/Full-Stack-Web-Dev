"use strict"

// single line comment

/* 
    Multi
    Line
    Comment 
*/

// alert statements
// alert("External Alert")
// alert("External Alert")

// "use strict" for modern JS
// "use strict"

// Variables
// ==================================
// using let
// let $_firstName = "Shivprasad";
// console.log($_firstName);
// using const
// const COLOR_RED = "#fff";
// console.log(COLOR_RED);

// HW
// =====
// 1
// let name = "John";
// let admin = name;
// alert(admin);

// 2
// let ourPlanetName = "Earth";
// let currentUserName = "Shiv";

// 3
// let BIRTHDAY = "01.01.2001";
// let age = someFunction(BIRTHDAY);


// DATA TYPES
// =======================================

// 1. Primitive Data Types
// ===============================

// Dynamically Typed
// Number
// =====================
// undefined
// let anyDataTypeVar;
// console.log(typeof(anyDataTypeVar));
// console.log(anyDataTypeVar);

// // number
// anyDataTypeVar = 5;
// console.log(typeof(anyDataTypeVar));
// console.log(anyDataTypeVar);

// anyDataTypeVar = 9007199254740991 + 2;
// console.log(anyDataTypeVar);

// anyDataTypeVar = 4.323;
// console.log(typeof anyDataTypeVar);
// console.log(anyDataTypeVar);

// // BigInt
// anyDataTypeVar = 1234567890123456789012345678901234567890n;
// console.log(typeof(anyDataTypeVar));
// console.log(anyDataTypeVar);

// // NaN Not a Number
// anyDataTypeVar = NaN;
// console.log(anyDataTypeVar);

// anyDataTypeVar = "string divided by Number" / 10;
// console.log(anyDataTypeVar);

// // string
// anyDataTypeVar = "This is a Double Quoted String ! ";
// console.log(anyDataTypeVar);

// anyDataTypeVar = 'This is a Single Quoted String !';
// console.log(anyDataTypeVar);

// anyDataTypeVar = `This is a Back-Ticked Quote for using expression and Vars inside a String like this 5 + 4 = ${5 + 4}`;
// console.log(anyDataTypeVar)

// // boolean
// anyDataTypeVar = true;
// console.log(anyDataTypeVar);

// anyDataTypeVar = 5 > 2;
// console.log(anyDataTypeVar);

// // null
// anyDataTypeVar = null;
// console.log(anyDataTypeVar);

// // typeof
// console.log("Type of shows type of any data !");
// console.log(`eg. typeof 45.34 = ${typeof 45.34}`);

// // Interactions : ALERT, PROMPT, CONFIRM
// // =========================================

// // alert
// alert("This is a alert !");

// // prompt
// let promptResult = prompt("Enter your Age :", 99);
// alert(`Your age is ${promptResult}`);

// // confirm
// let confirmResult = confirm("Click OK for true and Cancel for false, Ok ?");
// alert(`You chose ${confirmResult}`);

// // *** Task
// let userName = prompt("What is your name ?");
// alert(`Your name is ${userName}`);



// TYPE Conversion
// ===================================================

// String Conversion
// ====================

// header
console.log("typeof  Value");

// undefined to string
let preConversionData;
console.log(`${typeof preConversionData} ${preConversionData}`);
let postConversionData = String(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// number to string
preConversionData = 1234;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = String(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// boolean to string
preConversionData = 6 < 2;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = String(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// null to string
preConversionData = null;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = String(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// NaN to string
preConversionData = NaN;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = String(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);


// Number Conversion
// ======================

// sting to number
preConversionData = " Hello ";
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Number(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

preConversionData = ""; // or " " also
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Number(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

preConversionData = "  123  "; // but " 123 345 " will be NaN
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Number(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// boolean to number
preConversionData = true;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Number(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

preConversionData = false;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Number(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// null to number
preConversionData = null;
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Number(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// undefined to number
let preUndefinedConversionData;
console.log(`${typeof preUndefinedConversionData} ${preUndefinedConversionData}`);
let postUndefinedConversionData = Number(preUndefinedConversionData);
console.log(`${typeof postUndefinedConversionData} ${postUndefinedConversionData}`);


// Boolean Conversion
// ===============================

// string to boolean
preConversionData = " "; // true 
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

preConversionData = " hello "; // true   // "0" also true
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

preConversionData = ""; // false
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// number to boolean
preConversionData = 0; // false
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

preConversionData = 1; // true // same for -1, -543 also true
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// null to boolean
preConversionData = null; // false
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);

// NaN to boolean
preConversionData = NaN; // false
console.log(`${typeof preConversionData} ${preConversionData}`);
postConversionData = Boolean(preConversionData);
console.log(`${typeof postConversionData} ${postConversionData}`);


// undefined
let preUndefinedForBoolean; // false
console.log(`${typeof preUndefinedForBoolean} ${preUndefinedForBoolean}`);
let postUndefinedForBoolean = Boolean(preUndefinedForBoolean);
console.log(`${typeof postUndefinedForBoolean} ${postUndefinedForBoolean}`);



