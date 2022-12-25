import * as React from 'react';  
import { StyleSheet,View, Text } from 'react-native';
    
export default function Footer() {
   return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>
            &copy; All rights reserved by Little Lemon, 2022
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F4CE14',
        marginTop:317
    },
    textStyle:{
        fontSize: 12,
        color: 'black',
        textAlign:'center',
    }
  });