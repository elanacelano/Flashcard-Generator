module.exports = ClozeCard;
exports.ClozeCard = function (question, answer){
	this.front = question;
	this.back = answer;
};

 var firstPresidentCloze = new ClozeCard(
    this.answer = "George Washington was the first president of the United States.",
    this.answer = "George Washington";
    console.log(firstPresidentCloze.cloze);
    this.answer = " ... was the first president of the United States."
    console.log(firstPresidentCloze.partial);
    );

// // "George Washington"
// console.log(firstPresidentCloze.cloze); 

// // " ... was the first president of the United States.
// console.log(firstPresidentCloze.partial); "

// // "George Washington was the first president of the United States.
// console.log(firstPresidentCloze.fullText): "

// // Should throw or log an error because "oops" doesn't appear in "This doesn't work"
// var brokenCloze = new ClozeCard("This doesn't work", "oops");