import { View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content,
         ListItem, List, Input,
         Body, Title, Button, Text,
         Footer,Icon, Right, Left, SwipeRow
        } from 'native-base';
import firebase from 'firebase';
import { getTodoLists } from '../actions/';

require('firebase/firestore')

export class ToDoScreen extends Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    const db = firebase.firestore();
    const memoList = [];
    db.collection(`users/${this.props.currentUser.uid}/memos`)
      .get()
      .then((querySnapshot) => {
        querySnapshot.forEach((doc) => {
          memoList.push(doc.data());
        });
        this.props.getTodoLists(memoList);
      })
      .catch((error) => {
        console.log(error);
      })
  }

  render() {
    return (
      <Container>
        <Content>
          {
            this.props.todos.map((todo, i) => {
              return (
                <SwipeRow
                  key={`memo-${i}`}
                  rightOpenValue={-75}
                  body={
                    <View>
                      <Text>{todo.body}</Text>
                    </View>
                  }
                  right={
                    <Button danger onPress={() => alert('Trash')}>
                      <Icon active name="trash" />
                    </Button>
                  }
                />
              );
            })
          }
        </Content>
        <Footer>
          <Button>
            <Icon name='arrow-up' onPress={() => this.props.navigation.navigate('AddTodo')}/>
          </Button>
        </Footer>
      </Container>
    );
  }
}


const mapStateToProps = state => ({
  currentUser: state.currentUser,
  todos: state.todos,
});

export default connect(mapStateToProps, { getTodoLists })(ToDoScreen);
