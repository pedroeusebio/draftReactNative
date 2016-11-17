import React, { Component } from 'react';
import {  AppRegistry, Text, TextInput, View, StyleSheet, ListView, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import R from 'ramda';


const url = 'http://localhost:8000/pizza';

export class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', json: ''};
    this.getAllPizza()
  }

  async getAllPizza() {
    const response = await fetch(url);
    const json = await response.json();

    let row = R.map((x) => this.addListItem(x), json.payload);
    this.setState({content: row});
  }

  addListItem(item) {
    return(
      <ListItem
      key={item.id}
      title={item.tipo}
      subtitle={"Pizza de " + item.tipo}
      onPress={ () =>  console.log('asdasd')}
      />
    );
  }

  render() {
    return (
      <View  style={styles.viewStyle}>
        <TextInput style={styles.input} placeholder='Type here to translate !' onChangeText={ (text) => this.setState({content:<Text></Text>})}/>
        <List containerStyle={{marginBottom: 20}}>
          {
            this.state.content
          }
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#ffeded',
  },
  input: {
    height: 40,
  },
  text: {
    padding: 10
  },
  navigator: {
  }
});
