
import React, {Component} from 'react';
import { Image,TouchableOpacity,Alert,Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import {Navigator} from 'react-native-deprecated-custom-component'
import base64 from 'base-64';
import { Button } from 'react-native'
import styles from './styles'
import home from './components/home'
import login from './components/login'


export default class App extends Component {

  renderScene(route,navigator){
    return <route.component navigator={navigator}/>

  }

  render(){
    return(
      <Navigator
          initialRoute = {{component: login}}
          renderScene = {this.renderScene.bind(this)}/>
      )
  }  
}




