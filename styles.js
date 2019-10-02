import { StyleSheet } from 'react-native';
import {
  heightPercentageToDP as hp,
  widthPercentageToDP as wp
} from 'react-native-responsive-screen';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center'
  },
  qrCard: {
    marginTop: hp('10%'),
    width: wp('75%'),
    height: wp('120%'),
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 3 },
    shadowOpacity: 0.37,
    shadowRadius: 6.49,
    elevation: 8,
    borderRadius: 15,
    borderColor: '#E8E8E8',
    backgroundColor: '#fff',
    alignItems: 'center'
  },
  circle: {
    marginTop: wp('6%'),
    width: wp('64%'),
    height: wp('64%'),
    borderTopLeftRadius: wp('32%'),
    borderTopRightRadius: wp('32%'),
    borderBottomLeftRadius: wp('32%'),
    borderBottomRightRadius: wp('32%'),
    borderColor: '#2ECC71',
    borderWidth: 2,
    backgroundColor: '#fff',
    justifyContent: 'center',
    textAlign: 'center',
    alignItems: 'center'
  },
  startTournamentButtonPos: {
    marginTop: wp('6%'),
    justifyContent: 'center',
    alignItems: 'center'
  },
  rippleStart: {
    width: 125,
    height: 35,
    borderRadius: 25
  },
  blockButtonOutline: {
        width: wp('75%'),
        height: wp('12%'),
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
        textAlign: 'center',
        borderRadius: 5,
        borderWidth: 2,
        shadowOffset: {width: 3, height: 3},
        shadowOpacity: 0.62,
        shadowRadius: 2.22,
        elevation: 5,
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

export default styles;
