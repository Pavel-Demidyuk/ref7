import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';

export default class Timer extends React.Component {
    render() {
        let minutes = Math.floor(this.props.mil / 60000) || 0,
            seconds = Math.floor((this.props.mil - minutes * 1000 * 60) / 1000) || 0
        return (
            <View>
                <Text style={{
                    fontFamily: 'roboto-mono',
                    fontSize: wp('12%'),
                    color: "#000"
                }}>{this.state.minutes > 10 ? this.state.minutes : "0" + this.state.minutes}:{this.state.seconds > 10 ? this.state.seconds : "0" + this.state.seconds}:{this.state.millis > 10 ? this.state.millis : "0" + this.state.millis}</Text>
            </View>
        );
    }
}


export { Timer }
