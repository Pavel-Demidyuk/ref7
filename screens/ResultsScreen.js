import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import { Bars } from 'react-native-loader';
import { LinearGradient, Font } from 'expo';

export default class Results extends React.Component {

    constructor(props) {
      super(props)

      this.state = {
        fontLoaded: false

      }
    }

    async componentDidMount() {
      await Font.loadAsync({
        'roboto-mono': require('../assets/fonts/RobotoMono-Regular.ttf')
      });

      this.setState({
        fontLoaded: true
      })
    }

    render() {
        if (this.state.fontLoaded) {
          return (
              <LinearGradient
                colors={colorSuccess}
                style={{alignItems: 'center', flex: 1}}
              >
                  <View style={styles.resultsCard}>
                      <View style={styles.averageCircle}>
                          <Text style={styles.average}>01:08:12</Text>
                      </View>
                      <View style={{textAlign: 'center', alignItems: 'center'}}>
                          <View style={{flexDirection: 'row', marginTop: wp('15%')}}>
                              <Text style={{fontSize: 19, color: "#000"}}>Referee 1</Text>
                              <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: wp('14%')}}>01:06:47</Text>
                          </View>
                          <View style={{borderWidth: 0.5, height: 0, width: wp('57%'), borderColor: "#DDDDDD", marginTop: wp('4%')}}></View>
                          <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                              <Text style={{fontSize: 19, color: "#000"}}>Referee 2</Text>
                              <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: wp('14%')}}>01:10:19</Text>
                          </View>
                          <View style={{borderWidth: 0.5, height: 0, width: wp('57%'), borderColor: "#DDDDDD", marginTop: wp('4%')}}></View>
                          <View style={{flexDirection: 'row', marginTop: wp('3%')}}>
                              <Text style={{fontSize: 19, color: "#000"}}>Referee 3</Text>
                              <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: wp('14%')}}>01:08:34</Text>
                          </View>
                      </View>
                  </View>
              </LinearGradient>
          );
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
    resultsCard: {
      width: wp('75%'),
      height: wp('130%'),
      backgroundColor: "#fff",
      alignItems: 'center',
      borderWidth: 1,
      borderRadius: 18,
      borderColor: "#E1E1E1",
      shadowColor: "#000",
      shadowOffset: {width: 0, height: 3},
      shadowOpacity: 0.27,
      shadowRadius: 4.65,
      elevation: 6,
    },

    averageCircle: {
      justifyContent: 'center',
      textAlign: 'center',
      alignItems: 'center',
      marginTop: wp('6%'),
      width: wp('64%'),
      height: wp('64%'),
      backgroundColor: "#fff",
      borderTopLeftRadius: wp('32%'),
      borderTopRightRadius: wp('32%'),
      borderBottomLeftRadius: wp('32%'),
      borderBottomRightRadius: wp('32%'),
      borderWidth: 2,
      borderColor: "#2ECC71",
    },

    average: {
      fontFamily: 'roboto-mono',
      fontSize: 42,
      color: "#2ECC71",
    }
});

const colorSuccess = ["#2ECC71", "#1ABC9C"];
const colorFailure = ["#E74C3C", "#B53471"];
