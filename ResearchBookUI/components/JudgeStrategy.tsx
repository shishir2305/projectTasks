import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import JudgeStrategyChild from './JudgeStrategyChild';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';

const addIcon = <AntDesignIcons name="plus" size={20} color="#13207d" />;

const JudgeStrategy = () => {
  return (
    <View style={{marginBottom: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.heading}>Judge's Strategy</Text>
        <View style={{display: 'flex', flexDirection: 'row', gap: 5}}>
          {addIcon}
          <Text>Add Judge</Text>
        </View>
      </View>

      <View style={{display: 'flex', flexDirection: 'row'}}>
        <View style={{backgroundColor: '#13207d', padding: 10}}>
          <Text style={{color: 'white'}}>Sanjiv Khanna</Text>
        </View>
        <View style={styles.boxes}>
          <Text>B.R. Gavai</Text>
        </View>
        <View style={styles.boxes}>
          <Text>Surya Kant</Text>
        </View>
        <View style={styles.boxes}>
          <Text>D.Y.Chandrachud</Text>
        </View>
        <View style={styles.boxes}>
          <Text>Aniruddha Bose</Text>
        </View>
      </View>
      <JudgeStrategyChild />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    fontWeight: 'bold',
    fontSize: 20,
    color: '#13207d',
    marginBottom: 20,
  },
  boxes: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
});

export default JudgeStrategy;
