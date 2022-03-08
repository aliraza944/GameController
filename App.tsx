import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {fonts} from './assets/Data';
const App = () => {
  return (
    <View>
      <Text style={styles.text}>Game Controller</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  text: {
    fontFamily: fonts.extraBold,
    color: 'black',
  },
});

export default App;
