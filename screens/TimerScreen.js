import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Header, Left, Body, Button, Title } from 'native-base';
import { Ionicons } from '@expo/vector-icons';
import GradientButton from '../components/GradientButton';

export default class TimerScreen extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      start:false,
      millis:"00",
      minutes:"0",
      seconds:"00",
      start_time:null,

    }
    global.start_stop = (param) => {
      this.setState({start: param})
      if (param){
        this.set_time()
      }
    }
  }
  set_time(){
    var d = new Date();
    //var mil = d.getMilliseconds ()
    //var sec = d.getSeconds ()
    //var min = d.getMinutes()
    //var h = d.getHours ()
  //  var all_millis = mil + sec * 1000 +min *60000+ h*3600*1000
    this.setState({
      start_time: d
    })
    this.counter()
  }
  counter(){
    var d = new Date();
  //  var mil = d.getMilliseconds ()
  //  var sec = d.getSeconds ()
  //  var min = d.getMinutes()
//    var h = d.getHours ()
  //  var all_millis_end = mil + sec * 1000 +min *60000+ h*3600*1000
    var middle_millis = d - this.state.start_time
    var minutes = Math.floor(middle_millis / 1000/60)
    var seconds = Math.floor((middle_millis - minutes*60*1000) / 1000)
    var millis =  Math.floor((middle_millis- minutes*60*1000- seconds*1000)/10)
      this.setState({
        millis:millis<10 ? "0"+ millis : millis,
        minutes:minutes,
        seconds:seconds<10 ? "0"+ seconds : seconds,
      })

      clearInterval(this.interval);
      this.interval = setInterval(() => {
        if (this.state.start){
        this.counter()
      }
      }, 10)
    }
    render() {
      return (
        <View style={styles.container}>
        <Header style={{backgroundColor: "#000"}}>
        <Left>
        <Button transparent>
        <Ionicons name='md-arrow-back' style={{color: "#fff", fontSize: 25}} />
        </Button>
        </Left>
        <Body>
        <Title style={{color: "#fff"}}>Stopwatch</Title>
        </Body>
        </Header>
        <View style={{flex: 3, backgroundColor: "#fff", alignItems: 'center'}}>
        <View style={styles.secondFloor}>
        <View style={styles.timerCircle}>
        <Text style={{fontSize: 45, color: "#fff",fontFamily: 'monospace'}}>{this.state.minutes}:{this.state.seconds}:{this.state.millis}</Text>
        </View>
        <View style={{marginTop: 30}}>
        <View style={{flexDirection: 'row'}}>
        <Text style={{color: "#000", fontSize: 19}}>2 Referee</Text>
        <Text style={{color: "#666666", fontSize: 17, marginLeft: 50}}>01:18:03</Text>
        </View>
        <View style={{flexDirection: 'row', marginTop: 10}}>
        <Text style={{color: "#000", fontSize: 19}}>3 Referee</Text>
        <Text style={{color: "#666666", fontSize: 17, marginLeft: 50}}>01:20:09</Text>
        </View>
        </View>
        </View>
        </View>
        <View style={{height: 70, backgroundColor: "#fff", alignItems: 'center', justifyContent: 'center', marginBottom: 10}}>
        <GradientButton />
        </View>
        </View>
      );
    }
  }

  const styles = StyleSheet.create({
    container: {
      marginTop: 30,
      backgroundColor: '#fff',
      flex: 1
    },

    secondFloor: {
      marginTop: 20,
      width: 270,
      height: 380,
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      borderRadius: 15,
      borderColor: "#E1E1E1",
      backgroundColor: "#fff",
      alignItems: 'center',
    },

    timerCircle: {
      marginTop: 20,
      width: 230,
      height: 230,
      borderRadius: 115,
      borderColor: "#000",
      backgroundColor: "#000",
      shadowColor: "#000",
      shadowOffset: { width: 0, height: 6 },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,
      elevation: 12,
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
    }

  });
