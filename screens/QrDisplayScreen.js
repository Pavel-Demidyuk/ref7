import React from 'react';
import { Text, View } from 'react-native';
import QRCode from 'react-native-qrcode-svg';
import { Card } from '../components/Card';
import RefereesConnected from '../components/RefereesConnected';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';

export default function QrScreen() {
    return (
        <View>
            <Card
                circle={() => (
                    <QRCode
                        value={pin}
                        size={wp('39%')}
                        bgColor="black"
                        fgColor="white"
                    />
                )}
                text={() => (
                    <View>
                        <RefereesConnected />
                        <Text
                            style={{ color: 'gray', textAlign: 'center', marginTop: 16 }}
                        >
                            {' '}
                            ID: {pin}{' '}
                        </Text>
                    </View>
                )}
                button="Start Tournament"
                onPress={() => setAppReady()}
            />
        </View>
    );
}

QrScreen.navigationOptions = {
    header: null
};
