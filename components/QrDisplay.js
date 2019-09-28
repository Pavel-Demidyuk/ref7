import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {heightPercentageToDP as hp, widthPercentageToDP as wp} from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';
import * as firebase from 'firebase'
import StartTournamentButton from './StartTournamentButton'

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
    }

    componentWillMount() {
        firebase.database().ref('referees/' + this.state.pin + '/main').set(Expo.Constants.deviceId)

        clearInterval(this.interval)
        this.interval = setInterval(() => {
            this.getResults()
        }, 2000)
    }

    getResults() {
        firebase.database().ref('referees/' + this.state.pin + '/side').once('value', result => {

            console.log(this.state.pin, result.val())

            if (!result || !result.val()) {
                return
            }

            let sideReferees = []
            for (let key in result.val()) {
                sideReferees.push(result.val()[key])
            }

            if (sideReferees.length === 2) {
                clearInterval(this.interval) // останавливаем запросы в базу, у нас уже есть 2 боковых судьи
            }

            this.setState({
                sideReferees: sideReferees
            })
        })
    }

    render() {
        function RefereesConnected(props) {
            console.log(props.referees)
            return <View>
                <Text>Side referees connected: {props.referees.length}</Text>
            </View>
        }

        return (
            <View style={styles.container}>
                <View style={styles.qrCard}>
                    <View style={styles.circle}>
                        <QRCode value={this.state.pin} size={wp('39%')} bgColor='black' fgColor='white'/>
                    </View>

                    <View style={{marginTop: wp('20%')}}>
                        <RefereesConnected referees={this.state.sideReferees}/>
                    </View>

                    <View style={{marginTop: wp('5%')}}>
                        <Text style={{ color: 'gray' }}> ID: { this.state.pin } </Text>
                    </View>
                
                </View>
                <View style={{marginTop: wp('6%'), justifyContent: 'center', alignItems: 'center'}}>
                    <StartTournamentButton/>
                </View>
            </View>
        )
    }
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
    }
});

export {QrDisplay}
