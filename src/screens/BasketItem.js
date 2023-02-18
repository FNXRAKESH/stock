import {
  faArrowLeft,
  faBasketShopping,
  faChartSimple,
  faClose,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useRef, useState} from 'react';
import {
  Dimensions,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  FlatList,
  AsyncStorage,
} from 'react-native';
import {Searchbar, DataTable} from 'react-native-paper';

import BottomSheet from 'react-native-gesture-bottom-sheet';

var devHeight = Dimensions.get('window').height / 2;
var data = [
  {
    name: 'TCAPL06SR2',
    type: 'BSE',
  },
  {
    name: 'TCAPL9SEP06',
    type: 'BSE',
  },
  {
    name: 'TCAPLSIR08B',
    type: 'BSE',
  },
  {
    name: 'TCFCFINQ',
    type: 'BSE',
  },
  {
    name: 'TCFSL-NA',
    type: 'NSE',
  },
  {
    name: 'TCFSL-NB',
    type: 'NSE',
  },
  {
    name: 'TCFSL-NC',
    type: 'NSE',
  },
  {
    name: 'TCS',
    type: 'NSE',
  },
  {
    name: 'TCS',
    type: 'BSE',
  },
  {
    name: 'TCS AUG FUT',
    type: 'NFO',
  },
  {
    name: 'TCS SEP FUT',
    type: 'NFO',
  },
  {
    name: 'TCS OCT FUT',
    type: 'NFO',
  },
  {
    name: 'TCS AUG 2400 CE',
    type: 'NFO',
  },
  {
    name: 'TCS AUG 2400 PE',
    type: 'NFO',
  },
];

const BasketItem = ({route, navigation}) => {
  const bottomSheet = useRef();
  const [stocks, setStocks] = useState(data);
  const onChangeSearch = query => setSearchQuery(query);
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState(data);
    const [showList, setShowList] = useState(false);
     const [stockItem, setStockItem] = React.useState({});
  const searchFilterFunction = text => {
    // Check if searched text is not blank
    if (text) {
      setShowList(true);
      const newData = masterDataSource.filter(function (item) {
        const itemData = item.name ? item.name.toUpperCase() : ''.toUpperCase();
        const textData = text.toUpperCase();
        return itemData.indexOf(textData) > -1;
      });
      setFilteredDataSource(newData);
      setSearch(text);
    } else {
      // Inserted text is blank
      // Update FilteredDataSource with masterDataSource
      setFilteredDataSource(masterDataSource);
      setSearch(text);
    }
  };

  const ItemView = ({item}) => {
    return (
      <TouchableOpacity
        style={{flexDirection: 'row', padding: 15, alignItems: 'center'}}
        onPress={() => {setStockItem(item);
        bottomSheet.current.show();}}>
        <Text
          style={
            item.type == 'NSE'
              ? {backgroundColor: 'lightpink', padding: 10, marginRight: 20}
              : item.type == 'NFO'
              ? {backgroundColor: 'lightgrey', padding: 10, marginRight: 20}
              : {backgroundColor: 'lightblue', padding: 10, marginRight: 20}
          }>
          {item.type}
        </Text>
        <Text>{item.name}</Text>
      </TouchableOpacity>
    );
  };

  const ItemSeparatorView = () => {
    return (
      // Flat List Item Separator
      <View
        style={{
          height: 0.5,
          width: '100%',
          backgroundColor: '#C8C8C8',
        }}
      />
    );
  };
 const storeData = async () => {
  try {
    await AsyncStorage.setItem('@MySuperStore:key', 'I like to save it.');
  } catch (error) {
    // Error saving data
  }
};
   
  return (
    <View style={styles.container}>
      <View style={styles.backBtn}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <FontAwesomeIcon icon={faArrowLeft} />
        </TouchableOpacity>
        <View
          style={{paddingLeft: 15, flexDirection: 'row', alignItems: 'center'}}>
          <FontAwesomeIcon icon={faBasketShopping} />
          <Text style={{fontSize: 18, paddingLeft: 10}}>
            {route.params.name}
          </Text>
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          paddingHorizontal: 15,
          paddingBottom: 10,
          backgroundColor: 'lightgrey',
        }}>
        <Text>0/20 items</Text>
        <Text>created on 2nd Feb 2023</Text>
      </View>
      <Searchbar
        placeholder="Search"
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        icon={({size, color, direction}) => <FontAwesomeIcon icon={faSearch} />}
        clearIcon={({size, color, direction}) => (
          <FontAwesomeIcon icon={faClose} />
        )}
      />
      {showList ? (
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      ) : null}
      <BottomSheet
        hasDraggableIcon
        draggable={false}
        ref={bottomSheet}
        height={devHeight}>
        <View style={{padding: 20}}>
          <Text style={{fontSize: 20, fontWeight: 'bold'}}>
            {stockItem.name}
          </Text>
          <View
            style={{
              flexDirection: 'row',
              paddingVertical: 10,
              alignItems: 'center',
            }}>
            <Text>{stockItem.type}</Text>
            <Text style={{paddingHorizontal: 15, color: 'green'}}>3219.40</Text>
            <Text>+1.64%</Text>
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
                    navigation.navigate('BuyStock', {item: stockItem});
                  }}>
                  <Text style={{color: '#fff'}}>BUY</Text>
                </TouchableOpacity>
              </View>
              <View style={{flexGrow: 1}}>
                <TouchableOpacity
                  style={styles.delete}
                  onPress={() => {
                    bottomSheet.current.close();
                    setStocks([]);
                  }}>
                  <Text style={{color: '#fff'}}>SELL</Text>
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
                <Text style={{paddingLeft: 10, fontSize: 18}}>View Chart</Text>
              </TouchableOpacity>
            </View>
            <View style={{padding: 15}}>
              <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                Market depth
              </Text>
              <DataTable>
                <DataTable.Header>
                  <DataTable.Title>Bid</DataTable.Title>
                  <DataTable.Title numeric>Orders</DataTable.Title>
                  <DataTable.Title numeric>Qty</DataTable.Title>
                  <DataTable.Title numeric>Offer</DataTable.Title>
                  <DataTable.Title numeric>Orders</DataTable.Title>
                  <DataTable.Title numeric>Qty</DataTable.Title>
                </DataTable.Header>
                <DataTable.Row>
                  <DataTable.Cell>2646.05</DataTable.Cell>
                  <DataTable.Cell numeric>19</DataTable.Cell>
                  <DataTable.Cell numeric>1479</DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0.00
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>2646.05</DataTable.Cell>
                  <DataTable.Cell numeric>20</DataTable.Cell>
                  <DataTable.Cell numeric>0</DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    1.00
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>2646.05</DataTable.Cell>
                  <DataTable.Cell numeric>19</DataTable.Cell>
                  <DataTable.Cell numeric>0</DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0.00
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                </DataTable.Row>

                <DataTable.Row>
                  <DataTable.Cell>2646.05</DataTable.Cell>
                  <DataTable.Cell numeric>20</DataTable.Cell>
                  <DataTable.Cell numeric>0</DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    1.00
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                </DataTable.Row>
                <DataTable.Row>
                  <DataTable.Cell>Total</DataTable.Cell>
                  <DataTable.Cell numeric></DataTable.Cell>
                  <DataTable.Cell numeric>1479</DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    Total
                  </DataTable.Cell>
                  <DataTable.Cell
                    numeric
                    textStyle={{color: 'red'}}></DataTable.Cell>
                  <DataTable.Cell numeric textStyle={{color: 'red'}}>
                    0
                  </DataTable.Cell>
                </DataTable.Row>
              </DataTable>
            </View>
          </View>
        </ScrollView>
      </BottomSheet>
    </View>
  );
};

export default BasketItem;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
  },
  backBtn: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'lightgrey',
    padding: 15,
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
