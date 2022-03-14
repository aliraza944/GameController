/* eslint-disable prettier/prettier */
import 'react-native-gesture-handler';
import React, {useEffect} from 'react';
import {StyleSheet, Text, View} from 'react-native';

import Animated, {
  useSharedValue,
  useAnimatedStyle,
  withTiming,
  Easing,
  useAnimatedGestureHandler,
  withSpring,
} from 'react-native-reanimated';
import {
  PanGestureHandler,
  PanGestureHandlerGestureEvent,
  GestureHandlerRootView,
} from 'react-native-gesture-handler';
import {NavigationContainer} from '@react-navigation/native';
type ContextInterface = {
  translateX: number;
  translateY: number;
};

const PanGesture = () => {
  const translateX = useSharedValue(0);
  const translateY = useSharedValue(0);

  const panGestureEvent = useAnimatedGestureHandler<
    PanGestureHandlerGestureEvent,
    ContextInterface
  >({
    onStart: (e, context) => {
      context.translateX = translateX.value;
      context.translateY = translateY.value;
    },
    onActive: (event, context) => {
      translateX.value = event.translationX + context.translateX;
      translateY.value = event.translationY + context.translateY;
    },
    onEnd: () => {
      translateX.value = withSpring(0);
      translateY.value = withSpring(0);
    },
  });

  const rStyle = useAnimatedStyle(() => {
    return {
      transform: [
        {
          translateX: translateX.value,
        },
        {
          translateY: translateY.value,
        },
      ],
    };
  });

  return (
    <GestureHandlerRootView style={[styles.container__main]}>
      <PanGestureHandler onGestureEvent={panGestureEvent}>
        <Animated.View style={styles.container__circle}>
          <Animated.View style={[styles.square, rStyle]} />
        </Animated.View>
      </PanGestureHandler>
    </GestureHandlerRootView>
  );
};

const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  square: {
    width: 100,
    height: 100,
    backgroundColor: 'rgba(0,0,256,0.5)',
    borderRadius: 20,
  },
  container__circle: {
    width: 300,
    height: 300,
    borderRadius: 150,
    backgroundColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
});

export default PanGesture;
