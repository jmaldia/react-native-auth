// Import libraries for making a component
import React from 'react';
import { Text, View } from 'react-native';

// Make a component
const Header = (props) => {
    return (
        <View style={styles.header}>
            <Text style={styles.headerText}>{props.headerText}</Text>
        </View>
    )
}

// Make the component available to other parts of the app
export default Header;

styles = {
  header: {
      paddingTop: 50,
      marginBottom: 10,
      width: '100%',
      backgroundColor: '#2980b9',
      shadowColor: '#000',
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.4,
      elevation: 2,
      position: 'relative'
  }, 
  headerText: {
    color: '#ecf0f1',
    fontSize: 25,
    textAlign: 'center',
    paddingBottom: 20,
    textTransform: 'uppercase'
  }
};



// import { styles } from '../Styles';