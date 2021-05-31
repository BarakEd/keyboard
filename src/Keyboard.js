import React from 'react';
import styled, { keyframes } from 'styled-components';
import { observable, decorate } from 'mobx';
import { observer } from 'mobx-react';
import PropTypes from 'prop-types';

import { eSpecialKeys } from './constants';
import KeyboardLayout from './KeyboardLayout';

const blink = keyframes`
  50% { opacity: 0; }
`;
const Blinker = styled.span`
  animation: ${blink} .5s infinite;
  margin-right: 5px;
  min-height: 20px;
  border-left: 1.5px solid #000000;
`;
const Input = styled.div`
  border-radius: 6px;
  border: 1px solid black;
  min-height: 50px;
  padding-right: 25px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  direction: rtl;
  min-width: 93px;
`;
const initialTextValue = '';

class Keyboard extends React.Component {
  text = initialTextValue;
  show = false;

  onKeyPressed = (key, value) => {
    if (key in eSpecialKeys) {
      switch (key) {
        case eSpecialKeys.BACKSPACE:
          {
            this.text = this.text.substring(0, this.text.length - 1);
            break;
          }
        case eSpecialKeys.SPACE:
          {
            this.text = this.text + ' ';
            break;
          }
        case eSpecialKeys.RETURN:
          {
            this.setShow(false);
            if (this.text.length > 0) {
              (this.props.callback && this.props.callback(this.text)) || console.log(this.text);
              this.text = initialTextValue;
            }
            break;
          }
        case eSpecialKeys.ENTER:
          {
            if (this.text.length > 0) {
              (this.props.callback && this.props.callback(this.text)) || console.log(this.text);
              this.text = initialTextValue;
            }
            break;
          }
        default: break;
      }
      return;
    }
    
    this.text = this.text + value;
  }

  setShow = (value)  => {
    this.show = value;
  }

  render() {
    return (
      <div>
        <Input onClick={() => this.setShow(true)}>
          {this.text}
          <Blinker />
        </Input>
        <KeyboardLayout
          pressedFunction={(k, v) => { this.onKeyPressed(k, v) }}
          show={this.show}
        />
      </div>
    );
  }
};

Keyboard.propTypes = {
  callback: PropTypes.func,
};

Keyboard.defaultProps = {
  callback: null,
};

decorate(Keyboard, {
  text: observable,
  show: observable,
});

export default observer(Keyboard);
