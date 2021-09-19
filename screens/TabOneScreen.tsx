import * as React from 'react';
import { StyleSheet, Dimensions, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Index from "./TabOne/Index";
import MapScreen from './TabOne/MapScreen';
import Vew from '../components/custom/Vew';
import Txt from '../components/custom/Txt';
import { useAuth } from '../context/AuthContext';
import Colors from '../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import SearchLocation from './TabOne/SearchLocation';

const Stack = createStackNavigator();

interface TabOneScreenInterface{
  navigation?: any
}

export default function TabOneScreen({ navigation }: TabOneScreenInterface) {
  const {email, loggedIn} = useAuth();

  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={Index} 
        options={{
          headerTitle: (props => (
            <Vew flexDir="column" h={90} bg={Colors.brand.green} w={Dimensions.get('window').width} ml={-16} mt={32} p={16} style={{
              elevation:5, shadowOpacity:.5,
              borderBottomLeftRadius: 16, borderBottomRightRadius: 16, 
            }}>
              <Txt fontSize={14} flexWrap="wrap" color="white">Welcome back!</Txt>
              <Txt fontWeight="700" fontSize={30} flexWrap="wrap" color="white">{email}</Txt>
            </Vew>
          )),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation:0, shadowOpacity:0,
          },
          // cardStyle:{
          //   backgroundColor: Colors.brand.dark,
          // }
        }}
      />
      <Stack.Screen name="Map" component={MapScreen} 
        options={{
          headerTitleAlign: "center",
          headerTitle: (props => <Txt fontWeight="700" fontSize={22} textAlign="center" flexWrap="wrap">Map</Txt>),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation:5, shadowOpacity:.5
          },
          headerRight: () => (
            <Pressable
              onPress={() => navigation.navigate('SearchLocation')}
              style={({ pressed }) => ({
                opacity: pressed ? 0.5 : 1,
              })}>
              <FontAwesome
                name="bullseye"
                size={25}
                color={Colors.brand.white}
                style={{ marginRight: 15 }}
              />
            </Pressable>
          ),
          // cardStyle:{
          //   backgroundColor: Colors.brand.dark,
          // }
      }}
      />
      <Stack.Screen name="SearchLocation" component={SearchLocation} 
        options={{
          headerTitleAlign: "center",
          headerTitle: (props => <Txt fontWeight="700" fontSize={22} textAlign="center" flexWrap="wrap">Search Location</Txt>),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation:0, shadowOpacity:0
          },
          cardStyle: {
            backgroundColor: "#CADBE1"
          }
      }}
      />
    </Stack.Navigator>
    
  );
}