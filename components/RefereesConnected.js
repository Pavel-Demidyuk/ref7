import { Text, View } from 'react-native';
import React from 'react';
import RefereeStatus from './RefereeStatus';
import { useRefs } from '../db/ref';
import Constants from 'expo-constants';
import { extractID } from '../helpers';
import { Table, Row } from 'react-native-table-component';
import random_name from 'node-random-name';

export default function ReferessConnected({
    showMe = true,
    text = 'Referees connected:'
}) {
    let [refs] = useRefs();
    let id = random_name({ random: 0 });
    return (
        <View>
            <Text>{text}</Text>
            <Table
                borderStyle={{ borderWidth: 0, borderColor: '#fff' }}
                style={{ width: 160 }}
            >
                {refs
                    .filter(e => id != extractID(e) || showMe)
                    .map(e => (
                        <RefereeStatus id={e} key={e} />
                    ))}
            </Table>
        </View>
    );
}
