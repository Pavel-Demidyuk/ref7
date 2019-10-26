import React from 'react';
import { Test } from '../components/Test';

export default class Tests extends React.Component {
    static navigationOptions = {
        header: null
    };

    render() {
        return <Test></Test>;
    }
}
