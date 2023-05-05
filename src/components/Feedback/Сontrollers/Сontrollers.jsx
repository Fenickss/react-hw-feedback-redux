import React from 'react';
import PropTypes from 'prop-types';
import css from './Controllers.module.css';

const Сontrollers = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  step,
}) => {
  return (
    <ul className={`list ${css.feedbackList}`}>
      <button
        className={css.btn}
        type="button"
        onClick={() => onIncrementGood(step)}
      >
        good
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onIncrementNeutral(step)}
      >
        neutral
      </button>
      <button
        className={css.btn}
        type="button"
        onClick={() => onIncrementBad(step)}
      >
        bad
      </button>
    </ul>
  );
};

export default Сontrollers;

Сontrollers.propTypes = {
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
};
