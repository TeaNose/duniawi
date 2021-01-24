/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';

// navigation
import MainNavigator from './src/navigations';

const App: () => React$Node = () => {
  return (
    <>
      <StatusBar barStyle="light-content" />
      <MainNavigator />
    </>
  );
};

export default App;
