import React from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {widthPercentageToDP as wp, heightPercentageToDP as hp} from 'react-native-responsive-screen';
// import styles from '../styles';

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    },
    card: {
        marginTop: hp('10%'),
        width: wp('75%'),
        height: wp('120%'),
        shadowColor: '#000',
        shadowOffset: {width: 0, height: 3},
        shadowOpacity: 0.37,
        shadowRadius: 6.49,
        elevation: 8,
        borderRadius: 15,
        borderColor: '#E8E8E8',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    circle: {
        marginTop: wp('6%'),
        width: wp('64%'),
        height: wp('64%'),
        borderTopLeftRadius: wp('32%'),
        borderTopRightRadius: wp('32%'),
        borderBottomLeftRadius: wp('32%'),
        borderBottomRightRadius: wp('32%'),
        borderColor: "#2ECC71",
        borderWidth: 2,
        backgroundColor: "#fff",
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
    blockButtonOutline: {
        width: wp('75%'),
        height: wp('12%'),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 2,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.62,
        shadowRadius: 2.22,
        elevation: 5,
    },
    buttonPos: {
        marginTop: wp('6%'),
        justifyContent: 'center',
        alignItems: 'center'
    }
})

function Card({circle, text, button, onPress, color = '#2DCB73'}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View style={{...styles.circle, borderColor: color}}>
                    {circle()}
                </View>
                <View style={{marginTop: wp('20%')}}>
                    {text()}
                </View>
            </View>
            <View style={styles.buttonPos}>
                <TouchableOpacity style={{
                    ...styles.blockButtonOutline,
                    borderColor: color, shadowColor: color
                }} onPress={onPress}>
                    <Text style={{
                        fontSize: wp('5%'),
                        color
                    }}>{button}</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export {Card}