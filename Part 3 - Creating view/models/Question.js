export default class Question {
	quesID: int;
	quesContent: string;
	answerA: string;
	answerB: string;
	answerC: string;
	answerD: string;
	rightAnswer: string;

	constructor(
		quesID=6969,
		quesContent="",
		answerA="",
		answerB="",
		answerC="",
		answerD="",
		rightAnswer="") {

		this.quesID = quesID;
		this.quesContent = quesContent;
		this.answerA = answerA;
		this.answerB = answerB;
		this.answerC = answerC;
		this.answerD = answerD;
		this.rightAnswer = rightAnswer;
	}
}