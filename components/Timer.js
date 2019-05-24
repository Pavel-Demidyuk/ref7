import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Timer extends React.Component {
    render() {
        let minutes = Math.floor(this.props.mil / 60000) || 0,
            seconds = Math.floor((this.props.mil - minutes * 1000 * 60) / 1000) || 0
        return (
            <View>
                <Text style={{
                    fontFamily: 'roboto-mono',
                    fontSize: 42,
                    color: "#000"
                }}>{this.state.minutes > 10 ? this.state.minutes : "0" + this.state.minutes}:{this.state.seconds > 10 ? this.state.seconds : "0" + this.state.seconds}:{this.state.millis > 10 ? this.state.millis : "0" + this.state.millis}</Text>
            </View>
        );
    }
}


export { Timer }
