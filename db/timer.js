import { useState } from 'react';
import Constants from 'expo-constants';
/**
 * React hook for timer
 */
function useTimer() {
  const [running, setRunning] = useState(false);
  let startTime = 0;

  const dbRunning = connection.child('ref/' + Constants.deviceId.substr(0, 16) + '/running');

  const dbDelta = connection.child('ref/' + Constants.deviceId.substr(0, 16) + '/delta');

  /**
   * Toggle timer status
   */
  function toggle() {
    if (!running) {
      startTime = +new Date();
    } else {
      dbDelta.set(+new Date() - startTime);
    }

    dbRunning.set(!running);
    setRunning(!running);
  }

  return [running, toggle];
}

export { useTimer };
