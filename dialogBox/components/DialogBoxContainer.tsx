import {View, Text, StyleSheet, Button} from 'react-native';
import React, {useState} from 'react';
import OngoingSummaryContainer from './OngoingSummaryContainer';
import GeneratedSumaryContainer from './GeneratedSumaryContainer';

const DialogBoxContainer = () => {
  const [ongoingSummaryGeneration, setOngoingSummaryGeneration] =
    useState(true);
  const [summaryGenerated, setSummaryGenerated] = useState(false);

  const handleOngoingSummaryGeneration = () => {
    setOngoingSummaryGeneration(true);
    setSummaryGenerated(false);
  };

  const handleSummaryGenerated = () => {
    setOngoingSummaryGeneration(false);
    setSummaryGenerated(true);
  };

  return (
    <View style={styles.parentContainer}>
      <Text style={styles.heading}>Alerts</Text>

      <View style={styles.tabSwitcher}>
        <View style={{width: '49%'}}>
          <Button
            title="Ongoing Summary Generation"
            onPress={handleOngoingSummaryGeneration}
            color={'#13207d'}
          />
          {ongoingSummaryGeneration && (
            <View style={{height: 6, backgroundColor: '#13207d'}}></View>
          )}
        </View>
        <View style={{width: '49%'}}>
          <Button
            title="Summary Generated"
            onPress={handleSummaryGenerated}
            color={'#13207d'}
          />
          {summaryGenerated && (
            <View style={{height: 6, backgroundColor: '#13207d'}}></View>
          )}
        </View>
      </View>

      <View style={styles.summaryContainer}>
        {ongoingSummaryGeneration && <OngoingSummaryContainer />}
        {summaryGenerated && <GeneratedSumaryContainer />}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: '70%',
    height: '90%',
  },
  heading: {
    fontSize: 30,
    fontWeight: 'bold',
    marginTop: 50,
    marginBottom: 30,
  },
  tabSwitcher: {
    flexDirection: 'row',
    justifyContent: 'space-evenly',
    backgroundColor: 'lightgrey',
    paddingVertical: 10,
    borderRadius: 5,
  },
  summaryContainer: {
    marginTop: 30,
    height: '70%',
  },
  buttonColor: {
    color: 'black',
  },
});

export default DialogBoxContainer;
