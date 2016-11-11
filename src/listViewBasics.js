import React, { Component, PropTypes } from 'react';
import { AppRegistry, ListView, Text, View, StyleSheet, Navigator, TouchableHighlight } from 'react-native';


export class ListViewBasics extends Component {
  render() {
    return (
      <Text>{this.props.name}</Text>
    );
  }
}

export class MyScene extends Component {
  render() {
    return (
      <View style={styles.view}>
        <Text style={styles.text}>Current Scene: { this.props.title }</Text>
        <TouchableHighlight onPress={this.props.onForward}>
          <Text style={styles.text}>Tap me to load the next scene</Text>
        </TouchableHighlight>
        <TouchableHighlight onPress={this.props.onBack}>
          <Text style={styles.text}>Tap me to go back</Text>
        </TouchableHighlight>
      </View>
    )
  }
}

MyScene.propTypes = {
  title: PropTypes.string.isRequired,
  onForward: PropTypes.func.isRequired,
  onBack: PropTypes.func.isRequired,
};

export class NavigatorView extends Component {
  render() {
    return (
      <Navigator
        initialRoute={{ title: 'My Initial Scene', index: 0 }}
        renderScene={(route, navigator) =>
          <MyScene
            title={route.title}

            onForward={ () => {
                const nextIndex = route.index + 1;
                navigator.push({
                  title: 'Scene ' + nextIndex,
                  index: nextIndex,
                });
              }}

            onBack={() => {
                if (route.index > 0) {
                  navigator.pop();
                }
              }}
          />
        }
      />
    )
  }
}


const styles = StyleSheet.create({
  view:{
  },
  text: {
    color: '#000'
  }
});
