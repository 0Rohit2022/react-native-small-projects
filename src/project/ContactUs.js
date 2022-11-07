import {
  Text,
  View,
  StyleSheet,
  TextInput,
  TouchableOpacity,
  Alert
} from "react-native";
import React, { useState } from "react";
import CheckBox from "expo-checkbox";

const ContactUs = ({ navigation }) => {
    const [userName, setuserName] = useState("")
    const [userPassword, setuserPassword] = useState("")
  const [Agree, setagree] = useState(false);

  const submit = () => {
   if(userName === "rohit" && userPassword === "rohitkumar"){
    Alert.alert(`Hi ${userName} Welcome Back!`)
    navigation.navigate("Home" , {myName : `${userName}`});
   }else if(!userName || !userPassword){
     Alert.alert(`Please fill all the details`)
   }else{
     Alert.alert(`Invalid Credentials`)
   }
  }
  return (
    <View style={styles.mainContainer}>
      <Text style={styles.mainHeader}>Login form</Text>
      <Text style={styles.description}>
        You can reach us anytime via Rohitkumar@gmail.com
      </Text>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Name:</Text>
        <TextInput
          style={styles.inputstyle}
          autoCapitalize="none"
          autoCorrect={false}
          value={userName}
          onChangeText={(actualData) => setuserName(actualData)}
        />
      </View>

      <View style={styles.inputContainer}>
        <Text style={styles.labels}>Enter Your Password:</Text>
        <TextInput
          style={styles.inputstyle}
          autoCapitalize="none"
          autoCorrect={false}
          secureTextEntry={true}    
          value={userPassword}
          onChangeText={(actualData) => setuserPassword(actualData)}
        />
      </View>

      <View style={styles.wrapper}>
        <CheckBox
          value={Agree}
          onValueChange={() => {
            setagree(!Agree);
          }}
          color={Agree ? "black" : undefined}
        />
        <Text style={styles.wrappertext}>
          I have read and agreed with Terms and Conditions
        </Text>
      </View>

      <TouchableOpacity
        style={[
          styles.buttonstyle,
          { backgroundColor: Agree ? "black" : "grey" },
        ]}
        disabled={!Agree}
        onPress={() => submit()}
      >
        <Text style={styles.buttontext}>Login</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  mainContainer: {
    height: "100%",
    paddingHorizontal: 30,
    paddingTop: 30,
    backgroundColor: "#fff",
  },
  mainHeader: {
    fontSize: 25,
    color: "#344055",
    fontWeight: "500",
    paddingBottom: 15,
    paddingTop: 20,
    textTransform: "uppercase",
    textAlign: "center",
  },
  description: {
    color: "#7d7d7d",
    paddingBottom: 20,
    lineHeight: 20,
    fontSize: 15,
    textAlign: "center",
  },
  inputContainer: {
    marginTop: 20,
  },
  labels: {
    color: "#7d7d7d",
    fontSize: 18,
    marginTop: 10,
    lineHeight: 25,
    marginBottom: 5,
  },
  inputstyle: {
    borderWidth: 1,
    borderColor: "rgba(0,0,0,0.3)",
    paddingHorizontal: 15,
    paddingVertical: 7,
    borderRadius: 1,
    fontSize: 18,
    letterSpacing: 2,
  },
  wrapper: {
    paddingHorizontal: 10,
    paddingVertical: 15,
    paddingBottom: 30,
    flexDirection: "row",
    marginTop: 15,
    marginBottom: 20,
    justifyContent: "center",
    alignContent: "center",
    alignItems: "center",
  },
  wrappertext: {
    paddingLeft: 10,
    marginTop: 5,
  },
  buttonstyle: {
    height: 50,
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 41,
    backgroundColor: "black",
  },
  buttontext: {
    color: "#fff",
    fontSize: 20,
    justifyContent: "center",
    alignContent: "center",
    fontWeight: "600",
  },
});
export default ContactUs;
