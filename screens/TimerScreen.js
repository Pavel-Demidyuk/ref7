import React from 'react';
import {Timer} from '../components/Timer';

export default class TimerScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {

        return (<Timer/>)
    }
}
