/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet, Switch, Dimensions} from 'react-native';
import React, {useState} from 'react';
import Animated, {
  interpolate,
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';
const Colors = {
  dark: {
    background: '#1E1E1E',
    circle: '#252525',
    text: '#F8F8F8',
  },
  light: {
    background: '#F8F8F8',
    circle: '#FFF',
    text: '#1E1E1E',
  },
};

const SWITCH_TRACK_COLOR = {
  true: 'rgba(256, 0, 256, 0.2)',
  false: 'rgba(0,0,0,0.1)',
};

type Theme = 'light' | 'dark';
const SIZE = Dimensions.get('window').width * 0.7;
const ColorInterpolate = () => {
  const [theme, setTheme] = useState<Theme>('light');
  //   const progress = useSharedValue(0);
  const progress = useDerivedValue(() => {
    return theme === 'dark'
      ? withTiming(1, {
          duration: 2000,
        })
      : withTiming(0, {
          duration: 2000,
        });
  }, [theme]);
  const rstyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.background, Colors.dark.background],
    );

    return {
      backgroundColor,
    };
  });
  const rCircleStyle = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      progress.value,
      [0, 1],
      [Colors.light.circle, Colors.dark.background],
    );

    return {
      backgroundColor,
    };
  });

  return (
    <Animated.View style={[styles.container__main, rstyle]}>
      <Animated.View style={[styles.container_circle, rCircleStyle]}>
        <Switch
          value={theme === 'dark'}
          onValueChange={toggled => {
            setTheme(toggled ? 'dark' : 'light');
          }}
          trackColor={SWITCH_TRACK_COLOR}
          thumbColor={'violet'}
        />
      </Animated.View>
    </Animated.View>
  );
};

export default ColorInterpolate;

const styles = StyleSheet.create({
  container__main: {
    backgroundColor: 'white',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container_circle: {
    width: SIZE,
    height: SIZE,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    borderRadius: SIZE / 2,
    elevation: 20,
    shadowColor: 'black',
  },
});
