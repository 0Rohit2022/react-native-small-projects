import { Text, View, StyleSheet, FlatList,Image } from "react-native";
import React, { useEffect, useState } from "react";

const HooksEffect = () => {
  const [MyuserData , setMyuserData] = useState()
  const [Isloaded, setIsLoaded] = useState(true)

  const getUserData = async () => {
    try {
      const Data = await fetch(
        "https://thapatechnical.github.io/userapi/users.json"
      );

      const response = await  Data.json();

      
      setMyuserData(response)
      setIsLoaded(false)
      console.log(response);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
     getUserData();
  }, []);

  return (
    <View style={styles.mainContainer}>
    <Text style={styles.header}>List Of Students</Text>
      <FlatList
        data={MyuserData}
        keyExtractor={(key) => {
            return key.id
        }}
        renderItem={({item}) => {
          return (
            <View style={styles.card}>
            <View style={styles.imageContainer}>
                <Image resizeNode="cover" style={styles.imgStyle} source={{ uri: item.image }}/>
            </View>
            <View style={styles.dataandid}>
                <Text style={styles.BioData}>Bio-Data</Text>
                <Text style={styles.idNumber}>{item.id}</Text>
            </View>
            <View style={styles.mainContain}>
              <Text style={styles.myName}>Name: {item.name}</Text>
              <Text style={styles.myName}>Email: {item.email}</Text>
              <Text style={styles.myName}>Mobile: {item.mobile}</Text>
              </View>
            </View>
          );
        }}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  dataandid: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-between",
  },
  card: {
    backgroundColor: "black",
    alignItems: "center",
    margin: 20,
    borderRadius: 30,
  },
  imgStyle: {
    height: 200,
    width: 200,
  },
  BioData: {
    marginHorizontal: 12,
    fontSize: 20,
    color: "white",
    backgroundColor: "grey",
  },
  myName: {
    fontSize: 15,
    color: "white",
    backgroundColor: "grey",
  },
  idNumber: {
    justifyContent: "flex-start",
    color: "white",
  },
  header: {
    padding: 30,
    textAlign: "center",
    fontSize: 30,
    color: "white",
    backgroundColor: "black",
  },
  mainContainer: {
    height: "100%",
    width: "100%",
    backgroundColor: "white",
  },
});
export default HooksEffect;
