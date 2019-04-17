import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';

export default class BlockButton extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        fillColor: "#fff",
      }
    }

    onPressBlockButton() {
       setAppReady()
      if (this.state.fillColor == "#fff") {
        this.setState({
          fillColor: '#2DCB73',
        })
      } else {
        this.setState({
          fillColor: '#fff',
        })
      }
    }

    render() {
        if (this.state.fillColor == "#fff") {
            return (
              <View>
                <TouchableOpacity style={styles.blockButtonOutline} onPress={() => this.onPressBlockButton()}>
                    <Text style={styles.titleGreen}>START TOURNAMENT</Text>
                </TouchableOpacity>
              </View>
            );
        } else {
            return (
              <View>
                <TouchableOpacity style={styles.blockButtonPressed} onPress={() => this.onPressBlockButton()}>
                    <Text style={styles.titleWhite}>START TOURNAMENT</Text>
                </TouchableOpacity>
              </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  blockButtonOutline: {
    width: 270,
    height: 45,
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2DCB73',
    shadowColor: "#2DCB73",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  blockButtonPressed: {
    width: 270,
    height: 45,
    backgroundColor: '#2DCB73',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2DCB73',
    shadowColor: "#2DCB73",
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },

  titleGreen: {
    fontSize: 18,
    color: '#2DCB73'
  },

  titleWhite: {
    fontSize: 18,
    color: '#fff'
  }
});
