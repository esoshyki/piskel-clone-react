import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

import Header from './structure/header.js';
import Main from './structure/main.js';


class Piskel extends React.Component {
    constructor (props) {
      super(props)
      this.state = {
        name: "piskle-app"
      }
    }
    render() {
      return (
        <div className='container'>
          { this.state.name}
          <Header name={this.state.name}/>
          <Main />
        </div>
      );
    }
  }
  
  // ========================================
  
  ReactDOM.render(
    <Piskel />,
    document.getElementById('root')
  );
  