import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DashedLine from './DashedLine';
import JudgeContent from './JudgeContent';
import FontAwesome5Icon from 'react-native-vector-icons/FontAwesome5';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const deleteIcon = <AntDesignIcon name="delete" size={20} color="grey" />;

const judgementIcon = (
  <FontAwesome5Icon name="balance-scale" size={60} color="white" />
);

const JudgeStrategyChild = () => {
  return (
    <View
      style={{
        borderWidth: 0.3,
        borderRadius: 5,
        paddingHorizontal: 10,
        paddingVertical: 5,
      }}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <View style={styles.container}>
          <View
            style={{
              borderRadius: 50,
              backgroundColor: '#13207d',
              height: 100,
              width: 100,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            {judgementIcon}
          </View>
          <View style={{display: 'flex', gap: 5}}>
            <Text style={{fontSize: 17}}>The Honourable</Text>
            <Text style={{fontSize: 20, color: '#13207d'}}>Sanjiv Khanna</Text>
            <Text style={{fontSize: 17}}>
              Sitting Judge of the Supreme Court of India
            </Text>
          </View>
        </View>
        <View style={{padding: 10}}>{deleteIcon}</View>
      </View>
      <DashedLine />
      <View style={{marginVertical: 10, paddingHorizontal: 10}}>
        <Text style={{marginBottom: 10}}>
          Here are the past judgments of this Judge that are relevant to your
          case facts
        </Text>
        <Text>
          He has judgments in cases such as the validity of unstamped
          arbitration agreements, challenges to the abrogation of Article 370,
          and issues related to retrospective immunity against arrest.
        </Text>
      </View>
      <DashedLine />
      <JudgeContent />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    gap: 20,
    marginBottom: 20,
  },
});

export default JudgeStrategyChild;
