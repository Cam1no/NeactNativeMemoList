import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content,
         ListItem, List, Input,
         Body, Title, Button, Text,
         Footer,Icon, Right, Left, SwipeRow
        } from 'native-base';

import { AddToDo } from '../components/AddToDo';

export default class ToDo extends Component {
  render() {
    return (
      <Container>
        <Header>
          <Left/>
          <Body>
            <Title>
              ToDo
            </Title>
          </Body>
          <Right>
          </Right>
        </Header>
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
            <Icon name='arrow-up' onPress={() => alert('AddTodo')}/>
          </Button>
        </Footer>
      </Container>
    );
  }
}
