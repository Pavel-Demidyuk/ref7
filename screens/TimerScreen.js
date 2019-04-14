import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Bars } from 'react-native-loader';
import GradientButton from '../components/GradientButton';

export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      start: false,
      millis: "00",
      minutes: "0",
      seconds: "00",
      start_millis: null,
      fontLoaded: false,
      buttonTextRender: '',

    }

    global.start_stop = (param) => {

      this.setState({start: param})

      if (param) {
        this.set_time()
      }
    }

  }

  set_time() {

    var d = new Date();
    var mil = d.getMilliseconds ()
    var sec = d.getSeconds ()
    var min = d.getMinutes()
    var h = d.getHours ()
    var all_millis = mil + sec * 1000 + min * 60000 + h * 3600 * 1000

    this.setState({
      start_time: d
    })

    this.counter()
  }

  counter() {

    var d = new Date();
    var mil = d.getMilliseconds ()
    var sec = d.getSeconds ()
    var min = d.getMinutes()
    var h = d.getHours ()
    var all_millis_end = mil + sec * 1000 + min * 60000 + h * 3600 * 1000
    var millis2 = all_millis_end - this.state.start_millis
    var minutes = Math.floor(millis2 / 1000 / 60)
    var seconds = Math.floor((millis2 - minutes * 60 * 1000) / 1000)
    var millis =  Math.floor((millis2 - minutes * 60 * 1000 - seconds * 1000) / 10)

      this.setState({

        millis: millis < 10 ? "0" + millis : millis,
        minutes: minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,

      })

      clearInterval(this.interval);

      this.interval = setInterval(() => {
        if (this.state.start) {
          this.counter()
        }
      }, 10)

    }

    async componentDidMount() {
      await Font.loadAsync({
        'roboto-mono': require('../assets/fonts/RobotoMono-Regular.ttf')
      });

      this.setState({
        fontLoaded: true
      })
    }

    updateData = (value) => {

      this.setState({ buttonTextRender: value })
      console.log(this.state.buttonTextRender)
    }

    render() {
        if (this.state.fontLoaded) {
            if  (this.state.buttonTextRender === 'START') {
                return (
                    <View style={{flex: 1, backgroundColor: "#F0F0F0", alignItems: 'center'}}>
                        <View style={styles.secondFloor}>
                            <View style={styles.timerCircleGreen}>
                                <Text style={{fontFamily: 'roboto-mono', fontSize: 42, color: "#000"}}>{this.state.minutes}:{this.state.seconds}:{this.state.millis}</Text>
                            </View>
                            <View style={{marginTop: 50}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: "#000", fontSize: 19}}>2 Referee</Text>
                                    <Text style={{color: "#666666", fontSize: 17, fontFamily: 'roboto-mono', marginLeft: 50}}>01:18:03</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={{color: "#000", fontSize: 19}}>3 Referee</Text>
                                    <Text style={{color: "#666666", fontFamily: 'roboto-mono', fontSize: 17, marginLeft: 50}}>01:20:09</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 20, height: 75, backgroundColor: "#F0F0F0", alignItems: 'center', justifyContent: 'center'}}>
                            <GradientButton updateData={this.updateData}/>
                        </View>
                    </View>
                );
            } else {
                return (
                    <View style={{flex: 1, backgroundColor: "#F0F0F0", alignItems: 'center'}}>
                        <View style={styles.secondFloor}>
                            <View style={styles.timerCircleRed}>
                                <Text style={{fontFamily: 'roboto-mono', fontSize: 42, color: "#000"}}>{this.state.minutes}:{this.state.seconds}:{this.state.millis}</Text>
                            </View>
                            <View style={{marginTop: 50}}>
                                <View style={{flexDirection: 'row'}}>
                                    <Text style={{color: "#000", fontSize: 19}}>2 Referee</Text>
                                    <Text style={{color: "#666666", fontSize: 17, fontFamily: 'roboto-mono', marginLeft: 50}}>01:18:03</Text>
                                </View>
                                <View style={{flexDirection: 'row', marginTop: 10}}>
                                    <Text style={{color: "#000", fontSize: 19}}>3 Referee</Text>
                                    <Text style={{color: "#666666", fontFamily: 'roboto-mono', fontSize: 17, marginLeft: 50}}>01:20:09</Text>
                                </View>
                            </View>
                        </View>
                        <View style={{marginTop: 20, height: 75, justifyContent: 'center', alignItems: 'center'}}>
                            <GradientButton updateData={this.updateData}/>
                        </View>
                    </View>
                );
            }
        } else {
            return (
                <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                    <Bars size={20} color="#000" />
                </View>
            );
        }
     }
  }

  const styles = StyleSheet.create({
    container: {
      backgroundColor: '#F0F0F0',
      flex: 1
    },

    secondFloor: {
      marginTop: 20,
      width: 270,
      height: 400,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 4 },
      shadowOpacity: 0.37,
      shadowRadius: 6.49,
      elevation: 8,
      borderRadius: 15,
      borderColor: "#E1E1E1",
      backgroundColor: "#fff",
      alignItems: 'center',
    },

    timerCircleGreen: {
      marginTop: 20,
      width: 230,
      height: 230,
      borderRadius: 115,
      borderColor: "#2ECC71",
      borderWidth: 2,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2.49,
      elevation: 3,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    },

    timerCircleRed: {
      marginTop: 20,
      width: 230,
      height: 230,
      borderRadius: 115,
      borderColor: "#E44B40",
      borderWidth: 2,
      backgroundColor: "#fff",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 2 },
      shadowOpacity: 0.2,
      shadowRadius: 2.49,
      elevation: 3,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    }

  });
