import {
  Text,
  View,
  StyleSheet,
  TouchableOpacity,
  Alert,
  FlatList,
} from "react-native";
import React, { useState } from "react";

const colorGenerator = () => {
  const [newColor, setnewColor] = useState([]);
  const randomColor = () => {
    const red = Math.floor(Math.random() * 256);
    const green = Math.floor(Math.random() * 256);
    const blue = Math.floor(Math.random() * 256);

    return `rgb(${red}, ${green}, ${blue})`;
  };
  //   console.log(newColor)
  return (
    <View style={styles.mainContainer}>
      <TouchableOpacity
        style={styles.buttonstyle}
        onPress={() => {
          setnewColor([...newColor, randomColor()]);
        }}
      >
        <Text style={styles.textstyle}>Generate Random Color</Text>
      </TouchableOpacity>

      <FlatList
        data={newColor}
        keyExtractor={(key) => {
          return key;
        }}
        renderItem={({ item }) => {
          return (
            <View style={styles.imageContainer}>
              <View
                style={{
                  backgroundColor: item,
                  width: 100,
                  height: 100,
                  borderRadius: 3,
                  marginTop: 5,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  width: "80%",
                  marginBottom: 50,
                }}
              >
                <Text style={styles.textstyle}>{item}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  ); 
};

const styles = StyleSheet.create({
  mainContainer: {
    marginTop: 50,
    width: "90%",
    marginHorizontal: 20,
  },
  buttonstyle: {
    backgroundColor: "#00b0ff",
    marginTop: 40,
    position: "relative",
    overflow: "hidden",
    color: "#eee",
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginBottom: 10,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 2,
  },
  textstyle: {
    color: "white",
    fontSize: 20,
  },
  imageContainer: {
    marginVertical: 10,
    paddingHorizontal: 30,
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },
});
export default colorGenerator;
