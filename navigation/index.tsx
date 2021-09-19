/**
 * If you are not familiar with React Navigation, refer to the "Fundamentals" guide:
 * https://reactnavigation.org/docs/getting-started
 *
 */
import { FontAwesome } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from "@react-navigation/drawer";
import * as React from 'react';
import { Pressable } from 'react-native';
import Vew from '../components/custom/Vew';

import Colors from '../constants/Colors';
import ModalScreen from '../screens/ModalScreen';
import NotFoundScreen from '../screens/NotFoundScreen';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/TabTwoScreen';
import { RootStackParamList, RootTabParamList, RootTabScreenProps } from '../types';
import LinkingConfiguration from './LinkingConfiguration';
import ActivityScreen from '../screens/ActivityScreen';
import Txt from '../components/custom/Txt';
import { useEffect } from 'react';

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

const BottomTab = createBottomTabNavigator<RootTabParamList>();
const Drawer = createDrawerNavigator();



function BottomTabNavigator() {
  return (
    <>
      <Drawer.Navigator initialRouteName="Dashboard" 
        // drawerContent={props => (
        //   <Vew >
        //     <Txt>hi</Txt>
        //   </Vew>
        // )}
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
        <Drawer.Screen name={"drawer_menu_logo"} component={({navigation}) => {
          useEffect(() => { navigation.navigate("Dashboard") },[navigation])
          return <></>;
        }}
          options={{
            drawerIcon: () => (
              <Vew flex={1} justifyContent="center" flexDir="row" alignItems="center" style={{elevation: 5, shadowOpacity: 0.5}}>

              </Vew>
            ),
            drawerLabelStyle: {
              color: "white",
              fontSize: 20,
              fontFamily: 'josefin',
              display: "none"
            }
          }}
        />
        {
          [
            { name: "Dashboard", component: TabOneScreen, icon: "bars" },
            { name: "Search", component: TabOneScreen, icon: "map" },
            { name: "Activity", component: ActivityScreen, icon: "clock-o" },
            { name: "Landlord", component: TabOneScreen, icon: "home" },
            { name: "Message", component: TabOneScreen, icon: "comments" },
            { name: "Settings", component: TabOneScreen, icon: "cog" },
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
                }
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
