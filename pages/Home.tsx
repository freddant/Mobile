import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function Home({navigation}) {
  
  return (
   <View>
    <Text>Home</Text>
    <Text>Bem vindo gafanhoto</Text>
    <Button
        title="Me aperta"
        onPress={() => navigation.navigate('Login')}
      />
   </View>
    );
}
