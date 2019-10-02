import React, { useState, useEffect } from 'react';
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import QRCode from 'react-native-qrcode-svg';
import * as firebase from 'firebase'
import { Card } from './../components/Card'

const randomString = require('random-string');

function QrDisplay() { 
    const [refs, setRefs] = useState(0)
    
    const pin = randomString({
        length: 5,
        numeric: true,
        letters: false,
        special: false,
    })
    

    useEffect(() => {
        firebase.database().ref('referees/' + pin + '/main').set(Expo.Constants.deviceId)
        
        firebase.database().ref('referees/' + pin + '/side').on('value', result => {
            console.log(pin, result.val())

            if (!result || !result.val()) {
                return
            }

            let sideReferees = []
            for (let key in result.val()) {
                sideReferees.push(result.val()[key])
            }

            // if (sideReferees.length === 2) { // Нет смысла
            //     clearInterval(this.interval) // останавливаем запросы в базу, у нас уже есть 2 боковых судьи
            // }

            setRefs(sideReferees.length)
        })
    })

    return <Card
        circle = {() =>
          <QRCode value={pin} size={wp('39%')} bgColor='black' fgColor='white'/>
        }
        text = { ()=> 
            <View>
                <Text>Side referees connected: {refs}</Text>
            </View> }
        button = "Start Tournament"
        onPress = { () => setAppReady() } 
        />
    
}

QrDisplay.navigationOptions = {
    header: null
}

export default QrDisplay 