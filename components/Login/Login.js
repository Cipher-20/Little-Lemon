// wih socrollView  zashtoto kato skrolnesh da moje da ti maha klaviaturata


import React, { useState } from 'react';
import { ScrollView, Text, StyleSheet, TextInput, Pressable } from 'react-native';

export default function Login({ navigation }){
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [isLogIn, setIsLogIn] = useState(false);

    return(
        <ScrollView style={styles.container}>
            <Text style={styles.headerText}>Welcome to Little Lemon</Text>
            

            <Text style={styles.regularText}>Login to continue </Text> 
            
            <TextInput 
                style={styles.inputBox}
                value={email}
                onChangeText={setEmail}
                placeholder={'email'}
                keyboardType={'email-address'}
            ></TextInput>

            <TextInput 
                style={styles.inputBox}
                value={password}
                onChangeText={setPassword}
                placeholder={'password'}
                keyboardType={'default'}
                secureTextEntry={true}
            ></TextInput>

            <Pressable
            style={styles.button}
            onPress={() =>{
                navigation.navigate('Welcome')
                setIsLogIn(!isLogIn)
            }}
            >
            <Text style={styles.buttonText}>
                Log in</Text>
            </Pressable>

        </ScrollView>
    )
}


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'rgb(74, 95, 88)'
    },
    headerText: {
      padding: 40,
      fontSize: 30,
      color: '#EDEFEE',
      textAlign: 'center',
    },
    regularText: {
      fontSize: 24,
      padding: 20,
      marginVertical: 8,
      color: '#EDEFEE',
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
        backgroundColor: '#EE9972',
        borderColor: '#EE9972',
        padding: 10,
        margin: 90,
        marginVertical:8,
        borderWidth: 2,
        borderRadius: 25
    },
    buttonText: {
        color: '#333333',
        textAlign: 'center',
        fontSize: 22,
    },
    loggedText:{
        color: '#EDEFEE',
        textAlign: 'center',
        fontSize: 30,
    }


  });
  