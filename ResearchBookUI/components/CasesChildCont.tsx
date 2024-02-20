import {View, Text, StyleSheet} from 'react-native';
import React from 'react';
import HorizontalNormalLine from './HorizontalNormalLine';
import HorizontalLine from './HorizontalLine';

const CasesChildCont = ({number, name, numberColor}) => {
  return (
    <View style={{padding: 10, borderWidth: 0.3, marginBottom: 20}}>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          gap: 10,
        }}>
        <View style={[styles.box, {backgroundColor: numberColor}]}>
          <Text>{number}</Text>
        </View>
        <Text style={{fontSize: 17, fontWeight: 'bold'}}>{name}</Text>
      </View>

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          gap: 20,
          alignItems: 'center',
          margin: 10,
        }}>
        <View
          style={{padding: 10, backgroundColor: 'lightgrey', borderRadius: 5}}>
          <Text>Cite: 22</Text>
        </View>
        <View>
          <Text
            style={{
              padding: 10,
              backgroundColor: 'lightgrey',
              borderRadius: 5,
            }}>
            Cited: 18
          </Text>
        </View>
        <Text>High Court of Gujrat | Jan 11, 2014</Text>
      </View>

      <View style={{paddingHorizontal: 10}}>
        <Text>
          Unless the contrary is proved, the holder of the cheque received the
          cheque for the discharge in whole or in part of any debt or other
          liability. But even in Section 139 N. I. Act, the legal presumption is
          created only for the cheque so received for the discharge in whole or
          in part of any debt or other liability. Unless the contrary is proved,
          the holder of the cheque received the cheque for the discharge in
          whole or in part of any debt or other liability. But even in Section
          139 N. I. Act, the legal presumption is created only for the cheque so
          received for the discharge in whole or in part of any debt or other
          liability.Misuse of cheque is when the person holding Unless the
          contrary is proved, the holder of the cheque received the cheque for
          the discharge in whole or in part of any debt or other liability. But
          even in Section 139 N. I. Act, the legal presumption is created only
          for the cheque so received for the discharge in whole or in part of
          any debt or other liability.Misuse of cheque is when the person
          holding.
        </Text>
      </View>

      <View style={{paddingHorizontal: 10, flex: 1, gap: 20, marginTop: 30}}>
        <Text style={{fontWeight: 'bold'}}>Relevance :</Text>
        <Text>
          1) The case involves the missing of Rs.1,50,200/- from the cash
          counter of a bank. The money was handed over by the informant to the
          bank for the purpose of obtaining bank drafts. The money went missing
          during the time when the bank's peon stepped out for a short time,
          page 1.
        </Text>
        <Text>
          (2) The court held that even though the money was entrusted to the
          bank and it went missing from the cash counter, it was not proved
          beyond reasonable doubt that the cash was entrusted to the peon at the
          instance of the Head Cashier, page 2.
        </Text>
        <Text>
          (3) The court also held that the possibility of theft of the money
          cannot be ruled out. The informant had filed a suit for recovery of
          the amount from the bank, page 2.
        </Text>
      </View>

      <View style={{paddingHorizontal: 10, flex: 1, gap: 20, marginTop: 30}}>
        <Text style={{fontWeight: 'bold'}}>Key Considerations :</Text>
        <Text>
          (1) The case highlights the importance of proving entrustment and
          dishonest intention in cases involving missing cash.
        </Text>
        <Text>
          (2) The case also underscores the need for credible and cogent
          evidence to establish when the money was really missing.
        </Text>
      </View>

      <View
        style={{
          paddingHorizontal: 10,
          flex: 1,
          gap: 20,
          marginTop: 30,
          marginBottom: 20,
        }}>
        <Text style={{fontWeight: 'bold'}}>Legal Approach :</Text>
        <Text>
          (1) In cases involving missing cash, it is crucial to establish the
          use of deception and violence by the accused.
        </Text>
        <Text>
          (2) It is also important to educate the public about such tricks to
          prevent them from falling victim to such crimes.
        </Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  box: {
    height: 25,
    width: 25,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 3,
  },
});

export default CasesChildCont;
