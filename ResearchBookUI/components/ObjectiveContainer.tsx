import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import IonIcons from 'react-native-vector-icons/Ionicons';

const penIcons = <IonIcons name="pencil-sharp" size={25} color="lightgrey" />;

const deleteIcon = <AntDesignIcon name="delete" size={25} color="grey" />;

const ObjectiveContainer = () => {
  return (
    <View style={styles.parentContainer}>
      <View style={styles.headingContainer}>
        <Text style={styles.heading}>Objective</Text>
        {penIcons}
      </View>
      <View style={styles.objective}>
        <Text style={styles.objectiveText}>
          Unless the contrary is proved, the holder of the cheque received the
          cheque for the discharge in whole or in part of any debt or other
          liability. But even in Section 139.
        </Text>
        <View style={styles.delete}>{deleteIcon}</View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  parentContainer: {
    marginBottom: 30,
  },
  headingContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
  },
  objective: {
    padding: 20,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    marginLeft: 5,
    color: 'grey',
    borderWidth: 0.3,
    borderColor: 'black',
    borderRadius: 10,
  },
  objectiveText: {
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

export default ObjectiveContainer;
