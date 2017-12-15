/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Left, Right, Body, Title, Button, Text } from 'native-base';

export default class LoginScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
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
