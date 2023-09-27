import React from 'react';
import { Text, StyleSheet, View, Button } from 'react-native';

export default function Home({navigation}) {
  
  return (
   <View>
    <Text>Home</Text>
    <Text>Bem Vindes</Text>
    <Button
        title="Me aperta"
        onPress={() => navigation.navigate('Login')}
      />
   </View>
    );
}
