import React from 'react';
import './framefield.css'

export default class FrameField extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            frames: [['fdafad']]
        }
    }

    render() {
        return(
            <div className='framefield'>
                <div className='leftslide'></div>
                <div className='framecontainer'>
                    <p>{this.state.frames}</p>
                </div>
                <div className='rightslide'></div>
            </div>
        )
    }
}
