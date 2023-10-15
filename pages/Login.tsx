import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { StyleSheet, TextInput, View, Button, Alert, Image  } from 'react-native';
import { auth, db } from '../components/firebaseConfig';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { addDoc, collection } from "firebase/firestore"; 



function Login({navigation}) {
  // function checkPassword(psw, login) {
  //   if ((psw == "1234") && (login == 'admin')){
  //     Alert.alert('Login e senha corretos')
  //     navigation.navigate('Home')
  //   }
  //   else{
  //     Alert.alert('Login e senha incorretos')
  //   }
  //   setName('')
  //   setNumber('')
  //   }
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleSignUp = () => {
    createUserWithEmailAndPassword(auth, email, password)
    .then(async userCredentials => {
      const user = userCredentials.user;
      console.log(user.email);
      // redirecionar pra pagina de registro
      try {
        const docRef = await addDoc(collection(db, "studiogames"), {
          first: "hhhh",
          middle: "gggg",
          last: "bbbb",
          born: 1111
        });
      
        console.log("Document written with ID: ", docRef.id);
      } catch (e) {
        console.error("Error adding document: ", e);
      }
    })
    .catch(error => alert(error.message))
  }

  const handleLogin = () => {
    signInWithEmailAndPassword(auth, email, password)
    .then(userCredentials => {
      const user = userCredentials.user;
      console.log('logado com', user.email);
      navigation.navigate('Home')
    })
    .catch(error => alert(error.message))
  }

  return (
    <View style={styles.container}>
      <Image source={require('../assets/Logo.png')} style={styles.logo}/>
      <TextInput
        style={styles.input}
        onChangeText={setEmail}
        value={email}
        placeholder="Digite seu login"
      />
      <TextInput
        style={styles.input}
        value={password}
        placeholder="Digite sua senha"
        secureTextEntry={true}
        onChangeText={setPassword}
      />
      <Button
        title="Registrar"
        onPress={handleSignUp}
      />
      
      <Button
        title="Logar"
        onPress={handleLogin}
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
  logo: {
    position: 'relative',
    bottom: 50, 
    width: 100, 
    height: 100,
  },
});

export default Login