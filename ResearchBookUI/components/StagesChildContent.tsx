import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StagesChildContent = ({mainContent, number, numberColor}) => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.mainTextContainer}>
        <Text style={styles.mainText}>{mainContent}</Text>
        <View
          style={{
            height: 70,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View style={styles.cross}>
            <Text style={{fontSize: 20, color: 'grey'}}>X</Text>
          </View>
          <View style={[styles.number, {backgroundColor: numberColor}]}>
            <Text>{number}</Text>
          </View>
        </View>
      </View>

      <View style={styles.secondaryTextContainer}>
        <Text style={{fontSize: 11}}>
          M/S Indus Airways Pvt Ltd & Ors Vs. M/S Magnum Av...
        </Text>
        <Text style={{fontSize: 10}}>Hon'ble Supreme Court of India</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  mainTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'white',
  },
  mainText: {
    width: '85%',
    marginRight: 20,
  },
  parentContainer: {
    marginLeft: 30,
  },
  cross: {
    height: 40,
    width: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  number: {
    height: 27,
    width: 27,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
  secondaryTextContainer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    backgroundColor: 'lightgrey',
    paddingHorizontal: 5,
    paddingVertical: 10,
    borderRadius: 5,
  },
});

export default StagesChildContent;
