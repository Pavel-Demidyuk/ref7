import React, {Component} from 'react';
import {Dimensions, LayoutAnimation, Text, View,} from 'react-native';
import * as firebase from 'firebase'
import * as Permissions from 'expo-permissions';
import {BarCodeScanner} from 'expo-barcode-scanner';
import styles from './../styles'

export default class QrScan extends Component {
    static navigationOptions = {
        header: null,
    };

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
        firebase.database().ref('referees/' + pin + '/side').push(Expo.Constants.deviceId).then(
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