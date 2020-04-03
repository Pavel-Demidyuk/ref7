import random_name from 'node-random-name';
import Constants from 'expo-constants';
import { useEffect, useState } from 'react';
import * as firebase from 'firebase';
import { extractID } from '../helpers';
/**
 * Connect ref
 * @param {firebase.database.Reference} ref ref of competition
 */
function createReferee(ref, isMain) {
    ref.child('ref/' + Constants.deviceId.substr(0, 16)).set({
        id: Constants.deviceId,
        name: random_name({ seed: extractID(Constants.deviceId), first: true }),
        delta: 0,
        running: false,
        main: isMain,
        session: 1
    });
}

/**
 * Use refs
 * @param {firebase.database.Reference} ref return array of refs
 */
function useRefs() {
    const [refs, setRefs] = useState([]);
    useEffect(() => {
        let refs = [];
        let h = e => {
            refs = [...new Set([...refs, e.key])];
            setRefs(refs);
        };

        global.connection.child('ref/').on('child_added', h);
        return () => global.connection.child('ref/').off('child_added', h);
    }, []);

    return [refs];
}

/**
 * Use single referee
 * @param {firebase.database.Reference} ref return array of refs
 */
function useReferee(id) {
    const [time, setTime] = useState(0);

    useEffect(() => {
        let running = false;
        let time = 0;
        let fixedTime = 0;
        let stTime = 0;

        let h = e => {
            let val = e.val();
            if (val.running != running) {
                running = val.running;
                if (running) stTime = new Date();
            }

            fixedTime = val.delta;
        };

        setInterval(() => {
            setTime(running ? new Date() - stTime : fixedTime);
        }, 100);

        global.connection.child('ref/' + id + '/').on('value', h);
        return () => global.connection.child('ref/' + id + '/').off('value', h);
    }, [id]);

    return [time];
}

function getName(id) {
  let name;
     global.connection.child( 'ref/' + id).once('value', snapshot => {
    name = snapshot.val().name
  })
    return name

}

export { createReferee, useRefs, useReferee, getName };
