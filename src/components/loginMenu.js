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
      raised
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
      <TouchableHighlight  onPress={() => console.log(this)}>
      <View style={styles.langButton}>
          <Image
            style={styles.lang}
            source={flag}
          />
         </View>
      </TouchableHighlight>
      );
  }

  render() {
    const { increment } = this.props;

    return(
    <View style={styles.loginView}>
      <LinearGradient colors={['#F58843', '#d57451', '#BF675B', '#9F5468']} style={styles.linearGradient}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../public/img/moveLogo.png')}
          />
        </View>
      <View style={styles.langContent}>
      <View style={styles.textLang}>
      <Text style={{color: '#f3f4f6'}}>Selecione o idioma desejado :</Text>
      </View>
        <View style={styles.langView}>
          { this.buttonLang(flags.BR) }
          { this.buttonLang(flags.US) }
          { this.buttonLang(flags.ES) }
        </View>
      </View>
      <View style={styles.buttonContent}>
        <View style={styles.buttonView}>
          {this.button('Entrar com e-mail', 'envelope-o' , styles.button, increment)}
        </View>
        <View style={styles.buttonView}>
          { this.button('Entrar com Facebook', 'facebook' , styles.button, increment) }
        </View>
      </View>
      <View style={styles.registerView}>
        <Text style={{color: '#f3f4f6'}}>Ainda não tem cadastro ?</Text>
        <Text style={{color:'#f0b7a6', fontSize: 20, lineHeight: 20 }}>Cadastre-se já</Text>
      </View>
      </LinearGradient>
    </View>
    );
  }
}

const styles = StyleSheet.create({
  linearGradient: {
    flex: 1,
    justifyContent: 'space-between',
  },
  loginView: {
    backgroundColor: '#f5fcff',
    flex: 1,
    flexDirection: 'column'
  },

  langContent: {
    justifyContent: 'space-between'
  },
  langView: {
    justifyContent: 'space-around',
    flexDirection: 'row',
    paddingBottom: 30
  },
  langButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 90,
    height: 40,
    borderWidth: 2,
    borderColor: '#f3f4f6',
    borderRadius: 10
  },
  textLang: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignSelf: 'center',
    marginBottom: 10
  },
  buttonContent: {
    marginBottom: 20
  },
  button: {
    borderRadius: 10,
    backgroundColor: '#f3f4f6',
  },
  buttonView: {
    paddingBottom: 10
  },
    logoView: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 80
  },
  logo: {
    width: 250,
    height: 110
  },
  registerView: {
    backgroundColor: 'rgba(0,0,0,0)',
    alignItems: 'center',
    marginBottom: 90
  }
});
