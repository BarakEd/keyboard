import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
 
const Cover = styled.div`
  border: 1px solid grey;
  background: #ccc;
  ${(props) => props.width ? `width: ${props.width}` : ''};
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 10px;
  font-weight: bold;
  cursor: default;
  user-select: none;
`;

const Key = ({ width, pressed, key_, value }) => (
  <Cover
    width={ width }
    onClick={ () => pressed(key_, value) } >
    <span>{ value }</span>
  </Cover>
);

Key.propTypes = {
  width: PropTypes.string,
  pressed: PropTypes.func.isRequired,
  key_: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
};

Key.defaultProps = {
  width: '',
};

export default Key;
