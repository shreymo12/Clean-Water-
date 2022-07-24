import React, {Compoent} from 'react';
import {View, TouchableOpacity, StyleSheet, Button} from 'react-native';

export default class FactScreen extends Componets{
  showFact1 = () =>{
    <Text>  Each year 1.2 trillion gallons of untreated sewage, stormwater, and industral waste are dumped into US water</Text>
   

  }
  showFact2 = () =>{
    <Text> In developing countries 70% of industrial wastes are dumped untreated into waters, pulluting the useable water supple</Text>
  }
  showFact3 = () => {
    <Text>
     Half of the world rivers and streams and more than one-third of our lakes are pulluted and unfit for swimming, drinking, and fishing
    </Text>
  }
  showFact4 = () =>{
    <Text>
      Nearly 70 million people in Bangladesh are exposed to groundwater that is exposed to arsenic
    </Text>

  }

    render(){
        return(
          
         <View>
          <TouchableOpacity>
            style = {[styles.button,{backgroundColor: "blue"}]}
            onPress={()=>this.showFact1()}

          </TouchableOpacity>

          <TouchableOpacity>
            style = {[styles.button,{backgroundColor: "red"}]}
            onPress={()=>this.showFact2()}

          </TouchableOpacity>

          <TouchableOpacity>
            style = {[styles.button,{backgroundColor: "purple"}]}
            onPress={()=>this.showFact3()}

          </TouchableOpacity>

          <TouchableOpacity>
            style = {[styles.button,{backgroundColor: "green"}]}
            onPress={()=>this.showFact4()}

          </TouchableOpacity>
         </View>
            
        );
    }
  }   


const styles = StyleSheet.create({
  button:{
    justifyContent: 'center', 
    alignSelf: 'center',
    borderWidth : 2, 
    marginTop : 50, 
    with: 200,
    height: 50
  },
  buttonText: {
    textAlign: 'center',
    color : "gray"
  }
})