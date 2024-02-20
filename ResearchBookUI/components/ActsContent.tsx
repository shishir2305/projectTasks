import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const ActsContent = ({content}) => {
  return (
    <View
      style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 1,
      }}>
      <Text style={styles.content}>{content}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  content: {
    height: 60,
    fontSize: 13,
    paddingVertical: 5,
    paddingHorizontal: 10,
    borderWidth: 0.3,
  },
});

export default ActsContent;
