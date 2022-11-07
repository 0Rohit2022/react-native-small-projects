import React from "react";
import { View, StyleSheet,ScrollView } from "react-native";
import CardDetails from "../components/cardDetails";
const images = () => {
  return (
    <View>
      <ScrollView>
        <CardDetails
          textData="This is my first image"
          imgSrc={require("../../assets/images.jpg")}
        />
        <CardDetails
          textData="This is my second image"
          imgSrc={require("../../assets/icon.png")}
        />
        <CardDetails
          textData="This is my third image"
          imgSrc={require("../../assets/favicon.png")}
        />
      </ScrollView>
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
export default images;
