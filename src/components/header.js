import React, { Component } from 'react';
import { AppRegistry, Text, View, StyleSheet } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome.js';


export class Header extends Component {
  render() {
    const { trigger, title } = this.props;

    return (
      <View style={styles.header}>
        <Icon style={styles.iconLeft} name='bars' size={25} color="#ededed" onPress={ () => trigger() }/>
        <Text style={styles.title}>{ title }</Text>
        <Icon style={styles.iconRight} name='plus' size={25} color="#ededed"/>

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
    paddingLeft: 10
  },
  iconRight: {
    paddingRight: 10
  },
  title: {
    color: '#fff',
    fontSize: 16,
    alignSelf: 'center'
  }
});
