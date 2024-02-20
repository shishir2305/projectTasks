import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const CaseStrategyContent = ({content}) => {
  return (
    <View
      style={{
        paddingLeft: 20,
        display: 'flex',
        flexDirection: 'row',
        gap: 10,
        marginBottom: 20,
      }}>
      <View style={styles.dot}></View>
      <Text>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  dot: {
    height: 8,
    width: 8,
    borderRadius: 50,
    backgroundColor: 'black',
    marginTop: 5,
  },
});

export default CaseStrategyContent;
