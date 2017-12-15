import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from './screens/SignInScreen';
import ToDoScreen from './screens/ToDoScreen';

const RootNavigator = StackNavigator({
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerTitle: 'Register',
    },
  },
});


export default RootNavigator;
