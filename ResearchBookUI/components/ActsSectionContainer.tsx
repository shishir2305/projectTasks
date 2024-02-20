import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalLine from './HorizontalLine';
import ActsContainer from './ActsContainer';
import SectionsContainer from './SectionsContainer';
import DashedLine from './DashedLine';
import IonIcons from 'react-native-vector-icons/Ionicons';

const penIcons = <IonIcons name="pencil-sharp" size={25} color="lightgrey" />;

const ActsSectionContainer = () => {
  return (
    <View>
      <View>
        <Text style={styles.heading}>
          Acts and Section - Suggested by BharatLaw
        </Text>
        <HorizontalLine />
        <View style={styles.container}>
          <View style={styles.actsContainer}>
            <ActsContainer display={true} />
          </View>

          <View style={styles.sectionsContainer}>
            <SectionsContainer />
          </View>
        </View>
      </View>

      <View style={{marginTop: 25}}>
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
            gap: 10,
            alignItems: 'center',
          }}>
          <Text style={styles.heading}>Acts and Section - Added by me</Text>
          {penIcons}
        </View>
        <HorizontalLine />
        <View style={styles.container}>
          <View style={styles.actsContainer}>
            <ActsContainer display={false} />
          </View>

          <View style={styles.sectionsContainer}>
            <SectionsContainer />
          </View>
        </View>
      </View>
      <DashedLine />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 20,
    fontWeight: 'bold',
    padding: 10,
    color: '#13207d',
  },
  container: {
    width: '100%',
    backgroundColor: 'white',
    display: 'flex',
    flexDirection: 'row',
  },
  actsContainer: {
    width: '35%',
    backgroundColor: 'lightgrey',
    height: '100%',
  },
  sectionsContainer: {
    marginLeft: 7,
    width: '63%',
    height: '100%',
  },
});

export default ActsSectionContainer;
