import React, {useContext, useEffect, useState} from 'react'
import {Text, View} from 'react-native';
import {widthPercentageToDP as wp} from 'react-native-responsive-screen';
import RefereesContext from "../contexts/Referees";
import useInterval from "react-useinterval"

export default function Timer() {
    const refereesContext = useContext(RefereesContext)
    let [timeDiff, setTimeDiff] = useState({minutes: 0, seconds: 0, ms: 0});


    useEffect(() => {
    })

    const getStartDate = () => {
        // return refereesContext.main.startTime // @TODO implement it
        return new Date()
    }

    const increaseTime = (startDate) => {
        let diff = (new Date() - startDate) / 1000
        setTimeDiff({
            minutes: Math.floor(diff / 60),
            seconds: Math.floor(diff),
            ms: 0,
        });
    }


    if (!refereesContext.timerStarted) { // @todo reverse the logic
        useInterval(increaseTime, 1000, getStartDate());
    }

    return (
        <View>
            <Text style={{
                // fontFamily: 'roboto-mono',
                fontSize: wp('12%'),
                color: "#000"
            }}>
                {timeDiff.minutes} : {timeDiff.seconds} : {timeDiff.ms}
            </Text>
        </View>
    )
}
