import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';

const Sidebar = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.label}>
        <Text>Facts</Text>
      </View>
      <View style={styles.label}>
        <Text>Objective</Text>
      </View>
      <View style={styles.label}>
        <Text>Stages</Text>
        <View style={styles.label}>
          <Text style={styles.labelChild}>Line Graph</Text>
          <Text style={styles.labelChild}>Bar Graph</Text>
          <Text style={styles.labelChild}>Pie Chart</Text>
        </View>
      </View>
      <View style={styles.label}>
        <Text>Acts and Selection</Text>
      </View>
      <View style={styles.label}>
        <Text>Relevancy by Bharat Law</Text>
      </View>
      <View style={styles.label}>
        <Text>Legal Strategy</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginLeft: 5,
    width: '22%',
    height: 400,
  },
  label: {
    fontSize: 14,
    fontWeight: 'bold',
    marginBottom: 3,
    paddingTop: 6,
    paddingBottom: 6,
    paddingLeft: 5,
    paddingRight: 5,
    backgroundColor: 'lightgrey',
    borderRadius: 3,
  },
  labelChild: {
    backgroundColor: 'white',
    color: 'grey',
    marginTop: 4,
    padding: 4,
  },
});

export default Sidebar;
