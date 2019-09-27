<<<<<<< HEAD
import React from 'react';
import {Text} from 'react-native';

export class MonoText extends React.Component {
    render() {
        return <Text {...this.props} style={[this.props.style, {fontFamily: 'space-mono'}]}/>;
    }
}
=======
import React from 'react';
import { Text } from 'react-native';

export class MonoText extends React.Component {
  render() {
    return <Text {...this.props} style={[this.props.style, { fontFamily: 'space-mono' }]} />;
  }
}
>>>>>>> ec1e2f88e5ba4f141c2cf5165b16d58d45638f04
