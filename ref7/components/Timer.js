import React, {Component} from 'react';
import {Button, StyleSheet, Text, View} from 'react-native';

const INTERVAL = 1000;


export default class App extends Component {
    render() {
        return (
            <View style={styles.forall}>
                <Timer starttime={new Date().getTime()}/>
            </View>
        );
    }
}


class Timer extends Component {
    constructor(props) {
        super(props);
        this.state = {timenow: new Date().getTime()}
        this.componentWillUnmount = this.componentWillUnmount.bind(this);
        this.componentDidMount = this.componentDidMount.bind(this);
    }

    increment() {
        this.setState({timenow: new Date().getTime()});
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.increment(), 1000 / INTERVAL);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    render() {
        let distance = this.state.timenow - this.props.starttime;
        return (
            <View>
                <View style={styles.box}>
                    <Text style={styles.foreach}>Timer:</Text>
                    <Text style={styles.foreach}>{Math.floor(distance / INTERVAL / 60 / 60 % 60)} : </Text>
                    <Text style={styles.foreach}>{Math.floor(distance / INTERVAL / 60 % 60)} : </Text>
                    <Text style={styles.foreach}>{Math.floor(distance / INTERVAL % 60)} : </Text>
                    <Text style={styles.foreach}>{Math.floor((distance / 10) % 100)}</Text>
                </View>
                <Button onPress={this.componentWillUnmount} title="stop"/>
                <Button onPress={this.componentDidMount} title="start"/>
            </View>
        );
    }
}


const styles = StyleSheet.create({
    forall: {
        backgroundColor: '#F08080',
        flex: 1,
        flexDirection: 'column',
        justifyContent: 'space-between',
    },
    box: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        marginTop: 30,
    },
    foreach: {
        flex: 1,
        fontSize: 20,
    },
});
