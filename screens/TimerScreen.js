import React, {useContext} from 'react';
import Timer from '../components/Timer.js'
import {Card} from '../components/Card';
import ReferessConnected from "../components/RefereesConnected";
import RefereesContext from "../contexts/Referees";

export default function TimerScreen() {
    const refereesConnectedContext = useContext(RefereesContext)
    return (
        <Card
            circle={() => <Timer/>}
            text={() =>
                <ReferessConnected/>
            }
            button={!refereesConnectedContext.timerStarted ? "Start" : "Stop"}
            onPress={() => this.toggle()}
            // color={circleBorder}
        />
    )
}

TimerScreen.navigationOptions = {
    header: null,
};
