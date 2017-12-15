import React from 'react';
import { Container, Header, Body, Title, Footer } from 'native-base';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './src/reducers/';
import RootNavigator from './src/RootNavigator';


const store = createStore(reducer);

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}
