import Question from 'MVCDemo/models/Question.js';
import { observable, action } from 'mobx';

class QuestionController {
	@observable lstQuestion = [];

	@action setListQuestion(lstQuestion) {
		if(lstQuestion != null)
			this.lstQuestion = lstQuestion;
	}

	// get question by quesID
	@action getQuestion(quesID) {
		var question = this.lstQuestion.find(q => q.quesID == quesID);
		if(question != null)
			return question;

		return new Question();
	}
}

const questionController = new QuestionController();

export default questionController;