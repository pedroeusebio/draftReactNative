import React, { Component } from 'react';
import {  AppRegistry, Text, TextInput, View, StyleSheet, ListView } from 'react-native';
import R from 'ramda'; 

import { ListViewBasics } from './listViewBasics.js';


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
    this.state.row = R.map((x) => this.addRow(x), json.payload);
    this.setState({json: result});
  }

  addRow(text) {
      return (<ListViewBasics name={text}/>);
  }

  render() {
    return (
      <View style={styles.viewStyle}>
      <TextInput style={styles.input} placeholder='Type here to translate !' onChangeText={ (text) => this.getAllPizza(text)}/>
      <Text style={styles.text}>
      { this.state.json }
      </Text>
      <View>
      { this.state.row }
      </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 20
  },
  input: {
    height: 40,
    borderColor: '#f00',
    borderWidth: 1,
  },
  text: {
    padding: 10
  }
});
