import React from 'react';
import {shallow} from 'enzyme';

import StatusSection from './status-section';

describe('<StatusSection />', () => {
  it('renders without crashing', () => {
    shallow(<StatusSection auralStatus="" guesses={[]}/>);
  });
})
