import React from 'react';
import { StyleSheet, View, Text } from 'react-native';

interface DashboardMessagesProps {
  date: string;
  message: string;
}

export default function DashboardMessages(props: DashboardMessagesProps) {
    return (
        <View style={styles.container}>
            <Text style={styles.date}>{props.date}</Text>
            <View>
              <Text style={styles.message}>{props.message} </Text>
            </View>
        </View>

      );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
      padding: 30,
      borderStyle: 'solid',
      borderWidth: 3,
      borderRadius: 30,
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
    date: {
      alignSelf: 'flex-end',
      color: 'black',
      fontFamily: 'josefin',
      fontSize: 15,
      marginBottom: 20,
      fontWeight: 'bold'
    },
    message: {
      color: 'black',
      fontFamily: 'josefin',
      fontSize: 18,
      marginBottom: 5,
      maxWidth: 700
    },
  });

