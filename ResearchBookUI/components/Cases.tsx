import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import CasesChildCont from './CasesChildCont';
import DashedLine from './DashedLine';

const Cases = () => {
  return (
    <View>
      <View style={styles.heading}>
        <Text>Precedents on missing cash in homicide cases</Text>
      </View>
      <CasesChildCont
        number={1}
        name={'Ajitsingh Harnamsingh Gujral - Vs. - State Of Maharashtra'}
        numberColor={'#1e81b0'}
      />
      <View style={styles.heading}>
        <Text>Precedents on missing cash in homicide cases</Text>
      </View>
      <CasesChildCont
        number={2}
        name={'Paul Vs. State Of Kerala'}
        numberColor={'#5ec0c1'}
      />
      <DashedLine />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    padding: 10,
    backgroundColor: 'lightgrey',
  },
});

export default Cases;
