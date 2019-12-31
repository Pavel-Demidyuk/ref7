import React, { Component } from 'react';
import { Dimensions, LayoutAnimation, Text, View } from 'react-native';
import * as Permissions from 'expo-permissions';
import { BarCodeScanner } from 'expo-barcode-scanner';
import styles from './../styles';
import { connectToCompetion } from './../db/init';
import { Card } from '../components/Card';

export default class QrScan extends Component {
    static navigationOptions = {
        header: null
    };

    constructor(props) {
        super(props);
        this._requestCameraPermission();
    }

    state = {
        hasCameraPermission: false
    };

    _requestCameraPermission = async () => {
        const { status } = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted'
        });
    };

    _handleBarCodeRead = result => {
        LayoutAnimation.spring();
        connectToCompetion(result.data);
        setAppReady();
    };

    render() {
        return (
            <View style={{ ...styles.container, backgroundColor: 'black' }}>
                {this.state.hasCameraPermission === null ? (
                    <Text>Waiting for permissions..</Text>
                ) : this.state.hasCameraPermission === false ? (
                    <Text style={{ color: '#fff' }}>
                        Camera permission is not granted
                    </Text>
                ) : (
                    <BarCodeScanner
                        onBarCodeScanned={result => {
                            this._handleBarCodeRead(result);
                        }}
                        style={{
                            height: '100%',
                            width: '100%'
                        }}
                    />
                )}
            </View>
        );
    }
}
