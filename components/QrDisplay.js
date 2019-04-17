import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import QRCode from 'react-native-qrcode';
import * as firebase from 'firebase'
import BlockButton from './BlockButton'

let randomString = require('random-string');

class QrDisplay extends React.Component {
    state = {
        sideReferees: [],
        pin: randomString({
            length: 5,
            numeric: true,
            letters: false,
            special: false,
        })
    }

    componentWillMount() {
        firebase.database().ref('referees/' + this.state.pin + '/main').set(Expo.Constants.deviceId)
        this.getResults()
    }

    getResults() {
        firebase.database().ref('referees/' + this.state.pin + '/side').once('value', (result) => {
            if (result && result.val()) {
                let sideReferees = []
                for (let key in result.val()) {
                    sideReferees.push(result.val()[key])
                }

                this.setState({
                    sideReferees: sideReferees
                })
            }
        })

        clearInterval(this.interval);
        this.interval = setInterval(() => {

            // @TODO
            // Нам надо запрашивать базу только до того момента, пока у нас меньше трех судей. Если уже есть 3, то
            // надо переходить на таймер -> setAppReady()

            this.getResults()
        }, 2000)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.qrCard}>
                    <View style={styles.circle}>
                        <QRCode value={this.state.pin} size={140} bgColor='black' fgColor='white'/>
                    </View>
                    <View style={{marginTop: 50}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: "#000", fontSize: 19}}>Referee 1</Text>
                            <Text style={{color: "#666666", fontSize: 17, marginLeft: 50}}>{this.state.sideReferees[1] ? 'Connected' : 'Connecting...'}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: 10}}>
                            <Text style={{color: "#000", fontSize: 19}}>Referee 2</Text>
                            <Text style={{color: "#666666", fontSize: 17, marginLeft: 50}}>{this.state.sideReferees[0] ? 'Connected' : 'Connecting...'}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: 20, height: 75, justifyContent: 'center', alignItems: 'center'}}>
                    <BlockButton onPress={()=>{setAppReady}}/>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        marginTop: 20,
        backgroundColor: '#fff',
        alignItems: 'center',
    },

    qrCard: {
        marginTop: 30,
        width: 270,
        height: 400,
        shadowColor: "#000",
        shadowOffset: {width: 0, height: 4},
        shadowOpacity: 0.37,
        shadowRadius: 6.49,
        elevation: 8,
        borderRadius: 15,
        borderColor: "#E8E8E8",
        backgroundColor: "#fff",
        alignItems: 'center',
    },

    circle: {
        marginTop: 20,
        width: 230,
        height: 230,
        borderRadius: 115,
        borderColor: "#2ECC71",
        borderWidth: 2,
        backgroundColor: "#fff",
        justifyContent: 'center',
        textAlign: 'center',
        alignItems: 'center',
    },
});

export { QrDisplay }
