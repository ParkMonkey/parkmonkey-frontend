import * as React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../constants/Colors';
import ActivityOne from './ActivityOne';
import ActivityScreen from '../ActivityScreen';

const Stack = createStackNavigator();

interface PROPS_INTERFACE{
  navigation?: any
}

export default function ActivityIndex({ navigation }: PROPS_INTERFACE) {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ActivityScreen" component={ActivityScreen} 
        options={{headerShown: false}}
      />
      <Stack.Screen name="ActivityOne" component={ActivityOne} 
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