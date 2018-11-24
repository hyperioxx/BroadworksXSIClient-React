import React, {Component} from 'react';
import { Image,TouchableOpacity,Alert,Platform, StyleSheet, Text, View,TextInput,KeyboardAvoidingView } from 'react-native';
import base64 from 'base-64';

import { Button } from 'react-native'
import home from '../components/home'
import styles from '../styles'


export default class Login extends React.Component {

   constructor(props) {
    super(props)

    this.GLOBAL = require('../global/global');

    this.state = {
       username:'',
       password:'',
       api :"https://api.thevoicefactory.co.uk/com.broadsoft.xsi-actions/v2.0/user/{1}/profile?format=json",
       user_profile:'',
     }

     this.handlePass = this.handlePass.bind(this);
     this.handleUsername = this.handleUsername.bind(this)
     this.handleProfile = this.handleProfile.bind(this)
     this._onPressButton = this._onPressButton.bind(this)
     this.login = this.login.bind(this)
    
    };
  

  handlePass(pass) {
     this.GLOBAL.PASSWORD=pass
     this.setState({password: pass})
  }

  handleUsername(user) {
    this.GLOBAL.USERNAME = user
    this.setState({username:user})
  }

  handleProfile(jsonobj){
    jsonobj.then(function(data){ var x = JSON.parse(data) ;
                                  console.log(x.Profile);
    /*this.GLOBAL.FIRST_NAME =  data.['Profile'].firstName;
                                 this.GLOBAL.LAST_NAME = data.['Profile'].lastName;
                                 this.GLOBAL.NUMBER = data.['Profile'].number;
                                 this.GLOBAL.GROUPID = data.['Profile'].groupId;
                                 this.GLOBAL.USER_ID = data.['Profile'].userId;
                                 //this.GLOBAL.SERVICE_PROVIDER = data['Profile']['serviceProvider']['$']*/
                                })
    this.setState({user_profile:jsonobj})
  }

  _onPressButton(mes) {
    Alert.alert(mes)
  }

  login(){

     var api = this.state.api.replace("{1}",this.state.username);
     
     fetch(api,{ method: 'GET',
                 headers: {
                 'Authorization': 'Basic '+ base64.encode(this.state.username+":"+this.state.password)},})
     .then((responce) => {if (responce.ok){
        this.handleProfile(responce.json())
        this._onPressButton("Succsess")
        //debugger;
        this.props.navigator.push({
          component: home
        })
        }else {
          console.log(false)
          this._onPressButton("Failed Login")
        }

     })

  }


  render() {
    return (
      <KeyboardAvoidingView
      style={styles.container}
      behavior="padding"
    >
      <View style={styles.container}>
        <View style={styles.tvf}>
           <Image source={require('../img/TheVoiceFactory_Logo.png')} style={ styles.logoContainer }/>
        </View>
        
        <View style={styles.username}>
        <TextInput placeholder=" Username"  onChangeText = {e => this.handleUsername(e)} />
        </View>
        <View  style={styles.username}>
        <TextInput secureTextEntry={true} placeholder=" Password" onChangeText = {e => this.handlePass(e)} />
        </View>
        <View style={styles.login}>
        <Button title='Login'
            color= 'white'
            onPress = {e => this.login(e)} />
        </View>
      </View>
      </KeyboardAvoidingView>

      
      
    );
  }
}
