import {View, Text, SafeAreaView, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import SidePanel from './components/SidePanel';
import MainContent from './components/MainContent';

const App = () => {
  return (
    <View style={styles.parentContainer}>
      <SidePanel />
      <MainContent />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    display: 'flex',
    flexDirection: 'row',
  },
});

export default App;
