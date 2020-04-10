import * as firebase from 'firebase';
import Config from './config.js';
import { createReferee } from './ref';

firebase.initializeApp(Config);
let db = firebase.database(db);

/**
 * Connect to competition
 * @param {number} pin pin of competition
 * @param {boolean} isMain is it main ref
 */
function connectToCompetion(pin, isMain = false) {
    console.log('connecting to', pin);

    const ref = db.ref('competions/' + pin);

    if (isMain) ref.set({});

    createReferee(ref, isMain);

    global.connection = ref;
}

export { connectToCompetion };
