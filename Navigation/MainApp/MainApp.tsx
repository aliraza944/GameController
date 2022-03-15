/* eslint-disable prettier/prettier */
import React from 'react';
import {
  createStackNavigator,
  StackScreenProps,
  StackNavigationOptions,
} from '@react-navigation/stack';
import PanGesture from '../../Screens/PanGesture/PanGesture';
import Home from '../../Screens/Home/Home';
import Animations from '../../Screens/Animations/Animations';
import ScrollInterpolate from '../../Screens/ScrollInterpolate/ScrollInterpolate';

export type RootStack = {
  Home: undefined;
  Animation: undefined;
  PanGesture: undefined;
  ScrollInterpolate: undefined;
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
      <Stack.Screen name="Animation" component={Animations} />
      <Stack.Screen name="PanGesture" component={PanGesture} />
      <Stack.Screen
        name="ScrollInterpolate"
        component={ScrollInterpolate}
        options={{title: 'Scroll Interpolate', headerShown: false}}
      />
    </Stack.Navigator>
  );
}
export default MainApp;
