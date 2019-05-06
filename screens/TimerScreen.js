import React from 'react';
import { Font } from 'expo';
import Loader from '../components/Loader'
import { StyleSheet, Text, View } from 'react-native';
import StartButton from '../components/StartButton';
import Timer from '../components/Timer.js'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
export default class TimerScreen extends React.Component {

   static navigationOptions = {
       header: null,
       headerMode: 'none',
   }

   state = {
       fontLoaded: false,
       buttonTextRender: 'START',
   }

   async componentDidMount() {
       await Font.loadAsync({
           'roboto-mono': require('../assets/fonts/RobotoMono-Regular.ttf')
       });

       this.setState({
           fontLoaded: true
       })
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
   }

   stop() {
     this.setState({
         started: false
     })
   }

   action = (flag) => {
       flag ?  this.start() : this.stop()
   }

   render() {
       if (!this.state.fontLoaded) {
           return (
             <View style={{flex: 1, justifyContent: 'center', alignItems: 'center', textAlign: 'center'}}>
                <Loader />
             </View>
           )
       }
       if (!this.state.started) {
           return (
              <View style={{flex: 1, backgroundColor: "#F0F0F0", alignItems: 'center'}}>
                  <View style={styles.secondFloor}>
                      <View style={styles.timerCircleGreen}>
                          <Text style={{fontFamily: 'roboto-mono', fontSize: 42, color: "#000"}}>00:00:00</Text>
                      </View>
                      <View style={{marginTop: wp('20%')}}>
                          <View style={{flexDirection: 'row'}}>
                             <Text style={{color: "#000", fontSize: 19}}>2 Referee</Text>
                             <Text style={{color: "#666666", fontSize: 17, fontFamily: 'roboto-mono', marginLeft: 50}}>01:18:03</Text>
                          </View>
                          <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                             <Text style={{color: "#000", fontSize: 19}}>3 Referee</Text>
                             <Text style={{color: "#666666", fontFamily: 'roboto-mono', fontSize: 17, marginLeft: 50}}>01:20:09</Text>
                          </View>
                     </View>
                  </View>
                  <View style={{marginTop: hp('4.3%'), alignItems: 'center', justifyContent: 'center'}}>
                      <StartButton action={(flag) => {this.action(flag)}} />
                  </View>
              </View>
           );
       } else {
           return (
              <View style={{flex: 1, backgroundColor: "#F0F0F0", alignItems: 'center'}}>
                 <View style={styles.secondFloor}>
                         <View style={styles.timerCircleRed}>
                            <Timer mil = {this.state.diff}/>
                          </View>
                          <View style={{marginTop: wp('25%')}}>
                          <View style={{flexDirection: 'row'}}>
                              <Text style={{color: "#000", fontSize: 19}}>2 Referee</Text>
                              <Text style={{color: "#666666", fontSize: 17, fontFamily: 'roboto-mono', marginLeft: wp('14%')}}>01:18:03</Text>
                          </View>
                          <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                              <Text style={{color: "#000", fontSize: 19}}>3 Referee</Text>
                              <Text style={{color: "#666666", fontFamily: 'roboto-mono', fontSize: 17, marginLeft: wp('14%')}}>01:20:09</Text>
                          </View>
                      </View>
                  </View>
                  <View style={{marginTop: hp('4.3%'), justifyContent: 'center', alignItems: 'center'}}>
                      <StartButton action={(flag) => {this.action(flag)}} />
                  </View>
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
       marginTop: hp('10%'),
       width: wp('75%'),
       height: wp('120%'),
       shadowColor: "#000",
       shadowOffset: {width: 0, height: 4},
       shadowOpacity: 0.37,
       shadowRadius: 6.49,
       elevation: 8,
       borderRadius: 15,
       borderColor: "#E1E1E1",
       backgroundColor: "#fff",
       alignItems: 'center',
   },

   timerCircleGreen: {
       marginTop: hp('6%'),
       width: wp('64%'),
       height: wp('64%'),
       borderTopLeftRadius: wp('32%'),
       borderTopRightRadius: wp('32%'),
       borderBottomLeftRadius: wp('32%'),
       borderBottomRightRadius: wp('32%'),
       borderColor: "#2ECC71",
       borderWidth: 2,
       backgroundColor: "#fff",
       shadowColor: "#000",
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.2,
       shadowRadius: 2.49,
       elevation: 3,
       justifyContent: 'center',
       textAlign: 'center',
       alignItems: 'center',
   },

   timerCircleRed: {
       marginTop: wp('6%'),
       width: wp('64%'),
       height: wp('64%'),
       borderTopLeftRadius: wp('32%'),
       borderTopRightRadius: wp('32%'),
       borderBottomLeftRadius: wp('32%'),
       borderBottomRightRadius: wp('32%'),
       borderColor: "#E44B40",
       borderWidth: 2,
       backgroundColor: "#fff",
       shadowColor: "#000",
       shadowOffset: {width: 0, height: 2},
       shadowOpacity: 0.2,
       shadowRadius: 2.49,
       elevation: 3,
       justifyContent: 'center',
       textAlign: 'center',
       alignItems: 'center',
   }

})
