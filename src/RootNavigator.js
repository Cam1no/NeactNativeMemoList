import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignUpScreen from './screens/SignUpScreen';
import ToDoScreen from './screens/ToDoScreen';
import AddTodoScreen from './screens/AddTodoScreen';

const RootNavigator = StackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Register',
    },
  },
  Login: {
    screen: LoginScreen,
    navigationOptions: {
      headerTitle: 'Login',
    },
  },
  ToDo: {
    screen: ToDoScreen,
    navigationOptions: {
      headerTitle: 'ToDoList',
    },
  },
  AddTodo: {
    screen: AddTodoScreen,
    navigationOptions: {
      headerTitle: 'EditTodo',
    },
  },
});


export default RootNavigator;
