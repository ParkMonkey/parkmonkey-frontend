import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import Vew from './custom/Vew';

interface DashboardMessagesProps {
  date: string;
  message: string;
  padding?: number;
  to?: string;
}

export default function DashboardMessages(props: DashboardMessagesProps) {
    return (
        <View style={[styles.container, {padding: props.padding ? props.padding : 30}]}>
          {
            props.to ? (
              <Vew flexDir="row" justifyContent="space-between">
                <Text style={{color:"black", fontSize:16}}>To: <Text style={[styles.date, {fontSize:16}]}>{props.to}</Text></Text>
                <Text style={[styles.date, {fontSize:16}]}>{props.date}</Text>
              </Vew>
            ) : (
              <Text style={styles.date}>{props.date}</Text>
            )
          }
            <View>
              <Text style={styles.message}>{props.message} </Text>
            </View>
        </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
      backgroundColor: 'white',
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
      marginBottom: 5,
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

