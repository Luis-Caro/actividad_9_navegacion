import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView } from "react-native";

export default function SettingsScreen({ route, navigation }) {
   const { itemId } = route.params;
   const [post, setPost] = useState([]);

   const getPost = async() => {
    try{
      const url = `https://jsonplaceholder.typicode.com/posts/${itemId}`;
      const response = await fetch(url); //consumo de dados - consumo de datos en portugues
      const json = await response.json(); //converte para json - se convierte en json en italiano
      setPost(json);
    } catch (error) {

      console.error(error);
    }
  }

  useEffect(()=>{
    getPost();
  },[post])



  


  return (
    <SafeAreaView>
      <Text>Id: {JSON.stringify(itemId)}</Text>
      <Text>Titulo: {post.title}</Text>
      <Text>Body: {post.body}</Text>
      <Button onPress={() =>{
        navigation.navigate('Home');
      }} title="Regresar" />
    </SafeAreaView>
  );
}
