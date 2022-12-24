import * as React from 'react';
import { View, Text } from 'react-native';

export default function ContentText() {
    return (
        <View style={{ padding: 30, color: 'black'}}>
            <Text style={{fontSize: 30, textAlign:'center'}}>
                Welcome to Little Lemon
            </Text>

            <Text style={{fontSize: 20, textAlign:'center',marginTop:60}}>
                Little Lemon is a charming neighborhood bistro that 
                serves simple food and classic cocktails in a lively but casual environment.
                We would love to hear more about your experience with us!
            </Text>
        </View>
    );
}
