export const handleIncrementGood = value => ({
  type: 'Feedback/IncrementGood',
  payload: value,
});

export const handleIncrementNeutral = value => ({
  type: 'Feedback/IncrementNeutral',
  payload: value,
});

export const handleIncrementBad = value => ({
  type: 'Feedback/IncrementBad',
  payload: value,
});
