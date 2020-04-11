import { Platform } from 'react-native'

const iosIcons = {
  qrScan: 'ios-qr-scanner',
  add: 'ios-add-circle-outline',
  info: 'ios-information-circle', 
  timer: 'ios-timer',
  podium: 'ios-stats',
  test: 'ios-bug'
};

const androidIcons = {
  qrScan: 'md-qr-scanner',
  add: 'md-add-circle-outline',
  info: 'md-information-circle-outline', 
  timer: 'md-timer',
  podium: 'md-stats',
  test: 'md-bug'
};

const icons = Platform.OS === 'ios' ? iosIcons : androidIcons;
export default icons;