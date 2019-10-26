import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import * as firebase from 'firebase';

export default class StartTournamentButton extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      fillColor: '#fff'
    };
  }

  onPressStartTournamentButton() {
    setAppReady();
    if (this.state.fillColor == '#fff') {
      this.setState({
        fillColor: '#2DCB73'
      });
    } else {
      this.setState({
        fillColor: '#fff'
      });
    }
  }

  // addSideRefereeTest () {
  //     firebase.database().ref('referees/' + pin + '/side').push(Expo.Constants.deviceId).then(
  //         () => {
  //             setAppReady()
  //         }
  //     )
  // }

  render() {
    //
    // return (
    //     <View>
    //         <TouchableOpacity style={styles.blockButtonOutline} onPress={() => this.addSideRefereeTest()}>
    //             <Text style={styles.titleGreen}>Add side referee</Text>
    //         </TouchableOpacity>
    //     </View>
    // )

    if (this.state.fillColor == '#fff') {
      return (
        <View>
          <TouchableOpacity style={styles.blockButtonOutline} onPress={() => this.onPressStartTournamentButton()}>
            <Text style={styles.titleGreen}>START TOURNAMENT</Text>
          </TouchableOpacity>
        </View>
      );
    } else {
      return (
        <View>
          <TouchableOpacity style={styles.blockButtonPressed} onPress={() => this.onPressStartTournamentButton()}>
            <Text style={styles.titleWhite}>START TOURNAMENT</Text>
          </TouchableOpacity>
        </View>
      );
    }
  }
}

const styles = StyleSheet.create({
  blockButtonOutline: {
    width: wp('75%'),
    height: wp('12%'),
    backgroundColor: '#fff',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2DCB73',
    shadowColor: '#2DCB73',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.62,
    shadowRadius: 2.22,
    elevation: 5
  },

  blockButtonPressed: {
    width: wp('75%'),
    height: wp('12%'),
    backgroundColor: '#2DCB73',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center',
    borderRadius: 5,
    borderWidth: 2,
    borderColor: '#2DCB73',
    shadowColor: '#2DCB73',
    shadowOffset: { width: 3, height: 3 },
    shadowOpacity: 0.62,
    shadowRadius: 2.22,
    elevation: 5
  },

  titleGreen: {
    fontSize: wp('5%'),
    color: '#2DCB73'
  },

  titleWhite: {
    fontSize: wp('5%'),
    color: '#fff'
  }
});
