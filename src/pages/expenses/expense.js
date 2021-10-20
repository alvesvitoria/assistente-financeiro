import React, { useState } from "react";
import { View, Text, TextInput, ScrollView, StyleSheet, Button} from "react-native";
import database from "../../../database/firebase";
import { CheckBox } from 'react-native-elements';
import DatePicker from 'react-native-datepicker';
import CurrencyInput from 'react-native-currency-input';
import { Picker } from '@react-native-picker/picker';


export default function Expense({ navigation }) {

  const [name, setName] = useState('')
  const [desc, setDesc] = useState('')
  const [valor, setValor] = React.useState(0.00)
  const [date, setDate] = useState(new Date())
  const [isSelected, setSelected] = useState(false)

  const user_id = database.auth().currentUser.uid;
  const [categoria] = useState(['Alimentação', 'Transporte', 'Lazer', 'Moradia', 'Outros']);
  const [categoriaSelecionado, setCategoriaSelecionado] = useState([]); 

  const onChangeName = (txtName) => {
    setName(txtName)
  }

  const onChangeDesc = (txtDesc) => {
    setDesc(txtDesc)
  }

  const insertInfos = () => {
    database.firestore().collection('expenses').add({
      name: name,
      desc: desc,
      valor: valor,
      date: date,
      categoriaSelecionado: categoriaSelecionado,
      isSelected: isSelected,
      user_id: user_id
    })
    navigation.navigate('ExpensesList');
  }  

  return(

    <ScrollView style={styles.container}>
      <View  style={styles.grade}>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Despesa"
            onChangeText={txtName => onChangeName(txtName)}
            value={name}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <TextInput
            placeholder="Descrição"
            onChangeText={txtDesc => onChangeDesc(txtDesc)}
            value={desc}
          />
        </View>
        {/* Name Input */}
        <View style={styles.inputGroup}>
          <CurrencyInput
            value={valor}
            onChangeValue={setValor}
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
            date={date}
            mode="date" // The enum of date, datetime and time
            placeholder="select date"
            format="DD-MM-YYYY"
            minDate="01-01-2014"
            maxDate="02-12-2080"
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
            onDateChange={(date) => {
              setDate(date);
            }}         
        />
        </View>

        <View style={styles.inputGroup}>  
            <Picker
              selectedValue={categoriaSelecionado}
              onValueChange={(itemValue) => 
                setCategoriaSelecionado(itemValue)
              }
            >
              {
                categoria.map(cr => {
                  return <Picker.Item label={cr} value={cr} />
                })
              }
            </Picker>
        </View>

        <View style={styles.inputGroup}>
          <CheckBox
            title='Despesa Paga'
            checkedIcon='check'
            uncheckedIcon='square-o'
            checkedColor='green'
            uncheckedColor='red'
            containerStyle={[{ backgroundColor: 'transparent', borderWidth: 0 }]} 
            checked={isSelected}
            onPress={() =>setSelected(!isSelected)}
          />
        </View>
        
      </View>

      <View style={styles.button}>
        <Button
          title="Salvar"
          type="outline"
          onPress={() => insertInfos()} 
        />
      </View>  
    </ScrollView>

  )
}

const styles = StyleSheet.create({
  container: { 
    flex:1,
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