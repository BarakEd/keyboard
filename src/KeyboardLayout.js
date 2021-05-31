import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import Key from './Key';
import { eSpecialKeys } from './constants';

const Column = styled.div`
  display: flex;
  flex-direction: column;
`;
const Row = styled.div`
   display: flex;
   flex-direction: row;
   align-self: center;
`;

class KeyboardLayout extends React.Component {
  constructor (props) {
    super(props);

    this.row1 = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', '-', '+'];
    this.row2 = ['/', '\'', 'ק', 'ר', 'א', 'ט', 'ו', 'ן', 'ם', 'פ', '(', ')'];
    this.row3 = ['ש', 'ד', 'ג', 'כ', 'ע', 'י', 'ח', 'ל', 'ך', 'ף', '"', ',', '\\'];
    this.row4 = ['ז', 'ס', 'ב', 'ה', 'נ', 'מ', 'צ', 'ת', 'ץ', '.'];
  }

  componentDidMount () {
    document.addEventListener('keydown', this.handleKeyPress, false);
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', this.handleKeyPress, false);
  }

  isKeyIncludes = (key) => {
    return (
      this.row1.find((c) => c === key) ||
      this.row2.find((c) => c === key) ||
      this.row3.find((c) => c === key) ||
      this.row4.find((c) => c === key)
    );
  }

  
  handleKeyPress = (e) => {
    let key = this.isKeyIncludes(e.key);
    console.log(key);

    if (e.key === ' ') {
      key = eSpecialKeys.SPACE;
    }
    
    if (e.key === 'Enter') {
      key = eSpecialKeys.ENTER;      
    }
    
    if (e.key === 'Backspace') {
      key = eSpecialKeys.BACKSPACE;
    }    
    
    if (e.key === 'Escape') {
      key = eSpecialKeys.RETURN;
    }

    if (key) {
      this.props.pressedFunction(key, key);
    }
  }


  render () {
    const { show, pressedFunction } = this.props;

    return (
      show &&
      <Column>
        <Row>
          {
            this.row1.map((key__, index) => (
              <Key
                key={index}
                key_={key__}
                value={key__}
                pressed={
                  (key_, value_) => pressedFunction(key_, value_)
                }
              />))
          }
          <Key
            key_={eSpecialKeys.BACKSPACE}
            value={'Backspace'}
            width={'80px'}
            pressed={
              (key_, value_) => pressedFunction(key_, value_)
            }
          />
        </Row>
        <Row>
          {
            this.row2.map((key__, index) => (
              <Key
                key={index}
                key_={key__}
                value={key__}
                pressed={
                  (key_, value_) => pressedFunction(key_, value_)
                }
              />))
          }
          <Key
            key_={eSpecialKeys.ENTER}
            value={'Enter'}
            width={'80px'}
            pressed={
              (key_, value_) => pressedFunction(key_, value_)
            }
          />
        </Row>
        <Row>
          {
            this.row3.map((key__, index) => (
              <Key
                key={index}
                key_={key__}
                value={key__}
                pressed={
                  (key_, value_) => pressedFunction(key_, value_)
                }
              />))
          }
        </Row>
        <Row>
          {
            this.row4.map((key__, index) => (
              <Key
                key={index}
                key_={key__}
                value={key__}
                pressed={
                  (key_, value_) => pressedFunction(key_, value_)
                }
              />))
          }
          <Key
            key_={eSpecialKeys.RETURN}
            value={'Return'}
            width={'80px'}
            pressed={
              (key_, value_) => pressedFunction(key_, value_)
            }
          />
        </Row>
        <Row>
          <Key
            key_={eSpecialKeys.SPACE}
            value={'Space'}
            width={'300px'}
            pressed={
              (key_, value_) => pressedFunction(key_, value_)
            }
          />
        </Row>
      </Column>
    );
  }
};


KeyboardLayout.propTypes = {
  pressedFunction: PropTypes.func.isRequired,
  show: PropTypes.bool,
};

KeyboardLayout.defaultProps = {
  show: false,
};

export default KeyboardLayout;
