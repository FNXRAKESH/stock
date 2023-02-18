import {
  faAngleRight,
  faArrowLeft,
  faChartBar,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,
  KeyboardAvoidingView,
} from 'react-native';
import {RadioButton, TextInput, Switch} from 'react-native-paper';
import SwipeButton from 'rn-swipe-button';

const CreateGTT = ({route, navigation}) => {
  
  const [type, setType] = useState('BUY');
  const [tType, setTtype] = useState('Single');
  const [variety, setVariety] = useState('RGLR');
  const [validity, setValidity] = useState('DAY');
  const [isSwitchOnStopLoss, setIsSwitchOnTopLoss] = React.useState(false);
  const [isSwitchOnTarget, setIsSwitchOnTarget] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOnTopLoss(!isSwitchOnStopLoss);
  const onToggleSwitchTarget = () => setIsSwitchOnTarget(!isSwitchOnTarget);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </TouchableOpacity>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontSize: 18}}>{route.params.item.name}</Text>
            <View style={{flexDirection: 'row'}}>
              <Text>NSE</Text>
              <Text style={{paddingLeft: 10, color: 'green'}}>117.10</Text>
              <Text style={{paddingLeft: 10}}>+1.80</Text>
              <Text style={{paddingLeft: 10}}>+1.56%</Text>
            </View>
          </View>
        </View>
        <View style={{height: Dimensions.get('window').height - 300}}>
          <ScrollView
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{flexGrow: 1}}>
            <View style={{flexGrow: 1}}>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  alignItems: 'center',
                }}>
                <Text style={{flexGrow: 1}}>Type</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => setType('BUY')}
                    style={
                      type == 'BUY' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={type == 'BUY' ? {color: '#fff'} : {color: '#000'}}>
                      BUY
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setType('SELL')}
                    style={
                      type == 'SELL' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        type == 'SELL' ? {color: '#fff'} : {color: '#000'}
                      }>
                      SELL
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  alignItems: 'center',
                }}>
                <Text style={{paddingVertical: 15, flexGrow: 1}}>
                  Trigger type
                </Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => setTtype('Single')}
                    style={
                      tType == 'Single' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        tType == 'Single' ? {color: '#fff'} : {color: '#000'}
                      }>
                      Single
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setTtype('OCO')}
                    style={
                      tType == 'OCO' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        tType == 'OCO' ? {color: '#fff'} : {color: '#000'}
                      }>
                      OCO
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={{paddingVertical: 10}}>
                <TextInput
                  mode="outlined"
                  label="Trigger Price"
                  value="122.95"
                  right={<TextInput.Affix text="5.00% of LTP" />}
                />
              </View>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View style={{flexGrow: 1, marginRight: 10}}>
                  <TextInput mode="outlined" label="Quantity" />
                </View>
                <View style={{flexGrow: 1, marginLeft: 10}}>
                  <TextInput mode="outlined" label="Price" />
                </View>
              </View>
              <View style={{flexDirection: 'row'}}>
                <View style={{flexGrow: 1}}>
                  <Text style={{paddingVertical: 15}}>Order</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.prodBtnColor}>
                      <Text style={{color: '#fff'}}>RGLR</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{flexGrow: 1}}>
                  <Text style={{paddingVertical: 15}}>Product</Text>
                  <View style={{flexDirection: 'row'}}>
                    <TouchableOpacity style={styles.prodBtnColor}>
                      <Text style={{color: '#fff'}}>CNC</Text>
                    </TouchableOpacity>
                  </View>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>

      <View
        style={{
          paddingVertical: 15,
        }}>
        <Text>
          I agree to the terms and accept the trigger executions are not guaranteed.&nbsp;
          <Text style={{color:'blue'}}>Learn more about GTT</Text>
        </Text>
      </View>
      <SwipeButton
        height={80}
        containerStyles={{borderRadius: 50, marginVertical: 10}}
        railBackgroundColor="#4da6ff"
        railStyles={{
          backgroundColor: '#131931',
          borderColor: '#fff',
        }}
        thumbIconComponent={() => (
          <FontAwesomeIcon icon={faAngleRight} size={25} color="#4da6ff" />
        )}
        thumbIconImageSource={() => <FontAwesomeIcon icon={faAngleRight} />}
        thumbIconStyles={{borderRadius: 50}}
        thumbIconWidth={100}
        thumbIconBackgroundColor="#fff"
        title="CREATE GTT"
        titleColor="#fff"
        onSwipeSuccess={() => navigation.navigate('Home')}
      />
    </>
  );
};

export default CreateGTT;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 80,
  },
  prodBtnColor: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#4da6ff',
    
    paddingHorizontal: 30,
  },
  prodBtn: {
    paddingVertical: 15,
    borderRadius: 10,
    borderColor: 'grey',
    borderWidth: 1,
    marginHorizontal: 10,
    paddingHorizontal: 30,
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
});
