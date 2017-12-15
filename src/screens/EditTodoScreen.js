/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Input } from 'native-base';

export default class EditTodoScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Input placeholder="Underline Textbox" />
        </Content>
      </Container>
    );
  }
}
