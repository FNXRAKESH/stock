import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Positions = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>No Positions</Text>
      <Text>Buy equities from your Watchlist</Text>
    </View>
  );
};

export default Positions;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
