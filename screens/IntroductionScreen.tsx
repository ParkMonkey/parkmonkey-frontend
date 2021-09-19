import React, { Component, useState } from 'react';
import { Text, View, Image, Dimensions, Pressable, Alert, Modal } from 'react-native'
import Swiper from 'react-native-swiper'

const { width } = Dimensions.get('window')

const styles = {
  container: {
    flex: 1,
    backgroundColor: '#1ECF65',
  },

  wrapper: {
    marginTop: 60
  },

  slide: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: '#1ECF65',
    flexDirection:"column"
  },

  title: {
    color: '#fff',
    fontSize: 60,
    fontWeight: 'bold',
    margin: 16,
    fontFamily: 'josefin',
  },

  text: {
      color: 'white',
      fontSize: 20,
      fontFamily: 'josefin',
      textAlign: 'center',
      paddingHorizontal: 16
  },

  image: {
  },

  bottomSection: {
      padding: 30,
      display: 'flex',
      alignItems: 'center',
      backgroundColor: 'white'
  },

  buttonSignUp: {
      borderRadius: 15,
      padding: 10,
      paddingTop: 15,
      margin: 15,
      width: 350,
      backgroundColor: 'black',
      shadowColor: "#000",
      shadowOffset: {
          width: 0,
          height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 7,
      
      elevation: 15,
  },

  buttonLogIn: {
    borderRadius: 15,
    padding: 10,
    paddingTop: 15,
    margin: 15,
    width: 350,
    backgroundColor: '#1ECF65',
    shadowColor: "#000",
    shadowOffset: {
        width: 0,
        height: 7,
    },
    shadowOpacity: 0.43,
    shadowRadius: 7,
    
    elevation: 15,
  },

  buttonText: {
    fontFamily: 'josefin',
    color: 'white',
    fontSize: 30,
    textAlign: 'center',
  },

}

interface IntroInterface {
  updateParentState:any
}

const IntroductionScreen:React.FC<IntroInterface> = ({ updateParentState }) => {
  const [open, setOpen] = useState(true);
  return (
    <Modal
      animationType="slide"
      transparent={false}
      visible={open}
      onRequestClose={() => setOpen(false)}
    >
      <View style={styles.container}>
        <Swiper 
            style={styles.wrapper} 
            height={200} 
            horizontal={true} 
            dot={
                <View style={{
                    backgroundColor: 'white', 
                    width: 30, 
                    height: 12,
                    borderRadius: 4, 
                    margin: 5,
                    marginBottom: 10
                }}/>
            }
            activeDot={
                <View style={{
                    backgroundColor: 'white', 
                    width: 70, 
                    height: 12,
                    borderRadius: 4, 
                    margin: 5,
                    marginBottom: 10
                }}/>
            }            
        >
          <View style={styles.slide}>
            <Image style={styles.image} source={require('../assets/images/slide_1.png')}/>
            <Text style={styles.title}>Welcome,</Text>
            <Text style={styles.text}>swipe right to learn more about ParkMonkey!</Text>
          </View>
          <View style={[styles.slide, {marginTop: -6, overflow:"visible"}]}>
            <Image style={styles.image} source={require('../assets/images/slide_2.png')}/>
            <Text style={[styles.title, {fontSize: 45, textAlign:"center"}]}>The World's First</Text>
            <Text style={styles.text}>parking app using household driveways!</Text>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('../assets/images/slide_3.png')}/>
            <Text style={styles.title}>Drivers,</Text>
            <Text style={styles.text}>check out our safe, secure and affordable hourly parking!</Text>
          </View>
          <View style={styles.slide}>
            <Image style={styles.image} source={require('../assets/images/slide_4.png')}/>
            <Text style={styles.title}>Landlords,</Text>
            <Text style={styles.text}>rent out your driveway for hassle-free, passive income!</Text>
          </View>
        </Swiper>
        <View style={styles.bottomSection}>
            <Pressable style={styles.buttonSignUp} onPress={() => Alert.alert('Sign Up Button pressed')}>
                <Text style={styles.buttonText}>SIGN UP</Text>
            </Pressable>
            <Pressable style={styles.buttonLogIn} onPress={() => {setOpen(false); updateParentState();}}>
                <Text style={styles.buttonText}>LOG IN</Text>
            </Pressable>
        </View>
      </View>
    </Modal>
  )
}

export default IntroductionScreen;