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



export default function Load_all_files() {

        return (
            <AppLoading
                startAsync={loadResourcesAsync}
                onError={handleLoadingError}
                onFinish={() => handleFinishLoading()}
            />
        );

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

function handleFinishLoading() {
    setAppReady()
}
