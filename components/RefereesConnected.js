import {Text, View} from 'react-native';
import React from 'react';


export default function ReferessConnected(props) {
    console.log(props.sideReferees)

    return (
        <View>
            <Text>List of connected side refs</Text>
            {props.sideReferees.map((referee, index) => {
                return <Text key={referee.id}>****{referee.value} ***</Text>
            })}</View>
    );
}
