import React from 'react';
import PropTypes from 'prop-types';

function FunctionComponentsWithProps(props) {
  return (
    <>
    <h1>Hello, {props.name}! Your date of birth is {props.dob}</h1>
    </>
  );

}


// FunctionComponentsWithProps.propTypes = {
//   dob: PropTypes.string.isRequired,
// };

export default FunctionComponentsWithProps;