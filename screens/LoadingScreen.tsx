import * as React from 'react';
import { StyleSheet, Image, View, Text } from 'react-native';
import Logo from '../components/Logo';

export default function LoadingScreen() {
    return (
        <View style={styles.container}>
        <Logo />
        <Text style={styles.title}>ParkinMonkey</Text>
      </View>
      );
  }
  
  const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      },
      title: {
        fontSize: 60,
        color: 'green',
        fontWeight: 'bold',
        fontFamily: 'josefin',
        marginTop: 70
      },
  });
  