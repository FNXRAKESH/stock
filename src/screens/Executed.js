import { faClock, faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import React from 'react';
import {View, Text, StyleSheet, ScrollView} from 'react-native';
import {Searchbar} from 'react-native-paper';
const Executed = () => {
  const onChangeSearch = query => setSearchQuery(query);
   const [searchQuery, setSearchQuery] = React.useState('');
  return (
    <View style={styles.container}>
      <Searchbar
        placeholder="Search eg: Infy, reliance"
        onChangeText={onChangeSearch}
        value={searchQuery}
        icon={({size, color, direction}) => <FontAwesomeIcon icon={faSearch} />}
      />
      <ScrollView>
        <View style={styles.holder}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.sell}>SELL</Text>
              <Text>30 / 30</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faClock} />
              <Text style={{paddingHorizontal: 10}}>15:03:48</Text>
              <Text style={styles.complete}>COMPLETE</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{flexGrow: 1}}>BPCL</Text>
            <Text>Avg: 456.50</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{flexGrow: 1}}>NSE</Text>
            <Text>CNC</Text>
            <Text style={{paddingLeft: 10}}>MARKET</Text>
          </View>
        </View>
        <View style={styles.holder}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.sell}>SELL</Text>
              <Text>30 / 30</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faClock} />
              <Text style={{paddingHorizontal: 10}}>15:03:07</Text>
              <Text style={[styles.sell, {marginRight: 0}]}>REJECTED</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{flexGrow: 1}}>BPCL</Text>
            <Text>0.00</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{flexGrow: 1}}>NSE</Text>
            <Text>CNC</Text>
            <Text style={{paddingLeft: 10}}>MARKET</Text>
          </View>
        </View>
        <View style={styles.holder}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.buy}>BUY</Text>
              <Text>30 / 30</Text>
            </View>
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <FontAwesomeIcon icon={faClock} />
              <Text style={{paddingHorizontal: 10}}>09:25:45</Text>
              <Text style={styles.complete}>COMPLETE</Text>
            </View>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginVertical: 10,
            }}>
            <Text style={{flexGrow: 1}}>BPCL</Text>
            <Text>Avg: 447.15</Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
            }}>
            <Text style={{flexGrow: 1}}>NSE</Text>
            <Text>CNC</Text>
            <Text style={{paddingLeft: 10}}>MARKET</Text>
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default Executed;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
  },
  sell: {
    backgroundColor: 'pink',
    padding: 5,
    borderRadius: 5,
    marginRight: 10,
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
  holder: {
    
    borderBottomWidth: 1,
    borderBottomColor: 'lightgrey',
    paddingVertical:20
  },
});
