import React, { Component } from 'react';
import {  AppRegistry, Text, TextInput, View, StyleSheet, ListView, Navigator } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import R from 'ramda';


const url = 'http://localhost:8000/pizza';

const styles = StyleSheet.create({
  viewStyle: {
    flex: 1,
    backgroundColor: '#ffeded',
  },
  input: {
    height: 40,
  },
  text: {
    padding: 10
  }
});


export default class PizzaMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {};
    this.getAllPizza()
  }

  async getAllPizza() {
    const response = await fetch(url);
    const json = await response.json();

    let row = R.map((x) => this.addListItem(x), json.payload);
    this.setState({content: row});
  }

  addListItem(item) {
    return(
      <ListItem
      key={item.id}
      title={item.tipo}
      subtitle={"Pizza de " + item.tipo}
      onPress={this.props.increment }
      />
    );
  }

  render() {
    console.log(this.props);
    return (
      <View  style={styles.viewStyle}>
        <List containerStyle={{marginBottom: 20}}>
          {
            this.state.content
          }
        </List>
      </View>
    );
  }
}

/* export default connect(state => ({
 *   state: state.count
 * }),
 *   (dispatch) => ({
 *     actions: bindActionCreators(actions, dispatch)
 *   })
 *   )(PizzaMenu);*/
