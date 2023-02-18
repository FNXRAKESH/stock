import {faSignIn, faUser} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  Image,
  TouchableOpacity,
  Linking,
} from 'react-native';

const Welcome = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.imgholder}>
        <View style={styles.imgContainer}>
          <Image
            source={require('../assets/stockbig.jpg')}
            style={{width: '100%', height: '100%'}}
          />
        </View>
      </View>
      <View style={{paddingVertical:30}}>
      <Text style={styles.title}>Welcome to</Text>
      <Text style={styles.title}>Bharati Share Market</Text>
      </View>

      <TouchableOpacity
        onPress={() => navigation.navigate('Login')}
        style={styles.btnContainer}>
        <Text style={{fontSize: 20, color: '#fff'}}>Login</Text>
        <FontAwesomeIcon icon={faSignIn} color="#fff" />
      </TouchableOpacity>
      <TouchableOpacity
        onPress={() => Linking.openURL('https://zerodha.com/open-account')}
        style={[styles.btnContainer, {borderBottomWidth: 1}]}>
        <Text style={{fontSize: 20, color: '#fff'}}>Open a newaccount</Text>
        <FontAwesomeIcon icon={faUser} color="#fff" />
      </TouchableOpacity>
    </View>
  );
};

export default Welcome;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
    justifyContent: 'center',
    backgroundColor: '#131931',
  },
  title: {
    fontSize: 35,
    color: '#fff',
  },

  imgContainer: {
    width: 100,
    height: 100,
  },
  btnContainer: {
    paddingVertical: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
});
