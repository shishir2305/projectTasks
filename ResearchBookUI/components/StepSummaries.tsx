import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const StepSummaries = () => {
  return (
    <View>
      <View style={styles.summaryContainer}>
        <View style={{width: '30%', marginRight: 5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.dot}></View>
            <Text style={{fontSize: 11}}>Preparing document</Text>
          </View>
          <View style={styles.line}></View>
        </View>

        <View style={{width: '30%', marginRight: 7}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.dot}></View>
            <Text style={{fontSize: 11}}>Organizing Information</Text>
          </View>
          <View style={{display: 'flex', flexDirection: 'row'}}>
            <View
              style={{
                width: '50%',
                height: 8,
                backgroundColor: '#13207d',
                marginTop: 5,
              }}></View>
            <View
              style={{
                width: '50%',
                height: 8,
                backgroundColor: 'lightgrey',
                marginTop: 5,
              }}></View>
          </View>
        </View>

        <View style={{width: '30%', marginRight: 5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.dot}></View>
            <Text style={{fontSize: 11}}>Generating Summary</Text>
          </View>
          <View
            style={{
              marginTop: 5,
              width: '100%',
              height: 8,
              backgroundColor: 'lightgrey',
            }}></View>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: '27%',
    paddingLeft: 30,
    paddingTop: 30,
    marginBottom: 25,
  },
  summaryContainer: {
    flexDirection: 'row',
  },
  line: {
    width: '100%',
    height: 8,
    backgroundColor: '#13207d',
    marginTop: 5,
  },
  heading: {
    fontSize: 17,
    fontWeight: 'bold',
    marginRight: 5,
  },
  dot: {
    width: 10,
    height: 10,
    backgroundColor: '#13207d',
    borderRadius: 50,
    marginRight: 5,
  },
});

export default StepSummaries;
