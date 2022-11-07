import { Text, View, StyleSheet } from "react-native";
import React from "react";

const stylesDemo = () => {
  return (
    <View style={styles.parentView}>
      <Text style={[styles.childText1, styles.commonStyles]}>Box Model 1</Text>
      <Text style={[styles.childText2, styles.commonStyles]}>Box Model 2</Text>
      <Text style={[styles.childText3, styles.commonStyles]}>Box Model 3</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  parentView: {
    borderWidth: 3,
    marginTop: 100,
    width: "95%",
    marginHorizontal: 10,
  },
  childText1: {
    backgroundColor: "#97BC62FF",
    borderColor: "2C5F20",
    marginTop:30
  },
  childText2: {
    backgroundColor: "cyan",
  },
  childText3: {
    backgroundColor: "#D48996FF",
  },
  commonStyles: {
    fontSize: 20,
    //    padding:20,
    //    marginHorizontal:50,
    //    textAlign:"center",
    //    marginTop:30,
    //    marginBottom:30

    paddingVertical: 30,
    borderWidth: 3,
    borderColor: "black",
    textAlign:"center",
    marginBottom:30,
    marginHorizontal:30
  },
});
export default stylesDemo;
