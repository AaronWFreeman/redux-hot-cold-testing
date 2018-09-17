import React from 'react';
import {shallow} from 'enzyme';

import InfoSection from './info-section';

describe('<InfoSection />', () => {
  it('renders without crashing', () => {
    shallow(<InfoSection />);
  });
})
