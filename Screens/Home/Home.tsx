/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {Props} from '../../Navigation/MainApp/MainApp';
import NavigationCard from '../../Components/NavigationCard/NavigationCard';
export default function Home({navigation, route}: Props) {
  return (
    <View style={styles.container__main}>
      <NavigationCard
        navigation={navigation}
        path="Animation"
        title={'Reanimated Introduction'}
        route={route}
      />
      <NavigationCard
        navigation={navigation}
        path="PanGesture"
        title={'Pan Gesture'}
        route={route}
      />
      <NavigationCard
        navigation={navigation}
        path="ScrollInterpolate"
        title={'Scroll Interpolate'}
        route={route}
      />
    </View>
  );
}
