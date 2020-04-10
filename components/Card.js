import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';

import CardStyle from "../styles/CardStyle";

const circleSize = Math.min(wp('80%'), hp('40%'));
const btnHeight = Math.min(hp('12%'), 64);


function Card({
    background = '#EEFFF5',
    circle,
    text,
    button,
    onPress,
    colors = ['#00FA87', '#00F4BB'],
    id,
    btnRound = btnHeight / 2,
    needCircleBorder = false
}) {
    return (
        <View
            style={{
                ...CardStyle.styles.container,
                backgroundColor: background
            }}
        >
            <View
                style={{
                    ...CardStyle.styles.circle,
                    borderRadius: circleSize / 2,
                    borderWidth: needCircleBorder ? 2 : 0
                }}
            >
                {circle(circleSize)}
            </View>
            <View style={{ ...CardStyle.styles.infoCard }}>
                <View style={{ overflow: 'hidden' }}>
                    {id ? <View style={{ marginTop: 8 }}>{id()}</View> : null}
                    {text()}
                </View>
                <TouchableOpacity style={CardStyle.styles.actionButton} onPress={onPress}>
                    <LinearGradient
                        colors={colors}
                        style={{
                            ...CardStyle.styles.gradient,
                            borderRadius: btnRound
                        }}
                    >
                        <Text
                            style={CardStyle.styles.buttonLabel}
                        >
                            {button}
                        </Text>
                    </LinearGradient>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export { Card };
