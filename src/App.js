import React, { Component } from 'react';
import Keyboard from './Keyboard';
class App extends Component {
  render() {
    const styles = {
      fontFamily: 'sans-serif',
      textAlign: 'center',
    };

    return (
      <div style={styles}>
       <Keyboard callback={ (value) => alert(value) } />
       <br/>Press the input to show the keyboard.
       <br/>Press Enter on the keyboard to send value while keep keyboard open.
       <br/>Press Return on the keyboard to send value while closing keyboard.
      </div>
    );
  }
}

export default App;
