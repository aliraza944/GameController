/* eslint-disable prettier/prettier */
import {View, Text} from 'react-native';
import React from 'react';
import {styles} from './Styles';
import {Props} from '../../Navigation/MainApp/MainApp';
import {TouchableOpacity} from 'react-native-gesture-handler';
export default function Home({navigation}: Props) {
  return (
    <View style={styles.container__main}>
      <TouchableOpacity
        onPress={() => navigation.navigate('PanGesture')}
        style={styles.container__button}>
        <Text style={styles.button__text}>Pan Gesture </Text>
      </TouchableOpacity>
    </View>
  );
}
