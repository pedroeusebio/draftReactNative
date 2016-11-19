import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome.js';


export class Header extends Component {
  render() {
    const { triggerLeft, triggerRight, title } = this.props;
    return (
      <View style={styles.header}>
        <Icon style={styles.iconLeft} name='bars' size={25} color="#ededed" onPress={ () => triggerLeft() }/>
        <Text style={styles.title}>{ title }</Text>
        <Icon style={styles.iconRight} name='user' size={25} color="#ededed" onPress={ () => triggerRight() }/>
      </View>
    );
  }
}


const styles = StyleSheet.create({
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingTop: 20,
    backgroundColor: '#FF9466',
  },
  iconLeft: {
    alignSelf: 'flex-start',
    paddingLeft: 10
  },
  iconRight: {
    paddingRight: 10
  },
  title: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'flex-end',
  }
});
