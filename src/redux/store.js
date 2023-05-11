import { createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

const initialState = {
  feedback: {
    good: 0,
    neutral: 0,
    bad: 0,
    step: 1,
  },
};

const reducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case 'Feedback/IncrementGood':
      return {
        ...state,
        feedback: {
          ...state.feedback,
          good: state.feedback.good + payload,
        },
      };

    case 'Feedback/IncrementNeutral':
      return {
        ...state,
        feedback: {
          ...state.feedback,
          neutral: state.feedback.neutral + payload,
        },
      };

    case 'Feedback/IncrementBad':
      return {
        ...state,
        feedback: {
          ...state.feedback,
          bad: state.feedback.bad + payload,
        },
      };

    default:
      return state;
  }
};

const store = createStore(reducer, composeWithDevTools());

export default store;
