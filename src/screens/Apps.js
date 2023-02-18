import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Apps = () => {
  return (
    <View style={styles.container}>
      <Text style={{fontSize: 30}}>No Apps available</Text>
    </View>
  );
};

export default Apps;

const styles = StyleSheet.create({
  container: {
    flexGrow: 1,
    padding: 15,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
