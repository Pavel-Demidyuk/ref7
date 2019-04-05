import React from 'react';
import {QrDisplay} from '../components/QrDisplay';

export default class QrScreen extends React.Component {
    static navigationOptions = {
        header: null,
    };

    render() {

        return (<QrDisplay></QrDisplay>)
    }
}
