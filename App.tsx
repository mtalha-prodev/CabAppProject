import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigation from './src/navigation/Navigation';
import {themeColor} from './src/constant';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <SafeAreaView style={{flex: 1}}>
      <StatusBar
        barStyle={isDarkMode ? 'light-content' : 'dark-content'}
        backgroundColor={themeColor.bgColorTwo}
      />
      <Navigation />
    </SafeAreaView>
  );
}

export default App;
