import React from 'react';
import {shallow, mount} from 'enzyme';

import Game from './game';
import Header from './header';
import TopNav from './top-nav';

describe('Header', () => {
  it('renders without crashing', () => {
    shallow(<Header />);
  });
});
