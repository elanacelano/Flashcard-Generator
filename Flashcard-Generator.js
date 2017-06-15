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

//  Cloze Card from the instructions is almost like another game
// so you have Basic Card where its function is to be sort of like you guess an answer and it'll 
// spit back whether you are right or wrong

	// Cloze Card is where you are prompted an incomplete sentence and the user has to input the rest
	// My plan of attack would be this...

	// Inside your BasicCard function you have all the code that does that particular game
	// Inside ClozeCard function you have all the code that does the other game
	// and your main file is basically an if/else statement that takes in what the user types in 
	// and depending on what they type in it'll either run the BasicCard function or the ClozeCard function