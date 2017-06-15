
module.exports = BasicCard;
exports.BasicCard = function(question, answer){
    this.front = question;
    this.back = answer;
};        


var card = required("./Flashcard-Generator.js");
var fs = required("fs");
var inquire = require("inquire");
var question = require("question");
var answer = require("answer");
{

}

// card = Card.new("", ""){
// card.question = "",
// card.answer = "",
// };

var firstPresident = new BasicCard(
    this.question = "Who was the first president of the United States?",
    console.log(firstPresident.front);
    this.answer = "George Washington",
    console.log(firstPresident.back);
);

