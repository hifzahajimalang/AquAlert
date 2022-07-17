import React,{Component} from "react";
import {Text,View,TouchableOpacity,StyleSheet,Image,SafeAreaView,Platform,StatusBar} from "react-native";
import {TextAnimationFadeIn, TextAnimationZoom, TextAnimationRain, TextAnimationSlideDown, TextAnimationSlideUp, TextAnimationSlideLeft, TextAnimationSlideRight, TextAnimationShake, TextAnimationReverse, TextAnimationDeZoom} from 'react-native-text-effects';
import {Header} from "react-native-elements";
import Homescreen from "./Homescreen"
export default class informationscreen extends Component{
  render(){
    return(
      <View style={styles.container}>
<SafeAreaView style={styles.droidsafearea}/>
<Header 
      backgroundColor={"yellow"}
      centerComponent={{ text:"IMPORTANCE",style:{color:"green",fontSize:20, }}}
      />
      <TouchableOpacity style={styles.backbutton} onPress={()=>this.props.navigation.navigate("Homescreen")}>
      <Image source={require ("../assets/backarrow.webp")}style={styles.bgimg}/>
      </TouchableOpacity>
< TextAnimationDeZoom value={"1. Drinking water on an empty stomach helps in cleaning your bowels."} delay={10} duration={300} style={{color:"black",fontSize:20,marginTop:50}}/>

  < TextAnimationDeZoom value={"2. Removes toxins from the body" } delay={15} duration={300}style={{color:"black",fontSize:20,marginTop:100,left:-30}}/>

 < TextAnimationDeZoom value={"3. Increases Energy & Relieves Fatigue" } delay={15} duration={300}style={{color:"black",fontSize:20,marginTop:180}}/>

 < TextAnimationDeZoom value={"4. Promotes Weight Loss" } delay={20} duration={300}style={{color:"black",fontSize:20,marginTop:260,left:-60}}/>

 < TextAnimationDeZoom value={"5. Improves Skin Complexion" } delay={25} duration={300}style={{color:"black",fontSize:20,marginTop:340,left:-40}}/>
 
< TextAnimationDeZoom value={"6. Keep joints and cartilage lubricated and soft" } delay={30} duration={300}style={{color:"black",fontSize:17,marginTop:420,left:-2}}/>
 
< TextAnimationDeZoom value={"7. It cushions sensitive tissues." } delay={40} duration={300}style={{color:"black",fontSize:20,marginTop:500,left:-30}}/>








 





      </View>
    )
  }
  
}



const styles=StyleSheet.create({
  container:{
    flex:1,
    justifyContent:"center",
    alignItems:"center"
  
},

 droidsafearea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },

  bgimg:{
    width:20,
    height:20,
   
  },
  backbutton:{
    width:70,
    height:70,
    backgroundColor:"lightblue"
  }

})