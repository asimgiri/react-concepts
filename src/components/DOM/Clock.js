import React, { Component } from 'react'

class Clock extends Component {
    constructor() {
        super();
        this.state = {
            time: new Date()
        }
    }

    // When the Clock output is inserted in the DOM, React calls the componentDidMount() lifecycle method.
    componentDidMount() {
        this.timerID = setInterval(this.tick, 1000);
    }

    // If the Clock component is ever removed from the DOM, React calls the componentWillUnmount() lifecycle method so the timer is stopped.
    componentWillMount() {
        clearInterval(this.timerID);
    }

    tick = () => {
        this.setState({
            time: new Date()
        })
    }


    render() {
        return (
            <div>
                <p>{this.state.time.toLocaleTimeString()}</p>
            </div>
        )
    }
}

export default Clock;