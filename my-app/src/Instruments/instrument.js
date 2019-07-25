import React from 'react';
import './Instrument.css';


export default class Instrument extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render() {
      return (
        <div className='instruments_panel'>
            <button className='instrument_button' id='pen'></button>
            <button className='instrument_button' id='rect'></button>
            <button className='instrument_button' id='circle'></button>
            <button className='instrument_button' id='erase'></button>
            <button className='instrument_button' id='stroke'></button>
            <button className='instrument_button' id='pen'></button>
            <button className='instrument_button' id='pen'></button>
            <button className='instrument_button' id='pen'></button>
            <button className='instrument_button' id='pen'></button>
        </div>
      );
    }
  }

