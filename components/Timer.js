import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';

export default class Timer extends React.Component {
    render() {
        let minutes = Math.floor(this.props.mil / 60000) || 0,
            seconds = Math.floor((this.props.mil - minutes * 1000 * 60) / 1000) || 0
        return (
            <View>
                <Text>{this.props.mil}</Text>
                <Text style={{
                    fontFamily: 'roboto-mono',
                    fontSize: 42,
                    color: "#000"
                }}>{minutes}:{seconds}</Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#F0F0F0',
        flex: 1
    }
});
export {Timer}
