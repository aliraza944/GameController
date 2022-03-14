/* eslint-disable prettier/prettier */
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import PanGesture from '../../Screens/PanGesture/PanGesture';
import Home from '../../Screens/Home/Home';
const Stack = createStackNavigator();

function MainApp() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{headerShown: false}}
      />
      <Stack.Screen name="PanGesture" component={PanGesture} />
    </Stack.Navigator>
  );
}
export default MainApp;
