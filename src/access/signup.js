import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import firebase from '../../database/firebase';


import logo from '../../img/logo.png';

export default function Signup( { navigation } ) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  const [displayName, setDisplayName] = useState('');
  
  function criarConta() {
    firebase.auth()
      .createUserWithEmailAndPassword(email, senha)
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      })
      
  }

  useEffect (() =>{
    firebase.auth().onAuthStateChanged(function(user) {
      if(user){
        navigation.navigate('Home');
      } else {
        console.log('Não logado');
      }
    });
  }, [])

  return (
    <View style={styles.container}>

      <Image source={logo} style={styles.logo}/>

      <TextInput style={styles.input} placeholder='   Nome'  onChangeText = {displayName => setDisplayName(displayName)} value={displayName} />

      <TextInput style={styles.input} placeholder='   Email'  onChangeText = {email => setEmail(email)} value={email} />

      <TextInput style={styles.input}  placeholder='  Senha' onChangeText = {senha => setSenha(senha)} value={senha} secureTextEntry={true} />

      <TouchableOpacity style={styles.button_criar} onPress={() => { criarConta() }}>
        <Text>Criar Conta</Text>
      </TouchableOpacity>
      <TouchableOpacity style={styles.button_voltar} onPress={ () => navigation.navigate('Login') } >
        <Text>Voltar</Text>
      </TouchableOpacity>

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#98ECE2',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logo:{
    width: 300,
    height: 300
  },
  esqueceu: {
    position: 'relative',
    top: -40
  },
  input: {
    position: 'relative',
    top: -55,
    width: 270,
    height: 35,
    backgroundColor: '#E7FFF6',
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomLeftRadius: 28,
    borderBottomRightRadius: 28,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  button_criar: {
    position:'relative',
    top: -54,
    marginTop: 15,
    width: 270,
    height: 35,
    backgroundColor: '#15CDE7',
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_voltar: {
    position:'relative',
    top: -50,
    marginTop: 15,
    width: 270,
    height: 20,
    borderTopLeftRadius: 25,
    borderTopRightRadius: 25,
    borderBottomLeftRadius: 25,
    borderBottomRightRadius: 25,
    justifyContent: 'center',
    alignItems: 'center'
  }
})