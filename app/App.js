import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  Text,
} from 'react-native';

import TodoPage from './src/features/Todo/TodoPage'
import colors from './src/styles/colors';

const App = () => {
  return (
    <SafeAreaView style={{backgroundColor: colors.background}}>
      <StatusBar />
      <Text>React native showcase</Text>
      <TodoPage />
    </SafeAreaView>
  );
};

export default App;
