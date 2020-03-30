import { Text, View } from 'react-native';
import React from 'react';
import { useReferee } from '../db/ref';
import { timeToString, extractID } from '../helpers';

import { TableWrapper, Row, Cell } from 'react-native-table-component';
import {RFPercentage} from "react-native-responsive-fontsize";

export default function RefereeStatus({ id }) {
    let [time] = useReferee(id);
    return (
        // <Row
        //     // data={[extractID(id), timeToString(time)]}
        //     // style={{ height: 24, backgroundColor: '#fff' }}
        //     // textStyle={{ margin: 6 }}
        // >
        <TableWrapper style={{ flexDirection: 'row', backgroundColor: '#fff', justifyContent: 'center' }}>
            <Cell data={extractID(id)} textStyle={{ color: '#000', fontSize: RFPercentage(2.7) }} />
            <Cell
                data={timeToString(time)}
                textStyle={{color: '#18D166', fontSize: RFPercentage(2.7) }}
            />
        </TableWrapper>
        // </Row>
    );
}
