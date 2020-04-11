import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useReferee, useName } from '../db/ref';
import { timeToString, extractID } from '../helpers';
import Constants from 'expo-constants';
import { TableWrapper, Row, Cell } from 'react-native-table-component';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function RefereeStatus({ id }) {
    let [time] = useReferee(id);
    const name = useName(id)
    //const [name, setName] = useState();

    return (
        // <Row
        //     // data={[extractID(id), timeToString(time)]}
        //     // style={{ height: 24, backgroundColor: '#fff' }}
        //     // textStyle={{ margin: 6 }}
        // >

        <TableWrapper
            style={{
                flexDirection: 'row',
                backgroundColor: '#fff',
                justifyContent: 'center'
            }}
        >
            <Cell
                data={name}
                textStyle={{ color: '#000', fontSize: RFPercentage(2.7) }}
            />

            <Cell
                data={timeToString(time)}
                textStyle={{ color: '#18D166', fontSize: RFPercentage(2.7) }}
            />
        </TableWrapper>
        // </Row>
    );
}
