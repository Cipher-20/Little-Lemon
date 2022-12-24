import * as React from 'react';  
import { View, Text } from 'react-native';
    
export default function Footer() {
   return (
    <View style={{ flex: 1, marginTop: 560, backgroundColor: '#F4CE14' }}>
        <Text style={
            {
             fontSize: 12,
             color: 'black',
             textAlign:'center',
             }}>
            &copy; All rights reserved by Little Lemon, 2022
        </Text>
    </View>
    );
}
