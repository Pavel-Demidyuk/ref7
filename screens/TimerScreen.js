import React from 'react';
import * as Font from 'expo-font';
import { StyleSheet, Text, View } from 'react-native';
import Loader from '../components/Loader';
import { Timer } from '../components/Timer.js'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Card } from '../components/Card';

export default class TimerScreen extends React.Component {

    static navigationOptions = {
        header: null,
        headerMode: 'none',

    }

    state = {
        fontLoaded: false,
        buttonTextRender: 'START',
        circleBorder: "#2ECC71"
    }

    async componentDidMount() {
        await Font.loadAsync({
            'roboto-mono': require('../assets/fonts/RobotoMono-Regular.ttf')
        });

        this.setState({
            fontLoaded: true
        });
    }

    start() {
        let startDate = new Date()
        let counter = () => {
            this.setState({
                    started: true,
                    diff: new Date() - startDate
                }
            )
            clearInterval(this.interval);
            this.interval = setInterval(() => {
                if (this.state.started) {
                    counter()
                }
            }, 995)
        }
        counter()

        this.setState({
            circleBorder: "#E44B40"
        })
    }

    stop() {
        this.setState({
            started: false,
            circleBorder: "#2ECC71"
        })
    }

    toggle() {
        !this.state.started ? this.start() : this.stop()
    }

    render() {
        if (!this.state.fontLoaded) {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <Loader />
                </View>
            )
        } else {
            return (
                <Card
                    circle = { ()=> <Timer mil = {this.state.diff}/> }
                    text = { ()=>
                        <View>
                            <Text style={{color: "#000", fontSize: wp('5%')}}>
                                2 Referee:
                                <Text style={{color: "#666666", fontSize: wp('5%'), fontFamily: 'roboto-mono', marginLeft: wp('4%')}}> 01:18:03</Text>
                            </Text>
                            <Text style={{color: "#000", fontSize: wp('5%')}}>
                                3 Referee:
                                <Text style={{color: "#666666", fontSize: wp('5%'), fontFamily: 'roboto-mono', marginLeft: wp('4%')}}> 01:18:03</Text>
                            </Text>
                        </View>
                    }
                    button = { !this.state.started ? "Start" : "Stop" }
                    onPress = {()=>this.toggle()}
                    color = { this.state.circleBorder }
                />
            );
        }
    }
}