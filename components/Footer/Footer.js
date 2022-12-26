import * as React from 'react';  
import { StyleSheet,View, Text } from 'react-native';
    
export default function Footer() {
   return (
    <View style={styles.container}>
        <Text style={styles.footerText}>
            &copy; All rights reserved by Little Lemon, 2022
        </Text>
    </View>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#EE9972',
        marginBottom: 0,
    },
    footerText:{
        fontSize: 12,
        color: 'black',
        textAlign:'center',
        fontStyle: 'italic'
    }
  });