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
  ActivityIndicator
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

    this.state = {
      isLoading: true,
    };
  }

  componentDidMount() {
    return fetch("https://gist.githubusercontent.com/uit2712/9aaa24b22016d7efba127b5342a09e96/raw/a6f3cef0a4f60dac2c45cdd135c8df49e3720425/QuizApp.json")
          .then((response) => response.json())
          .then((responseJson) => {
            var questionData = responseJson.QUESTION;

            if(questionData != null) {
              var length = questionData.length;
              var lstQuestion = []; // store all questions
              for(var i = 0; i < length; i++) {
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
              this.question = QuestionController.getQuestion(2);
              this.setState({isLoading: false});
            }
          })
          .catch((error) => {
            ToastAndroid.show(error.toString(), ToastAndroid.SHORT);
          });
  }

  render() { 
    if(this.state.isLoading) {
      return (
        <View style={styles.container}>
          <Text>Loading data</Text>
          <ActivityIndicator/>
        </View>
      );
    }

    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sentence {this.question.quesID}: {this.question.quesContent}</Text>
        <Text style={styles.text}>{this.question.answerA}</Text>
        <Text style={styles.text}>{this.question.answerB}</Text>
        <Text style={styles.text}>{this.question.answerC}</Text>
        <Text style={styles.text}>{this.question.answerD}</Text>
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
    text: {
      fontSize: 20,
    },
  });