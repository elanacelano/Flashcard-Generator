// flashcards
exports.BasicCard = function(question, answer){
    this.front = question;
    this.back = answer;
};   
     
exports.ClozeCard = function(){
	this.incompleteAnswer = " ... was the first president of the United States.";
	console.log(firstPresidentCloze.partial); 
}


var firstPresident = new BasicCard(
    this.question = "Who was the first president of the United States?",
    console.log(firstPresident.front);
    this.answer = "George Washington",
    console.log(firstPresident.back);
);
