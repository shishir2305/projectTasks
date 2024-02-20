import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import StepSummaries from './StepSummaries';

const RelevancyContainer = () => {
  return (
    <View style={{marginBottom: 20}}>
      <Text style={styles.heading}>Relevancy by Bharat Law</Text>
      <View
        style={{
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          backgroundColor: '#D0C6EC',
        }}>
        <View style={styles.container}>
          <Text style={{fontSize: 13, color: '#13207d', textAlign: 'center'}}>
            BharatLaw AI is generating the relevancy. This may take a couple of
            minutes. Please wait or continue with your research. We'll notify
            you once the process is complete.
          </Text>
          <StepSummaries />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: '#13207d',
    marginBottom: 20,
  },
  container: {
    width: '80%',
    height: 200,
    flex: 1,
    justifyContent: 'center',
    gap: 30,
  },
});

export default RelevancyContainer;
