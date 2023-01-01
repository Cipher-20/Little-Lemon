import * as React from 'react';
import { StyleSheet, Text,View, ScrollView, Image, useColorScheme, Pressable, } from 'react-native';

export default function WelcomeScreen({navigation}) {

    // const colorSchame = useColorScheme();

    return (
        <ScrollView style={styles.container}>
        <View style={styles.headerWrapper}>

            <Image
            style={styles.logo}
            source={require('../../assets/little-lemon-logo.png')}
            resizeMode='contain'
            accessoble={true}
            accessibilityLabel={'Little Lemon Logo'}
            />


        </View>

            <Text style={styles.textStyle}>
                Little Lemon, your local Mediterranean Bistro.
            </Text>

            <Pressable
                style={styles.button}
             onPress={() =>{
                navigation.navigate('Login')
             }}
            >

            <Text style={styles.textButton}>Newsletter</Text>
            </Pressable>


        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        color: 'black',
        backgroundColor: '#EDEFEE'

    },
    headerWrapper: {
        flexDirection: 'row',
        justifyContent: 'center',
        margin: 50,
        marginTop: 100
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
        // color: '#EDEFEE',
        marginVertical: 8,
        fontWeight: 'bold'
    },
    logo:{
        height: 200,
        width: 100, 
    },
    button:{
        fontSize:22,
        backgroundColor: 'rgb(62,82,75)',
        borderColor: 'rgb(62,82,75)',
        padding: 10,
        margin: 25,
        marginVertical:130,
        borderWidth: 2,
        borderRadius: 10
    },
    textButton:{
        textAlign:'center',
        fontSize:16,
        color:'white'
    }
  });
  

//   Little Lemon is a charming neighborhood bistro that 
//   serves simple food and classic cocktails in a lively but casual environment.
//   We would love to hear more about your experience with us!