import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';


export class Header extends Component {
  render() {
    return (
      <View style={styles.header}>
        <Text style={styles.title}>{ this.props.title }</Text>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
    height: 40,
    paddingTop: 10,
    marginBottom: 5,
    backgroundColor: 'skyblue',
  },
  title: {
    color: '#fff',
    fontSize: 16
  }
});
