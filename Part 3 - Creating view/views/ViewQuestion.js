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

export default class ViewQuestion extends Component<Props> {
  constructor(props) {
    super(props);

    this.state = {
      question: this.props.question,
    };
  }

  render() { 
    return (
      <View style={styles.container}>
        <Text style={styles.text}>Sentence {this.state.question.quesID}: {this.state.question.quesContent}</Text>
        <Text style={styles.text}>{this.state.question.answerA}</Text>
        <Text style={styles.text}>{this.state.question.answerB}</Text>
        <Text style={styles.text}>{this.state.question.answerC}</Text>
        <Text style={styles.text}>{this.state.question.answerD}</Text>
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