/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content, Form, Item, Input, Body, Title, Button, Text } from 'native-base';

export default class SignIn extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              Register
            </Title>
          </Body>
        </Header>
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
        </Content>
      </Container>
    );
  }
}
