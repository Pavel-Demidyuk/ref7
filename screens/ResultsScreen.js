import React from 'react';
import { StyleSheet, View, Text } from 'react-native';
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
                          <Text style={styles.average}>1:08:12</Text>
                      </View>
                      <View style={{textAlign: 'center', alignItems: 'center'}}>
                          <View style={{flexDirection: 'row', marginTop: 30}}>
                              <Text style={{fontSize: 19, color: "#000"}}>Referee 1</Text>
                              <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: 50}}>01:06:47</Text>
                          </View>
                          <View style={{borderWidth: 0.5, height: 0, width: 206, borderColor: "#DDDDDD", marginTop: 15}}></View>
                          <View style={{flexDirection: 'row', marginTop: 10}}>
                              <Text style={{fontSize: 19, color: "#000"}}>Referee 2</Text>
                              <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: 50}}>01:10:19</Text>
                          </View>
                          <View style={{borderWidth: 0.5, height: 0, width: 206, borderColor: "#DDDDDD", marginTop: 15}}></View>
                          <View style={{flexDirection: 'row', marginTop: 10}}>
                              <Text style={{fontSize: 19, color: "#000"}}>Referee 3</Text>
                              <Text style={{fontFamily: 'roboto-mono', fontSize: 17, color: "#2ECC71", marginLeft: 50}}>01:08:34</Text>
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
      marginTop: 20,
      width: 270,
      height: 440,
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
      marginTop: 20,
      width: 230,
      height: 230,
      backgroundColor: "#fff",
      borderRadius: 150,
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
