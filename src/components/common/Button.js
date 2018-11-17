import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = ({ onPress, children }
    ) => {
    const { buttonStyle, textStyle } = styles

    return (
        <TouchableOpacity onPress={onPress} style={buttonStyle}>
            <Text style={textStyle}>
                { children }
            </Text>
        </TouchableOpacity>
    );
};

export default Button;

const styles = {
    buttonStyle: {
        flex: 1, 
        alignSelf: 'stretch',
        backgroundColor: '#fff', 
        borderWidth: 1, 
        borderColor: '#007aff',
        borderRadius: 3
    }, 
    textStyle: {
        alignSelf: 'center',
        color: '#007aff', 
        fontSize: 16, 
        fontWeight: '600', 
        paddingTop: 10, 
        paddingBottom: 10
    }
};