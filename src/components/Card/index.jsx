import React from 'react';
import PropTypes from 'prop-types';
import {CardContainer, CardLabel, CardValue} from "./Card.styles";

const Card = ({label, value, className}) => {
    return (
        <CardContainer className={className}>
            <CardValue>{value}</CardValue>
            <CardLabel>{label}</CardLabel>
        </CardContainer>
    );
};

Card.propTypes = {
  label: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  className: PropTypes.string,
};

export default Card;
