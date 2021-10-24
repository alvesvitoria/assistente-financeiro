import React, {useState, useEffect}  from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View, Image } from 'react-native';
import { SocialIcon } from 'react-native-elements'
import firebase from '../../database/firebase';
import logo from '../../img/logo.png';

export default function Login( { navigation } ) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');


  function loginFirebase() {
    firebase.auth()
      .signInWithEmailAndPassword(email, senha)
      .catch(function(error){
        var errorCode = error.code;
        var errorMessage = error.message;
        alert(errorCode, errorMessage);
      }); 
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

      <TextInput style={styles.input} placeholder='   Email'  onChangeText = {email => setEmail(email)} value={email} />

      <TextInput style={styles.input}  placeholder='   Senha' onChangeText = {senha => setSenha(senha)} value={senha} secureTextEntry={true} />

      <TouchableOpacity style={styles.button_entrar} onPress={() => { loginFirebase() }}>
        <Text>Entrar</Text>
      </TouchableOpacity>

      <Text style={styles.esqueceu}>Esqueceu a senha ?</Text>

      <SocialIcon style={styles.button_google} onPress={ () => navigation.navigate('Signup') }
        title='Continuar com o Google'
        button
        type='google'
      />

      <TouchableOpacity style={styles.button_criar} onPress={ () => navigation.navigate('Signup') } >
        <Text>Criar Conta</Text>
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
    width: 400,
    height: 130,
    top: -50
  },
  esqueceu: {
    position: 'relative',
    top: -30
  },
  input: {
    position: 'relative',
    top: -30,
    width: 200,
    height: 25,
    backgroundColor: '#E7FFF6',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    marginTop: 10
  },
  button_entrar: {
    position:'relative',
    top: -35,
    marginTop: 15,
    width: 200,
    height: 25,
    backgroundColor: '#4BD9A7',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_criar: {
    position:'relative',
    top: -47,
    marginTop: 15,
    width: 200,
    height: 25,
    backgroundColor: '#15CDE7',
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
    justifyContent: 'center',
    alignItems: 'center'
  },
  button_google: {
    position:'relative',
    top: -33,
    width: 200,
    height: 25,
    borderTopLeftRadius: 22,
    borderTopRightRadius: 22,
    borderBottomLeftRadius: 22,
    borderBottomRightRadius: 22,
  },
  icone_google: {
    position:'relative',
    left: 60,
    width: 20,
    height: 5,
  },
  
})