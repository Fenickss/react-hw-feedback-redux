import { combineReducers } from 'redux';
import actionsType from './feedback-types';

const goodReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionsType.GOOD:
      return state + payload;

    default:
      return state;
  }
};

const neutralReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionsType.NEUTRAL:
      return state + payload;
    default:
      return state;
  }
};

const badReducer = (state = 0, { type, payload }) => {
  switch (type) {
    case actionsType.BAD:
      return state + payload;
    default:
      return state;
  }
};

const stepReducer = (state = 1, action) => {
  return state;
};

export default combineReducers({
  good: goodReducer,
  neutral: neutralReducer,
  bad: badReducer,
  step: stepReducer,
});
