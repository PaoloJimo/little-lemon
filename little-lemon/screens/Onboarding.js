import * as React from 'react';
import { useState } from 'react';
import { View, Image, StyleSheet, Text, TextInput, Alert, Button } from 'react-native';

const OnboardingScreen = () => {

    const [email, setEmail] = useState("");
    const [name, setName] = useState("");

   
  
    return (
      <View style={styles.container}>
        
        <Text style={styles.textStyle}>Little Lemon</Text>
     
        
        
        <Text style={styles.textStyle}>Let us get to know you</Text>
  
        <TextInput 
          style={styles.inputStyle}
          placeholder='Type your name'
          value={name}
          onChangeText={setName}
        />
        <TextInput 
          style={styles.inputStyle}
          placeholder='Type your email'
          value={email}
          onChangeText={setEmail}
          keyboardType="email-address"
          textContentType="emailAddress"
        />
  
        <Button
          onPress={ () => Alert.alert("Next page, it is not programmed yet") }
          title="Next"
          color="#006600"
          
        />
      </View>
    );
  };
  
  export default OnboardingScreen;
  
  const styles = StyleSheet.create({
    container : {
      marginLeft: 25,
      marginRight: 25,
    },
    logo : {
      marginTop: 40,
      marginLeft: 75,
      height: 120,
      width: 200,
      resizeMode: "contain",
      display:"inline"
    },
    textStyle : {
      marginTop: 30,
      marginBottom: 30,
      fontSize: 19,
      textAlign: 'center'
    },
    inputStyle : {
      marginBottom: 20,
      fontSize: 16,
      borderColor: "#000000",
      borderWidth: 1,
      height: 40,
      borderRadius: 10,
      paddingLeft: 10,
      paddingRight: 10,
    },
  })