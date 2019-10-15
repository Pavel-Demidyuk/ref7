import React, {useState} from 'react';
import Timer from '../components/Timer.js'
import {Card} from '../components/Card';
import ReferessConnected from "../components/RefereesConnected";
import * as backend from "./../backend"

export default function TimerScreen() {
    const [timerStarted, setTimerStarted] = useState(false)
    let started = false
    let startTime;

    function start(){
        started = true;
        startTime = new Date()
        setTimerStarted(true)
        backend.startTimer()
    }

    function stop(){
        started = false;
        setTimerStarted(false)
        backend.stopTimer(new Date() - startTime)
    }


    function toggle(){
        if(started){ 
            stop() 
        }else{ 
            start()
        }
    }
    
    return (
        <Card
            circle={() => <Timer/>}
            text={() =>
                <ReferessConnected/>
            }
            button={timerStarted ? "Stop" : "Start"}
            onPress={() => toggle()}
            // color={circleBorder}
        />
    )
}

TimerScreen.navigationOptions = {
    header: null,
};
