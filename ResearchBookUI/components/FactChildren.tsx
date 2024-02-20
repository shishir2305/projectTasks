import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const deleteIcon = <AntDesignIcon name="delete" size={20} color="grey" />;

const FactChildren = ({
  factNumber,
  factNumberColor,
  factBackgroundColor,
  factText,
}) => {
  return (
    <View
      style={[styles.parentContainer, {backgroundColor: factBackgroundColor}]}>
      <View style={[styles.numbering, {backgroundColor: factNumberColor}]}>
        <Text>{factNumber}</Text>
      </View>
      <View style={styles.fact}>
        <Text style={styles.factText}>{factText}</Text>
        <View style={styles.delete}>
          <Text>{deleteIcon}</Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    borderRadius: 10,
    padding: 10,
    display: 'flex',
    flexDirection: 'row',
    marginBottom: 15,
  },
  numbering: {
    width: '6%',
    height: 35,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
  fact: {
    width: '92%',
    paddingLeft: 5,
    paddingRight: 5,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    color: 'grey',
  },
  factText: {
    width: '90%',
  },
  delete: {
    marginLeft: 15,
    width: '8%',
    height: 40,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 6,
  },
});

export default FactChildren;
