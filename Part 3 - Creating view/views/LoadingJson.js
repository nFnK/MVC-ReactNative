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

export default class LoadingJson extends Component<Props> {
  render() { 
    return (
      <View style={styles.container}>
        <Text>Loading Json</Text>
        <ActivityIndicator/>
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