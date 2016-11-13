import React, { Component } from 'react';
import {  AppRegistry, Text, TextInput, View, StyleSheet, ListView, Navigator } from 'react-native';
import R from 'ramda';

import { ListViewBasics, NavigatorView, MyScene } from './listViewBasics.js';


const url = 'http://localhost:8000/pizza';

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', json: ''};
  }

  async getAllPizza(text) {
    const response = await fetch(url);
    const json = await response.json();

    let result = (text == "" ?  '' : JSON.stringify(json.payload));
    let row = R.map((x) => this.addRow(x), json.payload);
    this.state.row = (text == "" ?  '' : row);
    console.log(this.state.row);
    this.setState({json: result});
  }

  addRow(text) {
      return (<ListViewBasics name={text}/>);
  }

  render() {
    return (
      <View  style={styles.viewStyle}>
        <TextInput style={styles.input} placeholder='Type here to translate !' onChangeText={ (text) => this.getAllPizza(text)}/>
        <View>
          { this.state.row }
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#ededed',
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
