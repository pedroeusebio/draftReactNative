import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import R from 'ramda';

import { PizzaTranslator } from '../components/pizzaTranslator.js';
import { Header } from '../components/header.js';

const list = [
  {index: 0, name: 'Cooperar', subtitle: 'Cooperar'},
  {index: 1, name: 'Doar Objetos', subtitle: 'Doar Objetos'},
  {index: 2, name: 'Doar Sangue', subtitle: 'Doar Sangue'},
  {index: 3, name: 'Aderir', subtitle: 'Aderir'},

];

export class MenuView extends Component {
  constructor() {
    super();
    this.state = { toggled: false};
  }
  menuList(list){
    const listView = (item) => {
      return(
        <ListItem
          titleStyle={styles.title}
          key={item.index}
          title={item.name}
          subtitle={item.subtitle}
        />
      )
      };
    let elements = R.map((x) => listView(x), list);
    return(
      elements
    );
  }

  render() {
    const MenuComponent = (
        <View style={styles.menuView}>
          <List containerStyle={{marginBottom: 20}}>
            {
              this.menuList(list)
            }
          </List>
        </View>
    );
    const toggleSideMenu = () => {
     this.setState({
      toggled: !this.state.toggled
    });
    };
    return (
      <SideMenu
      MenuComponent={MenuComponent}
      toggled={this.state.toggled}>
        <View style={{flex: 1}}>
          <Header title={ 'MENU' } trigger={() => toggleSideMenu(this)} />
          <PizzaTranslator/>
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
