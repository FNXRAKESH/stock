import {
  faBarChart,
  faBell,
  faChartSimple,
  faClock,
  faClose,
  faCube,
  faFile,
  faFileAlt,
  faGear,
  faSearch,
} from '@fortawesome/free-solid-svg-icons';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import React, {useState, useRef, useEffect} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Dimensions,
  TouchableOpacity,
  FlatList,
} from 'react-native';
import BottomSheet from 'react-native-gesture-bottom-sheet';
import {TextInput, Searchbar, DataTable} from 'react-native-paper';

const data = [];
var dataList = [
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
var devHeight = Dimensions.get('window').height - 200;
const WatchListFive = ({navigation}) => {
  const bottomSheet = useRef();
  const textInput = useRef();
  const [stocks, setStocks] = useState(data);
  const [searchQuery, setSearchQuery] = useState('');
  const [search, setSearch] = useState('');
  const [stockItem, setStockItem] = useState({});
  const onChangeSearch = query => setSearchQuery(query);
  const [showList, setShowList] = useState(false);
  const [filteredDataSource, setFilteredDataSource] = useState([]);
  const [masterDataSource, setMasterDataSource] = useState(dataList);

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
        onPress={() => {
          setStocks([
            ...stocks,
            {
              name: `${item.name}`,
              value1: 41.53,
              value2: 'NSE',
              value3: '-0.39 (-.093%)',
            },
          ]);
          setShowList(false);
          textInput.current.clear();
        }}>
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
  return (
    <View style={styles.container}>
      <Searchbar
        ref={textInput}
        placeholder="Search & Add"
        onChangeText={text => searchFilterFunction(text)}
        value={search}
        icon={({size, color, direction}) => <FontAwesomeIcon icon={faSearch} />}
      />
      {showList ? (
        <FlatList
          data={filteredDataSource}
          keyExtractor={(item, index) => index.toString()}
          ItemSeparatorComponent={ItemSeparatorView}
          renderItem={ItemView}
        />
      ) : null}
      <ScrollView
        contentContainerStyle={{paddingVertical: 30}}
        showsVerticalScrollIndicator={false}>
        {stocks.map(item => {
          return (
            <TouchableOpacity
              style={styles.item}
              key={item.name}
              onPress={() => {
                setStockItem(item);
                bottomSheet.current.show();
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}>
                <Text style={{fontSize: 18, fontWeight: 'bold'}}>
                  {item.name}
                </Text>
                <Text>{item.value1}</Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  paddingVertical: 15,
                }}>
                <Text>{item.value2}</Text>
                <Text>{item.value3}</Text>
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
            <Text style={{fontSize: 20, fontWeight: 'bold'}}>
              {stockItem.name}
            </Text>
            <View style={{flexDirection: 'row', paddingVertical: 10}}>
              <Text>{stockItem.value2}</Text>
              <Text style={{paddingHorizontal: 15, color: 'green'}}>
                {stockItem.value1}
              </Text>
              <Text>{stockItem.value3}</Text>
            </View>
          </View>
          <ScrollView
            contentContainerStyle={{flexGrow: 1}}
            showsVerticalScrollIndicator={false}>
            <View style={{flexGrow: 1}}>
              <View style={styles.line}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-evenly',
                  marginVertical: 20,
                }}>
                <TouchableOpacity
                  style={styles.buyBtn}
                  onPress={() => {
                    bottomSheet.current.close();
                    navigation.navigate('BuyStock', {item: stockItem});
                  }}>
                  <Text style={{fontSize: 18, color: '#fff'}}>BUY</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.sellBtn}>
                  <Text style={{fontSize: 18, color: '#fff'}}>SELL</Text>
                </TouchableOpacity>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 15,
                }}>
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
                <TouchableOpacity
                  onPress={() => {
                    bottomSheet.current.close();
                    navigation.navigate('CreateGTT', {item: stockItem});
                  }}
                  style={{flexDirection: 'row', alignItems: 'center'}}>
                  <FontAwesomeIcon
                    icon={faBarChart}
                    size={25}
                    color="#131931"
                  />
                  <Text style={{paddingLeft: 10, fontSize: 18}}>
                    Create GTT
                  </Text>
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
              <View style={styles.line}></View>
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                  padding: 15,
                }}>
                <View>
                  <Text>Open</Text>
                  <Text style={{fontWeight: 'bold'}}>2644.00</Text>
                </View>
                <View>
                  <Text>High</Text>
                  <Text style={{fontWeight: 'bold'}}>2487.00</Text>
                </View>
                <View>
                  <Text>Low</Text>
                  <Text style={{fontWeight: 'bold'}}>2456.00</Text>
                </View>
                <View>
                  <Text>Prev.close</Text>
                  <Text style={{fontWeight: 'bold'}}>2441.00</Text>
                </View>
              </View>
              <View style={styles.line}></View>
              <View style={{padding: 15}}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Volume</Text>
                  <Text style={{fontWeight: 'bold'}}>50,09,133</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Avg. trade price</Text>
                  <Text style={{fontWeight: 'bold'}}>2457.00</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Last traded Quantity</Text>
                  <Text style={{fontWeight: 'bold'}}>2</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Last traded at</Text>
                  <Text style={{fontWeight: 'bold'}}>2021-08-02 15:58:45</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Lower circuit</Text>
                  <Text style={{fontWeight: 'bold'}}>2215.85</Text>
                </View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text>Upper circuit</Text>
                  <Text style={{fontWeight: 'bold'}}>2708.25</Text>
                </View>
              </View>
              <View style={{padding: 15}}>
                <Text
                  style={{fontSize: 18, fontWeight: 'bold', marginBottom: 15}}>
                  Apps
                </Text>
                <View style={styles.apps}>
                  <FontAwesomeIcon icon={faCube} color="green" />
                  <Text style={{paddingLeft: 10}}>Fundamentals</Text>
                </View>
                <View style={styles.apps}>
                  <FontAwesomeIcon icon={faBell} color="red" />
                  <Text style={{paddingLeft: 10}}>Set an alert</Text>
                </View>
                <View style={styles.apps}>
                  <FontAwesomeIcon icon={faGear} color="orange" />
                  <Text style={{paddingLeft: 10}}>Technicals</Text>
                </View>
                <View style={styles.apps}>
                  <FontAwesomeIcon icon={faFileAlt} color="blue" />
                  <Text style={{paddingLeft: 10}}>Stock Reports</Text>
                </View>
              </View>
            </View>
          </ScrollView>
        </BottomSheet>
      </ScrollView>
    </View>
  );
};

export default WatchListFive;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  item: {
    borderBottomWidth: 1,
    borderColor: 'lightgrey',
    marginBottom: 15,
  },
  line: {
    borderTopWidth: 1,
    borderColor: 'lightgrey',
  },
  buyBtn: {
    backgroundColor: 'blue',
    borderRadius: 15,

    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  sellBtn: {
    backgroundColor: 'red',
    borderRadius: 15,

    paddingHorizontal: 50,
    paddingVertical: 20,
  },
  apps: {
    flexDirection: 'row',
    paddingVertical: 15,
    borderColor: 'lightgrey',
    borderBottomWidth: 1,
    borderTopWidth: 1,
  },
  chart: {
    right: 10,
    zIndex: 100,
    position: 'absolute',
    padding: 10,
    borderWidth: 1,
    borderRadius: 10,
    backgroundColor: '#fff',
    top: 10,
  },
});
