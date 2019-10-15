import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import React, {useEffect, useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import StartNavigator from './navigation/StartNavigator';
import AppNavigator from './navigation/AppNavigator';
import RefereesContext from "./contexts/Referees"
import * as backend from './backend'


let randomString = require('random-string');


global.pin = "examp"; 
randomString({
    length: 5,
    numeric: true,
    letters: false,
    special: false
})


console.log(" ----> PIN: " + global.pin + " <----")

// global.firebaseDb = (ref) => firebase.database().ref(ref)


export default function App(props) {
    const [sideReferees, setSideReferees] = useState([])
    const [timerStarted, startTimer] = useState(false)

    useEffect(() => {

        // ### Firebase ###


        backend.connectTo('examp', true)
        // registerMainReferee(Expo.Constants.deviceId)
        // listenSideRefereesAdded()


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
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading(setLoadingComplete)}
            />
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

async function loadResourcesAsync() {
    await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
        ]),
        Font.loadAsync({
            // This is the font that we are using for our tab bar
            ...Ionicons.font,
            // We include SpaceMono because we use it in HomeScreen.js. Feel free to
            // remove this if you are not using it in your app
            'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
        }),
    ]);
}

function handleLoadingError(error) {
    // In this case, you might want to report the error to your error reporting
    // service, for example Sentry
    console.warn(error);
}

function handleFinishLoading(setLoadingComplete) {
    setLoadingComplete(true);
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
    },
});