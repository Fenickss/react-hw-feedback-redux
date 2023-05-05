import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import * as action from '../../redux/action';
import Сontrollers from './Сontrollers';
import Statistics from '../Statistics';

const Feedback = ({
  good,
  neutral,
  bad,
  step,
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
}) => {
  // countPositiveFeedbackPercentage = () => {
  //   return Math.round((this.state.good / this.countTotalFeedback()) * 100);
  // };

  // countTotalFeedback = () => {

  //   const result = good + neutral + bad;
  //   return result;
  // };

  return (
    <div>
      <h1>Please leave feedback</h1>

      <Сontrollers
        onIncrementGood={onIncrementGood}
        onIncrementNeutral={onIncrementNeutral}
        onIncrementBad={onIncrementBad}
        step={step}
      />

      <Statistics
        good={good}
        neutral={neutral}
        bad={bad}
        // total={this.countTotalFeedback()}
        // positiveFeedback={
        //   total === 0 ? 0 : this.countPositiveFeedbackPercentage()
        // }
      />
    </div>
  );
};
const mapStateToProps = state => {
  return {
    good: state.feedback.good,
    neutral: state.feedback.neutral,
    bad: state.feedback.bad,
    step: state.feedback.step,
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onIncrementGood: value => dispatch(action.handleIncrementGood(value)),
    onIncrementNeutral: value => dispatch(action.handleIncrementNeutral(value)),
    onIncrementBad: value => dispatch(action.handleIncrementBad(value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Feedback);

Feedback.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  onIncrementGood: PropTypes.func.isRequired,
};
