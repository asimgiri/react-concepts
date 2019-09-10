import React, { Component } from 'react';

class Sample extends Component {
    constructor() {
        super();
        this.state = {
            user_input: null,
            clicked: false
        }
    }

    onChangeHandler = (event) => {
        this.setState({
            user_input: event.target.value
        }, () => { console.log(this.state.user_input) })
    }

    onClickHandler = () => {
        this.setState({
            clicked: true
        })
    }

    render() {
        return (
            <div className="center">
                <input type="text" onChange={this.onChangeHandler} />
                {this.state.user_input
                    ? (
                        <span>
                            <button onClick={this.onClickHandler}>Click Me</button>
                            {this.state.clicked
                                ? (
                                    <p className="output">{this.state.user_input}</p>
                                ) : null}
                        </span>
                    ) : null}

                {/* <button onClick={this.onClickHandler}>Okay</button>
                {this.state.clicked
                    ? (
                        <p className="output">{this.state.user_input}</p>
                    ) : null} */}

            </div>
        )
    }
}

export default Sample;