import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
// import styles from '../styles';

const circleSize = Math.min(wp('80%'), hp('40%'));
const btnHeight = Math.min(hp('12%'), 64);

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
        flexDirection: 'column',
        height: '100%',
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    card: {
        marginTop: 20,
        flexGrow: 1,
        borderRadius: 15,
        borderColor: '#E8E8E8',
        backgroundColor: '#fff',
        alignItems: 'center'
    },
    circle: {
        marginTop: hp('4%'),
        width: circleSize,
        height: circleSize,
        borderColor: '#2ECC71',
        backgroundColor: '#fff',
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center'
    },
    blockButtonOutline: {
        width: wp('75%'),
        height: btnHeight,
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderWidth: 0
    },
    buttonPos: {
        marginTop: 10,
        marginBottom: 10,
        height: btnHeight,
        justifyContent: 'center',
        alignItems: 'center'
    }
});

function Card({
    circle,
    text,
    button,
    onPress,
    color = '#2DCB73',
    id,
    btnRound = btnHeight / 2,
    needCircleBorder = true
}) {
    return (
        <View style={styles.container}>
            <View style={styles.card}>
                <View
                    style={{
                        ...styles.circle,
                        borderColor: color,
                        borderRadius: circleSize / 2,
                        borderWidth: needCircleBorder ? 2 : 0
                    }}
                >
                    {circle(circleSize)}
                </View>
                <View style={{ marginTop: 32 }}>{text()}</View>
            </View>
            {id ? <View style={{ marginTop: 8 }}>{id()}</View> : null}
            <View style={styles.buttonPos}>
                <TouchableOpacity
                    style={{
                        ...styles.blockButtonOutline,
                        backgroundColor: color,
                        borderRadius: btnRound
                    }}
                    onPress={onPress}
                >
                    <Text
                        style={{
                            fontSize: wp('5%'),
                            color: '#fff'
                        }}
                    >
                        {button}
                    </Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}

export { Card };
