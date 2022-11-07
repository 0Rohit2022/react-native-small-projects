import { Text, View, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState} from 'react'

const CounterNumber = () => {
    const IntialValue = 0;
  const [addNumber , setaddNumber] = useState(IntialValue)

  const Increment = () => {
   return setaddNumber(addNumber + 1)
  }
  
  const Decrement = () => {
    if(addNumber > 0){
        return setaddNumber(addNumber - 1)
    }
    
  }

  const Reset = () => {
    return setaddNumber(IntialValue)
  }
    return (
      <View style={styles.viewstyle}>
        <Text style={styles.counterstyle}>{addNumber}</Text>
        <View>
            <TouchableOpacity style={styles.commonbutton} onPress={() => {Increment()}}>
                <Text style={styles.commontext}>+10</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.commonbutton} onPress={() => {Reset()}}>
                <Text style={styles.commontext}>Reset</Text>
            </TouchableOpacity>
        </View>
        <View>
            <TouchableOpacity style={styles.commonbutton} onPress={() => {Decrement()}}>
                <Text style={styles.commontext}>-10</Text>
            </TouchableOpacity>
        </View>
      </View>
    )
 
}

const styles = StyleSheet.create({
    viewstyle:{
      marginTop:50,
    },
  counterstyle: {
    fontSize: 50,
    margin: 20,
    textAlign:"center"
  },
  commonbutton: {
    padding: 20,
    alignItems:"center"
  },
  commontext: {
    backgroundColor: "black",
    color: "white",
    fontSize: 30,
    marginBottom: 20,
    padding:20,
    textAlign:"center",
    width:"50%",
  },
});

export default CounterNumber