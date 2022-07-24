import React from 'react';
import PropTypes from 'prop-types';
import Card from "../Card";
import {CountdownGrid} from "./Countdown.styles";

const Countdown = ({ countDown, className }) => {
    return (
        <CountdownGrid className={className}>
            <Card label={ countDown.days === 1 ? 'Day' : 'Days' }
                  value={countDown.days.toString()}
            />
            <Card label='Hours'
                  value={countDown.hours.toString()}
            />
            <Card label='Min' value={countDown.min.toString()} />
            <Card label='Sec' value={countDown.sec.toString()} />
        </CountdownGrid>
    );
};

Countdown.propTypes = {
  countDown: PropTypes.shape({
      days: PropTypes.number.isRequired,
      hours: PropTypes.number.isRequired,
      min: PropTypes.number.isRequired,
      sec: PropTypes.number.isRequired,
  }).isRequired,
  className: PropTypes.string,
};

export default Countdown;
