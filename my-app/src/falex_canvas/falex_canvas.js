import React from "react";
import './falex_canvas.css';

export default class FalexCanvas extends React.Component {
    constructor() {
      super();
      this.state = {
        height: 100,
        width: 600,
        count: 0,
        canvas: null,
        ctx: null,
        shadow: null,
        ratio: 10,
        curRect: [],
        shadowRect: []
      };
      this.onMouseOver = this.mouseOver.bind(this);
    }
    
    componentDidMount () {
      const canvas = this.refs.canvas;
      canvas.style.border = '1px solid white';
      const ctx = canvas.getContext("2d");
      this.setState({
        canvas: canvas,
        ctx: ctx
      })
      canvas.width = 320;
      canvas.height = 320;
    }
    
    getRect(x,y) {
      const ratio = this.state.ratio;
      const rect = this.state.canvas.getBoundingClientRect()
      const startX = rect.left;
      const startY = rect.top;
      const travelX = x - startX;
      const travelY = y - startY;
      return [Math.floor(travelX/ratio), Math.floor(travelY/ratio)];
    }

    drawShadow(x,y) {
      const _shadow = this.refs.shadow;
      console.log(x,y)
      _shadow.style.left = `${x - x%this.state.ratio}px`;
      _shadow.style.top =  `${y - y%this.state.ratio}px`;
      _shadow.style.width = `${this.state.ratio}px`;
      _shadow.style.height = `${this.state.ratio}px`;
      const curR = this.state.curRect;
      if (x !== curR[0] || y !== curR[1]) {
        
      }
      this.setState({
        shadow: _shadow
      })
    }

    mouseOver = (e) => {
      this.setState({
        curRect: this.getRect(e.clientX, e.clientY)
      })
 //     console.log(`e.clientX = ${e.clientX}, e.clientY = ${e.clientY}`);
      this.drawShadow(e.pageX, e.pageY);
    };
    
    mouseMove = (e) => {
      this.setState({
        curRect: this.getRect(e.clientX, e.clientY)
      })
      console.log(this.state.curRect);
      this.drawShadow(e.pageX, e.pageY);
    }

    render() {
      return (
      <div className='falex-canvas-container'>
          <canvas 
            id="falex-canvas" 
            ref="canvas" 
            width={this.state.width}
            height={this.state.height}
            onMouseOver={this.mouseOver}
            onMouseMove={this.mouseMove}
            />
          <div className="shadow" ref="shadow"></div>
      </div>
      )
    }
  }  
 
