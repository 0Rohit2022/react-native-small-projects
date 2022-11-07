import React from "react";
import { View, StyleSheet, Text, FlatList } from "react-native";
const ChallengeFlatlist = () => {
  const names = [
    {
      name: "Rowdy Rathore",
      year: "2022",
     Actor: "Surya",
      Genre: "Horror Thriller",
    },
    {
      name: "Rowdy Rathore 2",
      year: "2010",
      Actor: "Akshay Kumar",
      Genre: "Horror Thriller",
    },
    {
      name: "Avengers Endgame",
      year: "2010",
      Actor: "Robert Downey jr",
      Genre: "Action",
    },
    {
      name: "Avengers",
      year: "2010",
      Actor: "Mark Ruaffalo",
      Genre: "Horror Thriller",
    },
    {
      name: "American Pie",
      year: "2010",
      Actor: "I don't know",
      Genre: "Horror Thriller",
    },
    {
      name: "Minions",
      year: "2010",
      Actor: "Gru",
      Genre: "Horror Thriller",
    },
    {
      name: "Central Intelligence",
      year: "2010",
      Actor: "The Rock",
      Genre: "Horror Thriller",
    },
    {
      name: "Black Adam",
      year: "2010",
      Actor: "Rock the dwayne Johnson",
      Genre: "Horror Thriller",
    },
    {
      name: "Hobbs and Shaw",
      year: "2010",
      Actor: "The Rock and Jason Stathom",
      Genre: "Horror Thriller",
    },
    {
      name: "Fast and Furious 2",
      year: "2010",
      Actor: "Vin Diesel and Paul Walker",
      Genre: "Horror Thriller",
    },
  ];



  return (
    <View>
    <Text>List Of Top 10 Series In Netflix</Text>
        <FlatList
        data={names}
        keyExtractor={(key) => {
            return key.name
        }}
        horizontal
        renderItem ={({item}) => {
            return (
              <View style={styles.viewstyle}>
                <Text style={styles.boxstyle}>Name:{item.name}</Text>
                <Text style={styles.boxstyle}>Year:{item.year}</Text>
                <Text style={styles.boxstyle}>Actor:{item.Actor}</Text>
                <Text style={styles.boxstyle}>Genre:{item.Genre}</Text>
              </View>
            );
        }}
         />
    </View>
  )
}

const styles = StyleSheet.create({
  viewstyle: {
   textAlign:"center",
   margin:30,
   padding:5,
   backgroundColor:"black",
  },
  boxstyle: {
    padding:5,
    fontSize:25,
    margin:20,
    color:"white",
    backgroundColor:"grey",
    textAlign:"center"
  },
});

module.exports = ChallengeFlatlist;