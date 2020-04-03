import React, { useState } from 'react';
import Timer from '../components/Timer.js';
import { Card } from '../components/Card';
import ReferessConnected from '../components/RefereesConnected';
import { useTimer } from './../db/timer';
import Constants from 'expo-constants';
import { extractID } from '../helpers';
import { Text, View } from 'react-native';
import random_name from 'node-random-name';

export default function TimerScreen() {
    const [session, setSession] = useState(0);

    const [running, toggle, startTime, fixedTime] = useTimer();
    return (
        <Card
            circle={circleSize => (
                <Timer
                    running={running}
                    startTime={startTime}
                    fixedTime={fixedTime}
                    circleSize={circleSize}
                />
            )}
            text={() => (
                <View>
                    <ReferessConnected showMe={false} text="Other referees:" />
                </View>
            )}
            button={running ? 'Stop' : 'Start'}
            onPress={() => toggle()}
            color={running ? '#ff0000' : '#2ECC71'}
            btnRound={10}
            id={() => (
                <Text style={{ color: 'gray', textAlign: 'center' }}>
                    Your name: {random_name({ seed:extractID(Constants.deviceId), first: true })}{' '}
                </Text>
            )}
        />
    );
}

TimerScreen.navigationOptions = {
    header: null
};
