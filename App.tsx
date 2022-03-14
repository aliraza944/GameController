import 'react-native-gesture-handler';
import React from 'react';

import {NavigationContainer} from '@react-navigation/native';
import MainApp from './Navigation/MainApp/MainApp';
import {SafeAreaProvider} from 'react-native-safe-area-context';
import {LogBox} from 'react-native';
LogBox.ignoreLogs(['Warning: ...']); // Ignore log notification by message
LogBox.ignoreAllLogs(); //Ignore all log notifications
const App = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer>
        <MainApp />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export default App;
