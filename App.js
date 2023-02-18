import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import Welcome from './src/screens/Welcome';
import Login from './src/screens/Login';
import ForgotPassword from './src/screens/ForgotPassword';
import Home from './src/screens/Home';
import Chart from './src/screens/Chart';
import BuyStock from './src/screens/BuyStock';
import CreateGTT from './src/screens/CreateGTT';
import BasketItem from './src/screens/BasketItem';
import Funds from './src/screens/Funds';
import AddFunds from './src/screens/AddFunds';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Welcome"
        screenOptions={{
          headerMode: 'screen',
          headerShown: false,
        }}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Login" component={Login} />
        <Stack.Screen name="ForgotPassword" component={ForgotPassword} />
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Chart" component={Chart} />
        <Stack.Screen name="BuyStock" component={BuyStock} />
        <Stack.Screen name="CreateGTT" component={CreateGTT} />
        <Stack.Screen name="BasketItem" component={BasketItem} />
        <Stack.Screen name="Funds" component={Funds} />
        <Stack.Screen name="AddFunds" component={AddFunds} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
