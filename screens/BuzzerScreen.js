import * as React from 'react'
import { Text,View,TouchableOpacity,StyleSheet } from 'react-native'
import {Audio} from 'expo-av'
import db from '../config'

class BuzzerScreen extends React.Component {
  render(){
    return(
      <TouchableOpacity
      style={[styles.button, {backgroundColor:this.props.color}]}
      onPress={() => {
        this.props.navigation.navigate('HomeScreen')
      }}>
      <Text style={styles.buttonText}>Get Attendance</Text>
      </TouchableOpacity>
    )
  }
}

const styles=StyleSheet.create({
  button:{
    marginTop:10,
    marginLeft:80,
    borderWidth:1,
    alignItems:'center',
    width:200,
    height:30,
    backgroundColor:'yellow',
    borderRadius:10,
  },
  buttonText:{
    fontWeight:'bold',
    fontSize:20,
  },
})

export default BuzzerScreen;