import * as React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';

export default function ContentText() {
    return (
        <View style={styles.container}>
            <Text style={styles.header}>
                Welcome to Little Lemon
            </Text>

            <Text style={styles.textStyle}>
                Little Lemon is a charming neighborhood bistro that 
                serves simple food and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 30,
        color: 'black'
    },
    header:{
        fontSize: 30,
        textAlign:'center'
    },
    textStyle:{
        fontSize: 20,
        textAlign:'center',
        marginVertical: 8
    }
  });
  