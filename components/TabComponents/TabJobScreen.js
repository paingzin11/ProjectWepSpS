import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Job({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Text style={{color: '#000000'}}>I'm Job Search!</Text> 
        <Button title="Back Home" onPress={()=> navigation.push('Splash') } />
      </View>
    );
  }
