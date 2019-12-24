import React from 'react';
import Timer from '../components/Timer.js';
import { Card } from '../components/Card';
import ReferessConnected from '../components/RefereesConnected';
import { useTimer } from './../db/timer';
import Constants from 'expo-constants';
import { extractID } from '../helpers';
import { Text, View } from 'react-native';

export default function TimerScreen() {
    const [running, toggle, startTime, fixedTime] = useTimer();
    return (
        <Card
            circle={() => (
                <Timer running={running} startTime={startTime} fixedTime={fixedTime} />
            )}
            text={() => (
                <View>
                    <ReferessConnected showMe={false} text="Other referees:" />
                    <Text style={{ color: 'gray', textAlign: 'center' }}>
                        {' '}
                        ID: {extractID(Constants.deviceId)}{' '}
                    </Text>
                </View>
            )}
            button={running ? 'Stop' : 'Start'}
            onPress={() => toggle()}
            color={running ? '#ff0000' : '#2ECC71'}
        />
    );
}

TimerScreen.navigationOptions = {
    header: null
};
