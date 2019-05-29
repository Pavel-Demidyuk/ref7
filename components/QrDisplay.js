import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
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
        }),
        textColor: "#666666",
        textColor1: "#666666"
        connected: "Connection...",
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

                if (this.state.sideReferees[0] != null) {
                   this.setState({
                     textColor: "#2ECC71"
                   })

                } else {
                  this.setState({
                    textColor: "#666666"
                  })

                }

                if (this.state.sideReferees[1] != null) {
                   this.setState({
                     textColor1: "#2ECC71",
                     connected: "Connected" ,
                   })

                } else {
                  this.setState({
                    textColor1: "#666666",
                    connected: "Connection..." ,
                  })

                }
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
                shadowColor: "#000",
                shadowOffset: {width: 0, height: 3},
                shadowOpacity: 0.37,
                shadowRadius: 6.49,
                elevation: 8,
                borderRadius: 15,
                borderColor: "#E8E8E8",
                backgroundColor: "#fff",
                alignItems: 'center',
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

            connectionText: {
                color: this.state.textColor,
                fontSize: wp('5%'),
                marginLeft: wp('14%')
            },

            connectionText1: {
                color: this.state.textColor1,
                fontSize: wp('5%'),
                marginLeft: wp('14%')
            }
        });

        return (
            <View style={styles.container}>
                <View style={styles.qrCard}>
                    <View style={styles.circle}>
                        <QRCode value={this.state.pin} size={wp('39%')} bgColor='black' fgColor='white'/>
                    </View>
                    <View style={{marginTop: wp('20%')}}>
                        <View style={{flexDirection: 'row'}}>
                            <Text style={{color: "#000", fontSize: wp('5%')}}>Referee 1</Text>
                            <Text style={styles.connectionText}>{this.state.connected}</Text>
                        </View>
                        <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                            <Text style={{color: "#000", fontSize: wp('5%')}}>Referee 2</Text>
                            <Text style={styles.connectionText1}>{this.state.connected}</Text>
                        </View>
                    </View>
                </View>
                <View style={{marginTop: wp('6%'), justifyContent: 'center', alignItems: 'center'}}>
                    <BlockButton />
                </View>
            </View>
        )
    }
}

export { QrDisplay }
