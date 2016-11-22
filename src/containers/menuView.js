import React, { Component } from 'react';
import { AppRegistry, StyleSheet, Text, View, Image } from 'react-native';
import { SideMenu, List, ListItem } from 'react-native-elements';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

import R from 'ramda';

import PizzaMenu from '../components/pizzaMenu';
import { LoginMenu } from '../components/loginMenu';
import { SizeMenu } from '../components/sizeMenu';
import { Header } from '../components/header';
import { SideContent } from '../components/sideContent';
import * as counterActions from '../actions/counterActions';


class MenuView extends Component {
  constructor(props) {
    super(props);
    this.state = { toggled: false};
  }

  showMenu(state, actions) {
    if(state.count == 0) {
      return (<LoginMenu state={state} {...actions}/>)
    } else if(state.count == 1) {
      return ( <PizzaMenu state={state} {...actions}/> )
    } else {
      return ( <SizeMenu/> )
    }
  }

  showHeader(state, toggleSideMenu) {
    if(state.count > 0) {
      return (
        <Header title={ 'MENU' } triggerLeft={() => toggleSideMenu(this)} />
      );
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
      { this.showHeader(state, toggleSideMenu) }
      { this.showMenu(state, actions) }
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
