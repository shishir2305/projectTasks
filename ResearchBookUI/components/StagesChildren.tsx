import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalNormalLine from './HorizontalNormalLine';
import StagesChildContent from './StagesChildContent';
import AntDesignIcon from 'react-native-vector-icons/AntDesign';

const deleteIcon = <AntDesignIcon name="delete" size={20} color="grey" />;

const StagesChildren = ({stagesHeading}) => {
  return (
    <View>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          justifyContent: 'space-between',
        }}>
        <Text style={styles.heading}>{stagesHeading}</Text>
        {deleteIcon}
      </View>
      <HorizontalNormalLine />
      <StagesChildContent
        mainContent={
          'Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability. But even in Section 139 N. I. Act, the legal presumption is created only for the cheque so received for the discharge in whole or in part of any debt or other liability. Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability. But even in Section 139 N. I. Act, the legal presumption is created only for the cheque so received for the discharge in whole or in part of any debt or other liability.Misuse of cheque is when the person holding Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability. But even in Section 139 N. I. Act, the legal presumption is created only for the cheque so received for the discharge in whole or in part of any debt or other liability.Misuse of cheque is when the person holding.'
        }
        number={1}
        numberColor={'#1e81b0'}
      />
      <HorizontalNormalLine />
      <StagesChildContent
        mainContent={
          'Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability. But even in Section 139 N. I. Act, the legal presumption is created only for the cheque so received for the discharge in whole or in part of any debt or other liability. Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability.'
        }
        number={1}
        numberColor={'#1e81b0'}
      />
      <HorizontalNormalLine />
      <StagesChildContent
        mainContent={
          'Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability. But even in Section 139 N. I. Act, the legal presumption is created only for the cheque so received for the discharge in whole or in part of any debt or other liability.'
        }
        number={2}
        numberColor={'#5ec0c1'}
      />
      <HorizontalNormalLine />
      <StagesChildContent
        mainContent={
          'Unless the contrary is proved, the holder of the cheque received the cheque for the discharge in whole or in part of any debt or other liability. But even in Section 139 N. I. Act, the legal presumption is created only for the cheque so received for the discharge in whole or in part of any debt or other liability. Read more'
        }
        number={3}
        numberColor={'#A26e76'}
      />
      <HorizontalNormalLine />
    </View>
  );
};

const styles = StyleSheet.create({
  heading: {
    fontSize: 15,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginLeft: 10,
  },
});

export default StagesChildren;
