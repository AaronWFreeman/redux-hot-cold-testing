import React from 'react';
import {shallow} from 'enzyme';

import {TopNav} from './top-nav';
import {RESTART_GAME} from '../actions';

describe('<TopNav />', () => {
  it('renders without crashing', () => {
    shallow(<TopNav />);
  });
  it('should dispatch restartGame when new game is clicked', () => {
    const dispatch = jest.fn();
    const topWrapper = shallow(<TopNav dispatch={dispatch} />);
    const link = topWrapper.find('.new');
    link.simulate('click');
    expect(dispatch).toHaveBeenCalled();
    const action = dispatch.mock.calls[0][0];
    expect(action.type).toEqual(RESTART_GAME);
    expect(action.correctAnswer).toBeGreaterThan(0);
    expect(action.correctAnswer).toBeLessThanOrEqual(100);
  });
});
