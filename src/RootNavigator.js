import React from 'react';
import { StackNavigator } from 'react-navigation';
import SignInScreen from './screens/SignInScreen';
import SignUpScreen from './screens/SignUpScreen';
import ToDoListScreen from './screens/ToDoListScreen';
import AddTodoScreen from './screens/AddTodoScreen';

const RootNavigator = StackNavigator({
  SignUp: {
    screen: SignUpScreen,
    navigationOptions: {
      headerTitle: 'Register',
    },
  },
  SignIn: {
    screen: SignInScreen,
    navigationOptions: {
      headerTitle: 'SignIn',
    },
  },
  ToDoList: {
    screen: ToDoListScreen,
    navigationOptions: {
      headerTitle: 'TODO一覧',
    },
  },
  CreateTodo: {
    screen: CreateTodoScreen,
    navigationOptions: {
      headerTitle: 'TODOの作成',
    },
  },
  EditTodo: {
    screen: CreateTodoScreen,
    navigationOptions: {
      headerTitle: 'TODOの作成',
    },
  },
});


export default RootNavigator;
