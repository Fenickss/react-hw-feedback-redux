import React from 'react';
import css from './Statistics.module.css';
import PropTypes from 'prop-types';

import { connect } from 'react-redux';

const Statistics = ({ good, neutral, bad, total, positiveFeedback }) => {
  positiveFeedback = () => {
    return Math.round((good / total) * 100);
  };

  return (
    <ul className={css.container}>
      <li className={css.item}>
        <p>{good}</p>
        <p>Good</p>
      </li>
      <li className={css.item}>
        <p>{neutral}</p>
        <p>Neutral</p>
      </li>
      <li className={css.item}>
        <p>{bad}</p>
        <p>Bad</p>
      </li>
      <li className={css.item}>
        <p>{total}</p>
        <p>Total</p>
      </li>
      <li className={css.item}>
        <p>{total === 0 ? 0 : positiveFeedback()}%</p>
        <p>Positive feadback</p>
      </li>
    </ul>
  );
};

const mapStateToProps = state => {
  return {
    good: state.feedback.good,
    neutral: state.feedback.neutral,
    bad: state.feedback.bad,
    total: state.feedback.good + state.feedback.neutral + state.feedback.bad,
  };
};

export default connect(mapStateToProps)(Statistics);

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
};
