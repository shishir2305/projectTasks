import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import SummaryGenerated from './SummaryGenerated';
import HorizontalLine from './HorizontalLine';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import EntypoIcons from 'react-native-vector-icons/Entypo';

const cross = <EntypoIcons name="cross" size={20} color="black" />;

const caretDown = (
  <AntDesignIcons name="caretdown" size={15} color="lightgrey" />
);

const GeneratedSumaryContainer = () => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'flex-end',
          alignItems: 'center',
          marginBottom: 10,
          gap: 5,
        }}>
        <Text
          style={{
            textAlign: 'right',
            color: '#13207d',
          }}>
          Delete
        </Text>
        {caretDown}
      </View>

      <View style={styles.container}>
        <View style={styles.heading}>
          <Text>Today</Text>
          {cross}
        </View>

        <SummaryGenerated keepDots={true} />
        <HorizontalLine />
        <SummaryGenerated keepDots={true} />
        <HorizontalLine />
        <SummaryGenerated keepDots={false} />
        <HorizontalLine />
        <SummaryGenerated keepDots={false} />
      </View>

      <View style={styles.container}>
        <View style={styles.heading}>
          <Text>22 November</Text>
          {cross}
        </View>

        <SummaryGenerated keepDots={false} />
        <HorizontalLine />
        <SummaryGenerated keepDots={false} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderColor: 'black',
    borderWidth: 0.5,
    marginBottom: 20,
  },
  heading: {
    backgroundColor: 'lightgrey',
    padding: 10,
    borderRadius: 3,
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});

export default GeneratedSumaryContainer;
