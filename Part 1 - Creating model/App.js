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
} from 'react-native';
import Question from './models/Question.js';

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

  render() { 
    return (
      <View style={styles.container}>
        <Text>Sentence {this.question.quesID}: {this.question.quesContent}</Text>
        <Text>{this.question.answerA}</Text>
        <Text>{this.question.answerB}</Text>
        <Text>{this.question.answerC}</Text>
        <Text>{this.question.answerD}</Text>
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
