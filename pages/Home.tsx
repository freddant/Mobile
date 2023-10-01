import React from 'react'
import { Text, Button, ScrollView } from 'react-native'
import { ListItem } from '@rneui/themed'
import { useEffect, useState } from 'react'
import { Avatar, Divider } from '@rneui/base'
import { ListItemTitle } from '@rneui/base/dist/ListItem/ListItem.Title'
import { ListItemContent } from '@rneui/base/dist/ListItem/ListItem.Content'
import { ListItemSubtitle } from '@rneui/base/dist/ListItem/ListItem.Subtitle'
import axiosConfig from '../config/axios'

export default function Home({navigation}) {
  const [produto, setProdutos] = useState([])

  useEffect(() => {
    axiosConfig.get('character').then((resposta)=>{
      setProdutos(resposta.data.results)
    })
  },[])
  return (
   <ScrollView>
    <Text>Home</Text>
    <Text >Bem vindo gafanhoto</Text>
    <Divider/>
    {
      produto.length <= 0 && (
        <Text>Nenhum produto encontrado</Text>
      )
    }
    {
      produto.map((produto) => (
        <ListItem key = {produto.id} onPress={()=>{
          navigation.navigate("Produto",{produto})
        }}>
          <Avatar source={{uri: produto.image}} />
          <ListItemContent>
            <ListItemTitle>
              Name: {produto.name}
            </ListItemTitle>
            <ListItemSubtitle>
              Location: {produto.location.name}
            </ListItemSubtitle>
          </ListItemContent>
        </ListItem>
      ))
    }
    <Divider/>
    <Button
        title="Me aperta"
        onPress={() => navigation.navigate('Login')}
      />
   </ScrollView>
    );
}
