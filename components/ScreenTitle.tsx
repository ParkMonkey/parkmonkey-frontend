import React from 'react';
import { StyleSheet, View, Text, Image } from 'react-native';

export default function ScreenTitle(props) {
    return (
      <View style={styles.container}>
        <Image source={props.path} style={styles.image} />
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
      width: '100%',
      padding: 40,
      paddingTop: 30,
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
      marginBottom: 60
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
      fontSize: 80,
      fontWeight: 'bold'
    },
    image: {
      width: 50,
      height: 50,
      alignSelf: 'flex-end'
    }
  });

