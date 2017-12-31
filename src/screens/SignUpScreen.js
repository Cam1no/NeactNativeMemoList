/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Body, Title, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { setEmail, setPassword, setUserName } from '../actions/index';
import firebase from 'firebase';

export class SignUpScreen extends Component {

  handleSubmit(){
    console.log(this.props);
    firebase.auth().createUserWithEmailAndPassword(this.props.email, this.props.password)
      .then((user) => {
        console.log("success", user);
        this.props.navigation.navigate('ToDoList');
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
                placeholder="Username"
                onChangeText={(username) => this.props.setUserName(username)}
              />
            </Item>
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
            <Button info onPress={this.handleSubmit.bind(this)}>
              <Text>
                送信
              </Text>
            </Button>
          </Form>
          <Button danger onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text>
              Login
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}

// storeに格納されているstateを引っ張り出す
const mapStateToProps = state => ({
  email: state.email,
  password: state.password,
  username: state.username,
});

export default connect(mapStateToProps, {setEmail, setPassword, setUserName})(SignUpScreen);
