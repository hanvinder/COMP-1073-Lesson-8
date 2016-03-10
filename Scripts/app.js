// setup your IIFE (Immediately Invoked Function Expression)
(function () {
	
"use strict";

var myVariable = "hello";
console.log("myVariable"+ myVariable);
/*
var myArray =[
	"my fiirst greeting",
	"my second greeting"
];*/
 
/*
var myArray =[];

myArray.push("my fiirst greeting");
myArray.push("my second greeting");


console.log(myArray[1]);*/
var myArray =[
	"Hanvinder",
	"360 DUCKWORTH",
	"Barrie",
	"Ontario",
	20,
	true
];

for (var index=0; index < myArray.lengh; index++){
	console.log(myArray[index]);
}

})();