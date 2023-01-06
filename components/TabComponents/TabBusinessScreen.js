import React from "react";
import { StyleSheet, Text, View, Button } from 'react-native';

export default function Business({ navigation }) {

   return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#ffffff' }}>
        <Text style={{color: '#000000'}}>I'm Business Screen!</Text> 
        <Button title="Back Home" onPress={()=> navigation.push('Splash') } />
      </View>
   );
  } 