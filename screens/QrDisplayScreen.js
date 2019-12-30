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
                circle={circleSize => (
                    <QRCode
                        value={pin}
                        size={circleSize - 36}
                        bgColor="black"
                        fgColor="white"
                    />
                )}
                text={() => (
                    <View>
                        <RefereesConnected />
                    </View>
                )}
                button="Start Tournament"
                onPress={() => setAppReady()}
                color="#000"
                needCircleBorder={false}
                id={() => (
                    <Text style={{ color: 'gray', textAlign: 'center', marginTop: 16 }}>
                        ID: {pin}{' '}
                    </Text>
                )}
            />
        </View>
    );
}

QrScreen.navigationOptions = {
    header: null
};
