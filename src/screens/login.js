/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Body, Title, Button, Text } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Login
            </Title>
          </Body>
        </Header>
        <Content>
          <Form>
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
        </Content>
      </Container>
    );
  }
}