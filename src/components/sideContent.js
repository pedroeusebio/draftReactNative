import React, { Component } from 'react';
import { AppRegistry, StyleSheet, View } from 'react-native';
import { List, ListItem } from 'react-native-elements';
import R from 'ramda';

const list = [
  {index: 0, name: 'Cooperar', subtitle: 'Cooperar'},
  {index: 1, name: 'Doar Objetos', subtitle: 'Doar Objetos'},
  {index: 2, name: 'Doar Sangue', subtitle: 'Doar Sangue'},
  {index: 3, name: 'Aderir', subtitle: 'Aderir'},

];

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


function menuList(list){
  const listView = (item) => {
    return(
      <ListItem
      titleStyle={styles.title}
      key={item.index}
      title={item.name}
      subtitle={item.subtitle}
      />
    );
  };
  let elements = R.map((x) => listView(x), list);
  return(
    elements
  );
}

export const SideContent = (
  <View style={styles.menuView}>
  <List containerStyle={{marginBottom: 20}}>
  {
    menuList(list)
  }
    </List>
    </View>
);

