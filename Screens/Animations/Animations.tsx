/* eslint-disable react/self-closing-comp */
/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React, {useEffect} from 'react';
import Animated, {
  useAnimatedStyle,
  useSharedValue,
  withRepeat,
  withSpring,
  withTiming,
} from 'react-native-reanimated';
const SIZE = 100;
export default function Animations() {
  const progress = useSharedValue(0);
  const scale = useSharedValue(0);
  const radius = useSharedValue(0);
  const rotate = useSharedValue(0);
  const animatedStyle = useAnimatedStyle(() => {
    return {
      opacity: progress.value,
      transform: [
        {scale: scale.value},
        {rotate: `${progress.value * Math.PI}rad`},
      ],
      borderRadius: radius.value,
    };
  }, []);

  useEffect(() => {
    progress.value = withRepeat(withSpring(1), -1, true);
    scale.value = withRepeat(withSpring(2), -3, true);
    radius.value = withTiming(20, {
      duration: 4000,
    });
  }, []);

  return (
    <View style={styles.container__main}>
      <Animated.View
        style={[styles.container__square, animatedStyle]}></Animated.View>
    </View>
  );
}

const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container__square: {
    width: SIZE,
    height: SIZE,
    backgroundColor: 'blue',
  },
});
