import React from 'react';
import {shallow, mount} from 'enzyme';

import {AuralStatus} from './aural-status';

describe('AuralStatus', () => {
  it('renders without crashing', () => {
    shallow(<AuralStatus />);
  });
})
