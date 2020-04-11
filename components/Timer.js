import React, { useContext, useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import { widthPercentageToDP as wp } from 'react-native-responsive-screen';
import { timeToString } from '../helpers';

export default function Timer({ startTime, running, fixedTime, circleSize }) {
    let [timeStr, setTimeStr] = useState('00:00.000');

    const updTime = () =>
        setTimeStr(timeToString(running ? new Date() - startTime : fixedTime));

    useEffect(() => {
        let i = setInterval(updTime, 50);
        return () => clearInterval(i);
    }, [startTime, running]);

    return (
        <View>
            <Text
                style={{
                    fontSize: circleSize / 8,
                    fontFamily: 'timer',
                    color: running ? '#D53B31' : '#18D166'
                }}
            >
                {timeStr}
            </Text>
        </View>
    );
}
