 import * as React from 'react';
import { View } from 'react-native';
import Homescreen from "./screens/Homescreen"
import informationscreen from "./screens/informationscreen"
import aboutscreen from "./screens/aboutscreen"
import { createAppContainer, createSwitchNavigator} from 'react-navigation';
import alarmscreen from "./screens/alarmscreen"

export default class App extends React.Component {
  render() {
    return (

      <View>
      
        <AppContainer/>
      </View>
    );
  }
}

var AppNavigator=createSwitchNavigator({
   Homescreen:Homescreen,
    aboutscreen:aboutscreen,
    informationscreen:informationscreen,
   alarmscreen:alarmscreen,
 
 
  
 
})

const AppContainer=createAppContainer(AppNavigator)