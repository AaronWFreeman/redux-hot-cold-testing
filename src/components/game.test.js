import React from 'react';
import { shallow, mount } from 'enzyme';
import Game from './game';

describe('Game', () => {
  it('Renders without crashing', () => {
    shallow(<Game />);
  });
  it('Renders a div', () => {
    const div = shallow(<Game />).find('div');
    expect(div.length).toBeGreaterThan(0);
  });
});

describe('rendered div', () => {
  it('renders a `Header`', () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('Header').length).toBe(1);
  });
  it('renders a `Main` element', () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('main').length).toBe(1);
  });
})

describe('rendered `Main` element', () => {
  it('renders a `GuessSection`', () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('GuessSection').length).toBe(1);
  });
  it('renders a `StatusSection`', () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('StatusSection').length).toBe(1);
  });
  it('renders an `InfoSection`', () => {
    const gameDiv = shallow(<Game />).find('div');
    expect(gameDiv.find('InfoSection').length).toBe(1);
  });
})
