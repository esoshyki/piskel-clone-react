import React from 'react';
import './structure.css';
import Instrument from '../Instruments/instrument.js';
import FrameField from '../framefield/framefield.js';
import FalexCanvas from '../falex_canvas/falex_canvas.js'

export default class Main extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render() {
      return (
        <main className='main'>
            <Instrument />
            <FrameField />
            <FalexCanvas />
        </main>
      );
    }
  }