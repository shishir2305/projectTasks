import {View} from 'react-native';
import React from 'react';
import StepSummaries from './StepSummaries';
import HorizontalLine from './HorizontalLine';

const OngoingSummaryContainer = () => {
  return (
    <View>
      <StepSummaries />
      <HorizontalLine />
      <StepSummaries />
      <HorizontalLine />
      <StepSummaries />
    </View>
  );
};

export default OngoingSummaryContainer;
