import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import Header from './Header';
import HorizontalLine from './HorizontalLine';
import ContentContainer from './ContentContainer';

const MainContent = () => {
  return (
    <View>
      <Header />
      <HorizontalLine />
      <ContentContainer />
    </View>
  );
};

export default MainContent;
