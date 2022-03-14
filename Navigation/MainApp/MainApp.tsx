/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import PanGesture from '../../Screens/PanGesture/PanGesture';
import Home from '../../Screens/Home/Home';

export type RootStack = {
  Home: undefined;
  PanGesture: undefined;
};
export type Props = StackScreenProps<RootStack, 'Home'>;

const Stack = createStackNavigator<RootStack>();

const HomeScreen: StackNavigationOptions = {
  headerShown: false,
};

function MainApp() {
  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen name="Home" component={Home} options={HomeScreen} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
    </Stack.Navigator>
  );
}
export default MainApp;
