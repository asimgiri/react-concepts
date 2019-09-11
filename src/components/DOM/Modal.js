import React, { Component } from 'react';

class Modal extends Component {
    constructor() {
        super();
        this.state = {
            clicked: false
        }
    }

    onClickHandler = () => {
        this.setState({
            clicked: !this.state.clicked
        })
    }

    render() {
        return (
            <div className="demo_modal">
                <button onClick={this.onClickHandler}>{this.state.clicked ? 'Close Modal' : 'Open Modal'}</button>
                {this.state.clicked
                    ? (
                        <div className="modal">
                            <h3>{this.props.title}</h3>
                            <p>{this.props.content} </p>
                            <button>Okay</button>
                        </div>
                    ) : null}
            </div>
        )
    }
}

export default Modal;