/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Body, Title, Button, Text } from 'native-base';

export default class SignInScreen extends Component {
  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Item>
              <Input placeholder="Username" />
            </Item>
            <Item>
              <Input placeholder="Email" />
            </Item>
            <Item last>
              <Input placeholder="Password" />
            </Item>
            <Button block info>
              <Text>
                送信
              </Text>
            </Button>
          </Form>
          <Button danger onPress={() => alert('Thanks')}>
            <Text>
              Login
            </Text>
          </Button>
        </Content>
      </Container>
    );
  }
}
