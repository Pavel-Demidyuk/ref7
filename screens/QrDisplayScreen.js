import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { TopCard } from '../components/TopCard';
import RefereesConnected from '../components/RefereesConnected';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp
} from 'react-native-responsive-screen';
import {RFPercentage} from "react-native-responsive-fontsize";


export default function QrScreen() {
    return (
        <View>
            <TopCard
                displayState={'none'}
                infoContainer={() => (
                    <QRCode
                        value={pin}
                        size={wp('56%')}
                        bgColor="black"
                        fgColor="white"
                    />
                )}
                id={() => (
                    <Text style={{fontSize: RFPercentage(2.5 )}}>
                        ID: {pin}{' '}
                    </Text>
                )}
                text={() => (
                    <View style={{marginTop: hp('4%')}}>
                        <RefereesConnected />
                    </View>
                )}
                button="START TOURNAMENT"
                onPress={() => setAppReady()}
                color="#000"
            />
        </View>
    );
}

QrScreen.navigationOptions = {
    header: null
};
