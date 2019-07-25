import React from 'react';
import './structure.css';

export default class Header extends React.Component {
    constructor (props) {
        super(props);
        this.state = {

        }
    }
    render() {
      return (
        <header className='header'>
            <p>{this.props.name}</p>
        </header>
      );
    }
  }

