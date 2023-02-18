import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WatchListOne from './WatchListOne';
import WatchListTwo from './WatchListTwo';
import WatchListThree from './WatchListThree';
import WatchListFour from './WatchListFour';
import WatchListFive from './WatchListFive';
import Pending from './Pending';
import Executed from './Executed';
import GTT from './GTT';
import SIP from './SIP';
import Basket from './Basket';
const Tab = createMaterialTopTabNavigator();

const Orders = () => {
  return (
    <Tab.Navigator
      initialRouteName="Pending"
      screenOptions={{
        tabBarActiveTintColor: '#131931',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 'auto', minWidht: '100'},
      }}>
      <Tab.Screen
        name="Pending"
        component={Pending}
        options={{tabBarLabel: 'Pending'}}
      />
      <Tab.Screen
        name="Executed"
        component={Executed}
        options={{tabBarLabel: 'Executed'}}
      />
      <Tab.Screen name="GTT" component={GTT} options={{tabBarLabel: 'GTT'}} />
      <Tab.Screen
        name="Basket"
        component={Basket}
        options={{tabBarLabel: 'Basket'}}
      />
      <Tab.Screen name="SIP" component={SIP} options={{tabBarLabel: `SIP's`}} />
    </Tab.Navigator>
  );
};

export default Orders;
