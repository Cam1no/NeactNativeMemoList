/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEmail, setPassword, setCurrentUser } from '../actions/index';
import { Container, Header, Content, Form, Item, Input, Left, Right, Body, Title, Button, Text } from 'native-base';
import firebase from 'firebase';
import { NavigationActions } from 'react-navigation';

const resetAction = NavigationActions.reset({
  index: 0,
  actions: [
    NavigationActions.navigate({ routeName: 'ToDo'})
  ]
});

export class LoginScreen extends Component {
  constructor(props){
    super(props);
  }

  handleSubmit(){
    console.log(this.props);
    firebase.auth().signInWithEmailAndPassword(this.props.email, this.props.password)
      .then((user) => {
        console.log("success", user);
        this.props.setCurrentUser(user);
        this.props.navigation.dispatch(resetAction);
      })
      .catch((error) => {
        console.log("firebase error", error);
      });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input
                placeholder="Email"
                onChangeText={(email) => this.props.setEmail(email)}
              />
            </Item>
            <Item last>
              <Input
                placeholder="Password"
                onChangeText={(password) => this.props.setPassword(password)}
                secureTextEntry={true}
              />
            </Item>
            <Button block info onPress={this.handleSubmit.bind(this)}>
              <Text>
                ログイン
              </Text>
            </Button>
          </Form>
        </Content>
      </Container>
    );
  }
}

// storeに格納されているstateを引っ張り出す
const mapStateToProps = state => ({
  email: state.currentUser.email,
  password: state.currentUser.password,
});

export default connect(mapStateToProps, {setEmail, setPassword, setCurrentUser})(LoginScreen);
