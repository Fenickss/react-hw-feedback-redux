import React from 'react';
import PropTypes from 'prop-types';
import css from './Controllers.module.css';
import { connect } from 'react-redux';
import * as action from '../../../redux/action';

const Сontrollers = ({
  onIncrementGood,
  onIncrementNeutral,
  onIncrementBad,
  step,
}) => {
  return (
    <>
      <h1>Please leave feedback</h1>
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
    </>
  );
};

const mapStateToProps = state => {
  return {
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
export default connect(mapStateToProps, mapDispatchToProps)(Сontrollers);

Сontrollers.propTypes = {
  onIncrementGood: PropTypes.func.isRequired,
  onIncrementNeutral: PropTypes.func.isRequired,
  onIncrementBad: PropTypes.func.isRequired,
  step: PropTypes.number.isRequired,
};
