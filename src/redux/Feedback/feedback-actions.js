import actionsType from './feedback-types';

const handleIncrementGood = value => ({
  type: actionsType.GOOD,
  payload: value,
});

const handleIncrementNeutral = value => ({
  type: actionsType.NEUTRAL,
  payload: value,
});

const handleIncrementBad = value => ({
  type: actionsType.BAD,
  payload: value,
});

export { handleIncrementGood, handleIncrementNeutral, handleIncrementBad };
