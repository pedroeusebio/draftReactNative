import React, { Component } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet } from 'react-native';


export class ListViewBasics extends Component {
  render() {
    return (
        <Text>{this.props.name}</Text>
    );
  }
}


const styles = StyleSheet.create({
});
