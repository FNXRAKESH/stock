import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import WatchListOne from './WatchListOne';
import WatchListTwo from './WatchListTwo';
import WatchListThree from './WatchListThree';
import WatchListFour from './WatchListFour';
import WatchListFive from './WatchListFive';
import Holdings from './Holdings';
import Positions from './Positions';
const Tab = createMaterialTopTabNavigator();

const Portfolio = () => {
  return (
    <Tab.Navigator
      initialRouteName="Holdings"
      screenOptions={{
        tabBarActiveTintColor: '#131931',
        tabBarLabelStyle: {fontSize: 12},
        tabBarStyle: {backgroundColor: '#fff'},
        tabBarScrollEnabled: true,
        tabBarItemStyle: {width: 'auto', minWidht: '100'},
      }}>
      <Tab.Screen
        name="Holdings"
        component={Holdings}
        options={{tabBarLabel: 'Holdings'}}
      />
      <Tab.Screen
        name="Positions"
        component={Positions}
        options={{tabBarLabel: 'Positions'}}
      />
    </Tab.Navigator>
  );
};

export default Portfolio;
