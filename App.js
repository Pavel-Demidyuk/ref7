import {AppLoading} from 'expo';
import {Asset} from 'expo-asset';
import * as Font from 'expo-font';
import Constants from 'expo-constants';
import React, {useEffect, useState} from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {Ionicons} from '@expo/vector-icons';
import StartNavigator from './navigation/StartNavigator';
import AppNavigator from './navigation/AppNavigator';
import RefereesContext from "./contexts/Referees"
import { connectToCompetion } from './db/init'
import { extractID } from './helpers'


let randomString = require('random-string');

global.isDevelopment = process.env.NODE_ENV == 'development'

global.pin = isDevelopment
  ? ('dev-' + extractID(Constants.deviceId))
  : randomString({
      length: 5,
      numeric: true,
      letters: false,
      special: false
    });


console.log(" ----> PIN: " + global.pin + " <----")

export default function App(props) {
    const [sideReferees, setSideReferees] = useState([])
    const [timerStarted, startTimer] = useState(false)

    useEffect(() => {
        connectToCompetion(pin, true)
        // registerMainReferee(Expo.Constants.deviceId)
        // listenSideRefereesAdded()
    }, [])

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
    global.assets = await Promise.all([
        Asset.loadAsync([
            require('./assets/images/robot-dev.png'),
            require('./assets/images/robot-prod.png'),
            require('./README.md'),
            require('./AUTHORS.md')
        ]),
        Font.loadAsync({
            'timer': require('./assets/fonts/RobotoMono-Regular.ttf'),
            ...Ionicons.font
        })
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
        backgroundColor: '#fff'
    }
});