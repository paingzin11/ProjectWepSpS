import React, {useState, useEffect} from "react";
import { StyleSheet, Text, View, TextInput, FlatList, Image, TouchableOpacity, Alert } from 'react-native';


export default function MuseumListScreen({ navigation }) {

  const API = 'https://jsonplaceholder.typicode.com/users';
  const [data, setData] = useState([]);

  const fetchPost = async() => {
    try{
      const response = await fetch(API);
      const json = await response.json();
      setData(json);
    }
    catch(error){
      console.error(error);
    }

  };

  useEffect(
    ()=> {
      fetchPost()
    }
    );

  function imageOnpressHandler(params) {
    return(
      Alert.alert("Coming Soon!!!")
    )  
  };

  const renderItem = (itemData) => {
    return (
      <View style={styles.containerFlate}>
          <View style={styles.innerContainer}>
            <TouchableOpacity onPress={imageOnpressHandler}>
              <Image source={require('../../images/images.jpeg')} style={styles.Images}/>
            
              <View style={{marginTop:5}}>
                  <Text style={styles.title}>Id : {itemData.item.id}</Text>
                  <Text style={styles.title}>Name : {itemData.item.name}</Text>
                  <Text style={styles.title}>Email : {itemData.item.email}</Text>
              </View>
            </TouchableOpacity>
          </View>
      </View>
  );
  }

  return (
      
    <View style={styles.container}>
      <View style={styles.HeaderSearch}>
        <TextInput style={styles.textinput}/>
        <TouchableOpacity style={styles.searchimage} >
            <Image source={require('../../images/Search.png')} style ={{ width:30, height:30 }}  />
        </TouchableOpacity>
      </View>
      
      <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={(item) => item.id }
      />

    </View>
  );

  

}

const styles = StyleSheet.create({
  container :{
    marginTop: 20,
    backgroundColor: '#e1f7f4',
    marginBottom: 40,
    paddingBottom: 50,
  },
  containerFlate: {
      flex: 1,
      margin: 10,
      borderRadius: 8,
      backgroundColor: '#F9F9F9',
      marginBottom: 5,
  },
  buttonStyle: {
      justifyContent:'center',
      alignItems: 'center',
      backgroundColor: '#DDDDDD',
      padding: 10,
      width: '100%',
      marginTop: 400,
  },
  innerContainer: {
      flex: 1,
      borderRadius: 8,
      margin: 10,
  },
  title: {
      fontSize: 15,
  },
  Images:{
    width: '100%',
    height: 100,
    resizeMode: 'stretch',
    borderRadius: 10,
  }, 
  textinput:{
    backgroundColor:'#FFF8EA',
    height: 30,
    width: '90%',
   
  },
  searchimage:{
    width: '30%',
    paddingLeft: 5,
  },
  HeaderSearch: {
    flexDirection: 'row',
    marginTop: 15,
    marginLeft: 10,
    marginRight: 10,
    marginBottom: 10,
    backgroundColor: '#e9f5f4',
    padding: 5,
    borderWidth: 1,
    borderColor: '#091a96',
    borderRadius: 10,
  },
});

      
  
