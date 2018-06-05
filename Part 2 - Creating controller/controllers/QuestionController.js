import { observable, action } from 'mobx';
import Question from 'MVCDemo/models/Question.js';

export default class QuestionController {
	@observable lstQuestion = [];

	@action setListQuestion(lstQuestion) {
		if(lstQuestion != null)
			this.lstQuestion = lstQuestion;
	}

	@action getQuestion(quesID) {
		var question = lstQuestion.find(q => q.quesID == quesID);
		if(question != null)
			return question;

		return new Question();
	}
}