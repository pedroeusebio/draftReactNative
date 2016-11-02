import React, { Component } from 'react';
import {  AppRegistry, Text, TextInput, View, StyleSheet } from 'react-native';

const url = 'http://localhost:8000/pizza';

export class PizzaTranslator extends Component {
  constructor(props) {
    super(props);
    this.state = {text: '', json: ''};
  }


  async getTypePizza(text) {
    const response = await fetch(url);
    const json = await response.json();
    console.log(text);
    let result = (text == "" ?  '' : JSON.stringify(json));

    this.setState({json: result});
  }

  render() {
    return (
        <View style={styles.viewStyle}>
        <TextInput style={styles.input} placeholder='Type here to translate !' onChangeText={ (text) => this.getTypePizza(text)}/>
        <Text style={styles.text}>
        { this.state.json }
        </Text>
        </View>
    );
  }
}

const styles = StyleSheet.create({
  viewStyle: {
    padding: 10
  },
  input: {
    height: 40
  },
  text: {
    padding: 10
  }
});
