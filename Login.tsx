import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, Text, TextInput, View, Button, Alert } from 'react-native';



export default function Login() {
  function checkPassword(psw, login) {
    if ((psw == "1234") && (login == 'admin')){
      Alert.alert('Login e senha corretos')
    }
    else{
      Alert.alert('Login e senha incorretos')
    }
    setName('')
    setNumber('')
    }
  const [name, setName] = React.useState('');
  const [number, setNumber] = React.useState('');

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        onChangeText={setName}
        value={name}
        placeholder="Digite seu login"
      />
      <TextInput
        style={styles.input}
        value={number}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={setNumber}
      />
      <Button
        title="Aperte se tiver coragem"
        onPress={() => checkPassword(number, name)}
      />
      <StatusBar style="auto" />
      </View>
    );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    padding: 10
  },
});