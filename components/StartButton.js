import React from 'react';
import { LinearGradient } from 'expo';
import Ripple from 'react-native-material-ripple';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

const
    START_TEXT = 'START',
    STOP_TEXT = 'STOP';

export default class StartButton extends React.Component {

    constructor(props) {
        super(props)

        this.action = this.props.action
    }

    state = {
        started: false,
        text: START_TEXT,
        gradientColors: ['#2ecc71', '#1abc9c'],
    }

    onPressActionButton() {

        this.action(!this.state.started)

        if (!this.state.started) {
            this.setState({
                started: false,
                text: START_TEXT,
                gradientColors: ['#2ecc71', '#1abc9c'],
            })
        } else {
            this.setState({
                started: true,
                text: STOP_TEXT,
                gradientColors: ['#B53471', '#c0392b'],
            })
        }
    }

    render() {
        return (
            <View style={styles.container}>
                <Ripple
                    onPress={() => this.onPressActionButton()}
                    rippleCentered={false}
                    rippleContainerBorderRadius={wp('7%')}
                    style={{height: wp('12%'), width: wp('43%'), borderRadius: 25}}
                >
                    <TouchableOpacity style={styles.rippleStart}>
                        <LinearGradient
                            style={{
                                height: wp('13%'),
                                width: wp('43%'),
                                justifyContent: 'center',
                                alignItems: 'center',
                                borderRadius: 25,
                            }}
                            colors={this.state.gradientColors}
                        >
                            <Text
                                style={{fontSize: wp('4%'), fontWeight: '600', color: '#fff'}}>{this.state.text}</Text>
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
