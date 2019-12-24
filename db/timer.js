import { useState, useEffect } from 'react';
import Constants from 'expo-constants';
/**
 * React hook for timer
 */
function useTimer() {
    const [running, setRunning] = useState(false);
    const [startTime, setStartTime] = useState(0);
    const [fixedTime, setFixedTime] = useState(0);

    const dbRunning = connection.child(
        'ref/' + Constants.deviceId.substr(0, 16) + '/running'
    );

    const dbDelta = connection.child(
        'ref/' + Constants.deviceId.substr(0, 16) + '/delta'
    );

    /**
     * Toggle timer status
     */
    function toggle() {
        if (!running) {
            setStartTime(+new Date());
        } else {
            let d = +new Date() - startTime;
            dbDelta.set(d);
            setFixedTime(d);
        }

        dbRunning.set(!running);
        setRunning(!running);
    }

    return [running, toggle, startTime, fixedTime];
}

/**
 * Hook for average time beetwen all refs
 * @returns {[number]} Return array which includes number at 0
 */
function useAvgTime() {
    const [time, setTime] = useState(false);

    useEffect(() => {
        let h = e => {
            e = e.val();
            e = Object.values(e).map(e => e.delta);
            setTime(e.reduce((a, b) => a + b, 0) / e.length);
        };
        global.connection.child('ref/').on('value', h);
        return () => global.connection.child('ref/').off('value', h);
    });
    return [time];
}

export { useTimer, useAvgTime };
