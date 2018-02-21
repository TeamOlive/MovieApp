import React from 'react';
import { Header } from 'react-native-elements';

export default ({title}) => (
  <Header
    centerComponent={{ text: title, style: { color: '#fff' } }}
    rightComponent={{ icon: 'add', color: '#fff' }}
    outerContainerStyles={{
      height: 90,
    }}
  />
);
