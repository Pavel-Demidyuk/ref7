import React, { Component } from 'react';
import { Font } from 'expo';
import { View, Text, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { Bars } from 'react-native-loader';
import GradientButton from '../components/GradientButton';

export default class Timer extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      start: false,
      millis: "00",
      minutes: "00",
      seconds: "00",
    }
    console.log(this.state.seconds)
}
componentDidMount(){
  this.counter_()
}
  counter_() {
    //console.log(this.props.mil)
    var millis2 = this.props.mil
    //console.log(23)
    var minutes = Math.floor(millis2 / 1000 / 60)
    var seconds = Math.floor((millis2 - minutes * 60 * 1000) / 1000)
    var millis =  Math.floor((millis2 - minutes * 60 * 1000 - seconds * 1000) / 10)

      this.setState({
        millis: millis < 10 ? "0" + millis : millis,
        minutes: minutes < 10 ? "0" + minutes : minutes,
        seconds: seconds < 10 ? "0" + seconds : seconds,

      })

      clearInterval(this.interval);

      this.interval = setInterval(() => {

          this.counter_()

      }, 1)

    }


    render() {

                return (
                  <Text style={{fontFamily: 'roboto-mono', fontSize: 42, color: "#000"}}>{this.state.minutes}:{this.state.seconds}:{this.state.millis}</Text>
            );
        }
     }


     const styles = StyleSheet.create({
       container: {
         backgroundColor: '#F0F0F0',
         flex: 1
       }
     });
export {Timer}
