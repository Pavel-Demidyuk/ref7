import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import { RFPercentage } from 'react-native-responsive-fontsize';

// import styles from '../styles';

const circleSize = Math.min(wp('80%'), hp('40%'));
const btnHeight = Math.min(hp('12%'), 64);

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        flexDirection: 'column',
        alignItems: 'center'
    },

    circle: {
        marginTop: hp('10%'),
        width: wp('75%'),
        height: wp('75%'),
        backgroundColor: '#fff',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.16,
        shadowRadius: 100,
        elevation: 10,
        alignItems: 'center',
        justifyContent: 'center'
    },

    infoCard: {
        marginTop: hp('4%'),
        width: wp('75%'),
        height: hp('35%'),
        alignItems: 'center',
        backgroundColor: '#fff',
        borderRadius: 39,
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.16,
        shadowRadius: 100,
        elevation: 10
    },

    actionButton: {
        marginTop: hp('0.5%'),
        width: wp('65%'),
        height: hp('8%')
    },

    gradient: {
        width: wp('65%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#00FF88',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.72,
        shadowRadius: 1,
        elevation: 10
    }
});

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
                ...styles.container,
                backgroundColor: background
            }}
        >
            <View
                style={{
                    ...styles.circle,
                    borderRadius: circleSize / 2,
                    borderWidth: needCircleBorder ? 2 : 0
                }}
            >
                {circle(circleSize)}
            </View>
            <View style={{ ...styles.infoCard }}>
                <View style={{ overflow: 'hidden' }}>
                    {id ? <View style={{ marginTop: 8 }}>{id()}</View> : null}
                    {text()}
                    <View style={{ marginTop: hp('4%') }}></View>
                </View>
                <TouchableOpacity style={styles.actionButton} onPress={onPress}>
                    <LinearGradient
                        colors={colors}
                        style={{
                            ...styles.gradient,
                            borderRadius: btnRound
                        }}
                    >
                        <Text
                            style={{
                                fontSize: RFPercentage(2.8),
                                fontWeight: 'bold',
                                color: '#fff'
                            }}
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
