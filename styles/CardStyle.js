import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {RFPercentage} from "react-native-responsive-fontsize";


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
        marginTop: hp('4.5%'),
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
    },

    buttonLabel: {
        fontSize: RFPercentage(2.8),
        fontWeight: 'bold',
        color: '#fff'
    }
});

export default {
    styles: styles
}