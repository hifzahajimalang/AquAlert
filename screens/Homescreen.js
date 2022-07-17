import React,{Component} from "react";
import {Text,View,Button,StyleSheet,SafeAreaView,Platform,StatusBar,ImageBackground,TouchableOpacity} from "react-native"
import informationscreen from "../screens/informationscreen"
import aboutscreen from "../screens/aboutscreen"

import {Header} from "react-native-elements";

export default class App extends Component{
render(){
  return(
    <View style={styles.container}>
<SafeAreaView styles={styles.droidsafearea}/>



 <Header 
      backgroundColor={"white"}
      centerComponent={{ text:"AQUALERT",style:{color:"blue",fontSize:40}}}
      />
<ImageBackground source={require ("../assets/proper-hydration-rgb-color-icon-vector-37041582.jpg")}style={styles.bgimg}>





</ImageBackground>
<TouchableOpacity style={styles.button} onPress={()=>{
  this.props.navigation.navigate("informationscreen")
}}>



<Text style={styles.heading}>Importance of being hydrated</Text>
</TouchableOpacity>

<TouchableOpacity style={styles.button} onPress={()=>{
  this.props.navigation.navigate("aboutscreen")
}}>



<Text style={styles.heading}>About the app</Text>
</TouchableOpacity>



    </View>
  )
}


}




const styles=StyleSheet.create({
  container:{
    flex:1,
    marginTop:100
    
  },
  droidsafearea:{
    marginTop:Platform.OS==="android"? StatusBar.currentHeight:0
  },
  titletext:{
    color:"black",
    fontSize:45,
    marginLeft:50,
   // marginTop:100
  },
  bgimg:{
    width:270,
    height:200,
    marginLeft:45,
  },
  button:{
    width:300,
    height:60,
    borderWidth:3,
marginLeft:30,
marginTop:100,
backgroundColor:"lightblue",

  },
  heading:{
     
    fontSize:20,
    marginTop:10,
    marginLeft:10,
    color:"blue",
   
  }
  
})
  