'use strict';

var React = require('react-native');

var {
  StyleSheet,
} = React;

module.exports = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  welcome: {
    fontSize: 20,
    textAlign: 'center',
    margin: 10,

  },
  instructions: {
    textAlign: 'center',
    color: '#333333',
    marginBottom: 5,

   
  },
  username:{
    justifyContent: 'center',
    margin: 15,
    height: 40,
    borderColor: '#bfc4cc',
    backgroundColor: '#e3e7ed',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  
    
  },
  login:{
    justifyContent: 'center',
    margin: 15,
    height: 40,
    color: '#ffffff',
    borderColor: '#00a0db',
    backgroundColor: '#00B0F0',
    borderWidth: 1,
    borderRadius: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 2,
    elevation: 1,
  },
  tvf:{
    justifyContent: 'center',
    flexGrow:1,
    alignItems: 'center',
    margin: 15,
   
  },
  logoContainer:{
    height: 75,
    width:270,

  },

});