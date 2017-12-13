/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Body, Title, Footer, Content } from 'native-base';

export default class Login extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Body>
            <Title>
              HellWorld
            </Title>
          </Body>
        </Header>
        <Content>
          <Title>HelloWorld</Title>
        </Content>
        <Footer>
          <Body>
            <Title>
              What!!??
            </Title>
          </Body>
        </Footer>
      </Container>
    );
  }
}
