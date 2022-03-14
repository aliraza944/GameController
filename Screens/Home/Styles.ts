/* eslint-disable prettier/prettier */
import {StyleSheet} from 'react-native';
import {fonts} from '../../assets/Data';

export const styles = StyleSheet.create({
  container__main: {
    flex: 1,
    justifyContent: 'center',
    // alignItems: 'center',
    width: '100%',
    paddingHorizontal: 10,
  },
  container__button: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: 'rgba(0,0,256, 0.5)',
    borderWidth: 2,
    paddingHorizontal: 20,
    paddingVertical: 20,
  },
  button__text: {
    color: 'black',
    fontFamily: fonts.medium,
    fontSize: 15,
  },
});
