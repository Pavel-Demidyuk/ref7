import React, {useEffect, useState} from 'react';
import {Text, View} from "react-native";
import QRCode from 'react-native-qrcode-svg';
import { Card } from '../components/Card'
// import QrCode from "../components/QrCode";
import RefereesConnected from "../components/RefereesConnected";
import {widthPercentageToDP as wp} from "react-native-responsive-screen";
import StartTournamentButton from "../components/StartTournamentButton";
import * as firebase from 'firebase'

export default function QrScreen(props) {
    const [sideReferees, setSideReferees] = useState([]);

    useEffect(() => {
        firebase.database().ref('referees/' + pin + '/main').set(Expo.Constants.deviceId)
        let side = firebase.database().ref('referees/' + pin + '/side')

        side.on('child_added', newReferee => {
            if (!newReferee || !newReferee.val()) {
                return
            }

            setSideReferees([...sideReferees, {
                id: sideReferees.length,
                value: newReferee.val()
            }])
        })

    }, [])

    return (
        <View>
            <Card
                circle={()=><QRCode value={pin} size={wp('39%')} bgColor='black' fgColor='white'/>}
                text={()=>
                    <View>
                        <Text style={{color: 'gray', textAlign: 'center'}}> ID: {pin} </Text>
                        <RefereesConnected sideReferees={sideReferees}/>
                    </View>
                }

                button="Start Tournament"
                onPress={()=>setAppReady()}
            />
        </View>
    )
}

QrScreen.navigationOptions = {
    header: null,
};
