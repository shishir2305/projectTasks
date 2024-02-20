import {View, Text, StyleSheet} from 'react-native';
import React from 'react';

const SectionsContent = ({heading}) => {
  return (
    <View style={styles.container}>
      <Text style={{fontWeight: 'bold', fontSize: 14, marginBottom: 10}}>
        {heading}
      </Text>
      <Text style={{fontSize: 13}}>
        Unless the contrary is proved, the holder of the cheque received the
        cheque for the discharge in whole or in part of any debt or other
        liability. But even in Section 139 N. I. Act, the legal presumption is
        created only for the cheque so received for the discharge in whole or in
        part of any debt or other liability. Unless the contrary is proved, the
        holder of the cheque received the cheque for the discharge in whole or
        in part of any debt or other liability. But even in Section 139 N. I.
        Act, the legal presumption is created only for the cheque so received
        for the discharge in whole or in part of any debt or other liability.
      </Text>
      <Text style={{fontSize: 13, marginTop: 20}}>
        Unless the contrary is proved, the holder of the cheque received the
        cheque for the discharge in whole or in part of any debt or other
        liability. But even in Section 139 N. I. Act, the legal presumption is
        created only for the cheque so received for the discharge in whole or in
        part of any debt or other liability.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.3,
    paddingVertical: 10,
    paddingLeft: 20,
  },
});

export default SectionsContent;
