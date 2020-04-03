import { Text, View } from 'react-native';
import React, { useState, useEffect } from 'react';
import { useReferee } from '../db/ref';
import { timeToString, extractID } from '../helpers';
import Constants from 'expo-constants';
import { TableWrapper, Row, Cell } from 'react-native-table-component';
import * as firebase from 'firebase';
import {getName} from "../db/ref"

export default function RefereeStatus({ id }) {
    const [name, setName] = useState();
    let [time] = useReferee(id);
    useEffect(() => {
      setName(getName (id))
  });
    //const [name, setName] = useState();

    return (
        // <Row
        //     // data={[extractID(id), timeToString(time)]}
        //     // style={{ height: 24, backgroundColor: '#fff' }}
        //     // textStyle={{ margin: 6 }}
        // >
        <TableWrapper style={{ flexDirection: 'row', backgroundColor: '#fff' }}>
            <Cell data={name} textStyle={{ margin: 2, color: '#000' }} />
            <Cell

                data={timeToString(time)}
                textStyle={{ margin: 0, color: '#444', fontFamily: 'timer' }}
                style={{ width: '60%' }}
            />
        </TableWrapper>
        // </Row>
    );
}
