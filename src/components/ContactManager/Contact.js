import React, { Component } from 'react';

class Contact extends Component {
    render() {
        return (
            <div className="contact">
                <img src={this.props.img} alt="" />
                <div>
                    <h3>{this.props.name}</h3>
                    <p className="mob">{this.props.mob}</p>
                    <p>{this.props.location}</p>
          >      </div>
            </div>
        )
    }
}

export default Contact;
