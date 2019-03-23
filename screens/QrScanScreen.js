import React from 'react';
import {QrScan} from '../components/QrScan';

export default class QrScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {

        return (<QrScan></QrScan>)
    }
}
