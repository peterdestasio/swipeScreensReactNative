import React, { Component } from 'react';
import {
  AppRegistry,
  StatusBar,
} from 'react-native';
import Screens from './Screens';

export default class Onboarding extends Component {

  componentDidMount(){
    //Hide the status bar
    StatusBar.setHidden(true);
  }

  render() {
    return (
      <Screens />
    );
  }
}


AppRegistry.registerComponent('Onboarding', () => Onboarding);
