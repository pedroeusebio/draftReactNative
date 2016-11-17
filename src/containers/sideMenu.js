import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import R from 'ramda';

import { PizzaMenu } from '../components/pizzaMenu.js';
import { SizeMenu } from '../components/sizeMenu.js';
import { Header } from '../components/header.js';
import { SideContent } from '../components/sideContent.js';


export class MenuView extends Component {
  constructor() {
    super();
    this.state = { toggled: false};
  }

  showMenu() {
    if(true) {
      return (<PizzaMenu/>)
    } else {
      return (<SizeMenu/>)
    }
  }

  render() {

    const toggleSideMenu = () => {
     this.setState({
      toggled: !this.state.toggled
    });
    };

    return (
      <SideMenu
      MenuComponent={SideContent}
      toggled={this.state.toggled}>
        <View style={{flex: 1}}>
          <Header title={ 'MENU' } trigger={() => toggleSideMenu(this)} />
          {
            this.showMenu()
          }
        </View>
      </SideMenu>
    )
  }
}


const styles = StyleSheet.create({
  menuView: {
    flex: 1,
    backgroundColor: '#ededed',
    paddingTop: 50
  },
  title: {
    color: '#000'
  }
});
