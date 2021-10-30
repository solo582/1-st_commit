'use strict';


var number = 5;
var string = "Hello";
var sym = Symbol();
var boolean = true;
null;
undefined;
var obj = {};

console.log(4/0);
console.log('string' * 9);

let bebra;

console.log(bebra);

let bebro4ka = {
    key: "Value",
    age : 25,
    isMarried: false
};

console.log(bebro4ka["isMarried"])

let array = ['plum.png','orange.jpg','apple.bmp'];

console.log(array[0])

// alert("Hello!");

/* let answer = confirm("Are you here?");
console.log(answer); */

let answer = +prompt("Are you 18y.o?", "");
console.log(typeof(answer));
