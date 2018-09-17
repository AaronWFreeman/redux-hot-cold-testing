import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessList} from './guess-list';

describe('GuessList', () => {
  it('renders without crashing', () => {
    shallow(<GuessList guesses={[]} />);
  });
  it('renders a list of guesses', () => {
    const values = [22, 33, 55, 66, 88];
    const listWrapper = shallow(<GuessList guesses={values}/>);
    const listItems = listWrapper.find('li');
    expect(listItems.length).toEqual(values.length);
    values.forEach((value, index) => {
      expect(listItems.at(index).text()).toEqual(value.toString());
    });
  });
});
