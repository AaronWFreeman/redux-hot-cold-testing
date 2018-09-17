import React from 'react';
import {shallow, mount} from 'enzyme';

import {Feedback} from './feedback';

describe('Feedback', () => {
  it('renders without crashing', () => {
    shallow(<Feedback />);
  });
  it('renders some feedback',() => {
    const testFeedback = 'Hi, this is feedback.';
    let feedbackWrapper = shallow(<Feedback feedback={testFeedback}/>);
    expect(feedbackWrapper.contains(testFeedback)).toBe(true);
  });
})
