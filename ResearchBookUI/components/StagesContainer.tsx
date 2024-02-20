import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import DashedLine from './DashedLine';
import StagesChildren from './StagesChildren';

const StagesContainer = () => {
  return (
    <View>
      <Text style={styles.heading}>Stages</Text>
      <DashedLine />
      <StagesChildren stagesHeading={'Filing of Plaint'} />
      <DashedLine />
      <StagesChildren stagesHeading={'Fraiming of Issues'} />
      <DashedLine />
      <StagesChildren stagesHeading={'Execution of Decreed'} />
      <DashedLine />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
});

export default StagesContainer;
