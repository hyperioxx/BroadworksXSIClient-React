import React, {Component} from 'react';
import { Image,TouchableOpacity,Alert,Platform, StyleSheet, Text, View,TextInput} from 'react-native';
import base64 from 'base-64';

import { Button } from 'react-native'

import styles from '../styles'


export default class Home extends React.Component{

	constructor(props){
		super(props)
		this.GLOBAL = require('../global/global');
		this.test = this.test.bind(this)
	}
    

    test(){
        console.log(this.GLOBAL.PROFILE_DATA)
    	//return JSON.stringify();

    }

	render(){
         this.test()
		return(

			<View style={styles.container}>
			<Text style={styles.welcome}>
			   {this.GLOBAL.FIRST_NAME}
			</Text>

			</View>)
	}

}