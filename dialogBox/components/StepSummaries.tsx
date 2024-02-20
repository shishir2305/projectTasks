import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const dharmaChakra = (
  <MaterialCommunityIcons name="dharmachakra" size={25} color="lightgrey" />
);

const StepSummaries = () => {
  return (
    <View style={styles.container}>
      <View style={{display: 'flex', flexDirection: 'row', marginBottom: 20}}>
        {dharmaChakra}
        <Text style={styles.heading}>CBI vs RR Kishore</Text>
      </View>

      <View style={styles.summaryContainer}>
        <View style={{width: '31%', marginRight: 5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.dot}></View>
            <Text>Preparing document</Text>
          </View>
          <View style={styles.line}></View>
        </View>

        <View style={{width: '31%', marginRight: 5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.dot}></View>
            <Text>Organizing Information</Text>
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

        <View style={{width: '31%', marginRight: 5}}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <View style={styles.dot}></View>
            <Text>Generating Summary</Text>
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
    marginLeft: 10,
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
