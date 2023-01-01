// wih socrollView  zashtoto kato skrolnesh da moje da ti maha klaviaturata


import React, { useState } from 'react';
import {Alert ,ScrollView, Text, StyleSheet, TextInput, Pressable, Image, View } from 'react-native';

export default function Login({ navigation }){
    const [email, setEmail] = useState("");
    const [isLogIn, setIsLogIn] = useState(false);

    let isValid = email.match(/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/)



    return(
        <ScrollView style={styles.container}>

            <View style={styles.headerWrapper}>

                <Image 
                style={styles.logo}
                source={require('../../assets/little-lemon-logo-grey.png')}
                />

            </View>


                <Text style={styles.regularText}>Subscribe to our newsletter for our latest delicious recipes!</Text> 
            
                <TextInput 
                style={styles.inputBox}
                value={email}
                onChangeText={setEmail}
                placeholder={'email'}
                keyboardType={'email-address'}

                ></TextInput>
             
            
             {isValid ?            
                <Pressable 
                    disabled={false}
                    style={styles.button}

                    onPress={() =>{
                        Alert.alert('Thanks for subscribing', 'stay tuned!')
                    navigation.navigate('Welcome')
                    }}
                >
                    <Text 
                    style={styles.buttonText}>
                    Subcribe </Text>

                </Pressable> 
             :
              <Pressable 
                disabled={true}
                style={styles.blured}

                onPress={() =>{

                }}
               >
                    <Text 
                    style={styles.buttonText}>
                    Subcribe </Text>

                </Pressable> }
        

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'white'
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: 'black',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 20,
      padding: 20,
      marginVertical: 8,
      color: 'black',
      textAlign: 'center',
    },
    inputBox: {
      height: 40,
      margin: 12,
      borderWidth: 1,
      padding: 10,
      fontSize: 16,
      borderColor: '#EDEFEE',
      backgroundColor: '#EDEFEE',
    },
    button:{
        fontSize:22,
        backgroundColor: 'rgb(62,82,75)',
        borderColor: 'rgb(62,82,75)',
        padding: 5,
        margin: 12,
        marginVertical:8,
        borderWidth: 2,
        borderRadius: 10
    },
    buttonText: {
        color: 'white',
        textAlign: 'center',
        fontSize: 18,
    },
    loggedText:{
        color: 'black',
        textAlign: 'center',
        fontSize: 30,
    },
    logo:{
        height: 100,
        width: 100,
        resizeMode:'contain',
    },
    headerWrapper:{
        flexDirection: 'row',
        justifyContent:'center',
        marginTop:50,
        margin:15
    },
    blured:{
        fontSize:22,
        backgroundColor: 'rgb(183, 183, 183)',
        borderColor: 'rgb(183, 183, 183)',
        padding: 5,
        margin: 12,
        marginVertical:8,
        borderWidth: 2,
        borderRadius: 10
    }


  });
  