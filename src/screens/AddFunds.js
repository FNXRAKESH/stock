import {
  faAdd,
  faAngleRight,
  faArrowLeft,
  faCircleDot,
  faRotate,
  faRotateBack,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  Dimensions,
  Image,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {RadioButton, TextInput} from 'react-native-paper';

const AddFunds = ({navigation}) => {
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <View style={{flexGrow: 0.5}}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </TouchableOpacity>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 22}}>Add Funds to Equity</Text>
          </View>
        </View>
        <View style={{paddingVertical: 30}}>
          <Text style={{fontSize: 18}}>{`Balance \u20B918,380.20`}</Text>
        </View>

        <TextInput mode="outlined" label="Amount" />
        <View style={{paddingVertical: 20}}>
          <Text>Select Bank account</Text>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 20, flexGrow: 1}}>HDFC BANK</Text>
            <RadioButton
              value="first"
              status={checked === 'first' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('first')}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              paddingVertical: 10,
            }}>
            <Text style={{fontSize: 20, flexGrow: 1}}>STATE BANK OF INDIA</Text>
            <RadioButton
              value="second"
              status={checked === 'second' ? 'checked' : 'unchecked'}
              onPress={() => setChecked('second')}
            />
          </View>
        </View>
        <Text style={{fontSize: 18}}>Pay From</Text>
      </View>
      <View style={{height: '40%'}}>
        <ScrollView
          showsVerticalScrollIndicator={false}
          contentContainerStyle={{
            flexGrow: 1,
          }}>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/upi.png')}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text style={{fontSize: 25, flexGrow: 1, paddingLeft: 10}}>
              UPI
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={25} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/gpay.png')}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text style={{fontSize: 25, flexGrow: 1, paddingLeft: 10}}>
              Google Pay
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={25} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/phonepay.jpg')}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text style={{fontSize: 25, flexGrow: 1, paddingLeft: 10}}>
              Phone Pay
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={25} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/apple.png')}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text style={{fontSize: 25, flexGrow: 1, paddingLeft: 10}}>
              Apple Pay
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={25} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <View style={styles.imgContainer}>
              <Image
                source={require('../assets/paypal.png')}
                style={{
                  flex: 1,
                  width: '100%',
                  height: '100%',
                  resizeMode: 'contain',
                }}
              />
            </View>
            <Text style={{fontSize: 25, flexGrow: 1, paddingLeft: 10}}>
              PayPal
            </Text>
            <FontAwesomeIcon icon={faAngleRight} size={25} />
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default AddFunds;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#fff',
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  btnAddFunds: {
    backgroundColor: 'green',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  withdraw: {
    backgroundColor: 'blue',
    alignItems: 'center',
    padding: 15,
    borderRadius: 10,
    flexDirection: 'row',
    justifyContent: 'center',
    marginHorizontal: 10,
  },
  imgContainer: {
    height: 50,
    width: 50,
  },
});
