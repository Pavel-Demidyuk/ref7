import React, { Component } from 'react';
import { Text, StyleSheet, View } from 'react-native';
import * as firebase from 'firebase';
import { Ionicons } from '@expo/vector-icons';

function Test() {
    let icons = [
        'qr-scanner',
        'add',
        'information-circle-outline',
        'stopwatch',
        'podium',
        'bug'
    ];
    return (
        <View style={{ margin: 16 }}>
            {/* <Text>Android icons:</Text> */}
            {icons.map(e => (
                <Ionicons name={'ios-' + e} size={64} color={'#000000'} />
            ))}
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center'
    }
});

export { Test };
