import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {RadioButton, TextInput} from 'react-native-paper';
const ForgotPassword = ({navigation}) => {
  const [value, setValue] = React.useState('first');
  const [checked, setChecked] = React.useState('first');
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.navigate('Welcome')}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View style={styles.imgContainer}>
          <Image
            source={require('../assets/stock.png')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <Text style={styles.title}>Forgot User Id or Password?</Text>
      <RadioButton.Group
        onValueChange={newValue => setValue(newValue)}
        value={value}>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="first" />
          <Text>I remember my user ID</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton value="second" />
          <Text>I forgot my user ID</Text>
        </View>
      </RadioButton.Group>

      {value != 'second' ? (
        <View style={{paddingVertical: 20}}>
          <TextInput
            mode="outlined"
            label="UserId"
            outlineStyle={{borderRadius: 10}}
          />
        </View>
      ) : null}
      <View style={{paddingBottom: 20}}>
        <TextInput
          mode="outlined"
          label="PAN"
          outlineStyle={{borderRadius: 10}}
        />
      </View>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <Text style={{paddingRight: 10}}>Receive on</Text>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="first"
            status={checked === 'first' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('first')}
          />
          <Text>E-mail</Text>
        </View>
        <View style={{flexDirection: 'row', alignItems: 'center'}}>
          <RadioButton
            value="second"
            status={checked === 'second' ? 'checked' : 'unchecked'}
            onPress={() => setChecked('second')}
          />
          <Text>SMS</Text>
        </View>
      </View>
      {checked == 'first' ? (
        <View style={{paddingVertical: 20}}>
          <TextInput
            mode="outlined"
            label="Email (as on account)"
            outlineStyle={{borderRadius: 10}}
          />
        </View>
      ) : (
        <View style={{paddingVertical: 20}}>
          <TextInput
            mode="outlined"
            label="Mobile Number (as on account)"
            outlineStyle={{borderRadius: 10}}
          />
        </View>
      )}
      <TouchableOpacity
        style={styles.btn}
        onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#fff'}}>Reset</Text>
      </TouchableOpacity>
      <TouchableOpacity onPress={() => navigation.navigate('Login')}>
        <Text style={{color: '#131931', textAlign: 'center'}}>
          Back to Login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default ForgotPassword;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  backBtn: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  imgContainer: {
    width: 50,
    height: 50,
  },
  title: {
    fontSize: 20,
    paddingVertical: 20,
    textAlign: 'center',
  },
  btn: {
    padding: 15,
    backgroundColor: '#131931',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
});
