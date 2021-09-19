import { FontAwesome } from '@expo/vector-icons';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator, DrawerItem } from "@react-navigation/drawer";
import * as React from 'react';
import Vew from '../components/custom/Vew';

import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import { RootStackParamList } from '../types';
import LinkingConfiguration from './LinkingConfiguration';

import DashboardScreen from '../screens/DashboardScreen';
import ActivityScreen from '../screens/ActivityScreen';
import SettingsScreen from '../screens/SettingsScreen';
import MessagesMainScreen from '../screens/MessagesMainScreen';

import LandlordUnverifiedScreen from '../screens/LandlordUnverifiedScreen';
import Txt from '../components/custom/Txt';
import { Image } from "react-native";
import { useAuth } from '../context/AuthContext';
import SearchLocation from '../screens/TabOne/SearchLocation';
import LandLordIndex from '../screens/LandLord/LandLordIndex';

export default function Navigation() {
  return (
    <NavigationContainer linking={LinkingConfiguration}>
      <RootNavigator />
    </NavigationContainer>
  );
}

/**
 * A root stack navigator is often used for displaying modals on top of all other content.
 * https://reactnavigation.org/docs/modal
 */
const Stack = createNativeStackNavigator<RootStackParamList>();

function RootNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Root" component={BottomTabNavigator} options={{ headerShown: false }} />
      <Stack.Screen name="NotFound" component={NotFoundScreen} options={{ title: 'Oops!' }} />
      <Stack.Group screenOptions={{ presentation: 'modal' }}>
        <Stack.Screen name="Modal" component={ModalScreen} />
      </Stack.Group>
    </Stack.Navigator>
  );
}

const Drawer = createDrawerNavigator();

const DrawerContent = ({navigation}:any) => {
  const {email} = useAuth();
  return (
    <>
      <Vew flex={1} flexDir="column">
        <Vew py={16} px={8} mt={24} mb={-4} flexDir="row" style={{paddingVertical: 16, paddingHorizontal: 8}} justifyContent="flex-start" alignItems="center">
          <Image style={{width: "25%", height: "100%", resizeMode: 'contain'}} source={require('../assets/images/white_logo_profile.png')} />
          <Vew flexDir="column" justifyContent="center" ml={8}>
            <Txt fontWeight="700" fontSize={20}>John Doe</Txt>
            <Txt fontSize={20}>{email ? email : "johndoe@email.com"}</Txt>
          </Vew>
        </Vew>
        <Vew alignItems="center">
          <Vew style={{borderBottomWidth: 3, backgroundColor: "white", opacity: 0.1, width: "90%", borderRadius: 16}} />
        </Vew>
        {[
            { name: "Dashboard", icon: "bars" },
            { name: "Search", icon: "map" },
            { name: "Activity", icon: "clock-o" },
            { name: "Landlord", icon: "home" },
            { name: "Message", icon: "comments" },
            { name: "Settings", icon: "cog" },
          ].map(({name, icon}, idx) => (
            <DrawerItem
              key={idx}
              label={name}
              icon={props => <FontAwesome color="white" size={18} name={icon as any} />}
              activeTintColor="white"
              labelStyle={{color:"white", fontSize:18, fontFamily: 'josefin'}}
              onPress={() => {navigation.navigate(name)}}
            />
          ))
        }
      </Vew>
    </>
  )
}

function BottomTabNavigator() {
  return (
    <>
      <Drawer.Navigator initialRouteName="Dashboard" 
        drawerContent={props => <DrawerContent {...props} />}
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.brand.green,
            elevation: 0,
          },
          headerTitleStyle: {
            color: "white"
          },
          drawerStyle: {
            backgroundColor: Colors.brand.green
          },
          headerTintColor:"white",
        }}
      >
        {
          [
            { name: "Dashboard", component: TabOneScreen, icon: "bars" },
            { name: "Search", component: SearchLocation, icon: "map" },
            { name: "Activity", component: ActivityScreen, icon: "clock-o" },
            { name: "Landlord", component: LandLordIndex, icon: "home" },
            { name: "Message", component: MessagesMainScreen, icon: "comments" },
            { name: "Settings", component: SettingsScreen, icon: "cog" },
          ].map(({name, component, icon}, idx) => (
            <Drawer.Screen name={name} component={component} key={idx} 
              options={{
                drawerIcon: () => (
                  <FontAwesome color="white" size={18} name={icon as any} />
                ),
                drawerLabelStyle: {
                  color: "white",
                  fontSize: 20,
                  fontFamily: 'josefin'
                },
                // dont use this search in demo, use the search from map, as the search from map doesnt cut off bg coloring during search
                // drawerContentStyle: name === "Search" ? {backgroundColor: "#CADBE1"} : {}
              }}
            />
          ))
        }
        
      </Drawer.Navigator>
    </>
  );
}

/**
 * You can explore the built-in icon families and icons on the web at https://icons.expo.fyi/
 */
function TabBarIcon(props: {
  name: React.ComponentProps<typeof FontAwesome>['name'];
  color: string;
}) {
  return <FontAwesome size={30} style={{ marginBottom: -3 }} {...props} />;
}
