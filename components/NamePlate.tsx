import * as React from 'react';
import { List, Button, Card, Title, Paragraph, DefaultTheme } from 'react-native-paper';
import { Image, StyleSheet, View, Text } from 'react-native'


const NamePlate = () => (
    <View style={styles.container}>
        <View style={styles.namePlate}>
            <Image style={styles.image} source={require('../assets/images/white_logo_profile.png')} />
            <View style={styles.text}>
                <Text style={styles.title}>John Doe</Text>
                <Text style={styles.paragraph}>johndoe@email.com</Text>
            </View>
        </View>
    </View>

);

const styles = StyleSheet.create({
    namePlate: {
        backgroundColor: '#1ECF65',
        display: 'flex',
        flexDirection: 'row',
        padding: 20,
        borderRadius: 30,
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 5,
        },
        shadowOpacity: 0.5,
        shadowRadius: 2.62,
        elevation: 4,
    },
    title: {
        color: 'white',
        fontFamily: 'josefin',
        fontWeight: 'bold',
        fontSize: 30,
        marginBottom: 10
    },
    paragraph: {
        color: 'white',
        fontFamily: 'josefin'
    },
    text: {
        justifyContent: 'center',
        marginLeft: 30
    },
    container: {
        borderRadius: 30,
        flex: 1,
        resizeMode: 'contain',
        zIndex: 2,
        margin: 0,
        width: 500,
    },
    image: {
        flex: 1,
        resizeMode: 'contain',
        justifyContent: 'flex-start'
    }

})


export default NamePlate;