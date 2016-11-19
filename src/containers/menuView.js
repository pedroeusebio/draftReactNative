import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import R from 'ramda';

import PizzaMenu from '../components/pizzaMenu.js';
import { SizeMenu } from '../components/sizeMenu.js';
import { Header } from '../components/header.js';
import { SideContent } from '../components/sideContent.js';
import * as counterActions from '../actions/counterActions';


class MenuView extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false};
    console.log(this.props);
  }

  showMenu(state, actions) {
    if(state.count == 0) {
      return (<PizzaMenu  {...actions}/>)
    } else {
      return (<SizeMenu/>)
    }
  }

  render() {
    const { state, actions } = this.props;
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
          <Header title={ 'MENU' } triggerLeft={() => toggleSideMenu(this)} />
          {
            this.showMenu(state, actions)
          }
        </View>
      </SideMenu>
    )
  }
}

export default connect (state => ({
  state: state.counter
}),
  (dispatch) => ({
    actions: bindActionCreators(counterActions, dispatch)
  })
  )(MenuView);

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
