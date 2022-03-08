import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from './assets/Data';
import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
} from 'react-native-reanimated';
const App = () => {
  const offset = useSharedValue(100);

  const animatedStyles = useAnimatedStyle(() => {
    return {
      width: offset.value,
    };
  });

  useEffect(() => {
    offset.value = withTiming(300, {
      duration: 5000,
      easing: Easing.ease,
    });
  }, [offset]);

  return (
    <Animated.View style={[styles.container__main, animatedStyles]}>
      <Text style={styles.text}>Game Controller</Text>
    </Animated.View>
  );
};

const styles = StyleSheet.create({
  container__main: {
    backgroundColor: 'green',
  },
  text: {
    fontFamily: fonts.extraBold,
    color: 'black',
  },
});

export default App;
