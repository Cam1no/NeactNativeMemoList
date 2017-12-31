/* @flow */
import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Content, Input, Form, Button, Text } from 'native-base';
import { connect } from 'react-redux';
import { addTodo } from '../actions/';
import firebase from 'firebase';
require('firebase/firestore')

export class CreateTodoScreen extends Component {
  constructor(props){
    super(props);
    state = {
      text: '',
    }
  }

  handleSubmit(){
    const db = firebase.firestore();
    console.log(this.props);
    db.collection(`users/${this.props.currentUser.uid}/memos`).add({
        body: this.state.text,
        createdOn: new Date()
    })
    .then((docRef) => {
        console.log("Document written with ID: ", docRef);
        this.props.addTodo(this.state.text);
        this.props.navigation.goBack();
    })
    .catch((error) => {
        console.error("Error adding document: ", error);
    });
  }

  render() {
    return (
      <Container>
        <Content>
          <Form>
            <Input
              placeholder="Underline Textbox"
              maxHeight={100}
              onChangeText={(text) => this.setState({ text })}
            />
            <Button block info type="submit" onPress={this.handleSubmit.bind(this)}>
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
  currentUser: state.currentUser,
});

export default connect(mapStateToProps,{ addTodo })(CreateTodoScreen)
