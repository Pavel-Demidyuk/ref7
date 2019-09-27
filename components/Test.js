<<<<<<< HEAD
import React, {Component} from 'react';
import {Button, StyleSheet, View} from 'react-native';
import * as firebase from 'firebase'

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
        number = 0
        firebase.auth().onAuthStateChanged((ref7) => {
            console.log(number);
        })

        number = number + 1

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {Test}
=======
import React, {Component} from 'react';
import {StyleSheet, Text, View, Button} from 'react-native';
import * as firebase from 'firebase'
import {BarCodeScanner, Permissions } from 'expo';

class Test extends Component {

    constructor(props) {
        super(props)


        var firebaseConfig = {
          apiKey: "AIzaSyAe1-HRvttIZC6pD-SE4yNWMKhhlzKbwzc",
          authDomain: "ref7-265d5.firebaseapp.com",
          databaseURL: "https://ref7-265d5.firebaseio.com",
          projectId: "ref7-265d5",
          storageBucket: "ref7-265d5.appspot.com",
          messagingSenderId: "1074115890260",
          appId: "1:1074115890260:web:62fc7c4f2ac7dbdd"
  };

    }

    _OnPressTButton(){
        number = 0
        firebase.auth().onAuthStateChanged((ref7) => {
          console.log(number);
        })

      number = number + 1

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

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
});

export {Test}
>>>>>>> ec1e2f88e5ba4f141c2cf5165b16d58d45638f04
