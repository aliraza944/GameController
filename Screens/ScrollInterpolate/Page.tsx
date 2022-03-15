/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Dimensions} from 'react-native';
import React from 'react';
import Animated, {
  Extrapolate,
  interpolate,
  useAnimatedStyle,
} from 'react-native-reanimated';
import {fonts} from '../../assets/Data';

interface IPage {
  title: String;
  index: number;
  translateX: Animated.SharedValue<number>;
}

const {height, width} = Dimensions.get('window');
const SIZE = width * 0.7;
const Page: React.FC<IPage> = ({title, index, translateX}) => {
  const rStyle = useAnimatedStyle(() => {
    const scale = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, 1, 0],
      Extrapolate.CLAMP,
    );

    const radius = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [0, SIZE / 2, 0],
    );

    return {
      transform: [{scale}],
      borderRadius: radius,
    };
  });

  const rText = useAnimatedStyle(() => {
    const translateY = interpolate(
      translateX.value,
      [(index - 1) * width, index * width, (index + 1) * width],
      [height / 2, 0, -height / 2],
    );

    return {
      transform: [{translateY}],
    };
  });

  return (
    <View
      style={[
        styles.container__main,
        {backgroundColor: `rgba(0,0,256,0.${index + 2})`},
      ]}>
      <Animated.View style={[styles.container__square, rStyle]}>
        <Animated.View style={[rText]}>
          <Text style={[styles.text__title]}>{title}</Text>
        </Animated.View>
      </Animated.View>
    </View>
  );
};
export default Page;

const styles = StyleSheet.create({
  container__main: {
    width: width,
    height: height,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__square: {
    height: SIZE,
    width: SIZE,
    backgroundColor: 'rgba(0,0,256,0.4)',
    justifyContent: 'center',
    alignItems: 'center',
  },
  text__title: {
    fontFamily: fonts.bold,
    color: 'white',
    fontSize: 50,
    textTransform: 'uppercase',
  },
});
