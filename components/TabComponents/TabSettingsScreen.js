import React from "react";
import { Text, View, Button } from 'react-native';

export default function Settings({ navigation }) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Text  style={{color: '#000000'}}>Settings!</Text>
        <Button title="Back Home" onPress={()=> navigation.push('Splash') } />
      </View>
       
    );
  }