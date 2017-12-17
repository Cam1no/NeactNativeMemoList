/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { setEmail, setPassword } from '../actions/index';
import { Container, Header, Content, Form, Item, Input, Left, Right, Body, Title, Button, Text } from 'native-base';

export class LoginScreen extends Component {
  constructor(props){
    super(props);
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
              />
            </Item>
            <Button block info onPress={() => this.props.navigation.navigate('ToDo')}>
              <Text>
                送信
              </Text>
            </Button>
          </Form>
          <Button danger onPress={() => this.props.navigation.navigate('SignIn')}>
            <Text>
              Signin
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
});

const mapDispatchToProps = () => {
  return {
    setEmail,
    setPassword,
  }
}

export default connect(mapStateToProps, {setEmail, setPassword})(LoginScreen);
