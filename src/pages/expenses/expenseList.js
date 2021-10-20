import React, { useState, useEffect } from "react";
import {
  View,
  Text,
  TouchableOpacity,
  FlatList,
  StyleSheet,
} from "react-native";
import database from "../../../database/firebase";
import { AntDesign } from "@expo/vector-icons";

export default function ExpensesList({ navigation }) {
  const user_id = database.auth().currentUser.uid;
  const [expense, setExpense] = useState([]); 

  function deleteTask(id) {
    database.firestore()
      .collection("expenses")
      .doc(id)
      .delete();
  }
 
  useEffect(() => {
    database.firestore().collection("expenses")
    .where('user_id', '==', user_id)
    .onSnapshot((query) => {
      const list = [];
      query.forEach((doc) => {
        list.push({ ...doc.data(), id: doc.id });
      });
      setExpense(list);
    });
  }, []);

  return (
    <View style={styles.container}>

      <TouchableOpacity style={styles.bloco_conta}>
        <Text style={styles.contas_pagas} onPress={() => navigation.navigate("ExpenseOpened")} >Pagas</Text>
        <Text style={styles.contas_abertas} onPress={() => navigation.navigate("ExpenseClosed")} >Em aberto</Text>
      </TouchableOpacity>

      <FlatList
        nestedScrollEnabled
        data={expense}
        renderItem={( { item } )=>{
          return(
          <View style={styles.despesas}>
            <TouchableOpacity
              style={styles.deleteDespesa}
              onPress={() => {
                deleteTask(item.id)
              }}
            >
            <AntDesign name="delete" size={24} color="black" />
            </TouchableOpacity>
            <Text
              style={styles.inputDespesa}
              onPress={()=>
                navigation.navigate("ExpenseDetail",{
                  id: item.id,
                  name: item.name,
                  desc:item.desc,
                  valor: item.valor,
                  date: item.date,
                  categoriaSelecionado: item.categoriaSelecionado,
                  isSelected: item.isSelected
                                
                })
              }
            >
            <Text>Nome da despesa: {item.name}{"\n"}Data: {item.date}</Text> 
           </Text> 
          </View>
          )
        }}
      />
      <TouchableOpacity style
        style={styles.buttonNewTask}
        onPress={() => navigation.navigate("Expense")}
      >
        <Text style={styles.iconButton}>+</Text>
      </TouchableOpacity>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor:"#fff",
    paddingTop: 20
 },
 bloco_conta: {
  flexWrap: 'wrap', 
  alignItems: 'flex-start',
  flexDirection:'row', 
  justifyContent: 'center'
},
contas_pagas:{
  padding:10,
  width: 90, 
  textAlign: "center", 
  borderColor: '#A0E6CD', 
  borderWidth: 1
},
contas_abertas:{
  padding:10, 
  width: 100, 
  textAlign: 'center', 
  borderColor: '#A0E6CD',
  borderWidth: 1
},
 despesas:{
  width:"100%",
  flexDirection:"row",
  justifyContent:"space-between",
  marginTop: 3,
  right: 20,
  top: 20
 },
 deleteDespesa:{
   justifyContent:"center",
   paddingLeft: 40,
 },
 inputDespesa:{
  width:"75%",
  alignContent:"flex-start",
  padding:15,
  paddingHorizontal: 20,
  borderRadius:50,
  marginBottom: 5,
  marginRight:15,
  color:"#282b2db5",
 },
 buttonNewTask:{
  width:60,
  height:60,
  position:"absolute",
  bottom: 35,
  left:180,
  backgroundColor: "#03dac4",
  borderRadius:50,
  justifyContent:"center",
  alignItems: "center"
 },
 iconButton:{
  color:"#ffffff",
  bottom: 3,
  fontSize: 25,
  fontWeight:"bold",
 },
});