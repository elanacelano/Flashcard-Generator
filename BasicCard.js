function BasicCard (front, back) {
    this.front = front;
    this.back = back;
    this.printFront = function(){
        console.log(this.front);
    }
    this.printBack = function(){
        console.log(this.back);
    }
};




module.exports = BasicCard;
// exports.BasicCard = function(question, answer){
//     this.front = question;
//     this.back = answer;
// };        

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


