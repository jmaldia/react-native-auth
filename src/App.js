import firebase from 'firebase';
import React, { Component } from 'react';
import { View } from 'react-native';

import { Header, Button, Spinner } from './components/common';
import LoginForm from './components/LoginForm';

class App extends Component {
  state = {
    loggedIn: null
  }
  
  componentWillMount() {
    firebase.initializeApp({
        apiKey: "AIzaSyBxhz2QgHhOW0-PvcILUjIVJVOzlwSiXwg",
        authDomain: "auth-920ed.firebaseapp.com",
        databaseURL: "https://auth-920ed.firebaseio.com",
        projectId: "auth-920ed",
        storageBucket: "auth-920ed.appspot.com",
        messagingSenderId: "930748605643"
    });

    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ loggedIn: true });
      } else {
        this.setState({ loggedIn: false });
      }
    });
  }

  renderContent() {
    switch (this.state.loggedIn) {
      case true: 
        return (
          <Button onPress={() => firebase.auth().signOut()}>
            Log Out
          </Button>
        );
      case false:
        return <LoginForm />;
      default:
        return <Spinner />;
    }
  }

  render() {
    return (
      <View style={{ height: 150 }}>
        <Header headerText="Authentication" />
        { this.renderContent() }
      </View>
    );
  }
}

export default App;