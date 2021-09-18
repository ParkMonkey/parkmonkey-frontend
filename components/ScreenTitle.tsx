import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ScreenTitle(props) {
    return (
      <View style={styles.container}>
        <Image source={require(props.image)} style={styles.image} />
        <View>
          <Text style={styles.subText}>{props.subtext}</Text>
          <Text style={styles.title}>{props.title}</Text>
        </View>

      </View>

      );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#1ECF65',
      padding: 40,
      paddingTop: 40,
      paddingBottom: 60,
      borderBottomLeftRadius: 15,
      borderBottomRightRadius: 15,
      display: 'flex',
      shadowColor: "#000",
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    subText: {
      color: 'white',
      fontFamily: 'josefin',
      fontSize: 20,
      marginBottom: 10
    },
    title: {
      color: 'white',
      fontFamily: 'josefin',
      fontSize: 70,
      fontWeight: 'bold'
    },
    image: {
      width: 50,
      height: 50,
      alignSelf: 'flex-end'
    }
  });

