/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Input, Form, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { addTodo } from '../actions/';

export class AddTodoScreen extends Component {
  constructor(props){
    super(props);
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Input
              placeholder="Underline Textbox"
              maxHeight={100}
            />
            <Button block info type="submit" onPress={(e) => addTodo('Hi')}>
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

const mapStateToProps = state => ({
  text: state.text,
});

export default connect(mapStateToProps,{ addTodo })(AddTodoScreen)
