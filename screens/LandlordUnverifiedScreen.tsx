import React, { useState } from "react";
import { StyleSheet, Image, View, Text, Pressable, Alert} from 'react-native';
import ScreenTitle from '../components/ScreenTitle';

export default function LandlordUnverifiedScreen() {
    return (
        <View>
            <View style={styles.container}>
                <ScreenTitle title="Landlord" subtext="Earn income as a" path={require("../assets/images/cog.png")} />
                <Image source={require('../assets/images/bananas_and_monkey.png')}/>
                <Text style={styles.title}>It doesn't seem like you are verified yet...</Text>
                <Pressable style={styles.button} onPress={() => Alert.alert('Verify Button pressed')}>
                    <Text style={styles.buttonText}>VERIFY</Text>
                </Pressable>
            </View>
        </View>
      );
  }


const styles = StyleSheet.create({
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        color: '#1E1E1E',
        fontFamily: 'josefin',
        fontSize: 40,
        fontWeight: 'bold',
        margin: 30,
        maxWidth: 500,
        textAlign: 'center',
    },
    buttonText: {
        color: 'white',
        fontFamily: 'josefin',
        fontSize: 30,
        fontWeight: 'bold',
        textAlign: 'center',
    },
    button: {
        backgroundColor: 'black',
        borderRadius: 30,
        width: 300,
        padding: 20
    }

});