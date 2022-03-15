/* eslint-disable prettier/prettier */
import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Animated, {
  useAnimatedScrollHandler,
  useSharedValue,
} from 'react-native-reanimated';
import Page from './Page';

const WORDS = ["What's", 'up', 'mobile', 'devs'];

export default function ScrollInterpolate() {
  const translateX = useSharedValue(0);

  const scrollHandler = useAnimatedScrollHandler(event => {
    translateX.value = event.contentOffset.x;
  });

  return (
    <Animated.ScrollView
      horizontal
      scrollEventThrottle={16}
      onScroll={scrollHandler}
      style={styles.container__main}>
      {WORDS.map((title, index) => (
        <Page
          key={index.toString()}
          title={title}
          index={index}
          translateX={translateX}
        />
      ))}
    </Animated.ScrollView>
  );
}

const styles = StyleSheet.create({
  container__main: {
    // flex: 1,
  },
});
