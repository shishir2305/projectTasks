import {View, Text, StyleSheet, ScrollView} from 'react-native';
import React from 'react';
import FactsContainer from './FactsContainer';
import ObjectiveContainer from './ObjectiveContainer';
import StagesContainer from './StagesContainer';
import ActsSectionContainer from './ActsSectionContainer';
import RelevancyContainer from './RelevancyContainer';
import Cases from './Cases';
import JudgeStrategy from './JudgeStrategy';

const PdfContainer = () => {
  return (
    <View style={styles.parentContainer}>
      <ScrollView>
        <FactsContainer />
        <ObjectiveContainer />
        <StagesContainer />
        <ActsSectionContainer />
        <RelevancyContainer />
        <Cases />
        <JudgeStrategy />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    width: '68%',
    marginLeft: 5,
    height: '100%',
  },
});

export default PdfContainer;
