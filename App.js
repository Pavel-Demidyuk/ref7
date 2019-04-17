import React from 'react';
import {Platform, StatusBar, StyleSheet, View} from 'react-native';
import {AppLoading, Asset, Font, Icon} from 'expo';
import AppNavigator from './navigation/AppNavigator';
import StartNavigator from './navigation/StartNavigator';
import * as firebase from "firebase";

export default class App extends React.Component {

    constructor(props) {
        super(props)

        var config = {
            apiKey: "AIzaSyDxqDaTcAUR3R6fZwI7PSz5H1yGhVnHHH4",
            authDomain: "location-72fca.firebaseapp.com",
            databaseURL: "https://location-72fca.firebaseio.com",
            projectId: "location-72fca",
            storageBucket: "location-72fca.appspot.com",
            messagingSenderId: "440309375391"
        };

        firebase.initializeApp(config);

        global.firebase = firebase
        global.setAppReady = () => {
            this.setState({ready: true})
        }
    }


    state = {
        isLoadingComplete: false,
    };

    render() {
        if (!this.state.isLoadingComplete && !this.props.skipLoadingScreen) {
            return (
                <AppLoading
                    startAsync={this._loadResourcesAsync}
                    onError={this._handleLoadingError}
                    onFinish={this._handleFinishLoading}
                />
            );


        } else {

            if (this.state.ready) {
              console.log(true)
                return (
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        <AppNavigator/>
                    </View>
                );
            } else {
              console.log(false)
                return (
                    <View style={styles.container}>
                        {Platform.OS === 'ios' && <StatusBar barStyle="default"/>}
                        <StartNavigator/>
                    </View>
                )
            }
        }
    }

    _loadResourcesAsync = async () => {
        return Promise.all([
            Asset.loadAsync([
                require('./assets/images/robot-dev.png'),
                require('./assets/images/robot-prod.png'),
            ]),
            Font.loadAsync({
                // This is the font that we are using for our tab bar
                ...Icon.Ionicons.font,
                // We include SpaceMono because we use it in HomeScreen.js. Feel free
                // to remove this if you are not using it in your app
                'space-mono': require('./assets/fonts/SpaceMono-Regular.ttf'),
            }),
        ]);
    };

    _handleLoadingError = error => {
        // In this case, you might want to report the error to your error
        // reporting service, for example Sentry
        console.warn(error);
    };

    _handleFinishLoading = () => {
        this.setState({isLoadingComplete: true});
    };
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
});
