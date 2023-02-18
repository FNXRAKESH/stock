import React, {useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  Dimensions,
} from 'react-native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import WatchList from './WatchList';
import Orders from './Orders';
import Portfolio from './Portfolio';
import Apps from './Apps';
import Profile from './Profile';
import {FontAwesomeIcon} from '@fortawesome/react-native-fontawesome';
import {
  faAngleDown,
  faBook,
  faBriefcase,
  faCube,
  faHome,
  faPlusCircle,
  faUser,
} from '@fortawesome/free-solid-svg-icons';
import {Button, Dialog, Portal} from 'react-native-paper';

const Tab = createBottomTabNavigator();

const Home = () => {
  const [showPopUp, setShowPopUp] = useState(false);
  return (
    <>
      <Tab.Navigator
        screenOptions={{
          headerRight: () => (
            <TouchableOpacity
              onPress={() => {
                setShowPopUp(true);
              }}
              style={{paddingHorizontal: 10}}>
              <FontAwesomeIcon icon={faAngleDown} size={30} color="#00a3f5" />
            </TouchableOpacity>
          ),
          tabBarActiveTintColor: '#4da6ff',
          tabBarLabelStyle: {
            fontSize: 13,
          },
        }}>
        <Tab.Screen
          name="MarketWatch"
          component={WatchList}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faHome} color={color} size={18} />
            ),
          }}
        />
        <Tab.Screen
          name="Orders"
          component={Orders}
          options={{
            tabBarLabel: 'Orders',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBook} color={color} size={18} />
            ),
          }}
        />
        <Tab.Screen
          name="Portfolio"
          component={Portfolio}
          options={{
            tabBarLabel: 'Portfolio',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faBriefcase} color={color} size={18} />
            ),
          }}
        />
        <Tab.Screen
          name="Apps"
          component={Apps}
          options={{
            tabBarLabel: 'Apps',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faCube} color={color} size={18} />
            ),
          }}
        />
        <Tab.Screen
          name="Account"
          component={Profile}
          options={{
            tabBarLabel: 'Account',
            tabBarIcon: ({color, size}) => (
              <FontAwesomeIcon icon={faUser} color={color} size={18} />
            ),
          }}
        />
      </Tab.Navigator>
      {showPopUp ? (
        <Dialog visible={true} onDismiss={() => setShowPopUp(false)}>
          <Dialog.Title>Overview</Dialog.Title>
          <Dialog.Content>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                paddingVertical: 20,
              }}>
              <View style={{flexBasis: 100}}>
                <Text style={{fontSize: 18}}>NIFTY 50</Text>
                <Text style={{fontSize: 18}}>15885.15</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 10, color: 'green'}}>+122.10</Text>
                  <Text style={{fontSize: 10, color: 'green'}}>+0.77%</Text>
                </View>
              </View>
              <View style={{flexBasis: 100}}>
                <Text style={{fontSize: 18}}>NIFTY 50</Text>
                <Text style={{fontSize: 18}}>15885.15</Text>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <Text style={{fontSize: 10, color: 'green'}}>+122.10</Text>
                  <Text style={{fontSize: 10, color: 'green'}}>+0.77%</Text>
                </View>
              </View>
            </View>
            <View>
              <Text style={{fontSize: 18, paddingTop: 10}}>Funds</Text>
              <Text style={{fontSize: 15, paddingTop: 10, color: 'grey'}}>
                Equity
              </Text>
              <Text style={{fontSize: 15, paddingTop: 10}}>
                {`\u20B9 18,380.20`}
              </Text>
            </View>
          </Dialog.Content>
        </Dialog>
      ) : null}
    </>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    padding: 15,
    flexGrow: 1,
  },
  popup: {
    position: 'absolute',
    top: 0,
    flexGrow: 1,
    height: Dimensions.get('window').height / 2,
    width: Dimensions.get('window').width,
  },
});
