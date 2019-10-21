import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import StartNavigator from './navigation/StartNavigator';
import AppNavigator from './navigation/AppNavigator';
import * as firebase from "firebase";
import RefereesContext from "./contexts/Referees"
import Load_all_files from "./Load_all_files"

let randomString = require('random-string');

let firebaseConfig = {
    apiKey: "AIzaSyAe5753q7Z2j0PlqP3cGsWgkVOF0Gd0FaI",
    authDomain: "ref7-899d9.firebaseapp.com",
    databaseURL: "https://ref7-899d9.firebaseio.com",
    projectId: "ref7-899d9",
    storageBucket: "ref7-899d9.appspot.com",
    messagingSenderId: "138632426234",
    appId: "1:138632426234:web:46d3db52e135f742"
};

global.pin = randomString({
    length: 5,
    numeric: true,
    letters: false,
    special: false
})

console.log(" ----> PIN: " + global.pin + " <----")

firebase.initializeApp(firebaseConfig);
global.firebaseDb = (ref) => firebase.database().ref(ref)


export default function App(props) {
    const [sideReferees, setSideReferees] = useState([])
    const [timerStarted, startTimer] = useState(false)

    useEffect(() => {

        // ### Firebase ###



        registerMainReferee(Expo.Constants.deviceId)
        listenSideRefereesAdded()


    }, [])

    const listenSideRefereesAdded = () => {
        // listen for connected side referees
        let side = firebaseDb('referees/' + pin + '/side')
        side.on('child_added', newReferee => {
            if (!newReferee || !newReferee.val()) {
                return
            }
            registerSideReferee(newReferee.key)
            setSideReferees(sideReferees => [...sideReferees, {
                id: newReferee.key,
                params: newReferee.val()
            }])

        })
    }

    const registerMainReferee = (refereeId) => {
        firebaseDb('referees/' + pin + '/main/' + Expo.Constants.deviceId).set({
            id: Expo.Constants.deviceId,
            start: null,
            stop: null
        })


        firebaseDb('referees/' + pin + '/main/' + refereeId + '/start').on('value', value => {
            if (value > 0) {
                // Side Referee started the timer!
                console.log("Main Referee started the timer")
                startTimer(true)
            }
        })

        firebaseDb('referees/' + pin + '/main/' + refereeId + '/stop').on('value', value => {
            if (value > 0) {
                // Side Referee stopped the timer!
                console.log("Main Referee stopped the timer")
                startTimer(false)
            }
        })
    }

    const registerSideReferee = (refereeId) => {
        firebaseDb('referees/' + pin + '/side/' + refereeId + '/start').on('value', value => {
            if (value > 0) {
                // Side Referee started the timer!
                console.log("Side Referee started the timer")
            }
        })

        firebaseDb('referees/' + pin + '/side/' + refereeId + '/stop').on('value', value => {
            if (value > 0) {
                // Side Referee stopped the timer!
                console.log("Side Referee stopped the timer")
            }
        })
    }

    const [isLoadingComplete, setLoadingComplete] = useState(false);
    const [ready, setReady] = useState(false);

    if (!isLoadingComplete && !props.skipLoadingScreen) {
        return (
            <Load_all_files/>
        );
    } else {
        global.setAppReady = () => {
            setReady(true)
        }

        return (
            <RefereesContext.Provider value={{
                sideReferees: sideReferees,
                timerStarted: timerStarted
            }}>
                <View style={styles.container}>
                    {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                    {
                        ready ?
                            <AppNavigator/> :
                            <StartNavigator/>
                    }
                </View>

            </RefereesContext.Provider>
        );
    }
}



const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});
