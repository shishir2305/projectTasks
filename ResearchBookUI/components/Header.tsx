import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const backButton = <AntDesignIcon name="arrowleft" size={20} color="#13207d" />;

const Header = () => {
  return (
    <View style={styles.header}>
      <Text style={styles.backButton}>{backButton} Back</Text>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Antony V.S. K.G. Raghavan Nair</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    height: 70,
    width: '100%',
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: 20,
  },
  backButton: {
    color: '#13207d',
    fontSize: 16,
    width: '10%',
  },
  headingContainer: {
    marginLeft: 20,
    width: '80%',
  },
  heading: {
    color: '#13207d',
    fontSize: 25,
    marginBottom: -10,
    marginLeft: 50,
  },
});

export default Header;
