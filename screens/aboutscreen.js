import React, { Component } from 'react';
import { Text, View, TouchableOpacity, StyleSheet } from 'react-native';
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
import alarmscreen from "./alarmscreen"
export default class aboutscreen extends Component {
  constructor(){
    super();
    this.state={

    }
  }
  render() {
    return (
      <View style={styles.container}>
        
        
          
        <TextAnimationFadeIn value={
          "Adipsia, also called hypodipsia, is a disease characterized by the absence of thirst, even in the presence of body water depletion or salt execss.Adipsia can tend to result from lesions to hypothalamic regions involved in thirst regulations.Adipsia may be seen in conditions such as diabetes."}
           delay={50}  style={{color: 'black', fontSize:20,marginTop:20}} 
           

        />
        <TouchableOpacity style={styles.button}onPress={()=>this.props.navigation.navigate("alarmscreen")}>
<Text style={styles.text}>Time Settings</Text>






        </TouchableOpacity>
        
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  button:{
 width:150,
  height:70,
  borderRadius:1,
  borderWidth:2,
  backgroundColor:"yellow",
  marginLeft:100,
  marginTop:400,


  },
  text:{
    fontSize:20,
    justifyContent:"center",
  }
 
});
