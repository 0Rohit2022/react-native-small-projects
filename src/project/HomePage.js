import { StyleSheet, Text, View,Button } from 'react-native'
import React from 'react'

const HomePage = ({route, navigation}) => {

  const {myName} =  route.params
  return (
    <View style={styles.mainContainer}>
      <Text style={[styles.mainHeader]}>Welcome {myName}</Text>
      <Button title='Go Back' onPress={() => navigation.goBack()}/>
    </View>
  )
}

export default HomePage

const styles = StyleSheet.create({
    mainContainer:{
        width:"100%",
        height:"100%",
        display:"flex",
        justifyContent:"center",
        alignItems:"center"
    },
    mainHeader:{
        fontSize:35,
        color:"#4c5dab",
        padding:20,
        textTransform:"capitalize"
    }
})