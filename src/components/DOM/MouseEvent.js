import React, { Component } from 'react';

class MouseEvent extends Component {
    constructor() {
        super();
        this.state = {
            insideframe: false,
            posX: null,
            posY: null
        }
    }

    onMouseMoveHandler = (event) => {
        this.setState({
            insideframe: true,
            posX: event.clientX,
            posY: event.clientY
        }, () => { console.log(this.state.posX, this.state.posY) })
    }

    render() {
        return (
            <div className="frame" onMouseMove={this.onMouseMoveHandler}>
                {this.state.insideframe
                ? (
                    <div className="dot"></div>
                ) : null}
            </div>
        )
    }
}

export default MouseEvent;