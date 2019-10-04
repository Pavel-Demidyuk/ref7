import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';

function Timer({mil}) {
    let minutes = Math.floor(mil / (60 * 1000)) || 0,
        seconds = Math.floor((mil % (60 * 1000)) / 1000) || 0
    return (
        <View>
            <Text style={{
                fontFamily: 'roboto-mono',
                fontSize: wp('12%'),
                color: "#000"
            }}>{minutes >= 10 ? minutes : "0" + minutes}:{seconds >= 10 ? seconds : "0" + seconds}</Text>
        </View>
    )
}