import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import feedbackReducer from './Feedback/feedback-reducer';

const rootReducer = combineReducers({
  feedback: feedbackReducer,
});

const store = createStore(rootReducer, composeWithDevTools());

export default store;
