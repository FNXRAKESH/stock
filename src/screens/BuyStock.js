import {faAngleRight, faArrowLeft, faChartBar} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Image,
  ScrollView,
  Dimensions,AsyncStorage
} from 'react-native';
import { RadioButton, TextInput, Switch } from 'react-native-paper';
 import SwipeButton from 'rn-swipe-button';

const BuyStock = ({route, navigation}) => {
  const [checked, setChecked] = useState('first');
  const [product, setProduct] = useState('CNC');
  const [order, setOrder] = useState('MARKET');
  const [variety, setVariety] = useState('RGLR');
  const [validity, setValidity] = useState('DAY');
  const [isSwitchOnStopLoss, setIsSwitchOnTopLoss] = React.useState(false);
  const [isSwitchOnTarget, setIsSwitchOnTarget] = React.useState(false);

  const onToggleSwitch = () => setIsSwitchOnTopLoss(!isSwitchOnStopLoss);
  const onToggleSwitchTarget = () => setIsSwitchOnTarget(!isSwitchOnTarget);
 const storeData = async () => {
   try {
     await AsyncStorage.setItem('basketItem', JSON.stringify({name:'TCS'}));
   } catch (error) {
     // Error saving data
   }
 };
  return (
    <>
      <View style={styles.container}>
        <View style={styles.backBtn}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <FontAwesomeIcon icon={faArrowLeft} />
          </TouchableOpacity>
          <View style={{paddingLeft: 15}}>
            <Text style={{fontSize: 18, paddingLeft: 10}}>
              {route.params.item.name}
            </Text>
            <View style={{flexDirection: 'row'}}>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="first"
                  status={checked === 'first' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('first')}
                />
                <Text>NSE : 2462.05</Text>
              </View>
              <View style={{flexDirection: 'row', alignItems: 'center'}}>
                <RadioButton
                  value="second"
                  status={checked === 'second' ? 'checked' : 'unchecked'}
                  onPress={() => setChecked('second')}
                />
                <Text>BSE: 2462.30</Text>
              </View>
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
                  justifyContent: 'space-between',
                  marginVertical: 20,
                }}>
                <View style={{flexGrow: 1, marginHorizontal: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Quantity</Text>
                    <Text>Lot:1</Text>
                  </View>
                  <TextInput mode="outlined" />
                </View>
                <View style={{flexGrow: 1, marginHorizontal: 10}}>
                  <View
                    style={{
                      flexDirection: 'row',
                      justifyContent: 'space-between',
                    }}>
                    <Text>Price</Text>
                    <Text>Tick:0.05</Text>
                  </View>
                  <TextInput
                    mode="outlined"
                    value={checked == 'first' ? '2462.05' : '2462.30'}
                  />
                </View>
              </View>

              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  alignItems: 'center',
                }}>
                <Text style={{flexGrow: 1}}>Product</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => setProduct('CNC')}
                    style={
                      product == 'CNC' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        product == 'CNC' ? {color: '#fff'} : {color: '#000'}
                      }>
                      CNC
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setProduct('MIS')}
                    style={
                      product == 'MIS' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        product == 'MIS' ? {color: '#fff'} : {color: '#000'}
                      }>
                      MIS
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
              <View style={styles.line}></View>
              <Text style={{paddingVertical: 15}}>Order</Text>
              <ScrollView
                horizontal
                showsHorizontalScrollIndicator={false}
                contentContainerStyle={{
                  flexDirection: 'row',
                  marginBottom: 20,
                  alignItems: 'center',
                }}>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => setOrder('MARKET')}
                    style={
                      order == 'MARKET' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        order == 'MARKET' ? {color: '#fff'} : {color: '#000'}
                      }>
                      CNC
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOrder('LIMIT')}
                    style={
                      order == 'LIMIT' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        order == 'LIMIT' ? {color: '#fff'} : {color: '#000'}
                      }>
                      MIS
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOrder('SL')}
                    style={
                      order == 'SL' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={order == 'SL' ? {color: '#fff'} : {color: '#000'}}>
                      SL
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setOrder('SLM')}
                    style={
                      order == 'SLM' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        order == 'SLM' ? {color: '#fff'} : {color: '#000'}
                      }>
                      MIS
                    </Text>
                  </TouchableOpacity>
                </View>
              </ScrollView>
              <View style={styles.line}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 15,
                }}>
                <FontAwesomeIcon icon={faChartBar} />
                <Text style={{paddingLeft: 10, flexGrow: 1}}>Set stoploss</Text>
                <Switch
                  value={isSwitchOnStopLoss}
                  onValueChange={onToggleSwitch}
                  color="#4da6ff"
                />
              </View>
              <View style={styles.line}></View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  paddingVertical: 15,
                }}>
                <FontAwesomeIcon icon={faChartBar} />
                <Text style={{paddingLeft: 10, flexGrow: 1}}>Set target</Text>
                <Switch
                  value={isSwitchOnTarget}
                  onValueChange={onToggleSwitchTarget}
                  color="#4da6ff"
                />
              </View>
              <View style={styles.line}></View>
              <Text style={{paddingVertical: 15}}>Variety</Text>
              <View style={{flexDirection: 'row'}}>
                <TouchableOpacity
                  onPress={() => setVariety('RGLR')}
                  style={
                    variety == 'RGLR' ? styles.prodBtnColor : styles.prodBtn
                  }>
                  <Text
                    style={
                      variety == 'RGLR' ? {color: '#fff'} : {color: '#000'}
                    }>
                    RGLR
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setVariety('CO')}
                  style={
                    variety == 'CO' ? styles.prodBtnColor : styles.prodBtn
                  }>
                  <Text
                    style={variety == 'CO' ? {color: '#fff'} : {color: '#000'}}>
                    CO
                  </Text>
                </TouchableOpacity>
                <TouchableOpacity
                  onPress={() => setVariety('AMO')}
                  style={
                    variety == 'AMO' ? styles.prodBtnColor : styles.prodBtn
                  }>
                  <Text
                    style={
                      variety == 'AMO' ? {color: '#fff'} : {color: '#000'}
                    }>
                    AMO
                  </Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  marginVertical: 20,
                  alignItems: 'center',
                }}>
                <Text style={{flexGrow: 1}}>Validity</Text>
                <View style={{flexDirection: 'row'}}>
                  <TouchableOpacity
                    onPress={() => setValidity('DAY')}
                    style={
                      validity == 'DAY' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        validity == 'DAY' ? {color: '#fff'} : {color: '#000'}
                      }>
                      DAY
                    </Text>
                  </TouchableOpacity>
                  <TouchableOpacity
                    onPress={() => setValidity('IOC')}
                    style={
                      validity == 'IOC' ? styles.prodBtnColor : styles.prodBtn
                    }>
                    <Text
                      style={
                        validity == 'IOC' ? {color: '#fff'} : {color: '#000'}
                      }>
                      IOC
                    </Text>
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </ScrollView>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          alignItems: 'center',
          paddingVertical: 15,
          backgroundColor: 'lightgrey',
        }}>
        <Text style={{flexGrow: 1}}>Approx. margin: 0.00</Text>
        <Text>Avail. 18,380.20</Text>
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
        title="SWIPE TO BUY"
        titleColor="#fff"
        onSwipeSuccess={() => {
          
          navigation.navigate('Home')
        }}
      />
    </>
  );
};

export default BuyStock;

const styles = StyleSheet.create({
  container: {
    padding: 15,
     flexGrow:1
  },
  backBtn: {
    flexDirection: 'row',
      alignItems: 'center',
    height:80
  },
  prodBtnColor: {
    paddingVertical: 15,
    borderRadius: 10,
    backgroundColor: '#4da6ff',
    marginHorizontal: 10,
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
