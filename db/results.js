import { useEffect, useState } from 'react';

/**
 * Add results to firebase db
 * @param {number} time Average time to push
 * @param {number} createdAt moment of creation
 */
function addResults(time, createdAt) {
    global.connection.child('/results').push({
        createdAt, time
    });
}

/**
 * Use results
 * @returns {Array} Sorted array of times
 */

function useResults() {
    const [results, setResults] = useState([]);
    useEffect(() => {
        
        let h = e => {
            e = e.val()
            e = Object.values(e ? e : {})
            e = e.sort((a,b)=>a.createdAt-b.createdAt)
            setResults(e)
        };

        global.connection.child('results/').on('value', h);
        return () => global.connection.child('results/').off('vlaue', h);
    }, []);

    return [results];
}

export { addResults, useResults };
