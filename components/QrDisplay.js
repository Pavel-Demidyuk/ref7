import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';
import QRCode from 'react-native-qrcode';

let randomString = require('random-string');

class QrDisplay extends Component {
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
        return (<View style={styles.container}>
            <QRCode value={this.state.pin} size={300} bgColor='black' fgColor='white'/>
            <Text>Pin code: {this.state.pin}</Text>
            <Text> List of attenders: </Text>
            <Text> Referee 1: {this.state.sideReferees[0] ? 'connected' : 'connecting...'}</Text>
            <Text> Referee 2: {this.state.sideReferees[1] ? 'connected' : 'connecting...'}</Text>
            <Button onPress={setAppReady} title="Start" color="#841584"/>
        </View>)

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

export {QrDisplay}
