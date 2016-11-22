import React, { Component } from 'react';
import {  AppRegistry, Text, View, StyleSheet, Image, TouchableHighlight } from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import { SocialIcon, Button } from 'react-native-elements';
import R from 'ramda';
import * as flags from '../../public/img/Flags';

export class LoginMenu extends Component {
  constructor(props) {
    super(props);
  }

  button(title, icon, style, increment) {
    return(
   <Button
     icon={{name: icon, type: 'font-awesome', color: '#9a5c75'}}
     title={title}
     buttonStyle={style}
     color="#9a5c75"
     onPress={increment}
   />
    );
  }

  buttonLang(flag) {
    return (
      <View style={styles.langButton}>
        <TouchableHighlight onPress={() => console.log('pertei')}>
          <Image
            style={styles.lang}
            source={flag}
          />
        </TouchableHighlight>
      </View>
      );

  }

  render() {
    const { increment } = this.props;

    return(
    <View style={styles.loginView}>
      <LinearGradient colors={['#F58843', '#BF675B', '#9F5468']} style={styles.linearGradient}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../public/img/moveLogo.png')}
          />
        </View>
        <View style={styles.langView}>
          { this.buttonLang(flags.BR) }
          { this.buttonLang(flags.US) }
          { this.buttonLang(flags.ES) }
        </View>
        <View style={styles.buttonView}>
          {this.button('Entrar com E-mail', 'envelope-o' , styles.button, increment)}
        </View>
        <View style={styles.buttonView}>
          { this.button('Entrar com Facebook', 'facebook' , styles.button, increment) }
        </View>
        {/* <View style={styles.registerView}>
            <Text>Ainda não tem cadastro ?</Text>
            <Text>Cadastre-se já</Text>
            </View> */}
      </LinearGradient>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'center',
    paddingTop: 15,
    flexDirection: 'column'
  },
  loginView: {
    backgroundColor: '#f5fcff',
    flex: 1,
  },
  button: {
    borderRadius: 15,
    backgroundColor: '#FFF',
  },
  buttonView: {
    paddingBottom: 20
  },
  langView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 40
  },
  lang: {
  },
  langButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 40,
    backgroundColor: 'white',
    borderRadius: 10
  },
  logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingBottom: 40
  },
  logo: {
    width: 250,
    height: 110
  }
});
