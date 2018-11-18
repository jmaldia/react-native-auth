import firebase from 'firebase';
import React, {Component} from 'react';
import {Text, View} from 'react-native';
import { Header } from './components/common'

class App extends Component {
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyBxhz2QgHhOW0-PvcILUjIVJVOzlwSiXwg",
        authDomain: "auth-920ed.firebaseapp.com",
        databaseURL: "https://auth-920ed.firebaseio.com",
        projectId: "auth-920ed",
        storageBucket: "auth-920ed.appspot.com",
        messagingSenderId: "930748605643"
    });
  }

  render() {
    return (
      <View>
        <Header headerText="Authentication" />
        <Text>Welcome to my Auth App!</Text>
      </View>
    );
  }
}

export default App;