//Importação de bibliotecas
import React from "react";
import { View, StyleSheet, Image, Text} from "react-native";
import { List, Divider } from 'react-native-paper';
//Importando o Firebase
import firebase from '../../database/firebase'
require('firebase/auth');
import userProfile from '../../img/user.png';

const ProfileScreen = ({ navigation }) => {

  //Função para sign out
  function logOutFirebase(){
    firebase.auth().signOut().then(function() {
      navigation.navigate('Login');
    }).catch(function(error) {
      alert('Falha ao tentar sair, tente novamente :/')
    });
    
  }
  //Verificando o usuário atual do sistema
  const user = firebase.auth().currentUser;

  return (
    <View style={styles.container}>
      <View style={styles.cabecalho} >
          <Text style={styles.boas_vindas}>{user?.email}</Text>
          <Image source={userProfile} style={styles.logo}/>
      </View>  

      <View style={styles.lista}>
        <List.Item 
          title="Termos de uso"
          left={props => <List.Icon {...props} icon="book" color="#4682B4" />} 
        />
        <Divider />
        <List.Item
          title="Política de Privacidade"
          left={props => <List.Icon {...props} icon="book" color="#4682B4"/>}
        />
        <Divider />
        <List.Item
          title="Nos mande uma mensagem :)"
          left={props => <List.Icon {...props} icon="email" color="#4682B4"/>}
        />
        <Divider />
        <List.Item onPress={() => { logOutFirebase() }}
          title="Encerrar sessão"
          left={props => <List.Icon {...props} icon="close" color="#4682B4" />}
        />
        <Divider />
        <Divider />
        <List.Item
          title="Versão 1.0"
          left={props => <List.Icon {...props} icon="alert" color="#4682B4" />}
        />
        <Divider />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  lista: {
    position: 'relative',
    paddingTop: 20
  },
  boas_vindas:{
    position: 'relative',
    color: '#FFFFFF',
    left: '26%', 
    top: '20%',
    fontSize: 18        
  },
  cabecalho:{
      position: 'relative',
      width: '100%',
      height: '25%',
      borderBottomEndRadius: 20,
      borderBottomStartRadius: 20,
      backgroundColor: '#03dac4',
      justifyContent: 'center',
  },
  logo:{
    width: 50,
    height: 50,
    position: 'relative',
    left: '5%',
    top: -5
  }
});

export default  ProfileScreen;
