/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View
} from 'react-native';

export default class SplashWalls extends Component {
  render() {
    return (
     constructor(props) {
        super(props);

        this.state = {
          wallsJSON: [],
          isLoading: true
        };
      }

        fetchWallsJSON() {
        console.log(‘Wallpapers will be fetched’);
       }

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
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
});

AppRegistry.registerComponent('SplashWalls', () => SplashWalls);
