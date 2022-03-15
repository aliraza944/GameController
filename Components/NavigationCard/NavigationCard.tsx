/* eslint-disable prettier/prettier */
import {View, Text, TouchableOpacity, StyleSheet} from 'react-native';
import React from 'react';

import {fonts} from '../../assets/Data';
import {Props, RootStack} from '../../Navigation/MainApp/MainApp';

interface INavigationCard extends Props {
  path: keyof RootStack;
  title: String;
}

const NavigationCard: React.FC<INavigationCard> = ({
  navigation,
  path,
  title,
  route,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate(path)}
      style={styles.container__button}>
      <Text style={styles.button__text}>{title} </Text>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  container__button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0,0,256, 0.5)',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
    marginVertical: 10,
  },
  button__text: {
    color: 'black',
    fontFamily: fonts.medium,
    fontSize: 15,
  },
});

export default NavigationCard;
