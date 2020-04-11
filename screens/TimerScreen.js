import React, { useState } from 'react';
import Timer from '../components/Timer.js';
import { Card } from '../components/Card';
import ReferessConnected from '../components/RefereesConnected';
import { useTimer } from './../db/timer';
import Constants from 'expo-constants';
import { extractID } from '../helpers';
import { Text, View } from 'react-native';
import random_name from 'node-random-name';
import { useName } from '../db/ref';

export default function TimerScreen() {
    const [session, setSession] = useState(0);
    const name = useName(extractID(Constants.deviceId))
    const [running, toggle, startTime, fixedTime] = useTimer();
    return (
        <Card
            background={running ? '#FFF1F8' : '#EEFFF5'}
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
                    <ReferessConnected showMe={false} />
                </View>
            )}
            button={running ? 'STOP' : 'START'}
            onPress={() => toggle()}
            colors={running ? ['#FF004C', '#FF007A'] : ['#00FA87', '#00F4BB']}
            btnRound={39}
            id={() => (
                <Text style={{ color: '#000', textAlign: 'center' }}>
                    Your name:{' '}
                    {random_name({ seed: extractID(Constants.deviceId), first: true })}{' '}

                </Text>
            )}
        />
    );
}

TimerScreen.navigationOptions = {
    header: null
};
