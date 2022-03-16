/* eslint-disable prettier/prettier */
import {StyleSheet, Text, View, Image, Dimensions} from 'react-native';
import React from 'react';
import {
  PinchGestureHandler,
  PinchGestureHandlerGestureEvent,
} from 'react-native-gesture-handler';
import Animated, {
  useAnimatedGestureHandler,
  useAnimatedStyle,
  useSharedValue,
  withTiming,
} from 'react-native-reanimated';

const imageUri =
  'https://images.unsplash.com/photo-1621569642780-4864752e847e?ixid=MnwxMjA3fDB8MHxwaG90[…]fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80';
const {width, height} = Dimensions.get('window');
export default function PinchGesture() {
  const scale = useSharedValue(0);
  const focalX = useSharedValue(0);
  const focalY = useSharedValue(0);
  const AnimatedImage = Animated.createAnimatedComponent(Image);
  const pinchHandler =
    useAnimatedGestureHandler<PinchGestureHandlerGestureEvent>({
      onActive: event => {
        scale.value = event.scale;
        focalX.value = event.focalX;
        focalY.value = event.focalY;
      },
      onEnd: () => {
        scale.value = withTiming(1, {duration: 2000});
      },
    });
  const rstyle = useAnimatedStyle(() => {
    return {
      transform: [
        {translateX: focalX.value},
        {translateY: focalY.value},
        {translateX: -width / 2},
        {translateY: -height / 2},
        {scale: scale.value},
        {translateX: -focalX.value},
        {translateY: -focalY.value},
        {translateX: width / 2},
        {translateY: height / 2},
      ],
    };
  });
  const fstyle = useAnimatedStyle(() => {
    return {
      transform: [{translateX: focalX.value}, {translateY: focalY.value}],
    };
  });

  return (
    <PinchGestureHandler onGestureEvent={pinchHandler}>
      <Animated.View style={{flex: 1}}>
        <AnimatedImage
          style={[styles.image, rstyle]}
          source={{uri: imageUri}}
        />
        <Animated.View style={[styles.focal, fstyle]} />
      </Animated.View>
    </PinchGestureHandler>
  );
}

const styles = StyleSheet.create({
  image: {
    flex: 1,
  },
  focal: {
    ...StyleSheet.absoluteFillObject,
    width: 20,
    height: 20,
    backgroundColor: 'blue',
    borderRadius: 10,
  },
});
