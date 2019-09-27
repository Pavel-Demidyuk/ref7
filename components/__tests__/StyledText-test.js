<<<<<<< HEAD
import 'react-native';
import React from 'react';
import {MonoText} from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
    const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

    expect(tree).toMatchSnapshot();
});
=======
import 'react-native';
import React from 'react';
import { MonoText } from '../StyledText';
import renderer from 'react-test-renderer';

it('renders correctly', () => {
  const tree = renderer.create(<MonoText>Snapshot test!</MonoText>).toJSON();

  expect(tree).toMatchSnapshot();
});
>>>>>>> ec1e2f88e5ba4f141c2cf5165b16d58d45638f04
