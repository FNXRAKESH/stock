import {faArrowLeft} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextInput} from 'react-native-paper';

const Login = ({navigation}) => {
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
      <Text style={styles.title}>Login</Text>
      <View>
        <View style={{paddingVertical: 20}}>
          <TextInput
            mode="outlined"
            label="UserId"
            outlineStyle={{borderRadius: 10}}
          />
        </View>
        <View style={{paddingBottom: 20}}>
          <TextInput
            mode="outlined"
            label="Password"
            secureTextEntry
            outlineStyle={{borderRadius: 10}}
          />
        </View>
        <TouchableOpacity
          style={styles.btn}
          onPress={() => navigation.navigate('Home')}>
          <Text style={{fontSize: 15, color: '#fff'}}>LOGIN</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.forgot}
          onPress={() => navigation.navigate('ForgotPassword')}>
          <Text style={{color: '#131931'}}>Forgot User Id or Password?</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default Login;

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
    fontSize: 25,
    paddingVertical: 20,
  },
  btn: {
    padding: 15,
    backgroundColor: '#131931',
    borderRadius: 10,
    alignItems: 'center',
    marginVertical: 15,
  },
  forgot: {
    alignItems: 'flex-end',
  },
});
