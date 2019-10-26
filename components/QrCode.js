import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import {
    heightPercentageToDP as hp,
    widthPercentageToDP as wp
} from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';

export default function QrCode() {
    return (
        <View style={styles.container}>
            <View style={styles.qrCard}>
                <View style={styles.circle}>
                    <QRCode
                        value={pin}
                        size={wp('39%')}
                        bgColor="black"
                        fgColor="white"
                    />
                </View>

                <View style={{ marginTop: wp('20%') }}></View>

                <View style={{ marginTop: wp('5%') }}>
                    <Text style={{ color: 'gray' }}> ID: {pin} </Text>
                </View>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    qrCard: {
        marginTop: hp('10%'),
        width: wp('75%'),
        height: wp('120%'),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 3 },
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
        borderColor: '#2ECC71',
        borderWidth: 2,
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    }
});
