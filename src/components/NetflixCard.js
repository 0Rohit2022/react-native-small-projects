import { StyleSheet, Text, View, Image, Button, LInking, Linking } from "react-native";
import React from "react";

const NetflixCard = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.header}>NetflixCard</Text>
      <View style={styles.poster}>
        <Image
          style={styles.imgstyle}
          source={{
            uri: "https://gamingonphone.com/wp-content/uploads/2022/02/all-of-us-are-dead-mobile-game.jpg",
          }}
        />
        <View style={styles.poster_info}>
          <Text style={styles.poster_title}>All Of Us Are Dead</Text>
          <Text style={styles.poster_text}>
            Find out why the All of us are dead. When an island populated by
            happy. Flightless birds is visited by mysterious green piggies, it's
            up to three unlikely outcasts - Red,Chuck and Bomb !
          </Text>
          <Button
            title="Watch Now"
            style={styles.buttonstyle}
            onPress={() =>
              Linking.openURL("https://www.netflix.com/in/title/81237994")
            }
          />
        </View>
      </View>
    </View>
  );
};
const styles = StyleSheet.create({
    poster_text:{
        color:"#999",
        paddingHorizontal:20,
        marginBottom:10,
    },
    poster:{
        width:250,
        borderWidth:1,
        alignItems:"center",
    },
    poster_info:{
        alignItems:"center",
        marginVertical:10,
    },
    poster_title:{
        fontSize:20,
        marginBottom:10,
    },
    container:{
        padding:30,
        alignItems:"center",
        justifyContent:"center"
    },
    imgstyle:{
        width:"100%",
        height:undefined,
        aspectRatio:1
    },
    buttonstyle:{
        borderWidth:0,
        borderRadius:20
    },
    header:{
        fontSize:30,
        marginBottom:20
    },


});

export default NetflixCard;
