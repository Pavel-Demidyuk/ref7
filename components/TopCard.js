import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import { LinearGradient } from 'expo-linear-gradient';
import {RFPercentage} from "react-native-responsive-fontsize";


const btnHeight = Math.min(hp('12%'), 64);

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        flexDirection: 'column',
        alignItems: 'center',
    },

    topCard: {
        height: hp('76%'),
        width: wp('100%'),
        alignItems: 'center',
        flexDirection: 'column',
        backgroundColor: '#fff',
        borderBottomLeftRadius: 39,
        borderBottomRightRadius: 39,
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.16,
        shadowRadius: 100,
        elevation: 10,
        overflow: 'hidden'
    },

    infoContainer: {
        marginTop: hp('7%'),
        justifyContent: 'center',
    },

    textInfo: {
       marginTop: hp('1%'),
       alignItems: 'center',
       color: '#000',
    },

    actionButton : {
        marginTop: hp('5%'),
        width: wp('70%'),
        height: hp('8%'),

    },

    gradient: {
        width: wp('70%'),
        height: hp('8%'),
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#00FF88',
        shadowOffset: {
            width: 0,
            height: 0,
        },
        shadowOpacity: 0.72,
        shadowRadius: 1,
        elevation: 10
    }
});

function TopCard ({
    background="#EEFFF5",
    text,
    infoContainer,
    button,
    onPress,
    id,
    btnRound = btnHeight / 2,
}) {
    return (
        <View
            style={{
                ...styles.container,
                backgroundColor: background,
            }}
        >
            <View style={styles.topCard}>
                <View style={styles.infoContainer}>
                    {infoContainer()}
                </View>
                <View style={styles.textInfo}>
                    {id ? <View style={{ marginTop: hp('1%') }}>{id()}</View> : null}
                    {text()}
                    <View style={{ marginTop: hp('4%') }}>
                    </View>
                </View>
            </View>
            <TouchableOpacity
                style={styles.actionButton}
                onPress={onPress}
            >
                <LinearGradient
                    colors={['#00FA87', '#00F4BB']}
                    style={{
                        ...styles.gradient,
                        borderRadius: btnRound,
                    }}
                >
                    <Text
                        style={{
                            fontSize: RFPercentage(2.5),
                            fontWeight: 'bold',
                            color: '#fff'
                        }}
                    >
                        {button}
                    </Text>
                </LinearGradient>
            </TouchableOpacity>
        </View>
    );
}

export { TopCard };