import React from 'react';
import { Container, Header, Body, Title, Footer } from 'native-base';
import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import { Provider } from 'react-redux';
import reducer from './src/reducers/';
import RootNavigator from './src/RootNavigator';
import thunk from 'redux-thunk';
import firebase from 'firebase';
import firebaseConfig from './src/config/firebase';

firebase.initializeApp(firebaseConfig);

const store = createStore(reducer, composeWithDevTools(applyMiddleware(thunk)), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <RootNavigator/>
      </Provider>
    );
  }
}
