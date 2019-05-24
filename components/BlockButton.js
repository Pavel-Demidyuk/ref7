import React, { Component } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

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
    width: wp('75%'),
    height: wp('12%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2DCB73',
    shadowColor: "#2DCB73",
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.62,
    shadowRadius: 2.22,
    elevation: 5,
  },

  blockButtonPressed: {
    width: wp('75%'),
    height: wp('12%'),
    backgroundColor: '#2DCB73',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2DCB73',
    shadowColor: "#2DCB73",
    shadowOffset: {width: 3, height: 3},
    shadowOpacity: 0.62,
    shadowRadius: 2.22,
    elevation: 5,
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
