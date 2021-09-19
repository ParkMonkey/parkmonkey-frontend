import * as React from 'react';
import { StyleSheet, Dimensions, Pressable } from 'react-native';
import { createStackNavigator } from '@react-navigation/stack';
import Vew from '../../components/custom/Vew';
import Txt from '../../components/custom/Txt';
import Colors from '../../constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import SearchLocation from '../TabOne/SearchLocation';
import DashboardScreen from '../DashboardScreen';
import ViewingBeforePurchase from '../TabOne/ViewingBeforePurchase';
import LandlordUnverifiedScreen from '../LandlordUnverifiedScreen';
import VerifyOne from './VerifyOne';
import VerifyTwo from './VerifyTwo';

const Stack = createStackNavigator();

interface PROPS_INTERFACE{
  navigation?: any
}

export default function LandLord({ navigation }: PROPS_INTERFACE) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Home" component={LandlordUnverifiedScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen name="VerifyOne" component={VerifyOne} 
        options={{
          headerTitleAlign: "center",
          headerTitle: (props => <></>),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation:0, shadowOpacity:0
          },
      }}
      />
      <Stack.Screen name="VerifyTwo" component={VerifyTwo} 
        options={{
          headerTitleAlign: "center",
          headerTitle: (props => <></>),
          headerTintColor: "whitesmoke", // back arrow
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation:0, shadowOpacity:0
          },
      }}
      />
      
    </Stack.Navigator>
    
  );
}