/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

 import React, { Component } from 'react';
 import {
  Platform,
  StyleSheet,
  Text,
  View,
  ToastAndroid,
} from 'react-native';
import Question from './models/Question.js';
import QuestionController from './controllers/QuestionController.js';

export default class App extends Component<Props> {
  constructor(props) {
    super(props);

    this.question = new Question();
    this.question.quesID = 1;
    this.question.quesContent = "Which sport do you like?";
    this.question.answerA = "football";
    this.question.answerB = "badminton";
    this.question.answerC = "swimming";
    this.question.answerD = "esport";
  }

  componentDidMount() {
    return fetch("https://gist.githubusercontent.com/uit2712/9aaa24b22016d7efba127b5342a09e96/raw/a6f3cef0a4f60dac2c45cdd135c8df49e3720425/QuizApp.json")
          .then((response) => response.json())
          .then((responseJson) => {
            var questionData = responseJson.QUESTION;

            if(questionData != null) {
              var lstQuestion = [];
              for (var i = 0; i < questionData.length; i++) {
                var item = questionData[i];
                var question = new Question();
                question.quesID = item.QuesID;
                question.quesContent = item.QuesContent;
                question.answerA = item.AnswerA;
                question.answerB = item.AnswerB;
                question.answerC = item.AnswerC;
                question.answerD = item.AnswerD;
                question.rightAnswer = item.RightAnswer;

                lstQuestion.push(question);
              }

              QuestionController.setListQuestion(lstQuestion);
            }
          })
          .catch((error) => {
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
          })
  }

  render() { 
    return (
      <View style={styles.container}>
        
        <Text>Sentence {QuestionController.lstQuestion[0].quesID}: {QuestionController.lstQuestion[0].quesContent}</Text>
        <Text>{QuestionController.lstQuestion[0].answerA}</Text>
        <Text>{QuestionController.lstQuestion[0].answerB}</Text>
        <Text>{QuestionController.lstQuestion[0].answerC}</Text>
        <Text>{QuestionController.lstQuestion[0].answerD}</Text>
      </View>
      );  

    }
  }

  const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
    },
  });
