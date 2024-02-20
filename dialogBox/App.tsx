import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import DialogBoxContainer from './components/DialogBoxContainer';

const App = () => {
  return (
    <ScrollView>
      <View style={styles.parentContainer}>
        <DialogBoxContainer />
      </View>
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    alignItems: 'center',
    width: '100%',
  },
});

export default App;
