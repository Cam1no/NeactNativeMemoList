import { View } from 'react-native';
import React, { Component } from 'react';
import { Container, Header, Content,
         ListItem, List, Input,
         Body, Title, Button, Text,
         Footer,Icon, Right, Left
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
            <Button transparent>
              <Icon name="trash" />
            </Button>
          </Right>
        </Header>
        <Content>
          <List>
            <ListItem>
              <Text>
                HelloWorld
              </Text>
            </ListItem>
          </List>
        </Content>
        <Footer>
          <Button>
            <Icon name='arrow-up'/>
          </Button>
        </Footer>
      </Container>
    );
  }
}
