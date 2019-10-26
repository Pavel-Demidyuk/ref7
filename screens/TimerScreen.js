import React, { useState } from 'react';
import Timer from '../components/Timer.js';
import { Card } from '../components/Card';
import ReferessConnected from '../components/RefereesConnected';
import { useTimer } from './../db/timer';

export default function TimerScreen() {
  const [running, toggle] = useTimer();

  return (
    <Card
      circle={() => <Timer />}
      text={() => <ReferessConnected />}
      button={running ? 'Stop' : 'Start'}
      onPress={() => toggle()}
      color={running ? '#ff0000' : '#2ECC71'}
    />
  );
}

TimerScreen.navigationOptions = {
  header: null
};
