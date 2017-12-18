import { View } from 'react-native';
import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Container, Header, Content,
         ListItem, List, Input,
         Body, Title, Button, Text,
         Footer,Icon, Right, Left, SwipeRow
        } from 'native-base';

export class ToDoScreen extends Component {
  constructor(props){
    super(props);
    console.log(this.props.currentUser);
  }

  render() {
    return (
      <Container>
        <Content>
          <SwipeRow
            rightOpenValue={-75}
            body={
              <View>
                <Text>SwipeRow Body Text</Text>
              </View>
            }
            right={
              <Button danger onPress={() => alert('Trash')}>
                <Icon active name="trash" />
              </Button>
            }
          />
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
  currentUser: state.currentUser
});

export default connect(mapStateToProps)(ToDoScreen);
