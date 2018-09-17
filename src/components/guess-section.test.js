import React from 'react';
import {shallow, mount} from 'enzyme';

import GuessSection from './guess-section';

describe('<GuessSection />', () => {
  it('renders wihout crashing', () => {
    shallow(<GuessSection />);
  });
});
