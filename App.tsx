import 'react-native-gesture-handler';

import React from 'react';
import {SafeAreaView, StatusBar, useColorScheme} from 'react-native';

import Navigation from './src/navigation/Navigation';
import {themeColor} from './src/constant';
import {Provider} from 'react-redux';
import {store} from './src/redux/store';

function App(): JSX.Element {
  const isDarkMode = useColorScheme() === 'dark';

  return (
    <Provider store={store}>
      <SafeAreaView style={{flex: 1}}>
        <StatusBar
          barStyle={isDarkMode ? 'light-content' : 'dark-content'}
          backgroundColor={themeColor.bgColorTwo}
        />
        <Navigation />
      </SafeAreaView>
    </Provider>
  );
}

export default App;
