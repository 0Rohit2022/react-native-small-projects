import React from "react";
import { Text, View, StyleSheet, ScrollView, Image } from "react-native";

const cardDetails = ({textData, imgSrc}) => {
  return (
    <View style={styles.listStyle}>
      
        <Text style={styles.textStyle}>{textData}</Text>

        <Image style={styles.imageStyle} source={imgSrc} />

        
     
    </View>
  );
};

const styles = StyleSheet.create({
  listStyle: {
    display: "flex",
    justifyContent: "center",
    textAlign: "center",
    alignItems: "center",
  },
  textStyle: {
    fontSize: 30,
    margin: 50,
  },
  imageStyle: {
    height: 300,
    margin: 20,
    width: 300,
  },
});
export default cardDetails;
