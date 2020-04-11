import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    container: {
        height: hp('100%'),
        flexDirection: 'column',
        alignItems: 'center'
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
            height: 0
        },
        shadowOpacity: 0.16,
        shadowRadius: 100,
        elevation: 10,
        overflow: 'hidden'
    },

    infoContainer: {
        marginTop: hp('7%'),
        justifyContent: 'center'
    },

    textInfo: {
        marginTop: hp('1%'),
        alignItems: 'center',
        color: '#000'
    },

    actionButton: {
        marginTop: hp('4%'),
        width: wp('70%'),
        height: hp('8%')
    },

    gradient: {
        width: wp('70%'),
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

    forID: {
        marginTop: hp('1%')
    }
});

export default  {
    styles: styles
}

