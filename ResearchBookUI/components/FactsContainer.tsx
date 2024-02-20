import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import FactChildren from './FactChildren';

const FactsContainer = () => {
  return (
    <View style={styles.parentContainer}>
      <Text style={styles.heading}>Facts</Text>
      <FactChildren
        factNumber={1}
        factNumberColor={'#1e81b0'}
        factBackgroundColor={'#cce7e8'}
        factText={
          'The accused (the drawer of the cheque) issued a cheque to the complainant (the payee) for a specific amount as payment.'
        }
      />
      <FactChildren
        factNumber={2}
        factNumberColor={'#5ec0c1'}
        factBackgroundColor={'#cfecec'}
        factText={
          'When the cheque was presented for payment, it was returned by the bank unpaid due to insufficient funds in the drawer\'s account. This constitutes the "bouncing" of the cheque.'
        }
      />
      <FactChildren
        factNumber={3}
        factNumberColor={'#A26e76'}
        factBackgroundColor={'#E2bbc2'}
        factText={
          'After the cheque bounced, the complainant requested to the drawer demanding payment of the cheque amount.'
        }
      />
      <FactChildren
        factNumber={4}
        factNumberColor={'#Ecbe5b'}
        factBackgroundColor={'#Ead29f'}
        factText={
          'The drawer refused to make the payment, citing various reasons.'
        }
      />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  parentContainer: {
    color: 'grey',
    padding: 3,
    marginBottom: 20,
  },
});

export default FactsContainer;
