import React, {Component} from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';



export default class HomeScreen extends Component{
    render(){
        return(
          <View>
            <Text>Home Screen </Text>

         
          <View>
            <TextInput
                placeholder = "Press to Donate"
              />

              
          </View>
          </View>
            
        );
    }
}