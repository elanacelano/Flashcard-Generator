module.exports = BasicCard;
exports.BasicCard = function(question, answer){
    this.front = question;
    this.back = answer;
};        

var firstPresident = new BasicCard(
    this.question = "Who was the first president of the United States?",
    console.log(firstPresident.front);
    this.answer = "George Washington",
    console.log(firstPresident.back);
);
    if (this.question === correct) {
        console.log(WooHoo, correct);
    } else {
        console.log(Sorry, incorrect);
}


// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "
    
// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");

// card = Card.new("", ""){
// card.question = "",
// card.answer = "",
// };


