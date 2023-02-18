import {faArrowLeft, faCircleDot, faGear, faIndianRupee, faInfo, faInfoCircle, faQuestionCircle, faRightFromBracket, faRupee, faRupeeSign, faSearch, faUser, faUserAlt, faUserPlus} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
const Profile = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View
        style={{
          padding: 15,
          backgroundColor: 'lightgrey',
        }}>
        <Text>User Name</Text>
      </View>
      <ScrollView contentContainerStyle={{flexGrow: 1}}>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 25, fontWeight: 'bold'}}>AB3080</Text>
              <Text>username@email.com</Text>
            </View>
            <FontAwesomeIcon icon={faUser} size={50} />
          </View>
        </View>
        <TouchableOpacity onPress={()=>navigation.navigate('Funds')}
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>Funds</Text>
            </View>
            <FontAwesomeIcon icon={faIndianRupee} size={20} />
          </View>
        </TouchableOpacity>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>Profile</Text>
            </View>
            <FontAwesomeIcon icon={faUserAlt} size={20} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>Search</Text>
            </View>
            <FontAwesomeIcon icon={faGear} size={20} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>Console</Text>
            </View>
            <FontAwesomeIcon icon={faCircleDot} size={20} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 20,
              flexWrap: 'wrap',
            }}>
            <Text style={styles.footerText}>Portfolio</Text>
            <Text style={styles.footerText}>Tradebook</Text>
            <Text style={styles.footerText}>P&amp;L</Text>
            <Text style={styles.footerText}>IPO</Text>
            <Text style={styles.footerText}>Gift stocks</Text>
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>Support</Text>
            </View>
            <FontAwesomeIcon icon={faInfoCircle} size={20} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>User manual</Text>
            </View>
            <FontAwesomeIcon icon={faQuestionCircle} size={20} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18}}>Logout</Text>
            </View>
            <FontAwesomeIcon icon={faRightFromBracket} size={20} />
          </View>
        </View>
        <View
          style={{
            paddingHorizontal: 15,
            marginHorizontal: 15,
            backgroundColor: '#fff',
            paddingVertical: 30,
            marginBottom: 10,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <Text style={{fontSize: 18, color: 'grey'}}>Version 1.0</Text>
            </View>
          </View>
        </View>
        <View style={{marginVertical: 20}}>
          <View style={styles.line}></View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Profile;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    backgroundColor:'lightgrey'
  },
  footerText: {
    padding: 10, 
    color: "blue",
    fontSize:15,
  },
  line: {
    height: 0.5,
    width: '100%',
    backgroundColor:'grey'
  }
});
