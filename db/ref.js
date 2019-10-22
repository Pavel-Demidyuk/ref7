import Constants from 'expo-constants'

/**
 * Connect ref
 * @param {firebase.database.Reference} ref ref of competition
 */
function createReferee(ref, isMain) {
  ref.child('ref/' + Constants.deviceId.substr(0, 16)).set({
    id: Constants.deviceId,
    delta: 0,
    running: false,
    main: isMain
  });
}

export { createReferee }