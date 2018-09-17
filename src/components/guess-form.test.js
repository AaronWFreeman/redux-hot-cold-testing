import React from 'react';
import {shallow, mount} from 'enzyme';

import {GuessForm} from './guess-form';
import {makeGuess} from '../actions';

describe('GuessForm', () => {
  it('renders without crashing', () => {
    shallow(<GuessForm />);
  });
  it('should dispatch onMakeGuess when form is submitted', () => {
    const dispatch = jest.fn();
    const formWrapper = mount(<GuessForm dispatch={dispatch} />);
    const value = '10';
    formWrapper.find('input[type="number"]').instance().value = value;
    formWrapper.simulate('submit');
    expect(dispatch).toHaveBeenCalledWith(makeGuess(value));
  });
  it('should reset the input when the form is submitted', () => {
    const submitWrapper = mount(<GuessForm dispatch={ () => {} }/>);
    const input = submitWrapper.find('input[type="number"]');
    input.instance().value = '10';
    submitWrapper.simulate('submit');
    expect(input.instance().value).toEqual('');
  });
});
