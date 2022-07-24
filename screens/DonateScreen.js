import React, {Components} from 'react';
import {View, StyleSheet, TouchableOpacity} from 'react-native';
import db from "../config";
import firebase from "firebase";


export default class DonateScreen extends Compoents{
  constructor(){
    super();
    this.state ={
      userId: "",
      amountDonated: ""
    };
  }
  donatedAmount = (userId, amountDonated) => {
    firebase
    .createUserId (userID, amountDonated)
    .then(()=>{
      db.collection("Donateions").add({
        Name: this.state.userId, 
        amount: this.state.amountDonated
      });

    })
  }
    render(){
        return(

           <View>
            <TextInput
              placeholder= "User Id"
              placeholderTextColor = "gray"
              keyboardType = "user-id"
              onChangeText = {text=>{
                this.setState({
                  userId:text
                })
              }}
            />
            <TextInput
              placeholder = "$ Donated"
              placeholderTextColor = "gray"
              keyboardType = "amount"
              onChangeText = {number =>{
                this.setState ({
                  amountDonated : number
                })
              }}
            />
           </View>
        );
    }
}