import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import WatchListOne from './WatchListOne';
import WatchListTwo from './WatchListTwo';
import WatchListThree from './WatchListThree';
import WatchListFour from './WatchListFour';
import WatchListFive from './WatchListFive';
const Tab = createMaterialTopTabNavigator();

const WatchList = () => {
  return (
    <Tab.Navigator
      initialRouteName="WatchListOne"
      screenOptions={{
        tabBarActiveTintColor: '#131931',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 'auto', minWidht: '100'},
      }}>
      <Tab.Screen
        name="WatchListOne"
        component={WatchListOne}
        options={{tabBarLabel: 'WatchList 1'}}
      />
      <Tab.Screen
        name="WatchListTwo"
        component={WatchListTwo}
        options={{tabBarLabel: 'WatchList 2'}}
      />
      <Tab.Screen
        name="WatchListThree"
        component={WatchListThree}
        options={{tabBarLabel: 'WatchList 3'}}
      />
      <Tab.Screen
        name="WatchListFour"
        component={WatchListFour}
        options={{tabBarLabel: 'WatchList 4'}}
      />
      <Tab.Screen
        name="WatchListFive"
        component={WatchListFive}
        options={{tabBarLabel: 'WatchList 5'}}
      />
    </Tab.Navigator>
  );
};

export default WatchList;

 
