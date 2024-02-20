import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import FontAwesomeIcons from 'react-native-vector-icons/FontAwesome5';
import FeatherIcons from 'react-native-vector-icons/Feather';
import AntDesignIcons from 'react-native-vector-icons/AntDesign';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

const dharmaChakra = (
  <FontAwesomeIcons name="dharmachakra" size={40} color="white" />
);

const bellIcon = <FeatherIcons name="bell" size={30} color="white" />;

const userIcons = <AntDesignIcons name="user" size={30} color="white" />;

const bookIcons = (
  <MaterialIcons name="library-books" size={30} color="white" />
);

const searchIcons = <AntDesignIcons name="search1" size={30} color="#13207d" />;

const logoutIcons = <MaterialIcons name="logout" size={30} color="white" />;

const SearchAndProfileIcons = () => {
  return (
    <View style={styles.container}>
      <View>
        <Text style={styles.textColor}>{dharmaChakra}</Text>
      </View>

      <View
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}>
        <View style={styles.box}>
          {bellIcon}
          <Text style={styles.textColor}>Alerts</Text>
        </View>
        <View style={[styles.box, {backgroundColor: 'white'}]}>
          {searchIcons}
          <Text style={[styles.textColor, {color: '#13207d'}]}>Search</Text>
        </View>
        <View style={styles.box}>
          {bookIcons}
          <Text style={styles.textColor}>Research Books</Text>
        </View>
        <View style={styles.box}>
          {userIcons}
          <Text style={styles.textColor}>Profile</Text>
        </View>
      </View>

      <View style={styles.bottomMargin}>
        {logoutIcons}
        <Text style={styles.textColor}>Logout</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#13207d',
    width: 70,
    height: 390,
    display: 'flex',
    justifyContent: 'space-between',
  },
  textColor: {
    color: 'white',
    fontSize: 10,
    textAlign: 'center',
  },
  bottomMargin: {
    display: 'flex',
    alignItems: 'center',
    marginBottom: 20,
  },
  box: {
    width: 50,
    height: 50,
    marginVertical: 5,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 5,
  },
});

export default SearchAndProfileIcons;
