import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Button} from "react-native";
import database from '../../../database/firebase';
import DatePicker from 'react-native-datepicker';
import CurrencyInput from 'react-native-currency-input';


export default function RevenueDetail ( { navigation, route } ){
  const [nameEdit, setNameEdit] = useState(route.params.name)
  const [descEdit, setDescEdit] = useState(route.params.desc)
  const [valorEdit, setValorEdit] = React.useState(route.params.valor)
  const [dateEdit, setDateEdit] = useState(route.params.date)
  const idRevenue = route.params.id

  function updateInfos(name, desc, valor, date, id){
    database.firestore().collection("revenues").doc(id).update({
      name: name,
      desc: desc,
      valor: valor, 
      date: date 
    })
    navigation.navigate("RevenueList")
  }

  return(
    <ScrollView style={styles.container}>
      <View  style={styles.grade}>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Despesa"
            onChangeText={setNameEdit}
            value={nameEdit}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Descrição"
            onChangeText={setDescEdit}
            value={descEdit}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <CurrencyInput
            value={valorEdit}
            onChangeValue={setValorEdit}
            prefix="R$"
            delimiter="."
            separator=","
            precision={2}
            onChangeText={(formattedValue) => {
              console.log(formattedValue); // $2,310.46
            }}
          />
        </View>

        <View style={styles.inputGroup}>   
          <DatePicker
            style={styles.datePickerStyle}
            date={dateEdit}
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2014"
            maxDate="01-01-2080"
            confirmBtnText="Confirm"
            cancelBtnText="Cancel"
            customStyles={{
              dateIcon: {
                //display: 'none',
                position: 'absolute',
                left: 15,
                top: -8,
                marginLeft: 8,
              },
              dateInput: {
                top: -11,
                marginLeft: 30,
                borderWidth: 0
              },
            }}
            onDateChange={(dateEdit) => {
              setDateEdit(dateEdit);
            }}         
        />
        </View>
        
      </View>

      <View style={styles.button}>
        <Button
          title="Salvar"
          type="outline"
          onPress={() => updateInfos(nameEdit, descEdit, valorEdit, dateEdit, idRevenue)} 
        />
      </View>  
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  container: { 
    flex:1,
    backgroundColor:'#fff'
  },
  label:{
    width:"90%",
    marginTop: 20,
    fontSize:16,
    marginLeft: 20,
    color:"#F92E6A"
  },
  input:{
   width:"90%",
   marginTop:10,
   padding:10,
   height:50,
   borderBottomWidth: 1,
   borderBottomColor:"#F92E6A",
   marginLeft:"auto",
   marginRight:"auto"
  },
  buttonNewTask:{
   width:60,
   height:60,
   position:"absolute",
   bottom: 30,
   left:20,
   backgroundColor:"#F92e6a",
   borderRadius:50,
   justifyContent:"center",
   alignItems: "center"
  },
  iconButton:{
   color:"#ffffff",
   fontSize:16,
   fontWeight:"bold",
  },
  grade: {
    position: 'relative',
    top: '10%',
    left: '10%'
  },
  datePickerStyle: {
    width: 200,
    marginTop: 20,
    
  },
  inputGroup: {
    flex: 1,
    padding: 9,
    textAlign: 'center',
    marginBottom: 10,
    marginLeft: 30,
    width: 288,
    borderColor: '#A0E6CD',
    borderWidth: 1,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    borderBottomRightRadius: 28,
    borderBottomLeftRadius: 28,
  },
  button:{
    marginTop: 48,
    marginLeft: 72,
    width: 280
  },
  sair: {
    position: 'absolute',
    top: '2%',
    left:'90%',
  }
  
 });