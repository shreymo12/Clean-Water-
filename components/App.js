import React from'react';
import {createAppContainer, createSwitchNavigator,} from 'react-navigation'
import HomeScreen from './screens/HomeScreen';
import FactScreen from './screens/FactScreen';


export default class app extends Components(){
    render(){
        return(
            <AppContainer/>
        );
    }
    
}


const switchNavigator  = createSwitchNavigator({
    HomeScreen:HomeScreen, 
    FactScreen: FactScreen 

})

const AppContainer = createAppContainer(AppNavigator)