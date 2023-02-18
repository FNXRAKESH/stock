import { faAdd, faArrowLeft, faCircleDot, faRotate, faRotateBack } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import { ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Funds = ({navigation}) => {
    return (
      <View style={styles.container}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </TouchableOpacity>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text style={{fontSize: 22}}>Funds</Text>
          </View>
        </View>
        <View style={{alignItems: 'center', paddingVertical: 30}}>
          <Text>Available margin : Cash * Collateral</Text>
          <Text
            style={{
              fontSize: 25,
              paddingVertical: 20,
              color: '#4da6ff',
            }}>{`\u20B9 18,380.20`}</Text>
          <TouchableOpacity
            style={{flexDirection: 'row', alignItems: 'center'}}>
            <FontAwesomeIcon icon={faCircleDot} size={20} color="#4da6ff" />
            <Text style={{paddingLeft: 10, fontSize: 18}}>View Statement</Text>
          </TouchableOpacity>
        </View>
        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <View style={{flexGrow: 1}}>
            <TouchableOpacity style={styles.btnAddFunds} onPress={()=>navigation.navigate('AddFunds')}>
              <FontAwesomeIcon icon={faAdd} size={20} color="#fff" />
              <Text style={{color: '#fff', fontSize: 18, paddingLeft: 10}}>
                Add Funds
              </Text>
            </TouchableOpacity>
          </View>
          <View style={{flexGrow: 1}}>
            <TouchableOpacity style={styles.withdraw}>
              <FontAwesomeIcon icon={faRotateBack} size={20} color="#fff" />
              <Text style={{color: '#fff', fontSize: 18, paddingLeft: 10}}>
                Withdraw
              </Text>
            </TouchableOpacity>
          </View>
            </View>
            <ScrollView>
        <View style={{flexDirection: 'row', paddingVertical: 20}}>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text>Available cash</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>18,380.20</Text>
          </View>
          <View style={{flexGrow: 1, alignItems: 'center'}}>
            <Text>Used margin</Text>
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>0.00</Text>
          </View>
        </View>
        <View>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{flexGrow: 1}}>Opening balance</Text>
            <Text>18380.20</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{flexGrow: 1}}>Payin</Text>
            <Text>0.00</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{flexGrow: 1}}>SPAN</Text>
            <Text>0.00</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{flexGrow: 1}}>Delivery margin</Text>
            <Text>0.00</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{flexGrow: 1}}>Exposure</Text>
            <Text>0.00</Text>
          </View>
          <View style={{flexDirection: 'row', paddingVertical: 5}}>
            <Text style={{flexGrow: 1}}>Option premium</Text>
            <Text>0.00</Text>
          </View>
                </View>
                </ScrollView>
      </View>
    );
}
 
export default Funds;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
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
});