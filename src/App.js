import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';
import { Header } from './components/common';
import LoginForm from './components/LoginForm';

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
        <LoginForm />
      </View>
    );
  }
}

export default App;