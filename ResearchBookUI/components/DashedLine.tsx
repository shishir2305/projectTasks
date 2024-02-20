import React from 'react';
import {View} from 'react-native';

const DashedLine = () => {
  return (
    <View
      style={{
        marginLeft: 10,
        marginRight: 10,
        borderRadius: 1,
        borderStyle: 'dashed',
        borderWidth: 1,
        borderColor: 'rgba(161,155,183,1)',
        marginTop: 15,
        marginBottom: 30,
      }}
    />
  );
};

export default DashedLine;
