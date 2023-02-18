import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const Pending = () => {
    return (<View style={styles.container}>
        <Text>Pending</Text>
    </View> );
}
 
export default Pending;

const styles = StyleSheet.create({
    container: {
        flexGrow: 1,
        padding:15
    }
})