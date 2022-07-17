import React,{Component} from "react";
import {Text, View,Button,StyleSheet,Image,TouchableOpacity} from "react-native";
import {Audio} from "expo-av";
import axios from "axios";
import {Header} from "react-native-elements";

export default class alarmscreen extends Component{
  constructor(){
    super();
    this.state={
      time:"",
      hour:"",
      response:"",
      counter:0
    }



    this. date=new Date().getDate();
    this.hours=new Date().getHours();
    this.min =new Date().getMinutes();
    this.sec=new Date().getSeconds();
  }

displayalert=()=>{
  alert("Time to drink WATER!!")
}




componentDidMount(){
  setInterval(this.playSound,500000);
  setInterval(this.getCounter,500000);
}

playSound = async () => {
    await Audio.Sound.createAsync(
      { uri: 'http://soundbible.com/mp3/Buzzer-SoundBible.com-188422102.mp3' },
      { shouldPlay: true }
    );
}
  


  getCounter=async()=>{
    this.setState({
      counter:this.state.counter+1
    })
  }

getTime=async()=>{
axios.get("https://worldtimeapi.org/api/timezone/Asia/Kolkata").then(response=>{

})
.catch(error=> console.error(error))
}





  render(){
    const response=this.state.response
    return(
      <View style={styles.container}>
<Header 
      backgroundColor={"yellow"}
      centerComponent={{ text:"Time Monitor",style:{color:"green",fontSize:20, marginTop:10}}}
      />





<Image source={require ("../assets/alarm img.webp")}style={{width:200,height:200,marginLeft:80}}/>
<Text style={{fontSize:20,marginTop:30,marginLeft:170}}>{this.state.counter}</Text>



<Text style={{marginTop:100,color:"green",fontSize:20,marginLeft:120}}>TIME:{this.hours}:{this.min}</Text>

<Text style={{marginLeft:100,width:60,height:60}}>{this.response}</Text>


<TouchableOpacity style={styles.button} onPress={()=>{
this.displayalert()
}}

>


<Text style={styles.text}>Alert Button</Text>



</TouchableOpacity>
      </View>
    )
  }
}


const styles=StyleSheet.create({

button:{
  color:"black",
  width:100,
  height:50,
  marginTop:10,
  marginLeft:120,
  borderWidth:2,
  backgroundColor:"lightblue"
  
},
text:{
  fontSize:15,
 marginTop:9
}






})