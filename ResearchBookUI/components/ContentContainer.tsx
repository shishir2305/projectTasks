import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Sidebar from './Sidebar';
import PdfContainer from './PdfContainer';

const ContentContainer = () => {
  return (
    <View style={styles.parentContainer}>
      <Sidebar />
      <PdfContainer />
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    flex: 1,
    flexDirection: 'row',
  },
});

export default ContentContainer;
