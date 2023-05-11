const handleIncrementGood = value => ({
  type: 'Feedback/IncrementGood',
  payload: value,
});

const handleIncrementNeutral = value => ({
  type: 'Feedback/IncrementNeutral',
  payload: value,
});

const handleIncrementBad = value => ({
  type: 'Feedback/IncrementBad',
  payload: value,
});

export { handleIncrementGood, handleIncrementNeutral, handleIncrementBad };
