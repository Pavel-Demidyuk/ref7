import { Text, View } from 'react-native';
import React from 'react';
import { useReferee } from '../db/ref';
import { timeToString, extractID } from '../helpers';

import { Table, Row } from 'react-native-table-component';

export default function RefereeStatus({ id }) {
    let [time] = useReferee(id);
    return (
        <Row
            data={[extractID(id), timeToString(time)]}
            style={{ height: 24, backgroundColor: '#fff' }}
            textStyle={{ margin: 6 }}
        />
    );
}
