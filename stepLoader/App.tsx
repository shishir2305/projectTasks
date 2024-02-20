import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import StepLoaderAnimated from './StepLoaderAnimated';

const App = () => {
  return (
    <SafeAreaView>
      <Text style={{fontSize: 30, marginBottom: 40, marginTop: 20}}>
        Step Loader
      </Text>
      <StepLoaderAnimated />
    </SafeAreaView>
  );
};

export default App;
