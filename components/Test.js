import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import * as firebase from 'firebase'
import styles from './../styles'

class Test extends Component {

    constructor(props) {
        super(props)

        //
        // var firebaseConfig = {
        //     apiKey: "AIzaSyAe1-HRvttIZC6pD-SE4yNWMKhhlzKbwzc",
        //     authDomain: "ref7-265d5.firebaseapp.com",
        //     databaseURL: "https://ref7-265d5.firebaseio.com",
        //     projectId: "ref7-265d5",
        //     storageBucket: "ref7-265d5.appspot.com",
        //     messagingSenderId: "1074115890260",
        //     appId: "1:1074115890260:web:62fc7c4f2ac7dbdd"
        // };

    }

    _OnPressTButton() {
        // number = 0
        // firebase.auth().onAuthStateChanged((ref7) => {
        //     console.log(number);
        // })
        //
        // number = number + 1

        firebase.database().ref('referees/aglaya').push(Expo.Constants.deviceId).then(
            () => {
                console.log("Done!!!")
            }
        )

    }


    render() {

        return (
            <View style={styles.container}>
                <Button
                    onPress={this._OnPressTButton}
                    title="It is a test Button. Press it"
                />
            </View>
        )
    }
}

export {Test}
