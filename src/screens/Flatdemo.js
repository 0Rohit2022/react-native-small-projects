import { View, StyleSheet, Text } from "react-native";
import React from "react";
import { FlatList } from "react-native";

const Flatdemo = () => {
  const names = [
    {
      index: "1",
      name: "Rahul",
    },
    {
      index: "2",
      name: "Rohit",
    },
    {
      index: "3",
      name: "Rinkesh",
    },
    {
      index: "4",
      name: "Ram",
    },
    {
      index: "5",
      name: "Rama",
    },
    {
      index: "6",
      name: "Rameshwaram",
    },
  ];
  return (
    // <View>
    //   <FlatList
    //   style={styles.listStyle}
    //   keyExtractor={(key) => {
    //     return key.index
    //   }}
    //   horizontal
    //   inverted
    //   showsHorizontalScrollIndicator={false}
    // //   numColumns={2}
    //     data={names}
    //     renderItem={({ item }) => {
    //       return (
    //         <View>
    //           <Text style={styles.textStyle}>{item.name}</Text>
    //         </View>
    //       );
    //     }}
    //   />
    // </View>

    <View>
        <FlatList
        style={styles.listStyle}
        keyExtractor={(key) => {
            return key.index
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        inverted
            data={names}
            renderItem={({item}) => {
                return (
                    <Text style={styles.textStyle}>{item.name}</Text>
                )
            }}
         
         />
    </View>
  );
};

const styles = StyleSheet.create({
  textStyle: {
    fontSize: 20,
    padding: 30,
    backgroundColor: "blue",
    margin: 20,
    color: "white",
    textAlign:"center"
  },
  listStyle: {
    textAlign: "center",
    margin: 20,
    padding: 10,
  },
});

export default Flatdemo;
