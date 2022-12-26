import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function WelcomeScreen() {
    return (
        <ScrollView indicatorStyle="white" style={styles.container}>
            <Text style={styles.header}>
                Welcome to Little Lemon
            </Text>

            <Text style={styles.textStyle}>
                Little Lemon is a charming neighborhood bistro that 
                serves simple food and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        color: 'black'
    },
    header:{
        padding: 40,
        fontSize: 30,
        color: '#EDEFEE',
        textAlign:'center'
    },
    textStyle:{
        fontSize: 20,
        padding: 20,
        textAlign:'center',
        color: '#EDEFEE',
        marginVertical: 8,
    }
  });
  