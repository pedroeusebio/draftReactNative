import React, { Component } from 'react';
import {  AppRegistry, Text, TextInput, View, StyleSheet, ListView, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import R from 'ramda';


const url = 'http://localhost:8000/size';

export class SizeMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', json: ''};
    this.getAllSize()
  }

  async getAllSize() {
    const response = await fetch(url);
    const json = await response.json();
    console.log(json.payload);
    let row = R.map((x) => this.addListItem(x), json.payload);
    this.setState({content: row});
  }

  addListItem(item) {
    return(
      <ListItem
      key={item.id}
      title={item.size}
      subtitle={item.radio + "cm de Raio."}
      onPress={ () => console.log('asdasd') }
      />
    );
  }

  render() {
    return (
      <View  style={styles.viewStyle}>
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
