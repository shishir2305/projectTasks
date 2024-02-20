import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalLine = () => {
  return <View style={styles.line}></View>;
};

const styles = StyleSheet.create({
  line: {
    height: 0.3,
    backgroundColor: 'gray',
    marginVertical: 10,
  },
});

export default HorizontalLine;
