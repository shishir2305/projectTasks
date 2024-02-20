import React from 'react';
import {View, StyleSheet} from 'react-native';

const HorizontalLine = () => <View style={styles.line} />;

const styles = StyleSheet.create({
  line: {
    borderBottomColor: 'black',
    borderBottomWidth: 0.5,
    marginHorizontal: 10,
  },
});

export default HorizontalLine;
