import { Text, View, StyleSheet, Alert,Button,Image, TouchableOpacity } from "react-native";
import React from "react";

const OneButton = () => {
  return (
    <View>
      <Text style={styles.textstyle}>Button</Text>
      <TouchableOpacity
        onPress={() => {Alert.alert("Touchableopacity Button pressed")
        console.log("You Clicked  me")}}
      >
        <Text>join our Discord Server</Text>
        <Image
          style={styles.imgstyle}
          source={require("../../assets/images.jpg")}
        />
      </TouchableOpacity>

      <Button
        title="Join our Discord Server"
        onPress={() => Alert.alert("Simple Button Pressed")}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  textstyle: {
    fontSize: 20,
    fontWeight: "500",
    textAlign: "center",
    marginTop: 200,
  },
  imgstyle:{
    width:200,
    height:200
  }
});

export default OneButton;
