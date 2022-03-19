import React, { useEffect, useState } from 'react';
import { View, Text, Button, SafeAreaView, FlatList } from "react-native";

export default function HomeScreen({navigation }) {

  const [datos, setDatos] = useState([]);
  const getPosts = async() => {
    try{
      const url = "https://jsonplaceholder.typicode.com/posts";
      const response = await fetch(url); //Consumoir los datos en palabras del profe
      const json = await response.json(); //Convertir a json en palabras del profe
      setDatos(json);
    } catch (error) {

      console.error(error);
    }
  }

  useEffect(()=>{
    getPosts();
  }, [])

  return (
    <SafeAreaView>
      
      <FlatList
        data={datos}
        keyExtractor = { ({ id }, index) => id }
        renderItem = {
          ({item}) => (
            <Text onPress={

              ()=>{
                navigation.navigate('Detail', { itemId:item.id});
              }
            } >{item.title}</Text>
          )
        }
      />

      <Button onPress={()=>{

         navigation.navigate('Detail', {
            itemId: 8,
          });
        
      }} title="Mostrar detalle del post 8" />
    </SafeAreaView>
  );
}
