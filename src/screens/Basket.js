import {
  faBasketShopping,
  faChartSimple,
  faClock,
  faClose,
  faPlus,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {
  DataTable,
  Dialog,
  TextInput,
  Portal,
  Provider,
} from 'react-native-paper';

var data = [];
const Basket = ({navigation}) => {
  const [visible, setVisible] = useState(false);
  const showDialog = () => setVisible(true);
  const hideDialog = () => setVisible(false);

  const [item, setItem] = useState('');
  const [stockItem, setStockItem] = useState({});
  const [stocks, setStocks] = useState([]);
  const handleBasket = () => {

    setStocks([...stocks,{name: item, createdOn: 'created on 2nd Feb 2023'}]);
  }
  return (
    <Provider>
      <View style={styles.container}>
        <Portal>
          <Dialog visible={visible} onDismiss={hideDialog}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                justifyContent: 'space-between',
              }}>
              <Dialog.Title>New Basket</Dialog.Title>
              <TouchableOpacity onPress={hideDialog} style={{paddingRight: 15}}>
                <FontAwesomeIcon icon={faClose} size={25} />
              </TouchableOpacity>
            </View>
            <Dialog.Content>
              <TextInput
                mode="outlined"
                label="Enter Name"
                onChangeText={e => setItem(e)}
              />
              <TouchableOpacity
                style={styles.continueBtn}
                onPress={() => {
                 setVisible(false);
                  handleBasket()
                }}>
                <Text style={{fontSize: 18, color: '#fff'}}>Continue</Text>
              </TouchableOpacity>
            </Dialog.Content>
          </Dialog>
        </Portal>
        <TouchableOpacity
          style={{
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'flex-end',
          }}
          onPress={showDialog}>
          <FontAwesomeIcon icon={faPlus} color="#4da6ff" />
          <Text style={{color: '#4da6ff', fontSize: 17, paddingHorizontal: 10}}>
            New Basket
          </Text>
        </TouchableOpacity>

        {stocks.length == 0 ? (
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'center',
              flexGrow: 1,
              zIndex: -1,
            }}>
            <FontAwesomeIcon icon={faBasketShopping} size={150} />
            <Text style={{fontSize: 30}}>No Baskets</Text>
            <Text>Create a Basket</Text>
          </View>
        ) : (
          <ScrollView contentContainerStyle={{zIndex: -1}}>
            {stocks.map(item => {
              return (
                <TouchableOpacity
                  style={styles.holder}
                  onPress={() => {
                    navigation.navigate('BasketItem',{name:item.name});
                  }}>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      justifyContent: 'space-between',
                    }}>
                    <Text>{item.name}</Text>
                  </View>
                  <View
                    style={{
                      flexDirection: 'row',
                      alignItems: 'center',
                      marginVertical: 10,
                    }}>
                    <Text style={{flexGrow: 1}}>{item.createdOn}</Text>
                    <Text>0 item</Text>
                  </View>
                </TouchableOpacity>
              );
            })}
          </ScrollView>
        )}
      </View>
    </Provider>
  );
};

export default Basket;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
  },
  complete: {
    backgroundColor: 'lightgreen',
    padding: 5,
    borderRadius: 5,
  },
  buy: {
    backgroundColor: 'lightblue',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  single: {
    backgroundColor: 'lightgrey',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
  },
  holder: {
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical: 20,
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  modify: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: '#4da6ff',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  delete: {
    padding: 15,
    borderRadius: 10,
    backgroundColor: 'red',
    marginHorizontal: 10,
    alignItems: 'center',
  },
  continueBtn: {
    backgroundColor: '#4da6ff',
    padding: 10,
    borderRadius: 10,
    alignItems: 'center',
    marginTop: 15,
  },
});
