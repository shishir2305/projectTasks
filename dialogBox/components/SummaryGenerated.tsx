import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SummaryGenerated = ({keepDots}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 15,
        }}>
        <View style={styles.checkbox}></View>
        <View>
          <Text style={{fontWeight: 'bold', marginBottom: 5}}>
            CBI Vs RR Kishore
          </Text>
          <Text style={{fontSize: 12}}>12:14 PM</Text>
        </View>
      </View>
      {keepDots && <View style={styles.dot}></View>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 20,
    height: 60,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 5,
  },
  checkbox: {
    height: 15,
    width: 15,
    borderWidth: 1,
    marginTop: 3,
  },
  dot: {
    height: 10,
    width: 10,
    borderRadius: 50,
    backgroundColor: '#13207d',
  },
});

export default SummaryGenerated;
