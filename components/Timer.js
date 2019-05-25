import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Timer extends React.Component {
  state = {
      minutes:null,
      seconds:null
  }
    render() {
        let minutes = Math.floor(this.props.mil / 60000) || 0,
            seconds = Math.floor((this.props.mil - minutes * 1000 * 60) / 1000) || 0
        return (
            <View>
                <Text style={{
                    fontFamily: 'roboto-mono',
                    fontSize: 42,
                    color: "#000"
                }}>{minutes > 10 ? minutes : "0" + minutes}:{seconds > 10 ? seconds : "0" + seconds}</Text>
            </View>
        );
    }
}


export { Timer }
