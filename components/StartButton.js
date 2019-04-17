import React from 'react';
import {LinearGradient} from 'expo';
import Ripple from 'react-native-material-ripple';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';

const
    START_TEXT = 'START',
    STOP_TEXT = 'STOP';

export default class StartButton extends React.Component {

    state = {
        started: false,
        text: START_TEXT,
        gradientColors: ['#2ecc71', '#1abc9c'],
    }

    onPressActionButton() {

        this.props.action(this.state.started ? false : true)

        if (this.state.started) {
            this.setState({
                started: false,
                text: START_TEXT,
                gradientColors: ['#B53471', '#c0392b'],
            })
        } else {
            this.setState({
                started: true,
                gradientColors: ['#2ecc71', '#1abc9c'],
                text: STOP_TEXT
            })
        }


    }

    render() {
        return (
            <View style={styles.container}>
                <Ripple
                    onPress={() => this.onPressActionButton()}
                    rippleCentered={false}
                    rippleContainerBorderRadius={25}
                    style={{height: 45, width: 155, borderRadius: 25}}
                >
                    <TouchableOpacity style={styles.rippleStart}>
                        <LinearGradient
                            style={{
                                height: 47,
                                width: 155,
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 25,
                            }}
                            colors={this.state.gradientColors}
                        >
                            <Text
                                style={{fontSize: 16, fontWeight: '600', color: '#fff'}}>{this.state.text}</Text>
                        </LinearGradient>
                    </TouchableOpacity>
                </Ripple>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    rippleStart: {
        width: 125,
        height: 35,
        borderRadius: 25,
    },
});
