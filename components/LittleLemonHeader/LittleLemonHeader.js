import * as React from 'react';  
import { StyleSheet ,View, Text, } from 'react-native';
    
export default function LittleLemonHeader() {
   return (
    <View style={styles.container}>
        <Text style={styles.textStyle}>
            Little Lemon
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
    },
    textStyle:{
        padding: 30,
        fontSize: 30,
        color: 'black',
        textAlign:'center'
    }
  });