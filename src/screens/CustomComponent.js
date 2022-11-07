import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";

function customComponent() {
  const names = "Rohit kumar";
  const getFullName = (firstName, secondName, thirdName) => {
    return `My name is ${firstName} ${secondName} ${thirdName}`;
  };
  const myname = 'Rohit kumar'
  return (
    <View style={styles.container}>
      <Text>Hello My name is {names}</Text>
      <StatusBar style="auto" />
      <Text> Hi {getFullName("Rahul", "Rakesh", "Kumar")}</Text>
      <Text style={styles.textStyle}>Welcome to thapa technical</Text>
      <Text style={{ fontSize: "30px" }}>
        We love react native and I am a subscriber of thapa technical channel
      </Text>
      <Text>Hi, My name is {myname} </Text>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
  textStyle: {
    color: "blue",
    fontSize: "40px",
    fontWeight: "bold",
  },
});

export default customComponent;
