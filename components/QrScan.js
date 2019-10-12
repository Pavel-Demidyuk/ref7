import React, {Component} from 'react';
import {Dimensions, LayoutAnimation, StyleSheet, Text, View,} from 'react-native';
import * as firebase from 'firebase'
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';

class QrScan extends Component {
    constructor(props) {
        super(props)
        this._requestCameraPermission()
    }


    state = {
        hasCameraPermission: false,
    }

    _requestCameraPermission = async () => {
        const {status} = await Permissions.askAsync(Permissions.CAMERA);
        this.setState({
            hasCameraPermission: status === 'granted',
        });
    };

    _handleBarCodeRead = result => {
        LayoutAnimation.spring()
        this._registerReferee(result.data)
    };

    _registerReferee(pin) {
        firebase.database().ref('referees/' + pin + '/side/' + Expo.Constants.deviceId).push({
            id: Expo.Constants.deviceId,
            start: null,
            stop: null
        }).then(
            () => {

                setAppReady()
            }
        )
    }

    render() {
        return (
            <View style={styles.container}>
                {this.state.hasCameraPermission === null
                    ? <Text>Waiting for permissions..</Text>
                    : this.state.hasCameraPermission === false
                        ? <Text style={{color: '#fff'}}>
                            Camera permission is not granted
                        </Text>
                        : <BarCodeScanner
                            onBarCodeRead={(result) => {
                                this._handleBarCodeRead(result)
                            }}
                            style={{
                                height: Dimensions.get('window').height,
                                width: Dimensions.get('window').width,
                            }}
                        />}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {QrScan}
