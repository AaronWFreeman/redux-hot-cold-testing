import React from 'react';
import {shallow} from 'enzyme';
import {GuessCount} from './guess-count';

import {makeGuess} from '../actions';

describe('<GuessCount />', () => {
  it('renders without crashing', () => {
    shallow(<GuessCount />);
  });
  it('renders the guess-count', () => {
    const guessValue = '6';
    const isPlural = guessValue !== 1;
    const guessNoun = isPlural ? 'guesses' : 'guess';
    const guessWrapper = shallow(<GuessCount guessCount={guessValue} />);
    expect(guessWrapper.text()).toEqual(`You have made ${guessValue} ${guessNoun}!`)
  });
});
