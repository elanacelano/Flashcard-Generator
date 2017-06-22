var BasicCard = require("./BasicCard.js");


var firstPresident = new BasicCard(
    "Who was the first president of the United States?",
   	"George Washington"
);
// console.log(firstPresident.front);

firstPresident.printFront();



// flashcards
// var card = required("./Flashcard-Generator.js");
// var fs = required("fs");
// var inquire = require("inquire");
// var question = require("question");
// var answer = require("answer");

// exports.BasicCard = function(question, answer){
//     this.front = question;
//     this.back = answer;
// };   
     
// exports.ClozeCard = function(){
// 	this.incompleteAnswer = " ... was the first president of the United States.";
// 	console.log(firstPresidentCloze.partial); 
// }

