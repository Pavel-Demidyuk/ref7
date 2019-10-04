import React, {useEffect, useState} from 'react';
import {View} from "react-native";
import QrCode from "../components/QrCode";
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
            <QrCode/>
            <RefereesConnected sideReferees={sideReferees}/>
            <View style={{marginTop: wp('6%'), justifyContent: 'center', alignItems: 'center'}}>
                <StartTournamentButton/>
            </View>
        </View>
    )
}

QrScreen.navigationOptions = {
    header: null,
};
