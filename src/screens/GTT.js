import {faChartSimple, faClock, faSearch} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import { DataTable, Searchbar } from 'react-native-paper';
import BottomSheet from 'react-native-gesture-bottom-sheet';

var devHeight = Dimensions.get('window').height - 200;
var data = [
  {
    name: 'ONGC',
    value1: 41.53,
    value2: 'NSE',
    value3: '-0.39 (-.093%)',
  },
];
const GTT = ({navigation}) => {
   const bottomSheet = useRef();
  const onChangeSearch = query => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = React.useState('');
  const [stockItem, setStockItem] = React.useState({});
  const [stocks, setStocks] = React.useState(data);
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search eg: Infy, reliance"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={({size, color, direction}) => <FontAwesomeIcon icon={faSearch} />}
      />
      {stocks.length == 0 ? (
        <View
          style={{alignItems: 'center', justifyContent: 'center', flexGrow: 1}}>
          <FontAwesomeIcon icon={faBasketShopping} size={150} />
          <Text style={{ fontSize: 30 }}>No GTT</Text>
          <Text>Please add a GTT from WatchList</Text>
        </View>
      ) : (
        <ScrollView>
          {stocks.map(item => {
            return (
              <TouchableOpacity
                style={styles.holder}
                onPress={() => {
                  setStockItem(item);
                  bottomSheet.current.show();
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.single}>SINGLE</Text>
                    <Text style={styles.buy}>BUY</Text>
                  </View>
                  <View style={{flexDirection: 'row', alignItems: 'center'}}>
                    <Text style={styles.complete}>ACTIVE</Text>
                  </View>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                    marginVertical: 10,
                  }}>
                  <Text style={{flexGrow: 1}}>ONGC</Text>
                  <Text>122.95</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    alignItems: 'center',
                  }}>
                  <Text style={{flexGrow: 1}}>Qty: 1</Text>

                  <Text style={{paddingLeft: 10}}>LTP: 117.10</Text>
                </View>
              </TouchableOpacity>
            );
          })}

          <BottomSheet
            hasDraggableIcon
            draggable={false}
            ref={bottomSheet}
            height={devHeight}>
            <View style={{padding: 20}}>
              <Text style={{fontSize: 20, fontWeight: 'bold'}}>ONGC</Text>
              <View
                style={{
                  flexDirection: 'row',
                  paddingVertical: 10,
                  alignItems: 'center',
                }}>
                <Text>NSE</Text>
                <Text style={{paddingHorizontal: 15, color: 'green'}}>
                  117.10
                </Text>
                <Text style={styles.single}>SINGLE</Text>
                <Text style={styles.buy}>BUY</Text>
                <Text style={styles.complete}>ACTIVE</Text>
              </View>
              <View style={styles.line}></View>
            </View>
            <ScrollView
              contentContainerStyle={{flexGrow: 1}}
              showsVerticalScrollIndicator={false}>
              <View style={{flexGrow: 1}}>
                <View style={{flexDirection: 'row', paddingVertical: 20}}>
                  <View style={{flexGrow: 1}}>
                    <TouchableOpacity
                      style={styles.modify}
                      onPress={() => {
                        bottomSheet.current.close();
                        navigation.navigate('CreateGTT', {item: stockItem});
                      }}>
                      <Text style={{color: '#fff'}}>MODIFY</Text>
                    </TouchableOpacity>
                  </View>
                  <View style={{flexGrow: 1}}>
                    <TouchableOpacity
                      style={styles.delete}
                      onPress={() => {
                        bottomSheet.current.close();
                        setStocks([]);
                      }}>
                      <Text style={{color: '#fff'}}>DELETE</Text>
                    </TouchableOpacity>
                  </View>
                </View>
                <View style={{marginHorizontal: 15, marginVertical: 30}}>
                  <TouchableOpacity
                    onPress={() => {
                      bottomSheet.current.close();
                      navigation.navigate('Chart');
                    }}
                    style={{flexDirection: 'row', alignItems: 'center'}}>
                    <FontAwesomeIcon
                      icon={faChartSimple}
                      size={25}
                      color="#131931"
                    />
                    <Text style={{paddingLeft: 10, fontSize: 18}}>
                      View Chart
                    </Text>
                  </TouchableOpacity>
                </View>
                <DataTable>
                  <DataTable.Row>
                    <DataTable.Cell>Quantity</DataTable.Cell>
                    <DataTable.Cell numeric>1</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Trigger Price</DataTable.Cell>
                    <DataTable.Cell numeric>122.95</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Created at</DataTable.Cell>
                    <DataTable.Cell numeric>2021-08-02 22:22:09</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Updated at</DataTable.Cell>
                    <DataTable.Cell numeric>2021-08-02 22:22:09</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>Expires on</DataTable.Cell>
                    <DataTable.Cell numeric>2022-08-02</DataTable.Cell>
                  </DataTable.Row>
                  <DataTable.Row>
                    <DataTable.Cell>LTP created at</DataTable.Cell>
                    <DataTable.Cell numeric>117.10</DataTable.Cell>
                  </DataTable.Row>
                </DataTable>
              </View>
            </ScrollView>
          </BottomSheet>
        </ScrollView>
      )}
    </View>
  );
};

export default GTT;

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
});
