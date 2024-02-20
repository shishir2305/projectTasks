import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import ActsContent from './ActsContent';

const ActsContainer = ({display}) => {
  return (
    <View>
      <Text style={styles.heading}>Acts</Text>
      <ActsContent
        content={'The Bengal Bonded Warehouse Association Act, 1838'}
      />
      <ActsContent content={'The Factories Act, 1948'} />
      <ActsContent content={'The Environment (Protection) Act, 1986'} />
      <ActsContent content={'The Public Liability Insurance Act, 1991'} />
      <ActsContent content={'The Bhopal Gas Leak Disaster Act, 1985'} />
      <ActsContent content={'The Foreign Exchange Management Act, 1999'} />
      {display && <ActsContent content={'The Civil Procedure Code, 1908'} />}
      {display && <ActsContent content={'The Criminal Procedure Code, 1973'} />}
      {display && <ActsContent content={'The Indian Penal Code, 1860'} />}
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 20,
  },
});

export default ActsContainer;
