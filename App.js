import React from 'react';
import { Container, Header, Body, Title, Footer } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/';

import Login from './src/screens/Login';
import SignIn from './src/screens/SignIn';
import ToDo from './src/screens/ToDo';

const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <ToDo/>
      </Provider>
    );
  }
}
