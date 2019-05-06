import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

export default class Timer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            minutes: 0,
            seconds: 0,
            millis: 0,
        }
    }

    // componentWillReceiveProps(nextProps, nextContext) {
    // }

    componentWillReceiveProps() {


        console.log(this.props.mil)

        let minutes = Math.floor(this.props.mil / 60000),
            seconds = Math.floor((this.props.mil - minutes * 1000 * 60)/1000)
        this.setState({
            minutes: minutes,
            seconds: seconds,
            millis: 0,
        })

        if (typeof (this.props.mil) !== 'undefined') {
            this._start()
        }
    }


    _start() {
        let counter = () => {
            this.state.millis++;

            let
                millis = this.state.millis % 60

            // console.log(this.props.mil, minutes, seconds, millis)
            this.setState({
                millis: millis
            })

            clearInterval(this.interval);
            this.interval = setInterval(() => {
                counter()
            }, 10)
        }

        counter()

    }

    // counter_() {
    //     //console.log(this.props.mil)
    //     let millis2 = this.props.mil,
    //         minutes = Math.floor(millis2 / 1000 / 60),
    //         seconds = Math.floor((millis2 - minutes * 60 * 1000) / 1000),
    //         millis = Math.floor((millis2 - minutes * 60 * 1000 - seconds * 1000) / 10)
    //
    //     this.setState({
    //         millis: millis < 10 ? "0" + millis : millis,
    //         minutes: minutes < 10 ? "0" + minutes : minutes,
    //         seconds: seconds < 10 ? "0" + seconds : seconds,
    //
    //     })
    //     //
    //     clearInterval(this.interval);
    //
    //     this.interval = setInterval(() => {
    //
    //         this.counter_()
    //
    //     }, 10)
    //
    // }


    render() {

        return (
            <View>
                <Text style={{
                    fontFamily: 'roboto-mono',
                    fontSize: 42,
                    color: "#000"
                }}>{this.state.minutes > 10 ? this.state.minutes : "0" + this.state.minutes}:{this.state.seconds >= 10 ? this.state.seconds : "0" + this.state.seconds}:{this.state.millis > 10 ? this.state.millis : "0" + this.state.millis}</Text>
            </View>
        );
    }
}


export { Timer }
