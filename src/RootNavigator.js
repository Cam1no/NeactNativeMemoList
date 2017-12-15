import React from 'react';
import { View, Text } from 'react-native';
import { Button } from 'native-base';
import { StackNavigator } from 'react-navigation';
import LoginScreen from './screens/LoginScreen';
import SignInScreen from './screens/SignInScreen';
import ToDoScreen from './screens/ToDoScreen';
import EditTodoScreen from './screens/EditTodoScreen';

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
  ToDo: {
    screen: ToDoScreen,
    navigationOptions: {
      headerTitle: 'ToDoList',
    },
  },
  EditTodo: {
    screen: EditTodoScreen,
    navigationOptions: {
      headerTitle: 'EditTodo',
    },
  },
});


export default RootNavigator;
