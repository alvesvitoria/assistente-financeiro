/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

 import React, { Component } from 'react';

 import { View } from 'react-native';
 import { GiftedChat } from 'react-native-gifted-chat';
 import { Dialogflow_V2 } from 'react-native-dialogflow';
 
 import { dialogflowConfig } from './env';
 
 const botAvatar = require('../../../img/google.png');
 
 const BOT = {
   _id: 2,
   name: 'Mrs.Finances',
   avatar: 'botAvatar'
 }
 
 class Assistente extends Component {
 
   state ={
     messages: [ { _id:2, text: 'Olá, sou a Mrs. Finanças, como posso te ajudar? ', 
     createdAt: new Date(), user: BOT } ],
     id: 1,
     name: '',
   };
 
   componentDidMount() {
     Dialogflow_V2.setConfiguration(
       dialogflowConfig.client_email,
       dialogflowConfig.private_key,
       Dialogflow_V2.LANG_PORTUGUESE_BRAZIL,
       dialogflowConfig.project_id,
     );
   }
 
   handlegGoogleResponse(result) {
     let text = result.queryResult.fulfillmentMessages[0].text.text[0];
     this.sendBotResponse(text);
   }
 
   sendBotResponse(text) {
     let msg = {
       _id: this.state.messages.length + 1,
       text,
       createdAt: new Date(),
       user: BOT
     }
 
     this.setState((previouseState) => ({
       messages: GiftedChat.append(previouseState.messages, [msg]),
     }));
   }
 
 
 
   onSend(messages =[]) {
     this.setState((previouseState) => ({
       messages: GiftedChat.append(previouseState.messages, messages)
     }))
 
     let message = messages[0].text;
 
     Dialogflow_V2.requestQuery (
       message,
       (result) => this.handlegGoogleResponse(result),
       (error) => console.log(error)
     )
   }
 
   onQuickReply(quickReply) {
     this.setState((previouseState) => ({
       messages: GiftedChat.append(previouseState.messages, quickReply)
     }))
 
     let message = quickReply[0].value;
 
     Dialogflow_V2.requestQuery (
       message,
       (result) => this.handlegGoogleResponse(result),
       (error) => console.log(error)
     )
   }
 
   render() {
     return (
       <View style={{ flex: 1, backgroundColor: '#fff' }}>
         <GiftedChat 
           messages={this.state.messages}
           onSend={ (message) => this.onSend(message) }
           onQuickReply={ (quickReply) => this.onQuickReply (quickReply) }
           user={{ _id: 1}}
         />
       </View>
     );
   }
 }
 
 export default Assistente;