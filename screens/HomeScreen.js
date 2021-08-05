import * as React from 'react'
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import AppHeader from '../components/AppHeader'
import db from '../config'

export default class HomeScreen extends React.Component {
  bob1Pressed(){
    var bob1 = db.ref('Bob/' + '/')
    bob1.update({
      'absent': 'true'
    })
  }

  bob2Pressed(){
    var bob2 = db.ref('Bob/' + '/')
    bob2.update({
      'present': 'true'
    })
  }

  jim1Pressed(){
    var jim1 = db.ref('Jim/' + '/')
    jim1.update({
      'absent': 'true'
    })
  }

  jim2Pressed(){
    var jim2 = db.ref('Jim/' + '/')
    jim2.update({
      'present': 'true'
    })
  }

  timmy1Pressed(){
    var timmy1 = db.ref('Timmy/' + '/')
    timmy1.update({
      'absent': 'true'
    })
  }

  timmy2Pressed(){
    var timmy2 = db.ref('Timmy/' + '/')
    timmy2.update({
      'present': 'true'
    })
  }

   goToBuzzerScreen = (buzzerColor) =>{
     this.props.navigation.navigate('BuzzerScreen', {color:buzzercolor})
   }
render(){
  return(
    <View>
    <AppHeader/>

    <Text style={styles.studentChartContainer}> Bob</Text>
        <Text style={styles.studentChartContainer}> Jim</Text>
            <Text style={styles.studentChartContainer}> Timmy</Text>

            <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.bob1Pressed();
            }}>
            <Text style={styles.buttonText}> Absent</Text>
            </TouchableOpacity>

             <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.jim1Pressed();
            }}>
            <Text style={styles.buttonText}> Absent</Text>
            </TouchableOpacity>

             <TouchableOpacity
            style={styles.button}
            onPress={()=>{
              this.timmy1Pressed();
            }}>
            <Text style={styles.buttonText}> Absent</Text>
            </TouchableOpacity>

             <TouchableOpacity
            style={styles.button2}
            onPress={()=>{
              this.bob2Pressed();
            }}>
            <Text style={styles.button2Text}> Present</Text>
            </TouchableOpacity>

             <TouchableOpacity
            style={styles.button2}
            onPress={()=>{
              this.jim2Pressed();
            }}>
            <Text style={styles.button2Text}> Present</Text>
            </TouchableOpacity>

             <TouchableOpacity
            style={styles.button2}
            onPress={()=>{
              this.timmy2Pressed();
            }}>
            <Text style={styles.button2Text}> Present</Text>
            </TouchableOpacity>

            <TouchableOpacity
            style={styles.button3}
            onPress={()=>{
              this.goToBuzzerScreen('yellow')
            }}>
            <Text style={styles.button3Text}> Submit</Text>
            </TouchableOpacity>
</View>

  )
}
}

const styles=StyleSheet.create({
  container:{
    flex:1
  },
  text:{
    fontSize:20,
    fontWeight:'bold',
    marginTop:30,
  },
  studentChartContainer:{
    flexDirection:'row',
    padding:10,
    alignItems:'center',
    margin:20
  },
  button:{
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:5,
    marginTop:-95,
    marginLeft:200,
    width:100,
    height:30,
    backgroundColor:'red'
  },
  buttonText:{
    textAlign:'center',
    color:'white'
  },
  button2:{
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:5,
    marginBottom:10,
    marginLeft:-30,
    width:100,
    height:30,
    backgroundColor:'green'
  },
  button2Text:{
    textAlign:'center',
    color:'white',
  },
  button3:{
    justifyContent:'center',
    alignSelf:'center',
    borderWidth:2,
    borderRadius:5,
    marginTop:90,
    marginLeft:40,
    width:200,
    height:50,
    backgroundColor:'yellow',
  },
  button3Text:{
    textAlign:'center',
    color:'purple',
  },
});