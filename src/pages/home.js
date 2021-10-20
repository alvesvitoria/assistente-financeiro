import { StyleSheet, Text, View,  TouchableOpacity, ScrollView } from "react-native";
import React  from "react";
import { Card } from 'react-native-elements';
import firebase from '../../database/firebase' 
require('firebase/auth');

export default function Home() {
    const user = firebase.auth().currentUser;
    return (
        <View>
           <TouchableOpacity style={styles.cabecalho} >
                <Text style={styles.boas_vindas}>Olá, {user?.email}</Text>
           </TouchableOpacity> 
          <View>
            <Card>
                <Card.Title>Controle Financeiro</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 3}}>
                    Escrever seus gastos e seus ganhos é uma forma de você conseguir enxergar a sua renda e planejar os seus gastos futuros!
                </Text>
            </Card>
            <Card>
                <Card.Title>Objetivos</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 3}}>
                    Pesquisas indicam que escrever sobre seus objetivos e suas metas, aumentam a sua chance de se comprementer com elas e as cumprir.
                </Text>
            </Card>
            <Card>
                <Card.Title>Assistente Financeiro</Card.Title>
                <Card.Divider/>
                <Text style={{marginBottom: 3}}>
                    Quando tiver alguma dúvida relacionada com os termos do mundo financeiro, conte com a ajuda da sua assistente financeira pessoal.
                </Text>
            </Card>
          </View>
        </View>
        
    );
};
  

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    boas_vindas:{
        position: 'relative',
        marginTop: 15,
        marginLeft: 20,
        color: '#FFFFFF',
        fontSize: 18        
    },
    cabecalho:{
        position: 'relative',
        width: '100%',
        height: '35%',
        borderBottomEndRadius: 20,
        borderBottomStartRadius: 20,
        backgroundColor: '#03dac4',
        justifyContent: 'center',
    },
    logo:{
        width: 190,
        height: 190,
        left: '26%',
    },
});
