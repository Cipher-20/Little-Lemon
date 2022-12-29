import * as React from 'react';
import { StyleSheet, Text,View, ScrollView, Image, useColorScheme, } from 'react-native';

export default function WelcomeScreen() {

    // const colorSchame = useColorScheme();

    return (
        <ScrollView style={styles.container}>
        <View style={styles.headerWrapper}>

            <Image
            style={styles.logo} 
            source={require('../../assets/logo.png')}
            resizeMode='cover'
            accessible={true}
            accessibilityLabel={'Little Lemon Logo'}
            
            />
            <Text style={styles.header}>
                 Little Lemon
            </Text>
        </View>

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
        color: 'black',
        backgroundColor: 'rgb(74, 95, 88)'

    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 10,
    },
    header:{
        paddingRight: 10,
        paddingLeft: 20,
        paddingTop: 30,
        paddingBottom: 10,
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
    },
    logo:{
        height: 100,
        width: 100,
        
    }
  });
  