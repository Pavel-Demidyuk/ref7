import React from 'react';
import { StyleSheet } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
    bigCircle: {
        width: wp('71%'),
        height: wp('71%'),
        borderRadius: wp('71%') / 2,
        backgroundColor: '#E7E7E7',
        alignItems: 'center',
        justifyContent: 'center'
    },

    smallCircle: {
        width: wp('56%'),
        height: wp('56%'),
        borderRadius: wp('54%') / 2,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        shadowColor: '#000',
        shadowOffset: {
            width: 0,
            height: 0
        },
        shadowOpacity: 0.16,
        shadowRadius: 1,
        elevation: 10
    },

    table: {
        flexDirection: 'row',
        marginTop: hp('0.7%'),
        width: wp('60%'),
        height: hp('5%')
    },

    tableContainer: {
        height: hp('16.8%'),
        overflow: 'scroll'
    }
});

export default {
    styles: styles
}