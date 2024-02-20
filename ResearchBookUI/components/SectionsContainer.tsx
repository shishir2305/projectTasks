import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SectionsContent from './SectionsContent';

const SectionsContainer = () => {
  return (
    <View>
      <Text style={styles.heading}>Sections</Text>
      <SectionsContent heading={'Section 1. Incorporation'} />
      <View style={{height: 30}}></View>
      <SectionsContent
        heading={
          'Section 2. Power to sue and be sued, and to acquire, hold and transfer property.'
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default SectionsContainer;
