import React, { Component } from 'react';
import { View } from 'react-native';
import { Bars } from 'react-native-loader';

export default class Loader extends React.Component {
  render() {
    return (
      <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
          <Bars size={20} color="#000"/>
      </View>
    );
  }
}
