import {gameReducer} from './reducer';
import {
  generateAuralUpdate, GENERATE_AURAL_UPDATE,
  makeGuess, MAKE_GUESS,
  restartGame, RESTART_GAME
} from './actions';

describe('gameReducer', () => {
  it('Should set the initial state when nothing is passed in', () => {
    const state = gameReducer(undefined, {type: '__UNKNOWN'});
    expect(typeof state).toBe('object');
    expect( Array.isArray(state.guesses) ).toBe(true);
    expect(typeof state.feedback).toBe('string');
    expect(typeof state.auralStatus).toBe('string');
    expect(typeof state.correctAnswer).toBe('number');
  });

  describe('resetGame', () => {
    it('Should change correct answer', () => {
      // create new game, then check that only correctAnswer is changed
      // when you reset it
      const newGame = Object.assign({}, gameReducer(undefined, {type: '__UNKNOWN'}));
      const resetGame = Object.assign({}, gameReducer(newGame, {type: RESTART_GAME}));
      expect(resetGame.correctAnswer).not.toEqual(newGame.correctAnswer);
      delete newGame.correctAnswer;
      delete resetGame.correctAnswer;
      expect(resetGame).toEqual(newGame);
    });
  });
  // 1. test whether when a guess is made, the length of the array in guesses is
  // increased by one.
  // 2. if guess is passed that is not a number, feedback should reflect that
  // 3. guess should be a number
  // 4. get correctAnswer from intitial state then show difference
  describe('makeGuess', () => {
    it('should increase the length of guesses array by one', () => {
      const guess = '3';
      const newGame = gameReducer(undefined, {type: '__UNKNOWN'});
      const madeGuess = gameReducer(newGame, makeGuess(guess));
      expect(Array.isArray(madeGuess.guesses)).toBe(true);
      expect(madeGuess.guesses.length).toEqual(newGame.guesses.length+1);
    });

    describe('differences between made guesses and correctAnswer', () => {
      const diffs = {
        '50': "You're Ice Cold...",
        '30': "You're Cold...",
        '10': "You're Warm.",
        '1': "You're Hot!",
        '0': 'You got it!'
      };
      Object.keys(diffs).forEach(diff => {
        const newerGame = gameReducer(undefined, {type: '__UNKNOWN'});
        const feedback = diffs[diff];
        const number = parseInt(diff, 10);
        const guess = String(newerGame.correctAnswer + number);

        it(`Should show ${feedback} when difference is <= ${diff}`, () => {
          const madeGuess = gameReducer(newerGame, makeGuess(guess));
          expect(madeGuess.feedback).toBe(feedback);
        });
      });
    });
  });
    describe('aural-updater', () => {
      const guess = '5';
      const newGame = gameReducer(undefined, {type: '__UNKNOWN'});
      const madeGuess = gameReducer(newGame, makeGuess(guess));
      let feedback = madeGuess.feedback;
      let guesses = madeGuess.guesses;
      const pluralize = guesses.length !== 1;
      let auralStatus = `Here's the status of the game right now: ${feedback} You've made ${guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;
      if (guesses.length > 0) {
         auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${guesses.reverse().join(', ')}`;
      }
      console.log(auralStatus);
      it('should render aural-update when guess is made', () => {
          const renderAuralStatus = gameReducer(madeGuess, generateAuralUpdate(auralStatus));
          expect(renderAuralStatus.auralStatus).toBe(auralStatus);
      });
      describe('aural-update', () => {
        it('should be a string', () => {
          const renderedAuralStatus = gameReducer(madeGuess, generateAuralUpdate(auralStatus));
          expect(typeof renderedAuralStatus.auralStatus).toBe('string');
        });
      });
    });
});
