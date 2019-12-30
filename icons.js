import { Platform } from 'react-native'

const iosIcons = {
  qrScan: 'ios-qr-scanner',
  add: 'ios-add', 
  info: 'ios-information-circle', 
  timer: 'ios-stopwatch', 
  podium: 'ios-podium', 
  test: 'ios-bug'
}

const androidIcons = {
  qrScan: 'md-qr-scanner',
  add: 'md-add', 
  info: 'md-information-circle-outline', 
  timer: 'md-stopwatch', 
  podium: 'md-podium', 
  test: 'md-bug'
}

const icons = Platform.OS === 'ios' ? iosIcons : androidIcons
export default icons;